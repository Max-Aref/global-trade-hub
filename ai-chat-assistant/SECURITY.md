# Security Best Practices for GTH AI Chat Assistant

This document outlines security considerations and best practices for deploying the Global Trade Hub AI Chat Assistant in production environments.

## ⚠️ Critical Security Warnings

### 1. Never Expose API Keys in Frontend Code

**❌ DON'T DO THIS:**
```javascript
GTHChat.init({
  apiKey: 'sk-ant-api03-xxxxx...' // NEVER hardcode API keys!
});
```

**✅ DO THIS INSTEAD:**
```javascript
// Use environment variables
GTHChat.init({
  apiKey: process.env.NEXT_PUBLIC_CLAUDE_API_KEY
});
```

### 2. Use Backend Proxy for Production

The recommended production architecture:

```
User Browser → Your Backend API → Claude API
```

**Why?**
- API keys stay on server
- Better rate limiting control
- Request validation and sanitization
- Usage monitoring and analytics
- Cost control

## Recommended Production Setup

### Option 1: Next.js API Route (Recommended)

Create `/src/app/api/chat/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';

// Rate limiting setup
const rateLimits = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimits.get(ip);
  
  if (!limit || now > limit.resetTime) {
    rateLimits.set(ip, { count: 1, resetTime: now + 60000 });
    return true;
  }
  
  if (limit.count >= 10) {
    return false;
  }
  
  limit.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Rate limit exceeded' },
        { status: 429 }
      );
    }
    
    // Parse request
    const { message, history } = await request.json();
    
    // Validate input
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid message' },
        { status: 400 }
      );
    }
    
    // Sanitize input
    if (message.length > 2000) {
      return NextResponse.json(
        { error: 'Message too long' },
        { status: 400 }
      );
    }
    
    // Validate history
    if (history && !Array.isArray(history)) {
      return NextResponse.json(
        { error: 'Invalid history' },
        { status: 400 }
      );
    }
    
    // Limit history size to prevent abuse
    const limitedHistory = (history || []).slice(-10);
    
    // Get API key from server environment
    const apiKey = process.env.CLAUDE_API_KEY;
    
    if (!apiKey) {
      console.error('Claude API key not configured');
      return NextResponse.json(
        { error: 'Service temporarily unavailable' },
        { status: 503 }
      );
    }
    
    // Build messages
    const messages = [
      ...limitedHistory.map((msg: any) => ({
        role: msg.role,
        content: String(msg.content).slice(0, 2000) // Sanitize
      })),
      {
        role: 'user',
        content: message
      }
    ];
    
    // Call Claude API with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30s timeout
    
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5-20250929',
        max_tokens: 1024,
        system: process.env.CLAUDE_SYSTEM_PROMPT || 
                'You are a helpful AI assistant for Global Trade Hub.',
        messages: messages
      }),
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      console.error('Claude API error:', response.status);
      return NextResponse.json(
        { error: 'Service error' },
        { status: 500 }
      );
    }
    
    const data = await response.json();
    
    if (data.content && data.content.length > 0) {
      return NextResponse.json({ 
        text: data.content[0].text 
      });
    }
    
    return NextResponse.json(
      { error: 'No response' },
      { status: 500 }
    );
    
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      return NextResponse.json(
        { error: 'Request timeout' },
        { status: 504 }
      );
    }
    
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal error' },
      { status: 500 }
    );
  }
}
```

### Option 2: Express.js Backend

```javascript
const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

const app = express();

// Security middleware
app.use(helmet());
app.use(express.json({ limit: '10kb' }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 60000, // 1 minute
  max: 10, // 10 requests per minute
  message: 'Too many requests, please try again later.'
});

app.use('/api/chat', limiter);

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;
    
    // Validation
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Invalid message' });
    }
    
    if (message.length > 2000) {
      return res.status(400).json({ error: 'Message too long' });
    }
    
    // Call Claude API
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.CLAUDE_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5-20250929',
        max_tokens: 1024,
        system: process.env.CLAUDE_SYSTEM_PROMPT,
        messages: [
          ...(history || []).slice(-10),
          { role: 'user', content: message }
        ]
      })
    });
    
    const data = await response.json();
    res.json({ text: data.content[0].text });
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal error' });
  }
});

app.listen(3000);
```

## Environment Variables Management

### Development (.env.local)

```env
# Claude API Configuration
CLAUDE_API_KEY=sk-ant-api03-xxxxx...
CLAUDE_SYSTEM_PROMPT="You are a helpful AI assistant for Global Trade Hub..."

# Optional: Public key for frontend (NOT RECOMMENDED FOR PRODUCTION)
# NEXT_PUBLIC_CLAUDE_API_KEY=sk-ant-api03-xxxxx...
```

### Production

**Vercel:**
1. Project Settings → Environment Variables
2. Add `CLAUDE_API_KEY` (Production)
3. Never add `NEXT_PUBLIC_*` variables with API keys

**AWS/Heroku/Other:**
- Use their respective secrets management systems
- Never commit `.env` files to Git

### .gitignore

Ensure your `.gitignore` includes:

```gitignore
# Environment variables
.env
.env.local
.env.*.local

# API keys
**/api-keys.txt
**/secrets.json
```

## Input Validation & Sanitization

### Message Length Limits

```javascript
// In api-handler.js or backend
const MAX_MESSAGE_LENGTH = 2000;
const MAX_HISTORY_ITEMS = 10;

if (message.length > MAX_MESSAGE_LENGTH) {
  throw new Error('Message too long');
}

const sanitizedHistory = history
  .slice(-MAX_HISTORY_ITEMS)
  .map(msg => ({
    role: msg.role,
    content: String(msg.content).slice(0, MAX_MESSAGE_LENGTH)
  }));
```

### XSS Prevention

The component already implements:
- `escapeHtml()` for all user input
- No `innerHTML` with user content
- Safe markdown rendering

**Verify:**
```javascript
// In chat-widget.js
escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text; // Safe - uses textContent
  return div.innerHTML;
}
```

## Rate Limiting

### Frontend Rate Limiting

Already implemented in `api-handler.js`:

```javascript
checkRateLimit() {
  const now = Date.now();
  const windowMs = 60000; // 1 minute
  const maxRequests = 10;

  if (now - this.windowStart > windowMs) {
    this.requestCount = 0;
    this.windowStart = now;
  }

  if (this.requestCount >= maxRequests) {
    throw new Error('Rate limit exceeded');
  }

  this.requestCount++;
}
```

### Backend Rate Limiting

Use express-rate-limit or similar:

```javascript
const rateLimit = require('express-rate-limit');

const chatLimiter = rateLimit({
  windowMs: 60000, // 1 minute
  max: 10, // 10 requests per IP
  skipSuccessfulRequests: false,
  handler: (req, res) => {
    res.status(429).json({
      error: 'Too many requests, please try again later.'
    });
  }
});

app.use('/api/chat', chatLimiter);
```

## Content Security Policy (CSP)

Add CSP headers to your application:

### Next.js (next.config.js)

```javascript
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline'",
              "connect-src 'self' https://api.anthropic.com",
              "img-src 'self' data: https:",
              "font-src 'self' data:",
            ].join('; ')
          }
        ]
      }
    ];
  }
};
```

### HTML Meta Tag

```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               connect-src 'self' https://api.anthropic.com; 
               script-src 'self' 'unsafe-inline';">
```

## Monitoring & Logging

### Track API Usage

```javascript
// In your backend
const usageLog = [];

app.post('/api/chat', async (req, res) => {
  const startTime = Date.now();
  
  try {
    // ... API call ...
    
    const duration = Date.now() - startTime;
    usageLog.push({
      timestamp: new Date(),
      ip: req.ip,
      duration,
      success: true
    });
    
  } catch (error) {
    usageLog.push({
      timestamp: new Date(),
      ip: req.ip,
      error: error.message,
      success: false
    });
  }
});
```

### Cost Monitoring

Monitor Claude API costs:
- Set up billing alerts in Anthropic Console
- Track token usage per request
- Implement daily/monthly spending limits

### Error Logging

```javascript
// Log errors securely (don't expose to users)
console.error({
  timestamp: new Date().toISOString(),
  error: error.message,
  stack: error.stack,
  endpoint: '/api/chat',
  // Never log API keys or sensitive data
});
```

## Security Checklist

Before production deployment:

### ✅ API Security
- [ ] API key stored in environment variables (not in code)
- [ ] Backend proxy implemented (no direct frontend API calls)
- [ ] Rate limiting enabled (frontend and backend)
- [ ] Request timeout configured (30 seconds max)
- [ ] Input validation implemented
- [ ] Message length limits enforced

### ✅ Data Protection
- [ ] No sensitive data logged
- [ ] No API keys in Git history
- [ ] .env files in .gitignore
- [ ] XSS prevention implemented
- [ ] CSRF protection (if needed)

### ✅ Infrastructure
- [ ] HTTPS enabled
- [ ] Content Security Policy configured
- [ ] Security headers set (helmet.js)
- [ ] CORS properly configured
- [ ] Error messages don't expose internals

### ✅ Monitoring
- [ ] API usage tracking enabled
- [ ] Cost monitoring configured
- [ ] Error logging implemented
- [ ] Alerts set up for unusual activity
- [ ] Regular security audits scheduled

## Incident Response

If API key is compromised:

1. **Immediately revoke the key** in Anthropic Console
2. Generate new API key
3. Update environment variables
4. Redeploy application
5. Review logs for suspicious activity
6. Check billing for unexpected charges
7. Update key rotation schedule

## Security Updates

Stay informed:
- Monitor Anthropic security advisories
- Update dependencies regularly
- Review security audit reports
- Follow OWASP guidelines
- Test security measures periodically

## Additional Resources

- [Anthropic API Documentation](https://docs.anthropic.com/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security Best Practices](https://nextjs.org/docs/app/building-your-application/security)
- [Express.js Security](https://expressjs.com/en/advanced/best-practice-security.html)

## Contact

For security concerns or to report vulnerabilities:
- Email: security@globaltradehub.com
- Do not disclose publicly until patched

---

**Last Updated**: October 2025  
**Security Review**: Recommended quarterly  
**Next Review**: January 2026

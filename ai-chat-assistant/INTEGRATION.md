# Integration Guide: Adding AI Chat Assistant to Global Trade Hub Website

This guide provides step-by-step instructions for integrating the AI Chat Assistant into the Global Trade Hub website.

## Prerequisites

- Access to the Global Trade Hub website HTML files
- Claude API key from Anthropic Console (https://console.anthropic.com/)
- Basic understanding of HTML

## Integration Methods

### Method 1: Direct Integration (Recommended)

This is the simplest method for adding the chat assistant to your existing website.

#### Step 1: Add Script Tag

Add this code **before the closing `</body>` tag** in your main layout file:

**For Next.js** (in `src/app/layout.tsx`):
```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        {children}
        
        {/* Global Trade Hub AI Chat Assistant */}
        <Script src="/ai-chat-assistant/index.js" strategy="afterInteractive" />
        <Script id="gth-chat-init" strategy="afterInteractive">
          {`
            window.addEventListener('load', () => {
              GTHChat.init({
                apiKey: process.env.NEXT_PUBLIC_CLAUDE_API_KEY || ''
              });
            });
          `}
        </Script>
      </body>
    </html>
  );
}
```

**For Standard HTML**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Your head content -->
</head>
<body>
  <!-- Your page content -->
  
  <!-- Global Trade Hub AI Chat Assistant -->
  <script src="/ai-chat-assistant/index.js"></script>
  <script>
    GTHChat.init({
      apiKey: 'your-claude-api-key-here'
    });
  </script>
</body>
</html>
```

#### Step 2: Set Up Environment Variables (Recommended)

Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_CLAUDE_API_KEY=your-actual-claude-api-key-here
```

**Important**: Add `.env.local` to your `.gitignore` to prevent committing API keys.

#### Step 3: Test the Integration

1. Start your development server
2. Navigate to your website
3. Look for the purple globe button in the bottom-right corner
4. Click it to open the chat
5. Send a test message: "What are HS codes?"

### Method 2: Backend Proxy (Production Recommended)

For production environments, use a backend proxy to keep your API key secure.

#### Step 1: Create API Endpoint

Create a new API route in your Next.js application:

**File**: `src/app/api/chat/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { message, history } = await request.json();
    
    // Validate input
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid message' },
        { status: 400 }
      );
    }
    
    // Get API key from environment
    const apiKey = process.env.CLAUDE_API_KEY;
    
    if (!apiKey) {
      console.error('Claude API key not configured');
      return NextResponse.json(
        { error: 'API not configured' },
        { status: 500 }
      );
    }
    
    // Build messages array
    const messages = [
      ...(history || []).map((msg: any) => ({
        role: msg.role,
        content: msg.content
      })),
      {
        role: 'user',
        content: message
      }
    ];
    
    // Call Claude API
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
        system: `You are a helpful AI assistant for Global Trade Hub, specializing in international trade, logistics, import/export regulations, and commerce questions. Provide accurate, professional responses that help users navigate international trade successfully.`,
        messages: messages
      })
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Claude API error:', errorData);
      return NextResponse.json(
        { error: 'API request failed' },
        { status: response.status }
      );
    }
    
    const data = await response.json();
    
    // Extract response text
    if (data.content && data.content.length > 0) {
      return NextResponse.json({ 
        text: data.content[0].text 
      });
    } else {
      return NextResponse.json(
        { error: 'No response from API' },
        { status: 500 }
      );
    }
    
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

#### Step 2: Modify api-handler.js

Update the `sendMessage` method in `/ai-chat-assistant/api-handler.js` to use your backend:

```javascript
async sendMessage(message, conversationHistory = []) {
  try {
    this.checkRateLimit();

    // Use backend proxy instead of direct API call
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: message,
        history: conversationHistory
      })
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    
    if (data.text) {
      return data.text;
    } else if (data.error) {
      throw new Error(data.error);
    } else {
      throw new Error('No response content received');
    }

  } catch (error) {
    console.error('GTH Chat API Error:', error);
    // ... error handling
  }
}
```

#### Step 3: Initialize Without API Key

```javascript
GTHChat.init({
  // No apiKey needed - handled by backend
  theme: {
    primaryColor: '#8c45ff'
  }
});
```

## Configuration Options

Customize the chat assistant to match your needs:

```javascript
GTHChat.init({
  // API Configuration (only if using direct integration)
  apiKey: 'your-key',
  model: 'claude-sonnet-4-5-20250929',
  maxTokens: 1024,
  
  // Theme Customization
  theme: {
    primaryColor: '#8c45ff',      // GTH purple
    secondaryColor: '#190d2e',    // GTH dark
    accentColor: '#4a208a',       // GTH accent
    position: 'bottom-right',      // or 'bottom-left'
  },
  
  // UI Text
  greeting: 'Welcome to Global Trade Hub! How can I assist you today?',
  placeholder: 'Ask about trade, logistics, regulations...',
  
  // Features
  persistHistory: true,    // Save chat in localStorage
  showTimestamp: true,     // Show message times
  enableMarkdown: true,    // Enable markdown formatting
  
  // Sample Questions
  sampleQuestions: [
    "What are HS codes?",
    "Tell me about import regulations",
    "How does customs clearance work?",
    "What documents do I need for shipping?"
  ],
  
  // Rate Limiting
  rateLimit: {
    maxRequests: 10,
    windowMs: 60000  // 1 minute
  }
});
```

## Testing Checklist

Before deploying to production, verify:

### ✅ Functionality Tests
- [ ] Chat button appears in correct position
- [ ] Widget opens and closes smoothly
- [ ] Messages send and receive correctly
- [ ] Sample questions work when clicked
- [ ] Loading indicator shows while waiting for response
- [ ] Error messages display properly
- [ ] Chat history persists after page reload
- [ ] Clear history button works

### ✅ Integration Tests
- [ ] No conflicts with existing GTH navigation
- [ ] No interference with GTH forms
- [ ] No interference with GTH CTAs (buttons, links)
- [ ] Works alongside existing GTH JavaScript
- [ ] Doesn't override any GTH styles
- [ ] Correct z-index (button: 9999, widget: 9998)

### ✅ Responsive Tests
- [ ] Works on desktop (1920x1080)
- [ ] Works on laptop (1366x768)
- [ ] Works on tablet (768x1024)
- [ ] Works on mobile (375x667)
- [ ] Touch interactions work on mobile
- [ ] Widget adjusts to screen size

### ✅ Accessibility Tests
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Focus indicators are visible
- [ ] ARIA labels are correct
- [ ] Screen reader compatible (test with NVDA/JAWS)
- [ ] Color contrast meets WCAG standards

### ✅ Performance Tests
- [ ] Chat loads without blocking page render
- [ ] No console errors
- [ ] API responses within 5 seconds
- [ ] Smooth animations (60 FPS)
- [ ] Memory usage stays reasonable

## Troubleshooting

### Issue: Chat button doesn't appear

**Solutions:**
1. Check browser console for errors
2. Verify script tag is before `</body>`
3. Check that files are accessible at `/ai-chat-assistant/`
4. Clear browser cache and reload

### Issue: API errors

**Solutions:**
1. Verify API key is correct
2. Check API key has proper permissions in Anthropic Console
3. Monitor rate limits (default: 10 requests/minute)
4. Check network tab for API responses
5. Verify API endpoint is accessible

### Issue: Styling conflicts

**Solutions:**
1. Check for CSS specificity issues
2. Verify no global styles override `.gth-chat-*` classes
3. Adjust z-index if needed:
   ```css
   .gth-chat-button { z-index: 10000 !important; }
   .gth-chat-widget { z-index: 9999 !important; }
   ```

### Issue: Chat history not saving

**Solutions:**
1. Check if localStorage is enabled in browser
2. Verify browser allows localStorage for your domain
3. Check if running in private/incognito mode
4. Verify namespace is unique (default: 'gth-chat')

## Security Best Practices

### 🔒 Production Deployment

1. **Never expose API keys in frontend code**
   - Use environment variables
   - Use backend proxy (Method 2)
   - Never commit API keys to Git

2. **Use HTTPS**
   - Ensure your website uses HTTPS
   - API calls will fail over HTTP

3. **Set up Content Security Policy**
   ```html
   <meta http-equiv="Content-Security-Policy" 
         content="default-src 'self'; 
                  connect-src 'self' https://api.anthropic.com;">
   ```

4. **Monitor API usage**
   - Set up alerts for unusual usage
   - Implement rate limiting
   - Monitor costs in Anthropic Console

5. **Validate user input**
   - Already handled by the component
   - Additional validation in backend proxy

## Advanced Customization

### Custom Styling

Override CSS variables:

```css
:root {
  --gth-primary-color: #your-color;
  --gth-secondary-color: #your-color;
  --gth-accent-color: #your-color;
}
```

### Custom System Prompt

```javascript
GTHChat.init({
  systemPrompt: `You are an AI assistant for Global Trade Hub. 
    Your specialty is [customize based on your needs]...`
});
```

### Analytics Integration

Track chat usage:

```javascript
// After initializing GTHChat
document.querySelector('.gth-chat-send-button')?.addEventListener('click', () => {
  if (window.gtag) {
    gtag('event', 'chat_message_sent', {
      event_category: 'chat',
      event_label: 'user_interaction'
    });
  }
});
```

## Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run start
```

### Vercel Deployment
```bash
vercel --prod
```

**Environment Variables in Vercel:**
1. Go to Project Settings
2. Navigate to Environment Variables
3. Add `CLAUDE_API_KEY` (for backend proxy)
4. Or `NEXT_PUBLIC_CLAUDE_API_KEY` (for direct integration)

## Maintenance

### Updating the Component

1. Backup current `/ai-chat-assistant/` folder
2. Replace with new version
3. Review CHANGELOG for breaking changes
4. Test thoroughly
5. Deploy

### Monitoring

Monitor these metrics:
- API usage and costs
- Error rates
- User engagement (messages sent)
- Response times
- User feedback

## Support

For issues or questions:
- Check the README.md in `/ai-chat-assistant/`
- Review example.html for working demo
- Contact Global Trade Hub development team

## Version History

- **v1.0.0** - Initial release with Claude integration
  - Self-contained component
  - GTH brand alignment
  - Trade-specific features
  - Mobile responsive design

---

**Last Updated**: October 2025  
**Component Version**: 1.0.0  
**Minimum Browser Support**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

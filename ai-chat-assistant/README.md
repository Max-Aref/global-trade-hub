# Global Trade Hub AI Chat Assistant

A self-contained, production-ready AI chat assistant component specifically designed for the Global Trade Hub website. This component integrates seamlessly with your existing website without any code modifications.

## Features

✅ **Zero Dependencies** - Vanilla JavaScript, no frameworks required  
✅ **GTH Brand Aligned** - Matches Global Trade Hub's design system  
✅ **Trade-Focused** - Specialized in international trade, logistics, and import/export  
✅ **Self-Contained** - All code and assets in isolated folder  
✅ **No Conflicts** - Scoped CSS with `gth-chat-` prefix  
✅ **Responsive** - Works perfectly on mobile and desktop  
✅ **Accessible** - ARIA labels, keyboard navigation, focus management  
✅ **Persistent History** - Saves conversations in localStorage  
✅ **Rate Limiting** - Built-in protection against API abuse  
✅ **Professional UI** - Smooth animations and GTH purple theme  

## Quick Start (5 Minutes)

### Step 1: Add the Script Tag

Add this code **before the closing `</body>` tag** in your HTML:

```html
<!-- Global Trade Hub AI Chat Assistant -->
<script src="/ai-chat-assistant/index.js"></script>
<script>
  GTHChat.init({
    apiKey: 'your-claude-api-key-here'
  });
</script>
```

### Step 2: Get Your Claude API Key

1. Sign up at [Anthropic Console](https://console.anthropic.com/)
2. Navigate to API Keys section
3. Create a new API key
4. Copy and paste it into the `apiKey` field above

### Step 3: Done! 🎉

The chat assistant will now appear as a purple globe button in the bottom-right corner.

## Configuration Options

You can customize the chat assistant by passing options to `GTHChat.init()`:

```javascript
GTHChat.init({
  // Required
  apiKey: 'your-claude-api-key',
  
  // API Settings
  model: 'claude-sonnet-4-5-20250929', // Claude model to use
  maxTokens: 1024, // Maximum response length
  
  // Theme Customization (GTH brand colors by default)
  theme: {
    primaryColor: '#8c45ff',      // GTH purple
    secondaryColor: '#190d2e',    // GTH dark background
    accentColor: '#4a208a',       // GTH accent purple
    fontFamily: 'Inter, sans-serif',
    position: 'bottom-right',      // or 'bottom-left'
    borderRadius: '12px',
    boxShadow: '0px 0px 12px #8c45ff'
  },
  
  // UI Text
  greeting: 'Welcome to Global Trade Hub! How can I assist you with your trade inquiries today?',
  placeholder: 'Ask about trade, logistics, regulations...',
  
  // Features
  persistHistory: true,    // Save chat history in localStorage
  showTimestamp: true,     // Show message timestamps
  enableMarkdown: true,    // Enable basic markdown formatting
  
  // System Prompt (customize AI behavior)
  systemPrompt: 'You are a helpful AI assistant for Global Trade Hub...',
  
  // Sample Questions (shown on first load)
  sampleQuestions: [
    "What are HS codes and how do I find mine?",
    "Tell me about import regulations for [country]",
    "How does customs clearance work?",
    "What documents do I need for international shipping?"
  ],
  
  // Rate Limiting
  rateLimit: {
    maxRequests: 10,  // Max requests per window
    windowMs: 60000   // Time window in milliseconds (1 minute)
  }
});
```

## Trade-Specific Features

The AI assistant is pre-configured with expertise in:

- **HS Codes** - Product classification and tariff codes
- **Import/Export Regulations** - Country-specific trade rules
- **Customs Clearance** - Documentation and procedures
- **International Shipping** - Logistics and freight
- **Trade Documentation** - Required paperwork and compliance
- **B2B Commerce** - Wholesale and bulk ordering
- **Cross-Border Transactions** - Payment and legal considerations

## API Methods

Control the chat assistant programmatically:

```javascript
// Open the chat widget
GTHChat.open();

// Close the chat widget
GTHChat.close();

// Clear conversation history
GTHChat.clearHistory();

// Update API key dynamically
GTHChat.updateApiKey('new-api-key');

// Completely remove the chat widget
GTHChat.destroy();
```

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## Security Best Practices

⚠️ **IMPORTANT**: Never expose your API key in frontend code for production!

### Recommended Production Setup

1. **Create a Backend Proxy** (Recommended)

```javascript
// Instead of passing apiKey directly, use a proxy endpoint
GTHChat.init({
  apiEndpoint: '/api/chat',  // Your backend endpoint
  apiKey: '' // Don't pass API key in frontend
});
```

2. **Backend Proxy Example (Node.js/Express)**

```javascript
// server.js
app.post('/api/chat', async (req, res) => {
  const { message, history } = req.body;
  
  // Call Claude API from backend (API key stored in env)
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
      system: 'You are a helpful AI assistant...',
      messages: [...history, { role: 'user', content: message }]
    })
  });
  
  const data = await response.json();
  res.json(data);
});
```

3. **Environment Variables**

```bash
# .env
CLAUDE_API_KEY=your-api-key-here
```

## File Structure

```
ai-chat-assistant/
├── index.js           # Main entry point (21KB)
├── chat-widget.js     # Core widget component
├── api-handler.js     # Claude API integration
├── styles.css         # GTH-themed styles (10KB)
├── config.js          # Configuration defaults
└── README.md          # This file
```

**Total Size**: ~50KB (unminified, no external dependencies)

## Troubleshooting

### Chat button doesn't appear
- Check browser console for errors
- Verify script is loaded: `console.log(window.GTHChat)`
- Ensure script tag is before closing `</body>`

### API errors
- Verify API key is correct
- Check API key has proper permissions
- Monitor rate limits (10 requests per minute by default)
- Check network tab for API responses

### Styling conflicts
- All CSS is scoped with `gth-chat-` prefix
- If conflicts occur, increase CSS specificity
- Check z-index values (widget: 9998, button: 9999)

### Chat history not saving
- Check if localStorage is enabled
- Verify browser allows localStorage
- Check if running in private/incognito mode

## Testing Checklist

Before deploying, verify:

- [ ] Chat button appears in correct position
- [ ] Widget opens and closes smoothly
- [ ] Messages send and receive properly
- [ ] API key is working (test with sample question)
- [ ] Mobile responsive design works
- [ ] No conflicts with existing GTH navigation
- [ ] No interference with GTH forms or CTAs
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Screen readers can access (test with NVDA/JAWS)
- [ ] Chat history persists after page reload
- [ ] Rate limiting prevents abuse
- [ ] Styling matches GTH brand

## Advanced Customization

### Custom CSS Variables

Override GTH theme colors by adding CSS:

```css
:root {
  --gth-primary-color: #your-color;
  --gth-secondary-color: #your-color;
  --gth-accent-color: #your-color;
}
```

### Custom Icons

Replace icons by extending the widget class:

```javascript
// After loading, customize icons
document.querySelector('.gth-chat-button').innerHTML = 'Your Custom Icon SVG';
```

### Multi-Language Support

Customize text for different languages:

```javascript
GTHChat.init({
  greeting: 'مرحبا بكم في مركز التجارة العالمي!', // Arabic
  placeholder: 'اسأل عن التجارة...',
  // ... other translations
});
```

## Performance Tips

1. **Lazy Load** - Only initialize when needed:
```javascript
document.querySelector('#load-chat-btn').addEventListener('click', () => {
  GTHChat.init({ apiKey: 'your-key' });
});
```

2. **Preload for Faster Load**:
```html
<link rel="preload" href="/ai-chat-assistant/styles.css" as="style">
```

3. **Async Loading**:
```html
<script src="/ai-chat-assistant/index.js" async></script>
```

## Support & Maintenance

### Updating the Component

To update to a new version:
1. Backup your `ai-chat-assistant/` folder
2. Replace with new version files
3. Review CHANGELOG for breaking changes
4. Test thoroughly before deploying

### Common Modifications

**Change Widget Position**:
```javascript
theme: { position: 'bottom-left' }
```

**Adjust Mobile Breakpoint**:
Edit `styles.css` media query at line 476.

**Modify Rate Limits**:
```javascript
rateLimit: { maxRequests: 20, windowMs: 60000 }
```

## Analytics Integration

Track chat usage (without interfering with GTH analytics):

```javascript
// After initializing GTHChat
document.querySelector('.gth-chat-send-button').addEventListener('click', () => {
  // Your analytics code (Google Analytics, etc.)
  if (window.gtag) {
    gtag('event', 'chat_message_sent', {
      'event_category': 'chat',
      'event_label': 'user_interaction'
    });
  }
});
```

## License

Proprietary - Global Trade Hub Website Component

## Version

1.0.0 - Initial Release

---

**Need Help?** Contact the Global Trade Hub development team for support.

**Security Issue?** Report immediately to security@globaltradehub.com

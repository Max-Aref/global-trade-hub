/**
 * Global Trade Hub AI Chat Assistant Configuration
 * 
 * This file contains the default configuration for the GTH chat assistant.
 * Brand colors and styling are extracted from the GTH website design system.
 */

const GTHChatConfig = {
  // API Configuration
  apiProvider: 'claude',
  model: 'claude-sonnet-4-5-20250929',
  apiKey: '', // Set this during initialization
  maxTokens: 1024,
  
  // Global Trade Hub Brand Theme
  theme: {
    // Primary brand color from GTH design system
    primaryColor: '#8c45ff',
    // Secondary dark background from GTH
    secondaryColor: '#190d2e',
    // Accent color for highlights
    accentColor: '#4a208a',
    // Font family - inherits from GTH site
    fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
    // Widget position on screen
    position: 'bottom-right',
    // Icon type for chat button
    chatIcon: 'globe',
    // Border radius matching GTH design
    borderRadius: '12px',
    // Shadow effect matching GTH glow effect
    boxShadow: '0px 0px 12px #8c45ff',
  },
  
  // UI Text Configuration
  greeting: 'Welcome to Global Trade Hub! How can I assist you with your trade inquiries today?',
  placeholder: 'Ask about trade, logistics, regulations...',
  
  // Feature Flags
  persistHistory: true,
  showTimestamp: true,
  enableMarkdown: true,
  
  // Namespace to prevent conflicts
  namespace: 'gth-chat',
  
  // System Prompt for Trade-Specific Context
  systemPrompt: `You are a helpful AI assistant for Global Trade Hub, specializing in international trade, logistics, import/export regulations, and commerce questions. 

Your expertise includes:
- HS codes and product classification
- Import/export regulations by country
- Customs clearance procedures
- International shipping and logistics
- Trade documentation requirements
- Wholesale and B2B commerce
- Cross-border transactions

Provide accurate, professional responses that help users navigate international trade successfully. Be concise but thorough, and always prioritize compliance and best practices.`,

  // Sample Questions for Trade Context
  sampleQuestions: [
    "What are HS codes and how do I find mine?",
    "Tell me about import regulations for [country]",
    "How does customs clearance work?",
    "What documents do I need for international shipping?"
  ],
  
  // Rate Limiting
  rateLimit: {
    maxRequests: 10,
    windowMs: 60000 // 1 minute
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GTHChatConfig;
}

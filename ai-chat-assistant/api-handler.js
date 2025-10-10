/**
 * Global Trade Hub AI Chat Assistant - API Handler
 * 
 * Handles communication with Claude API (Anthropic)
 * Includes error handling, timeout management, and rate limiting
 */

class GTHApiHandler {
  constructor(config) {
    this.config = config;
    this.apiKey = config.apiKey;
    this.model = config.model || 'claude-sonnet-4-5-20250929';
    this.maxTokens = config.maxTokens || 1024;
    this.systemPrompt = config.systemPrompt;
    this.requestCount = 0;
    this.windowStart = Date.now();
  }

  /**
   * Check rate limiting
   */
  checkRateLimit() {
    const now = Date.now();
    const windowMs = this.config.rateLimit?.windowMs || 60000;
    const maxRequests = this.config.rateLimit?.maxRequests || 10;

    // Reset window if expired
    if (now - this.windowStart > windowMs) {
      this.requestCount = 0;
      this.windowStart = now;
    }

    // Check if limit exceeded
    if (this.requestCount >= maxRequests) {
      throw new Error('Rate limit exceeded. Please wait a moment before sending another message.');
    }

    this.requestCount++;
  }

  /**
   * Send message to Claude API
   * @param {string} message - User message
   * @param {Array} conversationHistory - Previous messages for context
   * @returns {Promise<string>} - AI response
   */
  async sendMessage(message, conversationHistory = []) {
    try {
      // Check rate limiting
      this.checkRateLimit();

      // Validate API key
      if (!this.apiKey || this.apiKey === '') {
        throw new Error('API key not configured. Please set your Claude API key in the initialization config.');
      }

      // Build messages array with conversation history
      const messages = [
        ...conversationHistory.map(msg => ({
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
          'x-api-key': this.apiKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: this.model,
          max_tokens: this.maxTokens,
          system: this.systemPrompt,
          messages: messages
        })
      });

      // Handle HTTP errors
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.error?.message || `API request failed with status ${response.status}`;
        throw new Error(errorMessage);
      }

      // Parse response
      const data = await response.json();
      
      // Extract text from response
      if (data.content && data.content.length > 0) {
        return data.content[0].text;
      } else {
        throw new Error('No response content received from API');
      }

    } catch (error) {
      console.error('GTH Chat API Error:', error);
      
      // Return user-friendly error messages
      if (error.message.includes('Rate limit')) {
        return 'I apologize, but you\'ve sent too many messages too quickly. Please wait a moment and try again.';
      } else if (error.message.includes('API key')) {
        return 'Configuration error: API key not set. Please contact the website administrator.';
      } else if (error.message.includes('network') || error.message.includes('fetch')) {
        return 'I\'m having trouble connecting right now. Please check your internet connection and try again.';
      } else {
        return `I encountered an error: ${error.message}. Please try again or contact support if the issue persists.`;
      }
    }
  }

  /**
   * Update API key
   * @param {string} newApiKey - New API key
   */
  updateApiKey(newApiKey) {
    this.apiKey = newApiKey;
  }

  /**
   * Reset rate limiting counter
   */
  resetRateLimit() {
    this.requestCount = 0;
    this.windowStart = Date.now();
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GTHApiHandler;
}

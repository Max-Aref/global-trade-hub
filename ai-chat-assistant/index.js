/**
 * Global Trade Hub AI Chat Assistant - Main Entry Point
 * 
 * Self-contained, framework-agnostic chat assistant component
 * Designed to be integrated with a single script tag
 * 
 * Usage:
 * <script src="/ai-chat-assistant/index.js"></script>
 * <script>
 *   GTHChat.init({
 *     apiKey: 'your-claude-api-key',
 *     theme: { primaryColor: '#8c45ff' }
 *   });
 * </script>
 */

(function(window) {
  'use strict';

  // Prevent multiple initialization
  if (window.GTHChat) {
    console.warn('GTH Chat Assistant already initialized');
    return;
  }

  // Default configuration (matches config.js)
  const defaultConfig = {
    apiProvider: 'claude',
    model: 'claude-sonnet-4-5-20250929',
    apiKey: '',
    maxTokens: 1024,
    theme: {
      primaryColor: '#8c45ff',
      secondaryColor: '#190d2e',
      accentColor: '#4a208a',
      fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
      position: 'bottom-right',
      chatIcon: 'globe',
      borderRadius: '12px',
      boxShadow: '0px 0px 12px #8c45ff',
    },
    greeting: 'Welcome to Global Trade Hub! How can I assist you with your trade inquiries today?',
    placeholder: 'Ask about trade, logistics, regulations...',
    persistHistory: true,
    showTimestamp: true,
    enableMarkdown: true,
    namespace: 'gth-chat',
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
    sampleQuestions: [
      "What are HS codes and how do I find mine?",
      "Tell me about import regulations for [country]",
      "How does customs clearance work?",
      "What documents do I need for international shipping?"
    ],
    rateLimit: {
      maxRequests: 10,
      windowMs: 60000
    }
  };

  // Merge user config with defaults
  function mergeConfig(userConfig) {
    const merged = { ...defaultConfig };
    
    if (userConfig) {
      Object.keys(userConfig).forEach(key => {
        if (typeof userConfig[key] === 'object' && !Array.isArray(userConfig[key])) {
          merged[key] = { ...merged[key], ...userConfig[key] };
        } else {
          merged[key] = userConfig[key];
        }
      });
    }
    
    return merged;
  }

  // API Handler Class (inline for self-contained bundle)
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

    checkRateLimit() {
      const now = Date.now();
      const windowMs = this.config.rateLimit?.windowMs || 60000;
      const maxRequests = this.config.rateLimit?.maxRequests || 10;

      if (now - this.windowStart > windowMs) {
        this.requestCount = 0;
        this.windowStart = now;
      }

      if (this.requestCount >= maxRequests) {
        throw new Error('Rate limit exceeded. Please wait a moment before sending another message.');
      }

      this.requestCount++;
    }

    async sendMessage(message, conversationHistory = []) {
      try {
        this.checkRateLimit();

        if (!this.apiKey || this.apiKey === '') {
          throw new Error('API key not configured. Please set your Claude API key in the initialization config.');
        }

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

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          const errorMessage = errorData.error?.message || `API request failed with status ${response.status}`;
          throw new Error(errorMessage);
        }

        const data = await response.json();
        
        if (data.content && data.content.length > 0) {
          return data.content[0].text;
        } else {
          throw new Error('No response content received from API');
        }

      } catch (error) {
        console.error('GTH Chat API Error:', error);
        
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

    updateApiKey(newApiKey) {
      this.apiKey = newApiKey;
    }

    resetRateLimit() {
      this.requestCount = 0;
      this.windowStart = Date.now();
    }
  }

  // Load external scripts dynamically
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  // Load CSS
  function loadCSS(href) {
    if (document.getElementById('gth-chat-styles')) return;
    
    const link = document.createElement('link');
    link.id = 'gth-chat-styles';
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  }

  // Get base path for loading resources
  function getBasePath() {
    const scripts = document.getElementsByTagName('script');
    for (let script of scripts) {
      if (script.src && script.src.includes('ai-chat-assistant/index.js')) {
        return script.src.substring(0, script.src.lastIndexOf('/'));
      }
    }
    return './ai-chat-assistant';
  }

  // Chat Widget Class (inline for self-contained bundle)
  class GTHChatWidget {
    constructor(config, apiHandler) {
      this.config = config;
      this.apiHandler = apiHandler;
      this.isOpen = false;
      this.conversationHistory = [];
      this.elements = {};
      
      if (config.persistHistory) {
        this.loadHistory();
      }
      
      this.init();
    }

    init() {
      this.createButton();
      this.createWidget();
      this.attachEventListeners();
      
      if (this.conversationHistory.length === 0) {
        this.showGreeting();
      } else {
        this.renderHistory();
      }
    }

    createButton() {
      const button = document.createElement('button');
      button.className = 'gth-chat-button';
      button.setAttribute('aria-label', 'Open chat assistant');
      button.innerHTML = this.getGlobeIcon();
      
      document.body.appendChild(button);
      this.elements.button = button;
    }

    createWidget() {
      const widget = document.createElement('div');
      widget.className = 'gth-chat-widget gth-chat-hidden';
      widget.setAttribute('role', 'dialog');
      widget.setAttribute('aria-label', 'Chat assistant');
      
      widget.innerHTML = `
        <div class="gth-chat-header">
          <div class="gth-chat-header-content">
            <div class="gth-chat-header-icon">${this.getGlobeIcon()}</div>
            <div class="gth-chat-header-text">
              <h3>Global Trade Hub</h3>
              <p>AI Trade Assistant</p>
            </div>
          </div>
          <button class="gth-chat-close-button" aria-label="Close chat">
            ${this.getCloseIcon()}
          </button>
        </div>
        <div class="gth-chat-messages" role="log" aria-live="polite" aria-atomic="false"></div>
        <div class="gth-chat-input-container">
          <div class="gth-chat-input-wrapper">
            <textarea 
              class="gth-chat-input" 
              placeholder="${this.config.placeholder}"
              aria-label="Type your message"
              rows="1"
            ></textarea>
            <button class="gth-chat-send-button" aria-label="Send message">
              ${this.getSendIcon()}
            </button>
          </div>
        </div>
      `;
      
      document.body.appendChild(widget);
      this.elements.widget = widget;
      this.elements.messages = widget.querySelector('.gth-chat-messages');
      this.elements.input = widget.querySelector('.gth-chat-input');
      this.elements.sendButton = widget.querySelector('.gth-chat-send-button');
      this.elements.closeButton = widget.querySelector('.gth-chat-close-button');
    }

    attachEventListeners() {
      this.elements.button.addEventListener('click', () => this.toggle());
      this.elements.closeButton.addEventListener('click', () => this.close());
      this.elements.sendButton.addEventListener('click', () => this.sendMessage());
      
      this.elements.input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          this.sendMessage();
        }
      });
      
      this.elements.input.addEventListener('input', () => {
        this.autoResizeTextarea();
      });
      
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen) {
          this.close();
        }
      });
    }

    autoResizeTextarea() {
      const textarea = this.elements.input;
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
    }

    toggle() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }

    open() {
      this.elements.widget.classList.remove('gth-chat-hidden');
      this.isOpen = true;
      this.elements.input.focus();
      this.elements.button.setAttribute('aria-expanded', 'true');
    }

    close() {
      this.elements.widget.classList.add('gth-chat-hidden');
      this.isOpen = false;
      this.elements.button.setAttribute('aria-expanded', 'false');
    }

    showGreeting() {
      const greeting = document.createElement('div');
      greeting.className = 'gth-chat-greeting';
      greeting.innerHTML = `
        <p>${this.config.greeting}</p>
        <div class="gth-chat-samples">
          ${this.config.sampleQuestions.map(q => `
            <button class="gth-chat-sample-button" data-question="${this.escapeHtml(q)}">
              ${this.escapeHtml(q)}
            </button>
          `).join('')}
        </div>
      `;
      
      this.elements.messages.appendChild(greeting);
      
      greeting.querySelectorAll('.gth-chat-sample-button').forEach(btn => {
        btn.addEventListener('click', () => {
          const question = btn.getAttribute('data-question');
          this.elements.input.value = question;
          this.sendMessage();
        });
      });
    }

    renderHistory() {
      this.conversationHistory.forEach(msg => {
        this.addMessageToUI(msg.role, msg.content, msg.timestamp);
      });
    }

    async sendMessage() {
      const message = this.elements.input.value.trim();
      
      if (!message) return;
      
      this.elements.input.disabled = true;
      this.elements.sendButton.disabled = true;
      
      this.elements.input.value = '';
      this.elements.input.style.height = 'auto';
      
      const timestamp = new Date().toISOString();
      this.addMessageToUI('user', message, timestamp);
      this.conversationHistory.push({ role: 'user', content: message, timestamp });
      
      this.showLoading();
      
      try {
        const response = await this.apiHandler.sendMessage(message, this.conversationHistory);
        
        this.hideLoading();
        
        const responseTimestamp = new Date().toISOString();
        this.addMessageToUI('assistant', response, responseTimestamp);
        this.conversationHistory.push({ role: 'assistant', content: response, timestamp: responseTimestamp });
        
        if (this.config.persistHistory) {
          this.saveHistory();
        }
        
      } catch (error) {
        this.hideLoading();
        this.showError('Failed to get response. Please try again.');
        console.error('Chat error:', error);
      }
      
      this.elements.input.disabled = false;
      this.elements.sendButton.disabled = false;
      this.elements.input.focus();
    }

    addMessageToUI(role, content, timestamp) {
      const messageDiv = document.createElement('div');
      messageDiv.className = `gth-chat-message gth-chat-message-${role}`;
      
      const avatar = role === 'assistant' ? this.getGlobeIcon() : this.getUserIcon();
      const timeStr = this.config.showTimestamp ? this.formatTime(timestamp) : '';
      
      messageDiv.innerHTML = `
        <div class="gth-chat-message-avatar">${avatar}</div>
        <div class="gth-chat-message-content">
          <div class="gth-chat-message-bubble">${this.formatMessage(content)}</div>
          ${timeStr ? `<div class="gth-chat-message-time">${timeStr}</div>` : ''}
        </div>
      `;
      
      this.elements.messages.appendChild(messageDiv);
      this.scrollToBottom();
    }

    formatMessage(content) {
      if (!this.config.enableMarkdown) {
        return this.escapeHtml(content);
      }
      
      let formatted = this.escapeHtml(content);
      
      formatted = formatted.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
      formatted = formatted.replace(/`([^`]+)`/g, '<code>$1</code>');
      formatted = formatted.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
      formatted = formatted.replace(/\*([^*]+)\*/g, '<em>$1</em>');
      formatted = formatted.replace(/\n/g, '<br>');
      
      return formatted;
    }

    showLoading() {
      const loading = document.createElement('div');
      loading.className = 'gth-chat-message gth-chat-message-assistant';
      loading.id = 'gth-chat-loading';
      loading.innerHTML = `
        <div class="gth-chat-message-avatar">${this.getGlobeIcon()}</div>
        <div class="gth-chat-message-content">
          <div class="gth-chat-message-bubble">
            <div class="gth-chat-loading">
              <div class="gth-chat-loading-dot"></div>
              <div class="gth-chat-loading-dot"></div>
              <div class="gth-chat-loading-dot"></div>
            </div>
          </div>
        </div>
      `;
      
      this.elements.messages.appendChild(loading);
      this.scrollToBottom();
    }

    hideLoading() {
      const loading = document.getElementById('gth-chat-loading');
      if (loading) {
        loading.remove();
      }
    }

    showError(message) {
      const error = document.createElement('div');
      error.className = 'gth-chat-error';
      error.textContent = message;
      
      this.elements.messages.appendChild(error);
      this.scrollToBottom();
      
      setTimeout(() => error.remove(), 5000);
    }

    scrollToBottom() {
      this.elements.messages.scrollTop = this.elements.messages.scrollHeight;
    }

    formatTime(timestamp) {
      const date = new Date(timestamp);
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    saveHistory() {
      try {
        const key = `${this.config.namespace}-history`;
        localStorage.setItem(key, JSON.stringify(this.conversationHistory));
      } catch (e) {
        console.warn('Failed to save chat history:', e);
      }
    }

    loadHistory() {
      try {
        const key = `${this.config.namespace}-history`;
        const saved = localStorage.getItem(key);
        if (saved) {
          this.conversationHistory = JSON.parse(saved);
        }
      } catch (e) {
        console.warn('Failed to load chat history:', e);
        this.conversationHistory = [];
      }
    }

    clearHistory() {
      this.conversationHistory = [];
      this.elements.messages.innerHTML = '';
      this.showGreeting();
      
      if (this.config.persistHistory) {
        try {
          const key = `${this.config.namespace}-history`;
          localStorage.removeItem(key);
        } catch (e) {
          console.warn('Failed to clear chat history:', e);
        }
      }
    }

    escapeHtml(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    }

    getGlobeIcon() {
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512"><path d="M352,256c0-114.9-93.1-208-208-208S-64,141.1-64,256s93.1,208,208,208S352,370.9,352,256z M144,64c69.9,0,128,78.4,128,192s-58.1,192-128,192S16,369.6,16,256S74.1,64,144,64z M325.8,32h181.6c-6.4,8.2-13.5,16-21.5,23.4L411.4,128H288V64h37.8zM288,448H325.8l74.5-72.6c8-7.4,15.1-15.2,21.5-23.4H240.6L288,448z M144,320c39.8,0,74.1-52.7,90.6-128H53.4C69.9,267.3,104.2,320,144,320z M234.6,128H53.4C69.9,52.7,104.2,0,144,0s74.1,52.7,90.6,128z"/></svg>`;
    }

    getUserIcon() {
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3h-91.4z"/></svg>`;
    }

    getCloseIcon() {
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="gth-chat-close-icon"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>`;
    }

    getSendIcon() {
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" class="gth-chat-send-icon"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L277.3 424.9l-40.1 74.5c-5.2 9.7-16.3 14.6-27 11.9S192 499 192 488V392c0-5.3 1.8-10.5 5.1-14.7L362.4 164.7 173.3 351.8c-5.2 4.1-11.4 6.2-17.8 6.2H32c-11.2 0-21.7-5.9-27.4-15.5s-6.4-21.5-1.4-31.4l128-256c4.6-9.2 13.3-15.4 23.3-16.6s20.5 3.9 26.2 12.3L310.9 197.7 441.8 37.5c6.5-8.2 16.6-11.8 26.4-9.4s17.8 9.7 21.5 19.1l8.4 24.6z"/></svg>`;
    }

    destroy() {
      if (this.elements.button) this.elements.button.remove();
      if (this.elements.widget) this.elements.widget.remove();
    }
  }

  // Global API
  let chatInstance = null;

  const GTHChat = {
    init: function(userConfig) {
      if (chatInstance) {
        console.warn('GTH Chat already initialized. Use GTHChat.destroy() first to reinitialize.');
        return;
      }

      // Merge config
      const config = mergeConfig(userConfig);

      // Validate API key
      if (!config.apiKey || config.apiKey === '') {
        console.warn('GTH Chat: API key not provided. The chat will not function without an API key.');
      }

      // Load CSS
      const basePath = getBasePath();
      loadCSS(basePath + '/styles.css');

      // Initialize when DOM is ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          const apiHandler = new GTHApiHandler(config);
          chatInstance = new GTHChatWidget(config, apiHandler);
        });
      } else {
        const apiHandler = new GTHApiHandler(config);
        chatInstance = new GTHChatWidget(config, apiHandler);
      }

      return this;
    },

    destroy: function() {
      if (chatInstance) {
        chatInstance.destroy();
        chatInstance = null;
      }
      return this;
    },

    open: function() {
      if (chatInstance) {
        chatInstance.open();
      }
      return this;
    },

    close: function() {
      if (chatInstance) {
        chatInstance.close();
      }
      return this;
    },

    clearHistory: function() {
      if (chatInstance) {
        chatInstance.clearHistory();
      }
      return this;
    },

    updateApiKey: function(newApiKey) {
      if (chatInstance && chatInstance.apiHandler) {
        chatInstance.apiHandler.updateApiKey(newApiKey);
      }
      return this;
    }
  };

  // Expose to global scope
  window.GTHChat = GTHChat;

  // Auto-initialize if config is provided via data attributes
  if (document.currentScript && document.currentScript.hasAttribute('data-api-key')) {
    const autoConfig = {
      apiKey: document.currentScript.getAttribute('data-api-key')
    };
    
    // Add other data attributes if present
    if (document.currentScript.hasAttribute('data-primary-color')) {
      autoConfig.theme = autoConfig.theme || {};
      autoConfig.theme.primaryColor = document.currentScript.getAttribute('data-primary-color');
    }
    
    GTHChat.init(autoConfig);
  }

})(window);

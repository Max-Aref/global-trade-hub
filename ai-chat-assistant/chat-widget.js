/**
 * Global Trade Hub AI Chat Assistant - Core Widget Component
 * 
 * Self-contained chat widget with no external dependencies
 */

class GTHChatWidget {
  constructor(config, apiHandler) {
    this.config = config;
    this.apiHandler = apiHandler;
    this.isOpen = false;
    this.conversationHistory = [];
    this.elements = {};
    
    // Load conversation history from localStorage if enabled
    if (config.persistHistory) {
      this.loadHistory();
    }
    
    this.init();
  }

  /**
   * Initialize the chat widget
   */
  init() {
    this.createStyles();
    this.createButton();
    this.createWidget();
    this.attachEventListeners();
    
    // Show greeting if no history
    if (this.conversationHistory.length === 0) {
      this.showGreeting();
    } else {
      this.renderHistory();
    }
  }

  /**
   * Inject styles into the document
   */
  createStyles() {
    if (document.getElementById('gth-chat-styles')) return;
    
    const link = document.createElement('link');
    link.id = 'gth-chat-styles';
    link.rel = 'stylesheet';
    link.href = this.getStylesheetPath();
    document.head.appendChild(link);
  }

  /**
   * Get the stylesheet path relative to index.js
   */
  getStylesheetPath() {
    // Try to find the script tag that loaded this module
    const scripts = document.getElementsByTagName('script');
    for (let script of scripts) {
      if (script.src && script.src.includes('ai-chat-assistant')) {
        const basePath = script.src.substring(0, script.src.lastIndexOf('/'));
        return basePath + '/styles.css';
      }
    }
    // Fallback to relative path
    return './ai-chat-assistant/styles.css';
  }

  /**
   * Create the toggle button
   */
  createButton() {
    const button = document.createElement('button');
    button.className = 'gth-chat-button';
    button.setAttribute('aria-label', 'Open chat assistant');
    button.innerHTML = this.getGlobeIcon();
    
    document.body.appendChild(button);
    this.elements.button = button;
  }

  /**
   * Create the chat widget container
   */
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

  /**
   * Attach event listeners
   */
  attachEventListeners() {
    // Toggle button
    this.elements.button.addEventListener('click', () => this.toggle());
    
    // Close button
    this.elements.closeButton.addEventListener('click', () => this.close());
    
    // Send button
    this.elements.sendButton.addEventListener('click', () => this.sendMessage());
    
    // Input field - Enter to send, Shift+Enter for new line
    this.elements.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        this.sendMessage();
      }
    });
    
    // Auto-resize textarea
    this.elements.input.addEventListener('input', () => {
      this.autoResizeTextarea();
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  }

  /**
   * Auto-resize textarea based on content
   */
  autoResizeTextarea() {
    const textarea = this.elements.input;
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
  }

  /**
   * Toggle widget open/closed
   */
  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  /**
   * Open the chat widget
   */
  open() {
    this.elements.widget.classList.remove('gth-chat-hidden');
    this.isOpen = true;
    this.elements.input.focus();
    this.elements.button.setAttribute('aria-expanded', 'true');
  }

  /**
   * Close the chat widget
   */
  close() {
    this.elements.widget.classList.add('gth-chat-hidden');
    this.isOpen = false;
    this.elements.button.setAttribute('aria-expanded', 'false');
  }

  /**
   * Show greeting message with sample questions
   */
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
    
    // Add click handlers to sample questions
    greeting.querySelectorAll('.gth-chat-sample-button').forEach(btn => {
      btn.addEventListener('click', () => {
        const question = btn.getAttribute('data-question');
        this.elements.input.value = question;
        this.sendMessage();
      });
    });
  }

  /**
   * Render conversation history
   */
  renderHistory() {
    this.conversationHistory.forEach(msg => {
      this.addMessageToUI(msg.role, msg.content, msg.timestamp);
    });
  }

  /**
   * Send user message
   */
  async sendMessage() {
    const message = this.elements.input.value.trim();
    
    if (!message) return;
    
    // Disable input while processing
    this.elements.input.disabled = true;
    this.elements.sendButton.disabled = true;
    
    // Clear input and reset height
    this.elements.input.value = '';
    this.elements.input.style.height = 'auto';
    
    // Add user message to UI and history
    const timestamp = new Date().toISOString();
    this.addMessageToUI('user', message, timestamp);
    this.conversationHistory.push({ role: 'user', content: message, timestamp });
    
    // Show loading indicator
    this.showLoading();
    
    try {
      // Get AI response
      const response = await this.apiHandler.sendMessage(message, this.conversationHistory);
      
      // Remove loading indicator
      this.hideLoading();
      
      // Add AI response to UI and history
      const responseTimestamp = new Date().toISOString();
      this.addMessageToUI('assistant', response, responseTimestamp);
      this.conversationHistory.push({ role: 'assistant', content: response, timestamp: responseTimestamp });
      
      // Save to localStorage if enabled
      if (this.config.persistHistory) {
        this.saveHistory();
      }
      
    } catch (error) {
      this.hideLoading();
      this.showError('Failed to get response. Please try again.');
      console.error('Chat error:', error);
    }
    
    // Re-enable input
    this.elements.input.disabled = false;
    this.elements.sendButton.disabled = false;
    this.elements.input.focus();
  }

  /**
   * Add message to UI
   */
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

  /**
   * Format message content (basic markdown support)
   */
  formatMessage(content) {
    if (!this.config.enableMarkdown) {
      return this.escapeHtml(content);
    }
    
    // Basic markdown: bold, italic, code, links
    let formatted = this.escapeHtml(content);
    
    // Code blocks
    formatted = formatted.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
    
    // Inline code
    formatted = formatted.replace(/`([^`]+)`/g, '<code>$1</code>');
    
    // Bold
    formatted = formatted.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    
    // Italic
    formatted = formatted.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    
    // Line breaks
    formatted = formatted.replace(/\n/g, '<br>');
    
    return formatted;
  }

  /**
   * Show loading indicator
   */
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

  /**
   * Hide loading indicator
   */
  hideLoading() {
    const loading = document.getElementById('gth-chat-loading');
    if (loading) {
      loading.remove();
    }
  }

  /**
   * Show error message
   */
  showError(message) {
    const error = document.createElement('div');
    error.className = 'gth-chat-error';
    error.textContent = message;
    
    this.elements.messages.appendChild(error);
    this.scrollToBottom();
    
    // Auto-remove after 5 seconds
    setTimeout(() => error.remove(), 5000);
  }

  /**
   * Scroll messages to bottom
   */
  scrollToBottom() {
    this.elements.messages.scrollTop = this.elements.messages.scrollHeight;
  }

  /**
   * Format timestamp
   */
  formatTime(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  /**
   * Save conversation history to localStorage
   */
  saveHistory() {
    try {
      const key = `${this.config.namespace}-history`;
      localStorage.setItem(key, JSON.stringify(this.conversationHistory));
    } catch (e) {
      console.warn('Failed to save chat history:', e);
    }
  }

  /**
   * Load conversation history from localStorage
   */
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

  /**
   * Clear conversation history
   */
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

  /**
   * Escape HTML to prevent XSS
   */
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /**
   * SVG Icons
   */
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

  /**
   * Destroy the widget
   */
  destroy() {
    if (this.elements.button) this.elements.button.remove();
    if (this.elements.widget) this.elements.widget.remove();
    const styles = document.getElementById('gth-chat-styles');
    if (styles) styles.remove();
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GTHChatWidget;
}

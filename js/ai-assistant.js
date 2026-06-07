/* ============================================================
   مجموعة الغباري — مساعد الذكاء الاصطناعي العائم
   Alghbari Group — Floating AI Assistant Client
   
   01. قاعدة المعرفة المتكاملة (Knowledge Base)
   02. إعداد وإدارة نافذة الدردشة (Widget Controls)
   03. إرسال واستقبال الرسائل ورسمها (Message Flow)
   04. معالجة وتدفق أتمتة جمع البيانات والليدات (Lead Generation flow)
   ============================================================ */

// ============================================================
// 01. INTEGRATED KNOWLEDGE BASE
// ============================================================
const AI_KNOWLEDGE = {
  welcome: "مرحباً بك في مجموعة الغباري الرقمية! 🚀 أنا مساعدك الذكي. يمكنني مساعدتك في استكشاف خدماتنا التسويقية والبرمجية، الإجابة على أسئلتك، أو حجز استشارة مجانية لمشروعك. كيف يمكنني مساعدتك اليوم؟",
  
  about: "مجموعة الغباري هي منظومة رقمية متكاملة تجمع بين الفن الإبداعي والحلول التقنية المتقدمة. تضم المجموعة قسمين رئيسيين:\n1. **الغباري للتسويق (Alghbari Marketing):** لتصميم الهويات البصرية والشعارات، إدارة حسابات التواصل الاجتماعي، وصناعة المحتوى الإبداعي.\n2. **الغباري سوفت (Alghbari Soft):** لتصميم وتطوير المواقع الإلكترونية، تطبيقات الهواتف الذكية، الأنظمة المحاسبية، وحلول الذكاء الاصطناعي.",
  
  founder: "تأسست مجموعة الغباري بواسطة الأستاذ **نابل الغباري**، وهو متخصص وخبير في أنظمة المعلومات المحاسبية وشغوف بدمج التكنولوجيا والأعمال لتقديم قيمة فريدة للشركات والمشاريع الناشئة.",
  
  services_marketing: "في **الغباري للتسويق**، نقدم:\n- 🎨 **تصميم الشعارات والهويات البصرية:** هويات كاملة ومتميزة.\n- 📲 **إدارة السوشيال ميديا:** كتابة المحتوى، التصميم، والجدولة.\n- 🎬 **موشن جرافيكس وصناعة الفيديو:** فيديوهات تسويقية ممتازة.\n- 📣 **الإعلانات الرقمية:** إطلاق وحملات إعلانية مدفوعة لزيادة المبيعات.",
  
  services_soft: "في **الغباري سوفت**، نقدم:\n- 💻 **تطوير المواقع والمنصات:** مواقع سريعة متوافقة مع محركات البحث SEO.\n- 📱 **تطبيقات الأندرويد والـ iOS:** تطبيقات جوال متجاوبة وسلسة.\n- 📊 **الأنظمة المحاسبية وERP:** نظام مالي وإداري متكامل للشركات.\n- 🤖 **حلول الذكاء الاصطناعي:** أتمتة العمليات وبناء بوتات دردشة ذكية للشركات.",
  
  process: "نتبع خطة عمل محكمة من 5 مراحل لضمان نجاح المشاريع:\n1. **التخطيط والدراسة:** فهم الأهداف وتحليل المنافسين.\n2. **التصميم:** رسم الهيكل وتجربة المستخدم.\n3. **التطوير:** البرمجة الفعالة والتسويق التجريبي.\n4. **الفحص والاختبار:** التأكد من الجودة والخلو من العيوب.\n5. **الإطلاق والتدريب:** إطلاق المشروع وتدريب فريقك على الإدارة.",
  
  pricing: "الأسعار لدينا مرنة وتعتمد على حجم متطلبات مشروعك. يمكنك الآن حجز **جلسة استشارية مجانية** مدتها 30 دقيقة لنناقش تفاصيل مشروعك ونقدم لك عرض سعر مخصص. ما عليك سوى كتابة كلمة 'طلب استشارة' هنا أو ملء بياناتك معي الآن.",
  
  contact: "يمكنك التواصل معنا عبر:\n- 📞 هاتف / واتساب: +967 770104005\n- 📧 البريد الإلكتروني: alghbarigroup@gmail.com\n- 📍 موقعنا: صنعاء، الجمهورية اليمنية.",
  
  lead_prompt: "يسعدني جداً ترتيب استشارة لك! لو سمحت، ما هو **اسمك الكريم** الكريم أولاً؟"
};

// Suggestions displayed under messages
const SUGGESTIONS = [
  { text: "💼 خدمات البرمجة والذكاء الاصطناعي", action: "services_soft" },
  { text: "🎨 خدمات التسويق والهوية البصرية", action: "services_marketing" },
  { text: "ℹ️ من هي مجموعة الغباري؟", action: "about" },
  { text: "🚀 كيف تطلب استشارة مجانية؟", action: "consult" }
];

// ============================================================
// 02. WIDGET CONTROLS & STATE
// ============================================================
let chatState = {
  isOpen: false,
  step: 'default', // 'default', 'get_name', 'get_phone', 'get_email', 'get_project'
  leadData: {
    name: '',
    phone: '',
    email: '',
    project: ''
  }
};

function initAiAssistant() {
  // Inject assistant widget HTML dynamic layout
  const widgetHtml = `
    <div class="ai-widget-wrapper">
      <button class="ai-widget-trigger btn-magnetic" id="aiTrigger" aria-label="مساعد الذكاء الاصطناعي">
        <span class="ai-trigger-pulse"></span>
        <svg class="ai-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12A10 10 0 0 1 12 2z"/>
          <path d="M12 8v4M12 16h.01"/>
        </svg>
      </button>
      
      <div class="ai-chat-window" id="aiChatWindow">
        <div class="ai-chat-header">
          <div class="ai-chat-header-info">
            <div class="ai-chat-avatar">🤖</div>
            <div>
              <h4 class="ai-chat-title">المساعد الذكي للغباري</h4>
              <span class="ai-chat-status">متصل الآن ومستعد للمساعدة</span>
            </div>
          </div>
          <button class="ai-chat-close" id="aiCloseBtn" aria-label="إغلاق">&times;</button>
        </div>
        
        <div class="ai-chat-messages" id="aiMessagesContainer">
          <!-- Messages will be injected here -->
        </div>
        
        <div class="ai-chat-suggestions" id="aiSuggestionsContainer">
          <!-- Suggestion chips will be injected here -->
        </div>
        
        <form class="ai-chat-input-area" id="aiChatForm">
          <input type="text" class="ai-chat-input" id="aiChatInput" placeholder="اكتب سؤالك هنا..." autocomplete="off">
          <button type="submit" class="ai-chat-send-btn" id="aiSendBtn" aria-label="إرسال">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  `;
  
  // Inject at end of body
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = widgetHtml;
  document.body.appendChild(tempDiv.firstElementChild);
  
  // Elements references
  const trigger = document.getElementById('aiTrigger');
  const chatWindow = document.getElementById('aiChatWindow');
  const closeBtn = document.getElementById('aiCloseBtn');
  const form = document.getElementById('aiChatForm');
  const input = document.getElementById('aiChatInput');
  
  // Event listeners
  trigger.addEventListener('click', toggleChat);
  closeBtn.addEventListener('click', closeChat);
  form.addEventListener('submit', handleFormSubmit);
  
  // Close chat on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && chatState.isOpen) {
      closeChat();
    }
  });
  
  // Show welcome message
  addMessage(AI_KNOWLEDGE.welcome, 'bot', 500);
  renderSuggestions(SUGGESTIONS);
}

function toggleChat() {
  const chatWindow = document.getElementById('aiChatWindow');
  chatState.isOpen = !chatState.isOpen;
  
  if (chatState.isOpen) {
    chatWindow.classList.add('active');
    setTimeout(() => {
      document.getElementById('aiChatInput').focus();
    }, 300);
    // Scroll to bottom
    scrollToBottom();
  } else {
    chatWindow.classList.remove('active');
  }
}

function closeChat() {
  const chatWindow = document.getElementById('aiChatWindow');
  chatWindow.classList.remove('active');
  chatState.isOpen = false;
}

// ============================================================
// 03. MESSAGE FLOW
// ============================================================
function addMessage(text, sender = 'bot', delay = 0) {
  const container = document.getElementById('aiMessagesContainer');
  if (!container) return;
  
  if (delay > 0) {
    // Show typing indicator
    showTypingIndicator();
    
    setTimeout(() => {
      removeTypingIndicator();
      renderMessageElement(text, sender);
    }, delay);
  } else {
    renderMessageElement(text, sender);
  }
}

function renderMessageElement(text, sender) {
  const container = document.getElementById('aiMessagesContainer');
  const messageEl = document.createElement('div');
  messageEl.className = `ai-message ${sender === 'bot' ? 'received' : 'sent'}`;
  
  // Format markdown-like lists and bold tags
  let formattedText = text
    .replace(/\n/g, '<br>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/- (.*?)(<br>|$)/g, '<li>$1</li>');
    
  if (formattedText.includes('<li>')) {
    formattedText = `<ul>${formattedText}</ul>`.replace(/<\/ul><ul>/g, '');
  }
  
  messageEl.innerHTML = `
    <div class="ai-message-content">${formattedText}</div>
    <span class="ai-message-time">${getCurrentTime()}</span>
  `;
  
  container.appendChild(messageEl);
  scrollToBottom();
}

function showTypingIndicator() {
  const container = document.getElementById('aiMessagesContainer');
  if (document.querySelector('.typing-indicator-wrapper')) return;
  
  const indicator = document.createElement('div');
  indicator.className = 'ai-message received typing-indicator-wrapper';
  indicator.innerHTML = `
    <div class="ai-message-content typing-dots">
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
    </div>
  `;
  container.appendChild(indicator);
  scrollToBottom();
}

function removeTypingIndicator() {
  const indicator = document.querySelector('.typing-indicator-wrapper');
  if (indicator) indicator.remove();
}

function scrollToBottom() {
  const container = document.getElementById('aiMessagesContainer');
  if (container) {
    container.scrollTop = container.scrollHeight;
  }
}

function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'م' : 'ص';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  return `${hours}:${minutes} ${ampm}`;
}

function renderSuggestions(options) {
  const container = document.getElementById('aiSuggestionsContainer');
  if (!container) return;
  
  container.innerHTML = '';
  options.forEach(opt => {
    const chip = document.createElement('button');
    chip.className = 'ai-suggestion-chip';
    chip.textContent = opt.text;
    chip.addEventListener('click', () => {
      handleSuggestionClick(opt);
    });
    container.appendChild(chip);
  });
}

// ============================================================
// 04. DIALOG & LEAD COLLECTION LOGIC
// ============================================================
function handleSuggestionClick(opt) {
  // Show user click as sent message
  addMessage(opt.text, 'user');
  
  // Hide suggestions temporarily
  renderSuggestions([]);
  
  setTimeout(() => {
    if (opt.action === 'services_soft') {
      addMessage(AI_KNOWLEDGE.services_soft, 'bot', 600);
      setTimeout(() => renderSuggestions(SUGGESTIONS), 1200);
    } else if (opt.action === 'services_marketing') {
      addMessage(AI_KNOWLEDGE.services_marketing, 'bot', 600);
      setTimeout(() => renderSuggestions(SUGGESTIONS), 1200);
    } else if (opt.action === 'about') {
      addMessage(AI_KNOWLEDGE.about, 'bot', 700);
      setTimeout(() => {
        addMessage(`المؤسس: ${AI_KNOWLEDGE.founder}`, 'bot', 500);
        setTimeout(() => renderSuggestions(SUGGESTIONS), 800);
      }, 1000);
    } else if (opt.action === 'consult') {
      startLeadFlow();
    }
  }, 300);
}

function startLeadFlow() {
  chatState.step = 'get_name';
  addMessage("يسعدني جداً مساعدتك في تقديم طلب استشارة مجانية. سأطرح عليك بضعة أسئلة سريعة لتسجيل طلبك.", 'bot', 600);
  setTimeout(() => {
    addMessage("ما هو **اسمك الكريم**؟", 'bot', 500);
  }, 1000);
}

function handleFormSubmit(e) {
  e.preventDefault();
  const inputEl = document.getElementById('aiChatInput');
  const query = inputEl.value.trim();
  
  if (!query) return;
  
  // Add user message
  addMessage(query, 'user');
  inputEl.value = '';
  
  // Process query
  processUserResponse(query);
}

function processUserResponse(text) {
  // Check if we are in the Lead Collection flow
  if (chatState.step !== 'default') {
    handleLeadCollection(text);
    return;
  }
  
  const query = text.toLowerCase();
  
  // Keyphrase matching (Arabic)
  if (query.includes('خدمات') || query.includes('ماذا تقدم') || query.includes('ما هي الخدمات')) {
    addMessage("نقدم خدمات ممتازة في قطاعين:\n1. **البرمجة والتطوير (الغباري سوفت)**\n2. **التسويق والهوية (الغباري للتسويق)**\nهل تريد تفاصيل عن خدمات التسويق أم البرمجة؟", 'bot', 800);
    renderSuggestions([
      { text: "💻 خدمات البرمجة", action: "services_soft" },
      { text: "🎨 خدمات التسويق", action: "services_marketing" }
    ]);
  } 
  else if (query.includes('سوفت') || query.includes('برمج') || query.includes('موقع') || query.includes('تطبيق') || query.includes('نظام')) {
    addMessage(AI_KNOWLEDGE.services_soft, 'bot', 800);
    setTimeout(() => renderSuggestions(SUGGESTIONS), 1200);
  }
  else if (query.includes('تسويق') || query.includes('شعار') || query.includes('هوية') || query.includes('ميديا') || query.includes('موشن')) {
    addMessage(AI_KNOWLEDGE.services_marketing, 'bot', 800);
    setTimeout(() => renderSuggestions(SUGGESTIONS), 1200);
  }
  else if (query.includes('من انت') || query.includes('الغباري') || query.includes('الشركة') || query.includes('المجموعة')) {
    addMessage(AI_KNOWLEDGE.about, 'bot', 800);
    setTimeout(() => renderSuggestions(SUGGESTIONS), 1200);
  }
  else if (query.includes('نابل') || query.includes('مؤسس') || query.includes('من اسس')) {
    addMessage(AI_KNOWLEDGE.founder, 'bot', 600);
    setTimeout(() => renderSuggestions(SUGGESTIONS), 1000);
  }
  else if (query.includes('سعر') || query.includes('أسعار') || query.includes('تكلفة') || query.includes('بكم')) {
    addMessage(AI_KNOWLEDGE.pricing, 'bot', 800);
    setTimeout(() => renderSuggestions(SUGGESTIONS), 1200);
  }
  else if (query.includes('تواصل') || query.includes('رقم') || query.includes('واتس') || query.includes('ايميل') || query.includes('عنوان')) {
    addMessage(AI_KNOWLEDGE.contact, 'bot', 700);
    setTimeout(() => renderSuggestions(SUGGESTIONS), 1000);
  }
  else if (query.includes('استشارة') || query.includes('طلب') || query.includes('احجز') || query.includes('مشروع')) {
    startLeadFlow();
  }
  else {
    // Default reply
    addMessage("أعتذر منك، لم أفهم سؤالك بدقة. يمكنك الاختيار من الخيارات السريعة أدناه أو كتابة استفسارك بشكل أوضح (مثال: 'ما هي خدماتكم؟'، 'أين موقعكم؟'، 'كيف أحجز استشارة؟').", 'bot', 800);
    setTimeout(() => renderSuggestions(SUGGESTIONS), 1200);
  }
}

function handleLeadCollection(text) {
  if (chatState.step === 'get_name') {
    chatState.leadData.name = text;
    chatState.step = 'get_phone';
    addMessage(`أهلاً بك يا أستاذ ${text}. لتسهيل التواصل معك، يرجى كتابة **رقم هاتفك** (أو رقم الواتساب الخاص بك)؟`, 'bot', 600);
  } 
  else if (chatState.step === 'get_phone') {
    chatState.leadData.phone = text;
    chatState.step = 'get_email';
    addMessage("ممتاز! وما هو **بريدك الإلكتروني** لمراسلتك عليه؟", 'bot', 500);
  } 
  else if (chatState.step === 'get_email') {
    chatState.leadData.email = text;
    chatState.step = 'get_project';
    addMessage("رائع جداً. أخيراً، يرجى إعطائي **نبذة مختصرة عن فكرة مشروعك** أو الخدمة التي تطلبها؟", 'bot', 600);
  } 
  else if (chatState.step === 'get_project') {
    chatState.leadData.project = text;
    chatState.step = 'default';
    
    // Simulate saving lead
    addMessage("جاري حفظ طلبك وإرساله للمشرف... 🚀", 'bot', 500);
    
    setTimeout(() => {
      addMessage(`شكراً جزيلاً لك يا أستاذ ${chatState.leadData.name}. تم تسجيل طلبك بنجاح! سيتصل بك فريقنا الفني خلال 24 ساعة لترتيب الاستشارة المجانية المخصصة لمشروعك.`, 'bot', 800);
      
      // Trigger global toast alert in page if function exists
      if (window.showToast) {
        window.showToast('تم إرسال طلب الاستشارة بنجاح!', 'success');
      }
      
      // Log for developer / console
      console.log('--- LEAD COLLECTED ---', chatState.leadData);
      
      // Reset lead object
      chatState.leadData = { name: '', phone: '', email: '', project: '' };
      
      setTimeout(() => renderSuggestions(SUGGESTIONS), 1500);
    }, 1500);
  }
}

// Initialise when script is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAiAssistant);
} else {
  initAiAssistant();
}

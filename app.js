// Electrocom 2.0 Application Controller

// SVG Circuit Symbols Dictionary for 30 Components
const circuitSymbols = {
  1: `<svg viewBox="0 0 100 40"><line x1="10" y1="20" x2="35" y2="20"/><rect x="35" y="10" width="30" height="20" rx="2"/><line x1="65" y1="20" x2="90" y2="20"/></svg>`, // Resistor
  2: `<svg viewBox="0 0 100 40"><line x1="10" y1="20" x2="45" y2="20"/><line x1="45" y1="5" x2="45" y2="35"/><line x1="55" y1="5" x2="55" y2="35"/><line x1="55" y1="20" x2="90" y2="20"/><text x="36" y="12" fill="var(--text-muted)" font-size="10">+</text></svg>`, // Capacitor
  3: `<svg viewBox="0 0 100 40"><line x1="10" y1="20" x2="25" y2="20"/><path d="M 25,20 C 25,10 33,10 33,20 C 33,10 41,10 41,20 C 41,10 49,10 49,20 C 49,10 57,10 57,20 C 57,10 65,10 65,20 C 65,10 73,10 73,20" /><line x1="73" y1="20" x2="90" y2="20"/></svg>`, // Inductor
  4: `<svg viewBox="0 0 100 40"><line x1="10" y1="20" x2="40" y2="20"/><polygon points="40,10 40,30 60,20"/><line x1="60" y1="10" x2="60" y2="30"/><line x1="60" y1="20" x2="90" y2="20"/></svg>`, // Diode
  5: `<svg viewBox="0 0 100 40"><line x1="10" y1="20" x2="40" y2="20"/><polygon points="40,10 40,30 60,20"/><line x1="60" y1="10" x2="60" y2="30"/><line x1="60" y1="20" x2="90" y2="20"/><line x1="43" y1="8" x2="33" y2="-2"/><line x1="53" y1="8" x2="43" y2="-2"/><path d="M33,-2 l3,0 m-3,0 l0,3 M43,-2 l3,0 m-3,0 l0,3" stroke="var(--text-muted)" stroke-width="1.5"/></svg>`, // LED
  6: `<svg viewBox="0 0 100 40"><line x1="15" y1="20" x2="40" y2="20"/><line x1="40" y1="5" x2="40" y2="35"/><line x1="40" y1="12" x2="65" y2="2"/><line x1="40" y1="28" x2="65" y2="38"/><polygon points="58,35 65,38 58,31" fill="var(--text-muted)"/><circle cx="50" cy="20" r="18" stroke-dasharray="3,3"/></svg>`, // BJT Transistor
  7: `<svg viewBox="0 0 100 40"><line x1="20" y1="20" x2="40" y2="20"/><line x1="40" y1="10" x2="40" y2="30"/><line x1="45" y1="5" x2="45" y2="15"/><line x1="45" y1="15" x2="45" y2="25"/><line x1="45" y1="25" x2="45" y2="35"/><line x1="45" y1="8" x2="70" y2="8"/><line x1="45" y1="32" x2="70" y2="32"/><line x1="45" y1="20" x2="60" y2="20"/><line x1="60" y1="20" x2="60" y2="32"/><polygon points="50,20 45,23 45,17" fill="var(--text-muted)"/></svg>`, // MOSFET
  8: `<svg viewBox="0 0 100 40"><rect x="25" y="8" width="50" height="24" rx="3"/><line x1="35" y1="8" x2="35" y2="2"/><line x1="50" y1="8" x2="50" y2="2"/><line x1="65" y1="8" x2="65" y2="2"/><line x1="35" y1="32" x2="35" y2="38"/><line x1="50" y1="32" x2="50" y2="38"/><line x1="65" y1="32" x2="65" y2="38"/><circle cx="30" cy="13" r="1.5" fill="var(--text-muted)"/></svg>`, // IC
  9: `<svg viewBox="0 0 100 40"><line x1="10" y1="20" x2="35" y2="20"/><line x1="35" y1="5" x2="35" y2="35" stroke-width="3"/><line x1="45" y1="12" x2="45" y2="28"/><line x1="55" y1="5" x2="55" y2="35" stroke-width="3"/><line x1="65" y1="12" x2="65" y2="28"/><line x1="65" y1="20" x2="90" y2="20"/></svg>`, // Battery
  10: `<svg viewBox="0 0 100 40"><line x1="10" y1="20" x2="35" y2="20"/><circle cx="35" cy="20" r="2.5"/><line x1="37.5" y1="20" x2="63" y2="8"/><circle cx="65" cy="20" r="2.5"/><line x1="67.5" y1="20" x2="90" y2="20"/></svg>`, // Switch
  11: `<svg viewBox="0 0 100 40"><line x1="10" y1="20" x2="90" y2="20"/><rect x="25" y="12" width="50" height="16" rx="2" fill="none"/><path d="M 25,20 Q 37.5,10 50,20 T 75,20" stroke-dasharray="2,2"/></svg>`, // Fuse
  12: `<svg viewBox="0 0 100 40"><path d="M 15,20 L 25,20 C 25,10 30,10 30,20 C 30,10 35,10 35,20 C 35,10 40,10 40,20 C 40,10 45,10 45,20 C 45,10 50,10 50,20 L 50,20"/><line x1="56" y1="5" x2="56" y2="35"/><line x1="60" y1="5" x2="60" y2="35"/><path d="M 85,20 L 75,20 C 75,10 70,10 70,20 C 70,10 65,10 65,20 C 65,10 60,10 60,20 C 60,10 55,10 55,20 C 55,10 50,10 50,20 L 50,20" transform="translate(135,20) scale(-1, 1)"/></svg>`, // Transformer
  13: `<svg viewBox="0 0 100 40"><rect x="15" y="10" width="20" height="20"/><line x1="5" y1="20" x2="15" y2="20"/><line x1="35" y1="20" x2="45" y2="20"/><line x1="15" y1="15" x2="35" y2="25"/><circle cx="55" cy="20" r="2"/><line x1="57" y1="20" x2="72" y2="8"/><circle cx="74" cy="20" r="2"/><line x1="76" y1="20" x2="95" y2="20"/></svg>`, // Relay
  14: `<svg viewBox="0 0 100 40"><line x1="10" y1="20" x2="30" y2="20"/><rect x="30" y="12" width="40" height="16" rx="2"/><line x1="70" y1="20" x2="90" y2="20"/><line x1="50" y1="2" x2="50" y2="12"/><polygon points="46,2 54,2 50,10" fill="var(--text-muted)"/></svg>`, // Potentiometer
  15: `<svg viewBox="0 0 100 40"><line x1="10" y1="20" x2="40" y2="20"/><line x1="40" y1="8" x2="40" y2="32"/><rect x="45" y="10" width="10" height="20" rx="1"/><line x1="60" y1="8" x2="60" y2="32"/><line x1="60" y1="20" x2="90" y2="20"/></svg>`, // Crystal Oscillator
  16: `<svg viewBox="0 0 100 40"><line x1="10" y1="10" x2="30" y2="10"/><line x1="10" y1="30" x2="30" y2="30"/><polygon points="30,5 30,35 65,20"/><line x1="65" y1="20" x2="90" y2="20"/><text x="32" y="14" fill="var(--text-muted)" font-size="8">-</text><text x="32" y="32" fill="var(--text-muted)" font-size="8">+</text></svg>`, // Op-Amp
  17: `<svg viewBox="0 0 100 40"><rect x="30" y="8" width="40" height="24" rx="2"/><line x1="15" y1="20" x2="30" y2="20"/><line x1="70" y1="20" x2="85" y2="20"/><line x1="50" y1="32" x2="50" y2="38"/><text x="32" y="18" fill="var(--text-muted)" font-size="6">IN</text><text x="60" y="18" fill="var(--text-muted)" font-size="6">OUT</text><text x="44" y="29" fill="var(--text-muted)" font-size="6">GND</text></svg>`, // Voltage Regulator
  18: `<svg viewBox="0 0 100 40"><rect x="30" y="5" width="40" height="30" rx="3"/><line x1="25" y1="10" x2="30" y2="10"/><line x1="25" y1="17" x2="30" y2="17"/><line x1="25" y1="24" x2="30" y2="24"/><line x1="25" y1="31" x2="30" y2="31"/><line x1="70" y1="10" x2="75" y2="10"/><line x1="70" y1="17" x2="75" y2="17"/><line x1="70" y1="24" x2="75" y2="24"/><line x1="70" y1="31" x2="75" y2="31"/><text x="38" y="24" fill="var(--color-primary)" font-size="10" font-family="var(--font-heading)" font-weight="700">MCU</text></svg>`, // Microcontroller
  19: `<svg viewBox="0 0 100 40"><rect x="25" y="12" width="15" height="16"/><polygon points="40,12 40,28 65,36 65,4"/><line x1="10" y1="20" x2="25" y2="20"/><line x1="65" y1="20" x2="90" y2="20"/></svg>`, // Speaker
  20: `<svg viewBox="0 0 100 40"><line x1="50" y1="28" x2="50" y2="38"/><line x1="40" y1="38" x2="60" y2="38"/><rect x="42" y="4" width="16" height="24" rx="8"/><circle cx="50" cy="12" r="3" fill="var(--text-muted)"/><path d="M 36,12 A 14,14 0 0,0 64,12"/></svg>`, // Microphone
  21: `<svg viewBox="0 0 100 40"><path d="M 30,12 L 70,12 L 70,22 L 30,22 Z"/><path d="M 35,22 L 35,32 L 65,32 L 65,22"/><circle cx="50" cy="17" r="2" fill="var(--text-muted)"/></svg>`, // Buzzer
  22: `<svg viewBox="0 0 100 40"><circle cx="50" cy="20" r="16" fill="none"/><rect x="38" y="13" width="24" height="14" rx="1"/><path d="M 38,16 L 62,24 M 38,24 L 62,16" stroke-dasharray="2,2"/><line x1="15" y1="20" x2="34" y2="20"/><line x1="66" y1="20" x2="85" y2="20"/><line x1="30" y1="5" x2="42" y2="12"/><line x1="38" y1="3" x2="50" y2="10"/><polygon points="41,12 37,12 41,8" fill="var(--text-muted)"/></svg>`, // Photoresistor
  23: `<svg viewBox="0 0 100 40"><rect x="30" y="12" width="40" height="16" rx="2"/><line x1="10" y1="20" x2="30" y2="20"/><line x1="70" y1="20" x2="90" y2="20"/><line x1="26" y1="34" x2="74" y2="6"/><line x1="26" y1="34" x2="36" y2="34"/></svg>`, // Thermistor
  24: `<svg viewBox="0 0 100 40"><line x1="10" y1="20" x2="40" y2="20"/><polygon points="40,10 40,30 60,20"/><line x1="60" y1="20" x2="90" y2="20"/><path d="M 57,8 L 60,10 L 60,30 L 63,32"/></svg>`, // Zener Diode
  25: `<svg viewBox="0 0 100 40"><polygon points="50,4 66,20 50,36 34,20" fill="none"/><line x1="15" y1="20" x2="34" y2="20"/><line x1="66" y1="20" x2="85" y2="20"/><line x1="50" y1="2" x2="50" y2="4"/><line x1="50" y1="36" x2="50" y2="38"/><polygon points="46,16 46,24 54,20" fill="var(--text-muted)" transform="rotate(45, 50, 20)"/></svg>`, // Bridge Rectifier
  26: `<svg viewBox="0 0 100 40"><line x1="50" y1="20" x2="50" y2="38"/><line x1="30" y1="8" x2="50" y2="20"/><line x1="70" y1="8" x2="50" y2="20"/><line x1="30" y1="8" x2="70" y2="8"/></svg>`, // Antenna
  27: `<svg viewBox="0 0 100 40"><rect x="25" y="10" width="20" height="20" rx="2"/><line x1="10" y1="20" x2="25" y2="20"/><rect x="55" y="12" width="20" height="16" rx="2"/><line x1="75" y1="20" x2="90" y2="20"/><line x1="45" y1="16" x2="55" y2="16"/><line x1="45" y1="24" x2="55" y2="24"/></svg>`, // Jack
  28: `<svg viewBox="0 0 100 40"><line x1="10" y1="25" x2="35" y2="25"/><circle cx="35" cy="25" r="2.5"/><circle cx="65" cy="25" r="2.5"/><line x1="65" y1="25" x2="90" y2="25"/><line x1="32" y1="15" x2="68" y2="15"/><line x1="50" y1="5" x2="50" y2="15"/></svg>`, // Push Button
  29: `<svg viewBox="0 0 100 40"><line x1="10" y1="20" x2="40" y2="20"/><polygon points="40,10 40,30 60,20"/><line x1="60" y1="10" x2="60" y2="30"/><line x1="60" y1="20" x2="90" y2="20"/><line x1="50" y1="20" x2="35" y2="32"/></svg>`, // Thyristor
  30: `<svg viewBox="0 0 100 40"><rect x="20" y="8" width="60" height="24" rx="2"/><circle cx="50" cy="20" r="8" fill="var(--color-primary-glow)" stroke="var(--color-primary)"/><line x1="10" y1="20" x2="20" y2="20"/><line x1="80" y1="20" x2="90" y2="20"/><text x="25" y="24" font-size="5" fill="var(--text-muted)">PIR</text></svg>`, // Sensor Module
};

// State Variables
let currentTab = 'dashboard';
let activeComponentFilter = 'all';
let activeBoardFilter = 'all';
let activeArticleFilter = 'all';
let activeArticleId = null;
let searchQuery = '';

// DOM Elements
const sidebarLinks = document.querySelectorAll('.nav-links .nav-item');
const panels = document.querySelectorAll('.section-panel');
const componentsGrid = document.getElementById('components-grid');
const boardsGrid = document.getElementById('boards-grid');
const articlesGrid = document.getElementById('articles-grid');
const articleReader = document.getElementById('article-reader');
const globalSearch = document.getElementById('global-search');
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebarEl = document.getElementById('app-sidebar');

// Modal Elements
const detailModal = document.getElementById('detail-modal');
const modalItemName = document.getElementById('modal-item-name');
const modalItemCat = document.getElementById('modal-item-cat');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalSymbolContainer = document.getElementById('modal-symbol-container');
const modalSecImportance = document.getElementById('modal-sec-importance');
const modalImportance = document.getElementById('modal-importance');
const modalSecUses = document.getElementById('modal-sec-uses');
const modalUses = document.getElementById('modal-uses');
const modalSecSymbol = document.getElementById('modal-sec-symbol');
const modalSymbolDesc = document.getElementById('modal-symbol-desc');
const modalSecProsCons = document.getElementById('modal-sec-proscons');
const modalAdvantages = document.getElementById('modal-advantages');
const modalDisdisadvantages = document.getElementById('modal-disadvantages');
const modalSecCreative = document.getElementById('modal-sec-creative');
const modalCreativeIdea = document.getElementById('modal-creative-idea');
const modalSecUK = document.getElementById('modal-sec-uk');
const modalUKInfo = document.getElementById('modal-uk-info');
const modalSecArticle = document.getElementById('modal-sec-article');
const modalArticleContent = document.getElementById('modal-article-content');

// Interactive Lab State & Variables
let activeLab = 'ohms-law';
const canvas = document.getElementById('lab-canvas');
const ctx = canvas.getContext('2d');
let animationFrameId = null;
let animTime = 0;

// Ohm's Law state
let ohmsV = 9.0;
let ohmsR = 300;
let ohmsI = 0.03; // V/R (Amps)

// PN Junction state
let pnHoles = [];
let pnElectrons = [];
let pnRecombinationEffects = [];
let pnBiasMode = 'none'; // 'none', 'forward', 'reverse'

// Capacitor state
let capChargeState = 'charge'; // 'charge', 'discharge'
let capR = 100000; // 100k
let capC = 0.00005; // 50uF
let capVoltage = 0.0;
let capChargeHistory = [];
let capStartTime = Date.now();
const capMaxVoltage = 9.0;

// Logic Gate state
let logicGateType = 'AND';
let logicInputA = 0;
let logicInputB = 0;
let logicOutput = 0;

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Setup tab click events
  sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-target');
      switchTab(target);
      
      // Close sidebar on mobile
      if (window.innerWidth <= 768) {
        sidebarEl.classList.remove('active');
      }
    });
  });

  // Setup dashboard quick links
  document.getElementById('feat-components').addEventListener('click', () => switchTab('components'));
  document.getElementById('feat-microboards').addEventListener('click', () => switchTab('microboards'));
  document.getElementById('feat-lab').addEventListener('click', () => switchTab('lab'));
  document.getElementById('start-lab-btn').addEventListener('click', () => switchTab('lab'));

  // Mobile Menu Toggle
  sidebarToggle.addEventListener('click', () => {
    sidebarEl.classList.toggle('active');
  });

  // Setup Component Filters
  const compFilterButtons = document.querySelectorAll('#components-filter-group .filter-btn');
  compFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      compFilterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeComponentFilter = btn.getAttribute('data-filter');
      renderComponents();
    });
  });

  // Setup Board Filters
  const boardFilterButtons = document.querySelectorAll('#boards-filter-group .filter-btn');
  boardFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      boardFilterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeBoardFilter = btn.getAttribute('data-filter');
      renderBoards();
    });
  });

  // Search Logic
  globalSearch.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    
    // Auto-navigate away from dashboard if searching
    if (currentTab === 'dashboard' && searchQuery !== '') {
      switchTab('components');
    }

    renderComponents();
    renderBoards();
  });

  // Modal closing events
  modalCloseBtn.addEventListener('click', closeModal);
  detailModal.addEventListener('click', (e) => {
    if (e.target === detailModal) closeModal();
  });

  // Lab Nav Click Events
  const labNavItems = document.querySelectorAll('.lab-nav-item');
  labNavItems.forEach(item => {
    item.addEventListener('click', () => {
      labNavItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      activeLab = item.getAttribute('data-target') || item.getAttribute('data-lab');
      loadLabControls();
      initActiveLab();
    });
  });

  // Window Resize
  window.addEventListener('resize', resizeCanvas);
  
  // Render lists initially
  renderComponents();
  renderBoards();

  // Setup statistics count dynamically
  document.getElementById('stat-comp-count').innerText = electronicComponents.length;
  document.getElementById('stat-board-count').innerText = microboardsData.length;

  // Initialize Lab Room
  loadLabControls();
  initActiveLab();

  // Setup Article Filters
  const articleFilterButtons = document.querySelectorAll('#articles-filter-group .filter-btn');
  articleFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      articleFilterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeArticleFilter = btn.getAttribute('data-afilter');
      renderArticles();
    });
  });

  // Render articles initially
  if (gurukulamArticles.length > 0) {
    activeArticleId = gurukulamArticles[0].id;
  }
  renderArticles();
});

// Tab Switcher
function switchTab(tabId) {
  currentTab = tabId;
  
  // Update sidebar active status
  sidebarLinks.forEach(link => {
    if (link.getAttribute('data-target') === tabId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Switch display panel
  panels.forEach(panel => {
    if (panel.id === tabId) {
      panel.classList.add('active');
    } else {
      panel.classList.remove('active');
    }
  });

  // Clear search header prompt on manual tab change if empty
  if (searchQuery === '') {
    globalSearch.value = '';
  }

  // Trigger lab resize/anim loop if switching to lab tab
  if (tabId === 'lab') {
    setTimeout(() => {
      resizeCanvas();
      initActiveLab();
    }, 50);
  } else {
    // Stop animation when leaving lab to conserve CPU
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  }
}

// Render components in catalog grid
function renderComponents() {
  componentsGrid.innerHTML = '';
  
  const filtered = electronicComponents.filter(comp => {
    const matchesFilter = activeComponentFilter === 'all' || comp.category === activeComponentFilter;
    const matchesSearch = comp.name.toLowerCase().includes(searchQuery) ||
                          comp.importance.toLowerCase().includes(searchQuery) ||
                          comp.uses.toLowerCase().includes(searchQuery) ||
                          comp.creative_idea.toLowerCase().includes(searchQuery);
                          
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    componentsGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">No components found matching your search.</div>`;
    return;
  }

  filtered.forEach(comp => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.id = `comp-card-${comp.id}`;
    
    card.innerHTML = `
      <div class="card-top">
        <span class="item-num">#${comp.id}</span>
        <span class="item-category">${comp.category}</span>
      </div>
      <div class="symbol-preview">
        ${circuitSymbols[comp.id] || '<i data-lucide="help-circle"></i>'}
      </div>
      <h3>${comp.name}</h3>
      <p class="card-desc">${comp.importance}</p>
      <div class="card-footer-info">
        <span>Click for details</span>
        <i data-lucide="arrow-up-right" style="width: 16px; height: 16px;"></i>
      </div>
    `;

    card.addEventListener('click', () => showComponentDetails(comp));
    componentsGrid.appendChild(card);
  });

  if (typeof lucide !== 'undefined') {
    lucide.createIcons({ attrs: { class: 'lucide' } });
  }
}

// Render Microboards in catalog grid
function renderBoards() {
  boardsGrid.innerHTML = '';

  const filtered = microboardsData.filter(board => {
    let matchesFilter = true;
    if (activeBoardFilter === 'MCU') {
      matchesFilter = board.category.includes('MCU') || board.category.includes('Microcontroller');
    } else if (activeBoardFilter === 'SBC') {
      matchesFilter = board.category.includes('SBC') || board.category.includes('Single-Board');
    } else if (activeBoardFilter === 'wireless') {
      matchesFilter = board.has_wireless === 'yes';
    }

    const matchesSearch = board.name.toLowerCase().includes(searchQuery) ||
                          board.subtitle.toLowerCase().includes(searchQuery) ||
                          board.overview.toLowerCase().includes(searchQuery) ||
                          board.uses.toLowerCase().includes(searchQuery);

    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    boardsGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">No microboards found matching your search.</div>`;
    return;
  }

  filtered.forEach(board => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.id = `board-card-${board.id}`;

    const catClass = board.category.includes('SBC') ? 'sbc' : 'mcu';
    
    card.innerHTML = `
      <div class="card-top">
        <span class="item-num">#${board.id}</span>
        <div>
          <span class="item-category ${catClass}">${board.category.includes('SBC') ? 'SBC' : 'MCU'}</span>
          ${board.has_wireless === 'yes' ? '<span class="item-category wireless">WiFi/BLE</span>' : ''}
        </div>
      </div>
      <div style="height: 60px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; color: var(--color-primary); font-size: 2.2rem;">
        <i data-lucide="${board.category.includes('SBC') ? 'hard-drive' : 'cpu'}" style="width: 48px; height: 48px; filter: drop-shadow(0 0 8px var(--color-primary-glow));"></i>
      </div>
      <h3>${board.name}</h3>
      <p style="color: var(--color-secondary); font-size: 0.85rem; font-weight: 500; margin-bottom: 0.5rem; line-height: 1.3;">${board.subtitle}</p>
      <p class="card-desc">${board.overview}</p>
      <div class="card-footer-info">
        <span class="price-tag">${board.uk_info.split(';').pop().trim().replace(/typically\s*/i, '').replace(/from\s*around\s*/i, '').replace(/sold\s*by.*from\s*/i, '')}</span>
        <i data-lucide="arrow-up-right" style="width: 16px; height: 16px;"></i>
      </div>
    `;

    card.addEventListener('click', () => showBoardDetails(board));
    boardsGrid.appendChild(card);
  });

  if (typeof lucide !== 'undefined') {
    lucide.createIcons({ attrs: { class: 'lucide' } });
  }
}

// Show Component details in Modal
function showComponentDetails(comp) {
  modalSymbolContainer.style.display = 'flex';
  modalSecSymbol.style.display = 'block';
  modalSecProsCons.style.display = 'none';
  modalSecUK.style.display = 'none';
  modalSecArticle.style.display = 'none';
  
  modalItemName.innerText = comp.name;
  modalItemCat.innerText = comp.category + ' Component';
  
  modalSymbolContainer.innerHTML = circuitSymbols[comp.id] || '';
  modalSymbolDesc.innerText = comp.symbol;
  
  modalImportance.innerText = comp.importance;
  modalUses.innerText = comp.uses;
  modalCreativeIdea.innerText = comp.creative_idea;
  
  openModal();
}

// Show Board details in Modal
function showBoardDetails(board) {
  modalSymbolContainer.style.display = 'none';
  modalSecSymbol.style.display = 'none';
  modalSecProsCons.style.display = 'block';
  modalSecUK.style.display = 'block';
  modalSecArticle.style.display = 'none';
  
  modalItemName.innerText = board.name;
  modalItemCat.innerText = board.category;
  
  modalImportance.innerText = board.overview;
  modalUses.innerText = board.uses;
  
  modalAdvantages.innerHTML = '';
  board.advantages.forEach(adv => {
    const li = document.createElement('li');
    li.innerText = adv;
    modalAdvantages.appendChild(li);
  });
  
  modalDisdisadvantages.innerHTML = '';
  board.disadvantages.forEach(dis => {
    const li = document.createElement('li');
    li.innerText = dis;
    modalDisdisadvantages.appendChild(li);
  });
  
  modalCreativeIdea.innerText = `Used extensively in modern maker projects. Suitable for embedding in custom builds.`;
  modalUKInfo.innerText = board.uk_info;
  
  openModal();
}

// Open / Close Modal helper functions
function openModal() {
  detailModal.classList.add('active');
  document.body.style.overflow = 'hidden';
  if (typeof lucide !== 'undefined') {
    lucide.createIcons({ attrs: { class: 'lucide' } });
  }
}

function closeModal() {
  detailModal.classList.remove('active');
  document.body.style.overflow = '';
}


// ==========================================
// INTERACTIVE LAB ANIMATION SYSTEMS
// ==========================================

function resizeCanvas() {
  const container = canvas.parentElement;
  if (container) {
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight || 450;
  }
}

function loadLabControls() {
  const controlsPane = document.getElementById('lab-controls');
  const labTitle = document.getElementById('lab-title');
  const labDesc = document.getElementById('lab-description');
  
  if (activeLab === 'ohms-law') {
    labTitle.innerText = "Ohm's Law Flow Animator";
    labDesc.innerText = "Adjust voltage and resistance using the sliders below to observe how the flow rate of electrons changes in a circuit and affects bulb brightness.";
    
    controlsPane.innerHTML = `
      <h4 style="font-family: var(--font-heading); color: white; margin-bottom: 1rem;">Ohm's Law Parameters</h4>
      <div class="lab-control-group">
        <label>Voltage (V): <span class="val-display" id="ohms-v-val">${ohmsV.toFixed(1)}V</span></label>
        <input type="range" class="lab-slider" id="ohms-v-slider" min="1" max="15" step="0.5" value="${ohmsV}">
      </div>
      <div class="lab-control-group" style="margin-top: 1rem;">
        <label>Resistance (R): <span class="val-display" id="ohms-r-val">${ohmsR} Ω</span></label>
        <input type="range" class="lab-slider" id="ohms-r-slider" min="50" max="1000" step="10" value="${ohmsR}">
      </div>
      <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(0,0,0,0.2); border-radius: 8px; border: 1px solid var(--border-color); font-size: 0.85rem;">
        <p style="color: var(--text-muted);">Current: <span id="ohms-i-val" style="color: var(--color-success); font-weight: 700; font-family: monospace; font-size: 1rem;">${(ohmsI*1000).toFixed(1)} mA</span></p>
        <p style="margin-top: 0.25rem; font-style: italic; color: var(--text-muted);">Formula: I = V / R</p>
      </div>
    `;

    // Sliders input events
    document.getElementById('ohms-v-slider').addEventListener('input', (e) => {
      ohmsV = parseFloat(e.target.value);
      document.getElementById('ohms-v-val').innerText = ohmsV.toFixed(1) + 'V';
      recalculateOhmsCurrent();
    });

    document.getElementById('ohms-r-slider').addEventListener('input', (e) => {
      ohmsR = parseInt(e.target.value);
      document.getElementById('ohms-r-val').innerText = ohmsR + ' Ω';
      recalculateOhmsCurrent();
    });
    
    recalculateOhmsCurrent();
  } 
  else if (activeLab === 'pn-junction') {
    labTitle.innerText = "PN Junction Physics Animator";
    labDesc.innerText = "Toggle the bias modes to observe carrier dynamics (holes and electrons) at the junction boundary. Watch depletion region changes and recombination energy releases.";
    
    controlsPane.innerHTML = `
      <h4 style="font-family: var(--font-heading); color: white; margin-bottom: 1rem;">Junction Bias Controls</h4>
      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        <button class="lab-btn ${pnBiasMode === 'none' ? 'active' : ''}" id="bias-btn-none">No Bias (Equilibrium)</button>
        <button class="lab-btn ${pnBiasMode === 'forward' ? 'active' : ''}" id="bias-btn-forward" style="border-color: var(--color-success);">Forward Bias</button>
        <button class="lab-btn ${pnBiasMode === 'reverse' ? 'active' : ''}" id="bias-btn-reverse" style="border-color: var(--color-danger);">Reverse Bias</button>
      </div>
      <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(0,0,0,0.2); border-radius: 8px; border: 1px solid var(--border-color); font-size: 0.85rem;">
        <p id="bias-status-text" style="line-height:1.4; color: var(--text-muted);"></p>
      </div>
    `;

    const setBias = (mode) => {
      pnBiasMode = mode;
      document.querySelectorAll('.lab-btn').forEach(btn => btn.classList.remove('active'));
      document.getElementById(`bias-btn-${mode}`).classList.add('active');
      
      const txt = document.getElementById('bias-status-text');
      if (mode === 'none') {
        txt.innerHTML = `<b style="color:white;">Equilibrium</b>: A potential barrier (depletion region) is formed in the center. Flow is balanced.`;
      } else if (mode === 'forward') {
        txt.innerHTML = `<b style="color:var(--color-success);">Forward Bias</b>: External field opposes barrier. Depletion region shrinks. Holes and electrons cross the junction, creating high current. Recombinations release energy.`;
      } else {
        txt.innerHTML = `<b style="color:var(--color-danger);">Reverse Bias</b>: External field widens the depletion region. Holes and electrons are pulled away. Only tiny leakage current flows.`;
      }
    };
    
    document.getElementById('bias-btn-none').addEventListener('click', () => setBias('none'));
    document.getElementById('bias-btn-forward').addEventListener('click', () => setBias('forward'));
    document.getElementById('bias-btn-reverse').addEventListener('click', () => setBias('reverse'));
    
    setBias(pnBiasMode);
  }
  else if (activeLab === 'capacitor') {
    labTitle.innerText = "RC Capacitor Timing Lab";
    labDesc.innerText = "Switch between Charge and Discharge. Adjust R and C to observe the time constant curve. The moving blue trail graphs the current capacitor voltage.";
    
    controlsPane.innerHTML = `
      <h4 style="font-family: var(--font-heading); color: white; margin-bottom: 1rem;">Capacitor Parameters</h4>
      <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
        <button class="lab-btn flex-grow ${capChargeState === 'charge' ? 'active' : ''}" id="cap-btn-charge" style="flex:1;">Charge</button>
        <button class="lab-btn flex-grow ${capChargeState === 'discharge' ? 'active' : ''}" id="cap-btn-discharge" style="flex:1;">Discharge</button>
      </div>
      <div class="lab-control-group">
        <label>Resistance (R): <span class="val-display" id="cap-r-val">${(capR/1000)} kΩ</span></label>
        <input type="range" class="lab-slider" id="cap-r-slider" min="10000" max="200000" step="10000" value="${capR}">
      </div>
      <div class="lab-control-group" style="margin-top: 1rem;">
        <label>Capacitance (C): <span class="val-display" id="cap-c-val">${(capC*1000000).toFixed(0)} μF</span></label>
        <input type="range" class="lab-slider" id="cap-c-slider" min="0.00001" max="0.0001" step="0.00001" value="${capC}">
      </div>
      <button class="lab-btn primary" id="cap-btn-reset" style="margin-top: 1rem; width:100%;">
        <i data-lucide="refresh-cw" style="width:16px; height:16px;"></i> Reset Timer
      </button>
      <div style="margin-top: 1.2rem; padding: 1rem; background: rgba(0,0,0,0.2); border-radius: 8px; border: 1px solid var(--border-color); font-size: 0.85rem;">
        <p style="color: var(--text-muted);">Time Constant (<span style="font-family:serif;">&tau;</span>): <span id="cap-tau-val" style="color: var(--color-accent); font-weight:700;">${(capR * capC).toFixed(2)} s</span></p>
        <p style="margin-top:0.25rem; color: var(--text-muted);">VCap: <span id="cap-v-val" style="color: var(--color-secondary); font-weight:700;">${capVoltage.toFixed(2)} V</span></p>
      </div>
    `;

    document.getElementById('cap-btn-charge').addEventListener('click', () => {
      capChargeState = 'charge';
      document.getElementById('cap-btn-charge').classList.add('active');
      document.getElementById('cap-btn-discharge').classList.remove('active');
      capStartTime = Date.now();
    });

    document.getElementById('cap-btn-discharge').addEventListener('click', () => {
      capChargeState = 'discharge';
      document.getElementById('cap-btn-discharge').classList.add('active');
      document.getElementById('cap-btn-charge').classList.remove('active');
      capStartTime = Date.now();
    });

    document.getElementById('cap-r-slider').addEventListener('input', (e) => {
      capR = parseInt(e.target.value);
      document.getElementById('cap-r-val').innerText = (capR/1000) + ' kΩ';
      updateCapParams();
    });

    document.getElementById('cap-c-slider').addEventListener('input', (e) => {
      capC = parseFloat(e.target.value);
      document.getElementById('cap-c-val').innerText = (capC*1000000).toFixed(0) + ' μF';
      updateCapParams();
    });

    document.getElementById('cap-btn-reset').addEventListener('click', () => {
      capStartTime = Date.now();
      capChargeHistory = [];
      capVoltage = capChargeState === 'charge' ? 0.0 : capMaxVoltage;
    });

    if (typeof lucide !== 'undefined') {
      lucide.createIcons({ attrs: { class: 'lucide' } });
    }
  }
  else if (activeLab === 'logic-gates') {
    labTitle.innerText = "Interactive Logic Gates Room";
    labDesc.innerText = "Toggle Inputs A and B to run logic gates. Track the output LED and see the highlighted row on the truth table.";

    controlsPane.innerHTML = `
      <h4 style="font-family: var(--font-heading); color: white; margin-bottom: 0.75rem;">Gate Selection</h4>
      <div class="logic-gates-grid">
        <button class="filter-btn active" id="lg-btn-AND">AND</button>
        <button class="filter-btn" id="lg-btn-OR">OR</button>
        <button class="filter-btn" id="lg-btn-NOT">NOT</button>
        <button class="filter-btn" id="lg-btn-NAND">NAND</button>
        <button class="filter-btn" id="lg-btn-NOR">NOR</button>
        <button class="filter-btn" id="lg-btn-XOR">XOR</button>
      </div>
      
      <h4 style="font-family: var(--font-heading); color: white; margin-top: 1.5rem; margin-bottom: 0.75rem;">Inputs Toggle</h4>
      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        <button class="lab-btn" id="lg-in-A">Input A: <span style="font-weight:700; color:var(--color-primary);" id="lg-in-A-val">LOW (0)</span></button>
        <button class="lab-btn" id="lg-in-B">Input B: <span style="font-weight:700; color:var(--color-primary);" id="lg-in-B-val">LOW (0)</span></button>
      </div>
    `;

    const gatesList = ['AND', 'OR', 'NOT', 'NAND', 'NOR', 'XOR'];
    gatesList.forEach(g => {
      document.getElementById(`lg-btn-${g}`).addEventListener('click', () => {
        gatesList.forEach(other => document.getElementById(`lg-btn-${other}`).classList.remove('active'));
        document.getElementById(`lg-btn-${g}`).classList.add('active');
        logicGateType = g;
        
        // Hide switch B for NOT gate
        const bBtn = document.getElementById('lg-in-B');
        if (g === 'NOT') {
          bBtn.style.opacity = '0.3';
          bBtn.disabled = true;
          logicInputB = 0;
        } else {
          bBtn.style.opacity = '1';
          bBtn.disabled = false;
        }
        recalculateLogicOutput();
      });
    });

    document.getElementById('lg-in-A').addEventListener('click', () => {
      logicInputA = logicInputA === 1 ? 0 : 1;
      document.getElementById('lg-in-A-val').innerText = logicInputA === 1 ? 'HIGH (1)' : 'LOW (0)';
      document.getElementById('lg-in-A-val').style.color = logicInputA === 1 ? 'var(--color-secondary)' : 'var(--color-primary)';
      recalculateLogicOutput();
    });

    document.getElementById('lg-in-B').addEventListener('click', () => {
      logicInputB = logicInputB === 1 ? 0 : 1;
      document.getElementById('lg-in-B-val').innerText = logicInputB === 1 ? 'HIGH (1)' : 'LOW (0)';
      document.getElementById('lg-in-B-val').style.color = logicInputB === 1 ? 'var(--color-secondary)' : 'var(--color-primary)';
      recalculateLogicOutput();
    });

    // Initial state setup
    document.getElementById(`lg-btn-${logicGateType}`).classList.add('active');
    recalculateLogicOutput();
  }
}

function updateCapParams() {
  const tau = capR * capC;
  document.getElementById('cap-tau-val').innerText = tau.toFixed(2) + ' s';
}

function recalculateOhmsCurrent() {
  ohmsI = ohmsV / ohmsR;
  document.getElementById('ohms-i-val').innerText = (ohmsI * 1000).toFixed(1) + ' mA';
}

function recalculateLogicOutput() {
  if (logicGateType === 'AND') {
    logicOutput = (logicInputA === 1 && logicInputB === 1) ? 1 : 0;
  } else if (logicGateType === 'OR') {
    logicOutput = (logicInputA === 1 || logicInputB === 1) ? 1 : 0;
  } else if (logicGateType === 'NOT') {
    logicOutput = (logicInputA === 0) ? 1 : 0;
  } else if (logicGateType === 'NAND') {
    logicOutput = !(logicInputA === 1 && logicInputB === 1) ? 1 : 0;
  } else if (logicGateType === 'NOR') {
    logicOutput = !(logicInputA === 1 || logicInputB === 1) ? 1 : 0;
  } else if (logicGateType === 'XOR') {
    logicOutput = (logicInputA !== logicInputB) ? 1 : 0;
  }
}

// Visualizer Initialization & Loops
function initActiveLab() {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
  
  // Reset lab-specific parameters
  if (activeLab === 'pn-junction') {
    pnHoles = [];
    pnElectrons = [];
    pnRecombinationEffects = [];
    
    // Seed charges
    for (let i = 0; i < 24; i++) {
      pnHoles.push({
        x: Math.random() * (canvas.width * 0.4) + 20,
        y: Math.random() * (canvas.height - 80) + 40,
        vx: 0,
        vy: (Math.random() - 0.5) * 0.4
      });
      pnElectrons.push({
        x: Math.random() * (canvas.width * 0.4) + (canvas.width * 0.5 + 20),
        y: Math.random() * (canvas.height - 80) + 40,
        vx: 0,
        vy: (Math.random() - 0.5) * 0.4
      });
    }
  } else if (activeLab === 'capacitor') {
    capStartTime = Date.now();
    capChargeHistory = [];
    capVoltage = capChargeState === 'charge' ? 0.0 : capMaxVoltage;
  }
  
  animTime = 0;
  runLabLoop();
}

function runLabLoop() {
  animTime += 1;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  if (activeLab === 'ohms-law') {
    drawOhmsLawLab();
  } else if (activeLab === 'pn-junction') {
    drawPnJunctionLab();
  } else if (activeLab === 'capacitor') {
    drawCapacitorLab();
  } else if (activeLab === 'logic-gates') {
    drawLogicGatesLab();
  }
  
  animationFrameId = requestAnimationFrame(runLabLoop);
}

// Ohm's Law Canvas Drawing
function drawOhmsLawLab() {
  const w = canvas.width;
  const h = canvas.height;
  
  // Coordinates for component positions
  const left = w * 0.25;
  const right = w * 0.75;
  const top = h * 0.25;
  const bottom = h * 0.75;
  
  // 1. Draw Wires (Circuit loop)
  ctx.strokeStyle = 'rgba(255,255,255,0.08)';
  ctx.lineWidth = 6;
  ctx.strokeRect(left, top, right - left, bottom - top);
  
  // Flow current glow wire path
  ctx.strokeStyle = `rgba(20, 184, 166, ${Math.min(0.2 + ohmsI * 5, 0.8)})`;
  ctx.lineWidth = 2;
  ctx.strokeRect(left, top, right - left, bottom - top);
  
  // 2. Draw Battery on Left
  const batX = left;
  const batY = h * 0.5;
  ctx.save();
  ctx.translate(batX, batY);
  
  // Clear wire behind battery
  ctx.fillStyle = '#0b0f19';
  ctx.fillRect(-15, -25, 30, 50);
  
  // Draw plates
  ctx.strokeStyle = '#a855f7';
  ctx.lineWidth = 4;
  ctx.beginPath();
  // Pos plate
  ctx.moveTo(-10, -20); ctx.lineTo(-10, 20);
  // Neg plate
  ctx.moveTo(0, -10); ctx.lineTo(0, 10);
  // Pos plate
  ctx.moveTo(10, -20); ctx.lineTo(10, 20);
  ctx.stroke();
  
  ctx.fillStyle = 'white';
  ctx.font = '10px sans-serif';
  ctx.fillText('+', -22, -10);
  ctx.fillText('-', -20, 15);
  ctx.restore();
  
  // 3. Draw Resistor at Bottom
  const resX = w * 0.5;
  const resY = bottom;
  ctx.save();
  ctx.translate(resX, resY);
  ctx.fillStyle = '#0b0f19';
  ctx.fillRect(-35, -12, 70, 24);
  
  ctx.strokeStyle = '#9ca3af';
  ctx.lineWidth = 3;
  ctx.strokeRect(-25, -10, 50, 20);
  
  // Color bands representing 300 ohms
  ctx.fillStyle = '#f97316'; // Orange
  ctx.fillRect(-15, -10, 5, 20);
  ctx.fillStyle = '#111827'; // Black
  ctx.fillRect(-5, -10, 5, 20);
  ctx.fillStyle = '#78350f'; // Brown
  ctx.fillRect(5, -10, 5, 20);
  ctx.restore();
  
  // 4. Draw Bulb on Right
  const bulbX = right;
  const bulbY = h * 0.5;
  ctx.save();
  ctx.translate(bulbX, bulbY);
  ctx.fillStyle = '#0b0f19';
  ctx.fillRect(-20, -25, 40, 50);
  
  // Bulb Glow base
  const power = ohmsV * ohmsI;
  const glowRadius = 15 + power * 35;
  if (glowRadius > 15) {
    const gradient = ctx.createRadialGradient(0, -5, 5, 0, -5, glowRadius);
    gradient.addColorStop(0, 'rgba(245, 158, 11, 0.6)');
    gradient.addColorStop(0.3, 'rgba(245, 158, 11, 0.25)');
    gradient.addColorStop(1, 'rgba(245, 158, 11, 0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(0, -5, glowRadius, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Glass outline
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(0, -5, 15, Math.PI * 0.75, Math.PI * 2.25);
  ctx.stroke();
  
  // Metal base
  ctx.fillStyle = '#4b5563';
  ctx.fillRect(-8, 10, 16, 10);
  
  // Filament
  ctx.strokeStyle = glowRadius > 15 ? '#fbbf24' : '#9ca3af';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(-7, 8);
  ctx.lineTo(-3, -2);
  ctx.lineTo(3, -2);
  ctx.lineTo(7, 8);
  ctx.stroke();
  ctx.restore();
  
  // 5. Draw Animated Electrons
  const perimeter = 2 * (right - left) + 2 * (bottom - top);
  const flowSpeed = ohmsI * 8;
  const electronSpacing = 35;
  const numElectrons = Math.floor(perimeter / electronSpacing);
  
  for (let i = 0; i < numElectrons; i++) {
    const dist = (i * electronSpacing + animTime * flowSpeed) % perimeter;
    let x, y;
    
    if (dist < (right - left)) {
      x = left + dist;
      y = top;
    } else if (dist < (right - left) + (bottom - top)) {
      x = right;
      y = top + (dist - (right - left));
    } else if (dist < 2 * (right - left) + (bottom - top)) {
      x = right - (dist - (right - left) - (bottom - top));
      y = bottom;
    } else {
      x = left;
      y = bottom - (dist - 2 * (right - left) - (bottom - top));
    }
    
    ctx.fillStyle = '#06b6d4';
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.shadowColor = '#06b6d4';
    ctx.shadowBlur = 5;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath();
    ctx.arc(x, y, 1.5, 0, Math.PI*2);
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  // Draw Legend Overlay on Canvas
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.font = '12px var(--font-body)';
  ctx.fillText(`Voltage: ${ohmsV.toFixed(1)} V`, left + 20, top + 30);
  ctx.fillText(`Resistance: ${ohmsR} Ω`, left + 20, top + 50);
  ctx.fillText(`Current: ${(ohmsI * 1000).toFixed(1)} mA`, left + 20, top + 70);
  ctx.fillText(`Power Dissipated: ${(ohmsV * ohmsI).toFixed(2)} W`, left + 20, top + 90);
}

// PN Junction Physics Canvas Drawing
function drawPnJunctionLab() {
  const w = canvas.width;
  const h = canvas.height;
  
  const midX = w * 0.5;
  const rectW = w * 0.7;
  const rectH = h * 0.6;
  const rectX = (w - rectW) * 0.5;
  const rectY = (h - rectH) * 0.5;
  
  ctx.fillStyle = 'rgba(124, 58, 237, 0.15)';
  ctx.fillRect(rectX, rectY, rectW * 0.5, rectH);
  
  ctx.fillStyle = 'rgba(249, 115, 22, 0.15)';
  ctx.fillRect(midX, rectY, rectW * 0.5, rectH);
  
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
  ctx.lineWidth = 3;
  ctx.strokeRect(rectX, rectY, rectW, rectH);
  
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
  ctx.lineWidth = 1;
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.moveTo(midX, rectY);
  ctx.lineTo(midX, rectY + rectH);
  ctx.stroke();
  ctx.setLineDash([]);
  
  let depletionWidth = 50;
  if (pnBiasMode === 'forward') {
    depletionWidth = 10;
  } else if (pnBiasMode === 'reverse') {
    depletionWidth = 110;
  }
  
  ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
  ctx.fillRect(midX - depletionWidth, rectY, depletionWidth * 2, rectH);
  
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(midX - depletionWidth, rectY);
  ctx.lineTo(midX - depletionWidth, rectY + rectH);
  ctx.moveTo(midX + depletionWidth, rectY);
  ctx.lineTo(midX + depletionWidth, rectY + rectH);
  ctx.stroke();

  ctx.fillStyle = 'rgba(239, 68, 68, 0.4)';
  const rowCount = 4;
  const colCount = Math.max(1, Math.floor(depletionWidth / 25));
  
  for (let r = 1; r <= rowCount; r++) {
    const y = rectY + (rectH / (rowCount + 1)) * r;
    for (let c = 0; c < colCount; c++) {
      const x = midX - depletionWidth + (depletionWidth / colCount) * (c + 0.5);
      ctx.beginPath();
      ctx.arc(x, y, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'white';
      ctx.font = 'bold 8px sans-serif';
      ctx.fillText('-', x - 2, y + 3);
      ctx.fillStyle = 'rgba(239, 68, 68, 0.4)';
    }
  }
  
  ctx.fillStyle = 'rgba(16, 185, 129, 0.4)';
  for (let r = 1; r <= rowCount; r++) {
    const y = rectY + (rectH / (rowCount + 1)) * r;
    for (let c = 0; c < colCount; c++) {
      const x = midX + depletionWidth - (depletionWidth / colCount) * (c + 0.5);
      ctx.beginPath();
      ctx.arc(x, y, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'white';
      ctx.font = 'bold 7px sans-serif';
      ctx.fillText('+', x - 3, y + 2.5);
      ctx.fillStyle = 'rgba(16, 185, 129, 0.4)';
    }
  }

  const speedScale = pnBiasMode === 'forward' ? 1.5 : (pnBiasMode === 'reverse' ? 0.1 : 0.4);
  
  pnHoles.forEach(hole => {
    let biasForce = 0;
    if (pnBiasMode === 'forward') {
      biasForce = 0.5;
    } else if (pnBiasMode === 'reverse') {
      biasForce = -0.6;
    }
    
    hole.vx = biasForce * speedScale + (Math.random() - 0.5) * 0.2;
    hole.x += hole.vx;
    hole.y += hole.vy;
    
    const minHoleX = rectX + 15;
    const maxHoleX = midX - depletionWidth;
    
    if (pnBiasMode === 'forward') {
      if (hole.x > midX) {
        pnRecombinationEffects.push({ x: hole.x, y: hole.y, r: 2, alpha: 1.0 });
        hole.x = rectX + 15;
        hole.y = Math.random() * (rectH - 40) + rectY + 20;
      }
    } else {
      if (hole.x < minHoleX) {
        hole.x = minHoleX;
        hole.vx = -hole.vx;
      }
      if (hole.x > maxHoleX) {
        hole.x = maxHoleX;
        hole.vx = -hole.vx;
      }
    }
    
    if (hole.y < rectY + 15 || hole.y > rectY + rectH - 15) {
      hole.vy = -hole.vy;
    }
    
    ctx.fillStyle = '#a855f7';
    ctx.beginPath();
    ctx.arc(hole.x, hole.y, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'white';
    ctx.font = 'bold 8px sans-serif';
    ctx.fillText('+', hole.x - 3, hole.y + 3);
  });
  
  pnElectrons.forEach(electron => {
    let biasForce = 0;
    if (pnBiasMode === 'forward') {
      biasForce = -0.5;
    } else if (pnBiasMode === 'reverse') {
      biasForce = 0.6;
    }
    
    electron.vx = biasForce * speedScale + (Math.random() - 0.5) * 0.2;
    electron.x += electron.vx;
    electron.y += electron.vy;
    
    const minElecX = midX + depletionWidth;
    const maxElecX = rectX + rectW - 15;
    
    if (pnBiasMode === 'forward') {
      if (electron.x < midX) {
        electron.x = rectX + rectW - 15;
        electron.y = Math.random() * (rectH - 40) + rectY + 20;
      }
    } else {
      if (electron.x < minElecX) {
        electron.x = minElecX;
        electron.vx = -electron.vx;
      }
      if (electron.x > maxElecX) {
        electron.x = maxElecX;
        electron.vx = -electron.vx;
      }
    }
    
    if (electron.y < rectY + 15 || electron.y > rectY + rectH - 15) {
      electron.vy = -electron.vy;
    }
    
    ctx.fillStyle = '#f97316';
    ctx.beginPath();
    ctx.arc(electron.x, electron.y, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'white';
    ctx.font = 'bold 10px sans-serif';
    ctx.fillText('-', electron.x - 3, electron.y + 3.5);
  });
  
  pnRecombinationEffects = pnRecombinationEffects.filter(fx => {
    ctx.strokeStyle = `rgba(253, 224, 71, ${fx.alpha})`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(fx.x, fx.y, fx.r, 0, Math.PI * 2);
    ctx.stroke();
    
    fx.r += 0.8;
    fx.alpha -= 0.05;
    return fx.alpha > 0;
  });

  ctx.fillStyle = 'white';
  ctx.font = 'bold 14px var(--font-heading)';
  ctx.fillText('P-TYPE MATERIAL', rectX + 15, rectY - 10);
  ctx.fillText('N-TYPE MATERIAL', rectX + rectW - 150, rectY - 10);
  
  ctx.fillStyle = 'var(--text-muted)';
  ctx.font = '11px var(--font-body)';
  ctx.fillText('Holes (+) = Mobile Carriers', rectX + 15, rectY + rectH + 20);
  ctx.fillText('Electrons (-) = Mobile Carriers', rectX + rectW - 190, rectY + rectH + 20);
  
  ctx.fillStyle = 'var(--color-primary)';
  ctx.fillText('Depletion Region', midX - 45, rectY + rectH + 20);
}

// RC Capacitor Timing Canvas Drawing
function drawCapacitorLab() {
  const w = canvas.width;
  const h = canvas.height;
  
  const cX = w * 0.25;
  const cY = h * 0.55;
  const cW = w * 0.35;
  const cH = h * 0.5;
  
  const gX = w * 0.52;
  const gY = h * 0.22;
  const gW = w * 0.42;
  const gH = h * 0.6;
  
  const tau = capR * capC;
  const elapsedSec = (Date.now() - capStartTime) / 1000.0;
  
  if (capChargeState === 'charge') {
    capVoltage = capMaxVoltage * (1 - Math.exp(-elapsedSec / tau));
  } else {
    capVoltage = capMaxVoltage * Math.exp(-elapsedSec / tau);
  }
  
  if (capVoltage < 0.01) capVoltage = 0;
  if (capVoltage > capMaxVoltage - 0.01) capVoltage = capMaxVoltage;
  
  const vDisplay = document.getElementById('cap-v-val');
  if (vDisplay) vDisplay.innerText = capVoltage.toFixed(2) + ' V';
  
  if (capChargeHistory.length === 0 || elapsedSec > capChargeHistory[capChargeHistory.length-1].t) {
    capChargeHistory.push({ t: elapsedSec, v: capVoltage });
  }
  
  if (capChargeHistory.length > 300) capChargeHistory.shift();
  
  ctx.strokeStyle = 'rgba(255,255,255,0.08)';
  ctx.lineWidth = 5;
  ctx.strokeRect(cX - cW/2, cY - cH/2, cW, cH);
  
  ctx.fillStyle = '#0b0f19';
  ctx.fillRect(cX - 25, cY - cH/2 - 10, 50, 20);
  ctx.fillRect(cX + cW/2 - 10, cY - 20, 20, 40);
  ctx.fillRect(cX - cW/2 - 10, cY - 20, 20, 40);
  
  ctx.strokeStyle = '#9ca3af';
  ctx.lineWidth = 2.5;
  ctx.strokeRect(cX - 20, cY - cH/2 - 8, 40, 16);
  ctx.fillStyle = 'rgba(255,255,255,0.1)';
  ctx.fillRect(cX - 20, cY - cH/2 - 8, 40, 16);
  
  const capPlateY1 = cY - 15;
  const capPlateY2 = cY + 15;
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(cX + cW/2 - 15, capPlateY1);
  ctx.lineTo(cX + cW/2 + 15, capPlateY1);
  ctx.moveTo(cX + cW/2 - 15, capPlateY2);
  ctx.lineTo(cX + cW/2 + 15, capPlateY2);
  ctx.stroke();
  
  const chargeRatio = capVoltage / capMaxVoltage;
  ctx.fillStyle = `rgba(239, 68, 68, ${chargeRatio})`;
  ctx.fillRect(cX + cW/2 - 15, capPlateY1 - 8, 30, 6);
  ctx.fillStyle = `rgba(59, 130, 246, ${chargeRatio})`;
  ctx.fillRect(cX + cW/2 - 15, capPlateY2 + 2, 30, 6);

  ctx.save();
  ctx.translate(cX - cW/2, cY);
  ctx.strokeStyle = '#a855f7';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(-10, -15); ctx.lineTo(-10, 15);
  ctx.moveTo(10, -15); ctx.lineTo(10, 15);
  ctx.stroke();
  ctx.restore();
  
  const flowSpeed = (capChargeState === 'charge' ? (capMaxVoltage - capVoltage) : -capVoltage) / capMaxVoltage * 5;
  if (Math.abs(flowSpeed) > 0.05) {
    const perimeter = 2 * cW + 2 * cH;
    const numElectrons = 16;
    for (let i = 0; i < numElectrons; i++) {
      const dist = (i * (perimeter / numElectrons) + animTime * flowSpeed) % perimeter;
      let x, y;
      const left = cX - cW/2;
      const right = cX + cW/2;
      const top = cY - cH/2;
      const bottom = cY + cH/2;
      
      if (dist < cW) {
        x = left + dist;
        y = top;
      } else if (dist < cW + cH) {
        x = right;
        y = top + (dist - cW);
      } else if (dist < 2 * cW + cH) {
        x = right - (dist - cW - cH);
        y = bottom;
      } else {
        x = left;
        y = bottom - (dist - 2 * cW - cH);
      }
      
      ctx.fillStyle = '#14b8a6';
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
  ctx.fillRect(gX, gY, gW, gH);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
  ctx.lineWidth = 1;
  for (let step = 0.2; step < 1; step += 0.2) {
    ctx.beginPath();
    ctx.moveTo(gX, gY + gH * step);
    ctx.lineTo(gX + gW, gY + gH * step);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(gX + gW * step, gY);
    ctx.lineTo(gX + gW * step, gY + gH);
    ctx.stroke();
  }
  
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
  ctx.lineWidth = 2;
  ctx.strokeRect(gX, gY, gW, gH);
  
  if (capChargeHistory.length > 1) {
    ctx.strokeStyle = '#14b8a6';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    const maxT = Math.max(5.0, elapsedSec);
    
    capChargeHistory.forEach((sample, index) => {
      const px = gX + (sample.t / maxT) * gW;
      const py = gY + gH - (sample.v / capMaxVoltage) * gH;
      
      if (index === 0) {
        ctx.moveTo(px, py);
      } else {
        ctx.lineTo(px, py);
      }
    });
    ctx.stroke();
  }
  
  ctx.fillStyle = 'white';
  ctx.font = '10px var(--font-body)';
  ctx.fillText('Voltage (V)', gX + 5, gY - 5);
  ctx.fillText('Time (t)', gX + gW - 40, gY + gH + 15);
  
  const pyCurrent = gY + gH - (capVoltage / capMaxVoltage) * gH;
  ctx.strokeStyle = 'rgba(245, 158, 11, 0.6)';
  ctx.lineWidth = 1;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.moveTo(gX, pyCurrent);
  ctx.lineTo(gX + gW, pyCurrent);
  ctx.stroke();
  ctx.setLineDash([]);
  
  ctx.fillStyle = 'var(--color-accent)';
  ctx.fillText(`${capVoltage.toFixed(2)}V`, gX + gW + 5, pyCurrent + 3);
}

// Logic Gates Canvas Drawing
function drawLogicGatesLab() {
  const w = canvas.width;
  const h = canvas.height;
  
  const midX = w * 0.45;
  const midY = h * 0.5;
  
  const inX = w * 0.15;
  const inY1 = h * 0.3;
  const inY2 = h * 0.7;
  
  ctx.fillStyle = logicInputA === 1 ? 'var(--color-secondary-glow)' : 'rgba(255,255,255,0.02)';
  ctx.strokeStyle = logicInputA === 1 ? 'var(--color-secondary)' : 'rgba(255,255,255,0.1)';
  ctx.lineWidth = 2;
  ctx.strokeRect(inX - 25, inY1 - 20, 50, 40);
  ctx.fillRect(inX - 25, inY1 - 20, 50, 40);
  
  ctx.fillStyle = 'white';
  ctx.font = 'bold 16px var(--font-heading)';
  ctx.textAlign = 'center';
  ctx.fillText(logicInputA, inX, inY1 + 6);
  ctx.fillStyle = 'var(--text-muted)';
  ctx.font = '10px var(--font-body)';
  ctx.fillText('Input A', inX - 20, inY1 - 25);
  
  if (logicGateType !== 'NOT') {
    ctx.fillStyle = logicInputB === 1 ? 'var(--color-secondary-glow)' : 'rgba(255,255,255,0.02)';
    ctx.strokeStyle = logicInputB === 1 ? 'var(--color-secondary)' : 'rgba(255,255,255,0.1)';
    ctx.lineWidth = 2;
    ctx.strokeRect(inX - 25, inY2 - 20, 50, 40);
    ctx.fillRect(inX - 25, inY2 - 20, 50, 40);
    
    ctx.fillStyle = 'white';
    ctx.font = 'bold 16px var(--font-heading)';
    ctx.fillText(logicInputB, inX, inY2 + 6);
    ctx.fillStyle = 'var(--text-muted)';
    ctx.font = '10px var(--font-body)';
    ctx.fillText('Input B', inX - 20, inY2 - 25);
  }

  ctx.lineWidth = 4;
  
  ctx.strokeStyle = logicInputA === 1 ? 'var(--color-secondary)' : '#374151';
  ctx.beginPath();
  if (logicGateType === 'NOT') {
    ctx.moveTo(inX + 25, inY1);
    ctx.lineTo(midX - 35, midY);
  } else {
    ctx.moveTo(inX + 25, inY1);
    ctx.lineTo(midX - 35, inY1);
    ctx.lineTo(midX - 35, midY - 15);
  }
  ctx.stroke();
  
  if (logicGateType !== 'NOT') {
    ctx.strokeStyle = logicInputB === 1 ? 'var(--color-secondary)' : '#374151';
    ctx.beginPath();
    ctx.moveTo(inX + 25, inY2);
    ctx.lineTo(midX - 35, inY2);
    ctx.lineTo(midX - 35, midY + 15);
    ctx.stroke();
  }
  
  ctx.save();
  ctx.translate(midX, midY);
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 3;
  ctx.fillStyle = 'rgba(255,255,255,0.03)';
  
  if (logicGateType === 'AND') {
    ctx.beginPath();
    ctx.moveTo(-30, -25);
    ctx.lineTo(-10, -25);
    ctx.arc(0, 0, 25, -Math.PI/2, Math.PI/2);
    ctx.lineTo(-30, 25);
    ctx.closePath();
    ctx.stroke(); ctx.fill();
  } 
  else if (logicGateType === 'NAND') {
    ctx.beginPath();
    ctx.moveTo(-30, -25);
    ctx.lineTo(-10, -25);
    ctx.arc(0, 0, 25, -Math.PI/2, Math.PI/2);
    ctx.lineTo(-30, 25);
    ctx.closePath();
    ctx.stroke(); ctx.fill();
    ctx.beginPath();
    ctx.arc(28, 0, 4, 0, Math.PI*2);
    ctx.fillStyle = '#0b0f19';
    ctx.fill();
    ctx.stroke();
  }
  else if (logicGateType === 'OR') {
    ctx.beginPath();
    ctx.moveTo(-30, -25);
    ctx.quadraticCurveTo(-15, 0, -30, 25);
    ctx.quadraticCurveTo(0, 25, 25, 0);
    ctx.quadraticCurveTo(0, -25, -30, -25);
    ctx.stroke(); ctx.fill();
  }
  else if (logicGateType === 'NOR') {
    ctx.beginPath();
    ctx.moveTo(-30, -25);
    ctx.quadraticCurveTo(-15, 0, -30, 25);
    ctx.quadraticCurveTo(0, 25, 25, 0);
    ctx.quadraticCurveTo(0, -25, -30, -25);
    ctx.stroke(); ctx.fill();
    ctx.beginPath();
    ctx.arc(28, 0, 4, 0, Math.PI*2);
    ctx.fillStyle = '#0b0f19';
    ctx.fill();
    ctx.stroke();
  }
  else if (logicGateType === 'NOT') {
    ctx.beginPath();
    ctx.moveTo(-25, -20);
    ctx.lineTo(15, 0);
    ctx.lineTo(-25, 20);
    ctx.closePath();
    ctx.stroke(); ctx.fill();
    ctx.beginPath();
    ctx.arc(19, 0, 4, 0, Math.PI*2);
    ctx.fillStyle = '#0b0f19';
    ctx.fill();
    ctx.stroke();
  }
  else if (logicGateType === 'XOR') {
    ctx.beginPath();
    ctx.moveTo(-35, -25);
    ctx.quadraticCurveTo(-20, 0, -35, 25);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-30, -25);
    ctx.quadraticCurveTo(-15, 0, -30, 25);
    ctx.quadraticCurveTo(0, 25, 25, 0);
    ctx.quadraticCurveTo(0, -25, -30, -25);
    ctx.stroke(); ctx.fill();
  }
  
  ctx.fillStyle = 'var(--text-muted)';
  ctx.font = 'bold 11px var(--font-heading)';
  ctx.textAlign = 'center';
  ctx.fillText(logicGateType, -8, 4);
  ctx.restore();

  const outBubbleOffset = (logicGateType === 'NOT') ? 23 : ((logicGateType === 'NAND' || logicGateType === 'NOR') ? 32 : 25);
  ctx.strokeStyle = logicOutput === 1 ? 'var(--color-primary)' : '#374151';
  ctx.beginPath();
  ctx.moveTo(midX + outBubbleOffset, midY);
  ctx.lineTo(w * 0.75 - 25, midY);
  ctx.stroke();
  
  const ledX = w * 0.75;
  ctx.save();
  ctx.translate(ledX, midY);
  
  if (logicOutput === 1) {
    const gradient = ctx.createRadialGradient(0, 0, 5, 0, 0, 30);
    gradient.addColorStop(0, 'rgba(168, 85, 247, 0.7)');
    gradient.addColorStop(1, 'rgba(168, 85, 247, 0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(0, 0, 30, 0, Math.PI*2);
    ctx.fill();
  }
  
  ctx.strokeStyle = logicOutput === 1 ? 'var(--color-primary)' : 'rgba(255,255,255,0.15)';
  ctx.fillStyle = logicOutput === 1 ? 'var(--color-primary)' : 'rgba(255,255,255,0.03)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(0, 0, 15, 0, Math.PI*2);
  ctx.stroke(); ctx.fill();
  
  ctx.fillStyle = 'white';
  ctx.font = 'bold 14px var(--font-heading)';
  ctx.textAlign = 'center';
  ctx.fillText(logicOutput, 0, 5);
  ctx.fillStyle = 'var(--text-muted)';
  ctx.font = '10px var(--font-body)';
  ctx.fillText('Output Y', 0, -22);
  ctx.restore();

  const tX = w * 0.82;
  const tY = h * 0.18;
  const tW = w * 0.15;
  const tH = h * 0.65;
  
  ctx.fillStyle = 'rgba(255,255,255,0.02)';
  ctx.fillRect(tX, tY, tW, tH);
  ctx.strokeStyle = 'rgba(255,255,255,0.08)';
  ctx.strokeRect(tX, tY, tW, tH);
  
  ctx.fillStyle = 'rgba(255,255,255,0.05)';
  ctx.fillRect(tX, tY, tW, 25);
  ctx.fillStyle = 'white';
  ctx.font = 'bold 10px var(--font-heading)';
  ctx.textAlign = 'center';
  ctx.fillText('A', tX + tW * 0.2, tY + 16);
  if (logicGateType !== 'NOT') ctx.fillText('B', tX + tW * 0.5, tY + 16);
  ctx.fillText('Y', tX + tW * 0.8, tY + 16);
  
  const combos = logicGateType === 'NOT' ? [[0,0], [1,0]] : [[0,0], [0,1], [1,0], [1,1]];
  
  combos.forEach((combo, idx) => {
    const a = combo[0];
    const b = combo[1];
    let y = 0;
    
    if (logicGateType === 'AND') y = a & b;
    else if (logicGateType === 'OR') y = a | b;
    else if (logicGateType === 'NOT') y = !a ? 1 : 0;
    else if (logicGateType === 'NAND') y = !(a & b) ? 1 : 0;
    else if (logicGateType === 'NOR') y = !(a | b) ? 1 : 0;
    else if (logicGateType === 'XOR') y = (a !== b) ? 1 : 0;
    
    const rowY = tY + 25 + idx * 25;
    
    const isCurrent = (logicGateType === 'NOT') 
      ? (a === logicInputA) 
      : (a === logicInputA && b === logicInputB);
      
    if (isCurrent) {
      ctx.fillStyle = 'rgba(20, 184, 166, 0.2)';
      ctx.fillRect(tX, rowY, tW, 25);
      ctx.fillStyle = 'var(--color-secondary)';
    } else {
      ctx.fillStyle = 'rgba(255,255,255,0.7)';
    }
    
    ctx.font = isCurrent ? 'bold 10px monospace' : '10px monospace';
    ctx.fillText(a, tX + tW * 0.2, rowY + 16);
    if (logicGateType !== 'NOT') ctx.fillText(b, tX + tW * 0.5, rowY + 16);
    ctx.fillText(y, tX + tW * 0.8, rowY + 16);
    
    ctx.strokeStyle = 'rgba(255,255,255,0.05)';
    ctx.beginPath();
    ctx.moveTo(tX, rowY + 25);
    ctx.lineTo(tX + tW, rowY + 25);
    ctx.stroke();
  });
}

// ─── Articles Renderer ────────────────────────────────────────────────────────
function renderArticles() {
  if (!articlesGrid) return;

  const filtered = activeArticleFilter === 'all'
    ? gurukulamArticles
    : gurukulamArticles.filter(a => a.category === activeArticleFilter);

  if (filtered.length > 0) {
    const selectedArticle = filtered.find(article => article.id === activeArticleId) || filtered[0];
    if (selectedArticle && selectedArticle.id !== activeArticleId) {
      activeArticleId = selectedArticle.id;
    }
    renderArticleReader(selectedArticle);
  } else {
    renderArticleReader(null);
  }

  if (filtered.length === 0) {
    articlesGrid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:3rem;">
        <p style="color:var(--text-muted);font-size:1.1rem;">No articles found for this category.</p>
      </div>`;
    return;
  }

  articlesGrid.innerHTML = filtered.map(article => `
    <div class="item-card article-card ${article.id === activeArticleId ? 'is-selected' : ''}"
       role="button" tabindex="0"
       data-article-id="${article.id}"
       style="--art-color:${article.color}; --art-glow:${article.glow};"
       id="article-${article.id}" aria-pressed="${article.id === activeArticleId ? 'true' : 'false'}">
      <div class="card-top">
        <span class="item-num">#${article.id}</span>
        <span class="item-category">${article.category}</span>
      </div>
      <div class="article-hero-preview" aria-hidden="true">${article.emoji}</div>
      <h3>${article.title}</h3>
      <p class="card-desc">${article.summary}</p>
      <div class="article-tags">
        ${article.tags.map(t => `<span class="article-tag">${t}</span>`).join('')}
      </div>
      <div class="article-footer">
        <span class="article-footer-label">Open popup</span>
        ${article.youtubeUrl ? `
          <a class="article-youtube-link" href="${article.youtubeUrl}" target="_blank" rel="noreferrer noopener">
            <i data-lucide="youtube" style="width: 16px; height: 16px;"></i>
            <span>Watch on YouTube</span>
          </a>
        ` : ''}
      </div>
    </div>
  `).join('');
}

if (articlesGrid) {
  articlesGrid.addEventListener('click', (event) => {
    if (event.target.closest('.article-youtube-link')) return;

    const card = event.target.closest('.article-card');
    if (!card) return;

    const articleId = Number(card.getAttribute('data-article-id'));
    const article = gurukulamArticles.find(item => item.id === articleId);
    if (!article) return;

    activeArticleId = article.id;
    renderArticles();
    showArticleDetails(article);
  });

  articlesGrid.addEventListener('keydown', (event) => {
    if (event.target.closest('.article-youtube-link')) return;

    if (event.key !== 'Enter' && event.key !== ' ') return;

    const card = event.target.closest('.article-card');
    if (!card) return;

    event.preventDefault();

    const articleId = Number(card.getAttribute('data-article-id'));
    const article = gurukulamArticles.find(item => item.id === articleId);
    if (!article) return;

    activeArticleId = article.id;
    renderArticles();
    showArticleDetails(article);
  });
}

function escapeHtml(text) {
  return String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function showArticleDetails(article) {
  modalSymbolContainer.style.display = 'none';
  modalSecSymbol.style.display = 'none';
  modalSecProsCons.style.display = 'none';
  modalSecUK.style.display = 'none';
  modalSecCreative.style.display = 'none';
  modalSecImportance.style.display = 'none';
  modalSecUses.style.display = 'none';
  modalSecArticle.style.display = 'block';

  modalItemName.innerText = article.title;
  modalItemCat.innerText = article.category + ' Article';
  modalArticleContent.innerHTML = article.contentHtml || `<p>${escapeHtml(article.summary)}</p>`;

  openModal();
}

function renderArticleReader(article) {
  if (!articleReader) return;

  if (!article) {
    articleReader.innerHTML = `
      <div class="article-reader-empty">
        <h2>Select an article</h2>
        <p>Click any card below to read the article content here without leaving the site.</p>
      </div>`;
    return;
  }

  articleReader.innerHTML = `
    <article class="item-card article-reader-card" style="--art-color:${article.color}; --art-glow:${article.glow};">
      <div class="article-reader-header">
        <div>
          <p class="article-reader-kicker">Featured article</p>
          <h2>${article.title}</h2>
          <p class="article-reader-meta">${article.category} · Electronics Gurukulam</p>
        </div>
        <div class="article-reader-emoji" aria-hidden="true">${article.emoji}</div>
      </div>

      <p class="article-summary">${article.summary}</p>
      <div class="article-tags">
        ${article.tags.map(tag => `<span class="article-tag">${tag}</span>`).join('')}
      </div>
      <div class="card-footer-info">
        <span class="price-tag">Click a card to open popup</span>
        <i data-lucide="book-open" style="width: 16px; height: 16px;"></i>
      </div>
    </article>`;
}

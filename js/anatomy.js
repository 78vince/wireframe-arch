/* ==========================================================================
   WIREFRAME ARCHITECTURE — ANATOMY INSPECTOR & BILINGUAL ENGINE (EN / 中文)
   ========================================================================== */

(function () {
  // --------------------------------------------------------------------------
  // 1. BILINGUAL UI DICTIONARY (EN / ZH)
  // --------------------------------------------------------------------------
  const UI_I18N = {
    en: {
      'meta.brand': 'WIREFRAME ANATOMY',
      'meta.search': 'Search',
      'meta.hint': 'Hover to identify · Click to inspect · [X] X-Ray · [G] Grid',
      'meta.variantsOn': 'Variant Switchers: ON',
      'meta.variantsOff': 'Variant Switchers: OFF',
      'meta.gridOn': 'Grid: ON',
      'meta.gridOff': 'Grid: OFF',
      'meta.xrayOn': 'X-Ray: ON',
      'meta.xrayOff': 'X-Ray: OFF',
      'vp.desktop': 'Desktop',
      'vp.tablet': 'Tablet',
      'vp.mobile': 'Mobile',
      'announce.badge': 'NEW',
      'announce.text': 'Announcement Bar — Single-line utility notice placed above the Navbar.',
      'announce.link': 'Learn more →',
      'nav.landing': 'Landing',
      'nav.editorial': 'Editorial',
      'nav.dashboard': 'Dashboard',
      'nav.ecommerce': 'E-Commerce',
      'nav.auth': 'Auth & 404',
      'nav.tokens': 'Tokens',
      'nav.about': 'About',
      'nav.search': 'Search patterns...',
      'nav.signin': 'Sign In',
      'nav.cta': 'Get Started',
      'variant.navbar': 'Navbar Variant',
      'variant.nav.standard': 'Standard + Bar',
      'variant.nav.centered': 'Centered Brand',
      'variant.nav.search': 'With Search',
      'variant.nav.megamenu': 'Mega Menu',
      'mm.col1': 'Page Templates',
      'mm.col2': 'Layout Patterns',
      'mm.col3': 'UI & Forms',
      'variant.hero': 'Hero Variant',
      'variant.hero.split': 'Split Hero',
      'variant.hero.centered': 'Centered Banner',
      'variant.hero.immersive': 'Immersive Full-Bleed',
      'variant.features': 'Feature Layout Variant',
      'variant.feat.bento': 'Bento Grid',
      'variant.feat.zigzag': 'Alternating Zig-Zag',
      'variant.feat.cards': '3-Column Card Grid',
      'hero.split.eyebrow': 'EYEBROW · LAYOUT ANATOMY',
      'hero.split.h1': 'H1 Main Headline Framing the Core Value',
      'hero.split.lead': 'Lead / Subtitle copy sits directly beneath the H1 to clarify who the product serves and what outcome it delivers before asking for action.',
      'hero.split.caption': 'Caption / Meta — e.g. No credit card required · 14-day free trial',
      'hero.split.media': 'Hero Media Placeholder · 4:3',
      'hero.center.badge': 'RELEASE v2.0 · CENTERED HERO',
      'hero.center.h1': 'Centered Display Headline for Maximum Focus',
      'hero.center.lead': 'A symmetrical above-the-fold composition that funnels visitor attention straight from headline to CTA, anchored by a wide showcase frame below.',
      'hero.center.cta1': 'Start Free Trial',
      'hero.center.cta2': 'Watch Product Tour',
      'hero.center.media': 'Wide Product Canvas · 16:9',
      'hero.imm.bg': 'Full-Bleed Background Media · 100% Width',
      'hero.imm.eyebrow': 'IMMERSIVE FULL-BLEED HERO',
      'hero.imm.h1': 'Edge-to-Edge Visual Storytelling Stage',
      'hero.imm.lead': 'Full-bleed photography or ambient video spans 100% of the viewport width as a backdrop, with high-contrast scrim overlay keeping typography and CTAs crisp.',
      'hero.imm.cta1': 'Explore Collection',
      'hero.imm.cta2': 'Play Film',
      'hero.imm.caption': 'Full-bleed background scrim ensures WCAG contrast over imagery',
      'btn.primary': 'Primary CTA',
      'btn.secondary': 'Secondary CTA',
      'social.title': 'TRUSTED BY TEAMS AT LEADING ORGANIZATIONS',
      'feat.eyebrow': 'FEATURE ARCHITECTURE',
      'feat.h2': 'H2 Section Heading for Core Capabilities',
      'feat.lead': 'Switch between Bento Grid, Alternating Zig-Zag, and uniform Card Grid above to compare how the same feature hierarchy adapts across patterns.',
      'pricing.eyebrow': 'CONVERSION PATTERN',
      'pricing.h2': 'Pricing Table & Tier Comparison',
      'pricing.lead': 'Side-by-side plan cards with an interactive billing cadence switch and a highlighted recommended tier.',
      'pricing.monthly': 'Monthly',
      'pricing.annual': 'Annual (Save 20%)',
      'test.eyebrow': 'SOCIAL PROOF',
      'test.h2': 'Customer Testimonials',
      'faq.eyebrow': 'INTERACTIVE DISCLOSURE',
      'faq.h2': 'Frequently Asked Questions',
      'cta.badge': 'CLOSING CONVERSION BAND',
      'cta.h2': 'Ready to Align Your Team’s Web Vocabulary?',
      'cta.lead': 'Pair a strong closing headline with an inline Newsletter Form Group or direct CTA button pair.',
      'cta.email': 'Enter your work email...',
      'cta.submit': 'Subscribe',
      'cta.caption': 'Helper Text — Weekly architecture notes. Unsubscribe anytime.',
      'overlay.eyebrow': 'TRANSIENT UI OVERLAYS',
      'overlay.desc': 'Preview interactive wireframe layers that appear above the main document flow.',
      'overlay.modalBtn': 'Open Modal Dialog',
      'overlay.toastBtn': 'Trigger Toast Notification',
      'art.h1': 'Structuring Long-Form Editorial & Documentation Pages',
      'art.lead': 'Article Deck / Subtitle — Long-form reading layouts rely on clear heading levels, comfortable line measure, pull quotes, callouts, and a persistent Table of Contents.',
      'tok.eyebrow': 'DESIGN SYSTEM · css/tokens.css',
      'tok.h1': 'Lo-Fi Neutral Wireframe Tokens',
      'tok.lead': 'Every section and component across this site inherits from these monochrome neutral surfaces, crisp strokes, and single technical blue inspection accent.',
      'drawer.title': 'Component Inspector',
      'drawer.defLabel': 'Definition & Role',
      'drawer.tipsLabel': 'Usage Guidelines',
      'tabs.eyebrow': 'TABBED CONTENT',
      'tabs.h2': 'Interactive Tabs & View Switcher',
      'tabs.lead': 'Group closely related perspectives in a single compact footprint so visitors switch views without scrolling past redundant blocks.',
      'tabs.t1': '01. Layout Grid',
      'tabs.t2': '02. Design Tokens',
      'tabs.t3': '03. Handoff Specs',
      'tabs.p1.h3': '12-Column Responsive Grid System',
      'tabs.p1.body': 'Every section aligns to a shared container width and gutter scale, adapting predictably from desktop to tablet and mobile breakpoints.',
      'tabs.p2.h3': 'Tokenized Surfaces, Strokes & Type',
      'tabs.p2.body': 'Centralizing colors, borders, spacing, and typography as CSS custom properties lets teams reskin wireframes into high-fidelity UI rapidly.',
      'tabs.p3.h3': 'Shared Vocabulary for PM, Design & Dev',
      'tabs.p3.body': 'Standardized component naming eliminates ambiguity during wireframing, copywriting, and engineering implementation.',
      'variant.timeline': 'Timeline Variant',
      'variant.tl.stepper': 'Horizontal Stepper',
      'variant.tl.vertical': 'Vertical Timeline',
      'tl.eyebrow': 'SEQUENTIAL FLOW',
      'tl.h2': 'Process Stepper & Vertical Timeline',
      'tl.lead': 'Communicate onboarding workflows, step-by-step instructions, or chronological milestones in a clear sequence.',
      'tl.s1.h3': 'Define Tokens & Grid',
      'tl.s1.body': 'Establish neutral surfaces, stroke weights, typography scale, and container widths before laying out sections.',
      'tl.s2.h3': 'Assemble Layout Patterns',
      'tl.s2.body': 'Combine Hero, Bento, Tabs, Pricing, and Forms in realistic vertical rhythm to validate user flow.',
      'tl.s3.h3': 'Verify Responsive States',
      'tl.s3.body': 'Test breakpoints across desktop, tablet, and mobile to ensure navigation, tables, and forms adapt cleanly.',
      'matrix.h3': 'Feature Comparison Matrix',
      'matrix.caption': 'Scrolls horizontally on mobile viewports',
      'matrix.col.feature': 'Capability',
      'matrix.grp.core': 'Core Layout & Tokens',
      'matrix.grp.team': 'Governance & Security',
      'form.eyebrow': 'COMPLETE FORM CONTROLS',
      'form.h2': 'Structured Form & Input Anatomy',
      'form.lead': 'A complete wireframe form demonstrating text fields, dropdown selects, radio groups, checkboxes, toggle switches, textareas, and inline validation errors.',
      'form.tipTitle': 'FORM DESIGN NOTE',
      'form.tipBody': 'Always pair every input with a visible top-aligned label, clear placeholder text, and inline error feedback directly below invalid fields.',
      'form.nameLabel': 'Full Name *',
      'form.emailLabel': 'Work Email (Error State Demo) *',
      'form.emailErr': '✕ Please enter a valid email address.',
      'form.selectLabel': 'Primary Role (Select Dropdown)',
      'form.radioLabel': 'Project Scope (Radio Button Group)',
      'form.checkLabel': 'Included Deliverables (Checkbox Group)',
      'form.switchLabel': 'Enable X-Ray Annotations by Default (Toggle Switch)',
      'form.switchHint': 'Binary on/off preference switch for immediate state changes',
      'form.textareaLabel': 'Project Notes (Textarea)',
      'form.reset': 'Reset',
      'form.submit': 'Submit Form',
      'variant.gallery': 'Gallery Variant',
      'variant.gal.carousel': 'Carousel / Slider',
      'variant.gal.masonry': 'Masonry Grid',
      'variant.gal.marquee': 'Infinite Marquee',
      'gal.eyebrow': 'SHOWCASE & GALLERY PATTERNS',
      'gal.h2': 'Carousel, Masonry Grid & Marquee',
      'gal.lead': 'Compare horizontal slide navigation, staggered uneven-height masonry columns, and continuous looping marquee motion.',
      'states.eyebrow': 'SYSTEM FEEDBACK & STATES',
      'states.h2': 'Alert Banners, Skeleton Loader & Empty State',
      'states.lead': 'Production interfaces also communicate system status, asynchronous loading, and zero-data states clearly.',
      'empty.h3': 'No Projects Created Yet',
      'empty.body': 'Empty States guide first-time users or cleared search results toward a clear next action.',
      'empty.cta': '+ Create First Wireframe',
      'overlay.drawerBtn': 'Open Slide-over Drawer',
      'dash.side.workspace': 'Workspace',
      'dash.side.system': 'System',
      'dash.eyebrow': 'SAAS APP SHELL · DASHBOARD',
      'dash.h1': 'Workspace Overview',
      'dash.chartTitle': 'Weekly Activity Chart',
      'dash.progTitle': 'Milestone Progress',
      'drawer.copy': 'Copy Spec to Clipboard',
      'drawer.copied': '✓ Copied to Clipboard',
      'pdp.title': 'Architectural Task Lamp 01',
      'pdp.desc': 'A classic e-commerce Product Detail Page (PDP) Buy Box pairing pricing, variant swatches, quantity stepper, and immediate purchase actions above the fold.',
      'pdp.colorLabel': 'Finish / Color Swatch:',
      'pdp.sizeLabel': 'Size / Edition',
      'pdp.atc': 'Add to Cart — $148',
      'pdp.atcShort': 'Add to Cart',
      'pdp.reviewsH2': 'Customer Ratings & Reviews',
      'pdp.relatedH2': 'Related Products Shelf',
      'auth.eyebrow': 'AUTHENTICATION & ONBOARDING',
      'auth.h1': 'Split-Screen Auth & Verification Patterns',
      'auth.lead': 'Standard account flows pairing social sign-in, password strength validation, and 6-digit OTP verification boxes.',
      'auth.cardTitle': 'Create Your Workspace Account',
      'auth.cardSub': 'Try typing a password or 6-digit code below.',
      'auth.pwdLabel': 'Password (Strength Meter)',
      'auth.otpLabel': '6-Digit OTP Verification Code',
      'auth.submit': 'Create Account',
      'err.h2': 'Page Not Found',
      'err.lead': 'A helpful 404 Error Page explains what happened in plain language and gives visitors an immediate recovery path back to working routes.',
      'err.home': '← Back to Homepage',
      'err.search': 'Search Patterns (⌘K)',
      'drawer.share': 'Copy Shareable Link',
      'drawer.shared': '✓ Link Copied',
      'cmd.placeholder': 'Search 70+ patterns in English or 中文 (e.g. Masonry, 瀑布流, Buy Box, OTP)...',
      'cmd.cat.all': 'All',
      'cmd.cat.nav': 'Navigation',
      'cmd.cat.layout': 'Layouts & Hero',
      'cmd.cat.type': 'Typography',
      'cmd.cat.form': 'Forms & Auth',
      'cmd.cat.ecom': 'E-Commerce',
      'cmd.cat.data': 'Dashboard & States',
      'about.eyebrow': 'WHY WE BUILT THIS · DEVELOPMENT LOG',
      'about.h1': 'Development Log',
      'about.lead': 'Born out of real client website projects that required heavy cross-functional alignment—we built this interactive lo-fi web architecture catalog so clients, PMs, designers, and engineers can speak the exact same visual vocabulary.',
      'about.authorBadge': 'AUTHOR',
      'about.authorName': 'VK (Author)',
      'about.authorBio': 'Web designer & builder behind this catalog. After countless client kickoff calls and cross-team reviews, I created this hands-on wireframe guide to eliminate terminology friction.',
      'about.authorHint': 'Provide your title, bio, or links anytime to customize this card.',
      'about.giftBadge': 'XIAOLI SITE',
      'about.giftTitle': 'About XiaoLi Website (小禮)',
      'about.giftDesc': 'Explore 小禮 — our companion brand & project space sharing work logs, design experiments, and digital creations.',
      'about.giftCta': 'Visit 小禮網站 →',
      'about.logEyebrow': 'ORIGIN & MILESTONES · CROSS-TEAM COMMUNICATION',
      'about.logH2': 'Why & How This Web Architecture Catalog Was Built',
      'log.v1.h3': 'Why Start with Lo-Fi Design Tokens?',
      'log.v1.body': 'During client website projects, brand colors and imagery often distracted from layout structure. We started with monochrome tokens (css/tokens.css) and a single technical blue accent (#2563EB) so every stakeholder could focus purely on hierarchy and spacing.',
      'log.v2.h3': 'Browsing Like a Real Website Instead of Static Diagrams',
      'log.v2.body': 'Static screenshots never convey real scrolling rhythm in cross-team reviews. We built realistic Landing and Editorial pages with inline variant switchers (Hero, Navbar, Bento / Zig-Zag / Cards), Hover labels, X-Ray mode ([X]), and a Click Inspector.',
      'log.v3.h3': 'Bilingual Vocabulary & Multi-Device Reality',
      'log.v3.body': 'Because client meetings constantly mix English industry terms with Chinese discussions—and most end-users browse on mobile—we added live EN / 中文 switching, a true 100% full-bleed Hero, and Desktop / Tablet / Mobile live preview.',
      'log.v4.h3': 'Covering Every Scenario Modern Client Sites Need',
      'log.v4.body': 'We expanded beyond landing pages to include Tabs, Stepper/Timeline, Comparison Matrix, full Forms, Mega Menu, Carousel, 9:16 Vertical Masonry, Marquee, UI States, Dashboard App Shell, and an E-Commerce Product Detail Page.',
      'log.v5.h3': 'Turning It Into a Daily Communication Toolkit',
      'log.v5.body': 'Finally, we added the 12/8/4-column Grid Overlay ([G]), Inspector HTML tags + live pixel sizes + Copy Spec, Deep-Link URL sharing, ⌘K bilingual search with auto-jump, Auth & 404 pages, and our custom WF favicon.'
    },
    zh: {
      'meta.brand': '網頁架構解剖',
      'meta.search': '快搜',
      'meta.hint': '懸停辨識 · 點擊詳解 · [X] X-Ray · [G] 12 欄格線',
      'meta.variantsOn': '版型變體切換：開',
      'meta.variantsOff': '版型變體切換：關',
      'meta.gridOn': '格線：開',
      'meta.gridOff': '格線：關',
      'meta.xrayOn': 'X-Ray 標註：開',
      'meta.xrayOff': 'X-Ray 標註：關',
      'vp.desktop': '桌機',
      'vp.tablet': '平板',
      'vp.mobile': '手機',
      'announce.badge': '最新',
      'announce.text': 'Announcement Bar（頂部公告條）— 位於導覽列上方的單行通知橫幅。',
      'announce.link': '了解更多 →',
      'nav.landing': '首頁',
      'nav.editorial': '文章頁',
      'nav.dashboard': '儀表板',
      'nav.ecommerce': '電商頁',
      'nav.auth': '登入／404',
      'nav.tokens': 'Tokens',
      'nav.about': '關於',
      'nav.search': '搜尋版型名稱...',
      'nav.signin': '登入',
      'nav.cta': '立即開始',
      'variant.navbar': '導覽列變體',
      'variant.nav.standard': '標準列＋公告條',
      'variant.nav.centered': '置中品牌標誌',
      'variant.nav.search': '含搜尋欄位',
      'variant.nav.megamenu': 'Mega Menu 大選單',
      'mm.col1': '情境頁面範本',
      'mm.col2': '核心版型樣式',
      'mm.col3': '介面元件與表單',
      'variant.hero': '首屏 Hero 變體',
      'variant.hero.split': '左右分割首屏',
      'variant.hero.centered': '置中大橫幅',
      'variant.hero.immersive': '沉浸式滿版',
      'variant.features': '特色區塊變體',
      'variant.feat.bento': 'Bento 便當盒網格',
      'variant.feat.zigzag': '圖文交錯 Zig-Zag',
      'variant.feat.cards': '三欄卡片網格',
      'hero.split.eyebrow': 'EYEBROW · 眉標與版型解剖',
      'hero.split.h1': 'H1 主標題：一眼傳達核心價值主張',
      'hero.split.lead': '副標題／導言（Lead / Subtitle）緊接在主標題下方，用一至兩句話說明產品對象與核心效益，引導使用者採取行動。',
      'hero.split.caption': '輔助註解（Caption / Meta）— 例如：免綁信用卡 · 免費試用 14 天',
      'hero.split.media': '首屏視覺佔位框 · 4:3',
      'hero.center.badge': 'v2.0 發佈 · 置中大橫幅首屏',
      'hero.center.h1': '置中展示大標題：將視線聚焦於核心訊息',
      'hero.center.lead': '對稱置中的首屏排版，讓訪客視線順著標題直達行動按鈕，下方搭配寬幅產品視覺框作為視覺錨點。',
      'hero.center.cta1': '開始免費試用',
      'hero.center.cta2': '觀看產品導覽',
      'hero.center.media': '寬幅產品展示畫布 · 16:9',
      'hero.imm.bg': '橫跨 100% 頁寬的背景襯底（Full-Bleed Backdrop）',
      'hero.imm.eyebrow': '沉浸式滿版首屏（IMMERSIVE FULL-BLEED）',
      'hero.imm.h1': '橫跨全頁寬的沉浸式背景敘事舞台',
      'hero.imm.lead': '背景攝影或動態影像橫跨 100% 視窗寬度作為襯底，搭配漸層暗色遮罩（Scrim）確保文字與行動按鈕高對比可讀。',
      'hero.imm.cta1': '探索系列作品',
      'hero.imm.cta2': '播放品牌影片',
      'hero.imm.caption': '滿版漸層遮罩（Scrim）確保背景影像之上的文字對比度符合閱讀標準',
      'btn.primary': '主要行動按鈕 (Primary CTA)',
      'btn.secondary': '次要按鈕 (Secondary CTA)',
      'social.title': '合作夥伴與客戶信賴展示列（LOGO CLOUD）',
      'feat.eyebrow': '核心功能排版（FEATURE ARCHITECTURE）',
      'feat.h2': 'H2 區塊標題：展示核心產品能力',
      'feat.lead': '點擊右上方變體切換鈕，即時比較 Bento 便當盒網格、圖文交錯 Zig-Zag 與等寬三欄卡片的資訊層級差異。',
      'pricing.eyebrow': '轉換版型（CONVERSION PATTERN）',
      'pricing.h2': '定價方案表與層級比較',
      'pricing.lead': '並排呈現各方案卡片，搭配月繳／年繳切換開關，並以粗框與標籤突顯推薦方案。',
      'pricing.monthly': '月繳方案',
      'pricing.annual': '年繳方案（省 20%）',
      'test.eyebrow': '社會認同（SOCIAL PROOF）',
      'test.h2': '客戶見證與評價牆',
      'faq.eyebrow': '互動折疊清單（ACCORDION）',
      'faq.h2': '常見問題 FAQ',
      'cta.badge': '頁尾轉換橫幅（CTA BANNER）',
      'cta.h2': '準備好統一團隊的網頁版型語言了嗎？',
      'cta.lead': '在頁面收尾處配置高對比標題，搭配電子報訂閱表單或主要行動按鈕，承接瀏覽到底部的訪客。',
      'cta.email': '請輸入您的工作信箱...',
      'cta.submit': '立即訂閱',
      'cta.caption': '輔助說明文字 — 每週分享網頁架構筆記，隨時可取消訂閱。',
      'overlay.eyebrow': '覆蓋層互動元件（TRANSIENT OVERLAYS）',
      'overlay.desc': '點選下方按鈕，實際預覽浮現於主頁面之上的彈窗（Modal）與輕提示（Toast）線框樣態。',
      'overlay.modalBtn': '開啟 Modal 彈窗',
      'overlay.toastBtn': '觸發 Toast 提示條',
      'art.h1': '長文編輯與技術文件頁面的排版結構',
      'art.lead': '文章副標（Deck / Subtitle）— 長文閱讀版型仰賴清晰的標題階層、舒適的單行字數、引言塊、提示框與右側固定目錄。',
      'tok.eyebrow': '設計系統基礎 · css/tokens.css',
      'tok.h1': '極簡灰階線框 Design Tokens',
      'tok.lead': '全站所有區塊與元件皆繼承自這套無彩色灰階介面、俐落邊框線條，以及專用於解剖標註的單一技術藍強調色。',
      'drawer.title': '元件解剖檢視器',
      'drawer.defLabel': '定義與角色',
      'drawer.tipsLabel': '設計與使用原則',
      'tabs.eyebrow': '頁籤切換內容（TABBED CONTENT）',
      'tabs.h2': '互動頁籤與多視角切換（Tabs）',
      'tabs.lead': '將關聯度高的內容收納於同一區塊內，透過水平頁籤快速切換視角，避免頁面過度拉長。',
      'tabs.t1': '01. 版面網格',
      'tabs.t2': '02. 設計 Token',
      'tabs.t3': '03. 交付規範',
      'tabs.p1.h3': '12 欄響應式網格系統',
      'tabs.p1.body': '全站區塊對齊一致的容器最大寬度與欄間距，在桌機、平板與手機斷點之間穩定縮放。',
      'tabs.p2.h3': 'Token 化的色彩、線條與字級',
      'tabs.p2.body': '將灰階表面、邊框粗細與字體階層集中於 CSS 變數，未來可一鍵將線框稿升級為高保真品牌視覺。',
      'tabs.p3.h3': '跨角色共用的網頁術語字典',
      'tabs.p3.body': '讓 PM、設計師與工程師在討論版型與文案時使用完全一致的專有名詞，消除溝通落差。',
      'variant.timeline': '時間軸／步驟變體',
      'variant.tl.stepper': '橫向步驟流程',
      'variant.tl.vertical': '縱向時間軸',
      'tl.eyebrow': '順序流程（SEQUENTIAL FLOW）',
      'tl.h2': '步驟流程與縱向時間軸（Stepper & Timeline）',
      'tl.lead': '清楚呈現導入流程、三步驟說明或按時間排序的產品里程碑。',
      'tl.s1.h3': '定義 Token 與網格',
      'tl.s1.body': '切版前先定案無彩色灰階、邊框粗細、字級階層與容器寬度規範。',
      'tl.s2.h3': '組裝標準版型區塊',
      'tl.s2.body': '將 Hero、Bento、Tabs、定價表與表單依真實動線排列，驗證整體閱讀節奏。',
      'tl.s3.h3': '驗證響應式與互動狀態',
      'tl.s3.body': '測試桌機、平板與手機三種尺寸，確保導覽列、表格與表單皆不破版。',
      'matrix.h3': '跨方案功能對照矩陣表（Comparison Matrix）',
      'matrix.caption': '手機版自動支援橫向滑動檢視',
      'matrix.col.feature': '功能項目',
      'matrix.grp.core': '核心版型與 Design Tokens',
      'matrix.grp.team': '團隊協作與權限治理',
      'form.eyebrow': '完整表單控制項（FORM CONTROLS）',
      'form.h2': '結構化表單與輸入元件解剖',
      'form.lead': '一次收錄文字輸入框、驗證錯誤狀態、下拉選單、單選鈕、核取方塊、切換開關與多行文字區。',
      'form.tipTitle': '表單設計提醒',
      'form.tipBody': '每個輸入框都應搭配清楚的上方標籤（Label）與佔位提示，驗證失敗時直接在該欄位下方顯示錯誤訊息。',
      'form.nameLabel': '姓名（文字輸入框）*',
      'form.emailLabel': '工作信箱（驗證錯誤狀態示範）*',
      'form.emailErr': '✕ 請輸入有效的電子郵件格式（輸入正確格式會即時解除錯誤）。',
      'form.selectLabel': '主要角色（下拉選單 Select）',
      'form.radioLabel': '專案類型（單選群組 Radio Group）',
      'form.checkLabel': '包含交付項目（多選核取方塊 Checkbox）',
      'form.switchLabel': '預設開啟 X-Ray 標註（切換開關 Toggle Switch）',
      'form.switchHint': '用於立即生效的二元開／關偏好設定',
      'form.textareaLabel': '需求補充說明（多行文字框 Textarea）',
      'form.reset': '重設',
      'form.submit': '送出表單',
      'variant.gallery': '展示牆版型變體',
      'variant.gal.carousel': '輪播圖 Carousel',
      'variant.gal.masonry': '瀑布流 Masonry',
      'variant.gal.marquee': '無限跑馬燈 Marquee',
      'gal.eyebrow': '展示牆與動態排列（SHOWCASE & GALLERY）',
      'gal.h2': '輪播圖、瀑布流與無限跑馬燈',
      'gal.lead': '比較橫向單幀切換（Carousel）、不等高交錯排列（Masonry）與持續流動展示列（Marquee）。',
      'states.eyebrow': '系統狀態與回饋（UI FEEDBACK & STATES）',
      'states.h2': '狀態提示條、骨架屏與空狀態',
      'states.lead': '成熟的介面除了正常資料外，也必須清楚設計系統提示、非同步載入中與無資料的空狀態。',
      'empty.h3': '尚未建立任何專案',
      'empty.body': '空狀態（Empty State）在首次使用或搜尋無結果時，透過明確引導按鈕協助使用者跨出第一步。',
      'empty.cta': '+ 建立第一個線框專案',
      'overlay.drawerBtn': '開啟側邊抽屜 Drawer',
      'dash.side.workspace': '工作區導覽',
      'dash.side.system': '系統設定',
      'dash.eyebrow': '後台系統框架（APP SHELL · DASHBOARD）',
      'dash.h1': '工作區總覽儀表板',
      'dash.chartTitle': '每週活躍度長條圖',
      'dash.progTitle': '專案里程碑進度條',
      'drawer.copy': '一鍵複製元件規格',
      'drawer.copied': '✓ 已複製到剪貼簿',
      'pdp.title': '極簡建築檯燈 01（商品主標題）',
      'pdp.desc': '經典電商商品詳情頁（PDP）購買決策區（Buy Box）：將價格、規格色票、數量加減器與加入購物車集中於首屏，縮短購買轉換路徑。',
      'pdp.colorLabel': '外觀顏色選擇（Color Swatches）：',
      'pdp.sizeLabel': '尺寸／規格版本（Size Selector）',
      'pdp.atc': '加入購物車 — $148',
      'pdp.atcShort': '加入購物車',
      'pdp.reviewsH2': '買家星等評分與評論區',
      'pdp.relatedH2': '相關商品推薦列（Related Products）',
      'auth.eyebrow': '帳號認證與系統頁（AUTH & ONBOARDING）',
      'auth.h1': '左右分割登入頁與驗證元件',
      'auth.lead': '收錄第三方登入分隔線、即時密碼強度條與 6 格自動跳格 OTP 驗證碼輸入框。',
      'auth.cardTitle': '建立您的工作區帳號',
      'auth.cardSub': '可直接試打密碼與 6 位驗證碼體驗互動狀態。',
      'auth.pwdLabel': '密碼（含即時強度條）',
      'auth.otpLabel': '6 位數 OTP 驗證碼（自動跳格）',
      'auth.submit': '建立帳號',
      'err.h2': '找不到此頁面（404）',
      'err.lead': '友善的 404 錯誤頁應以白話說明原因，並提供明確的返回首頁或全站搜尋引導，避免訪客直接離開。',
      'err.home': '← 返回首頁',
      'err.search': '搜尋全站版型（⌘K）',
      'drawer.share': '複製分享定位連結',
      'drawer.shared': '✓ 已複製定位網址',
      'cmd.placeholder': '搜尋 70+ 中英文術語（如：瀑布流、骨架屏、Buy Box、OTP、Hero）...',
      'cmd.cat.all': '全部',
      'cmd.cat.nav': '導覽外框',
      'cmd.cat.layout': '版型與首屏',
      'cmd.cat.type': '文字層級',
      'cmd.cat.form': '表單與認證',
      'cmd.cat.ecom': '電商版型',
      'cmd.cat.data': '儀表板與狀態',
      'about.eyebrow': '製作初心 · 來自跨團隊協作的開發筆記',
      'about.h1': '開發歷程',
      'about.lead': '先前協助開發客戶網站時，經常需要與客戶、企劃、設計及工程端進行大量橫向溝通。為了讓大家在討論版型與元件名稱時能即時對焦、不再雞同鴨講，便萌生了製作這座互動式「網頁架構圖鑑」的想法。',
      'about.authorBadge': '作者資訊',
      'about.authorName': 'VK（作者資訊）',
      'about.authorBio': '本網頁架構圖鑑的企劃與製作者。在累積多次協助客戶開發網站與橫向溝通的實務經驗後，將常見版型與互動元件整理成這套可親手操作驗證的線框工具。',
      'about.authorHint': '隨時可提供您的個人簡介、職稱或聯絡連結來更新此卡。',
      'about.giftBadge': '小禮網站',
      'about.giftTitle': '認識「小禮」網站',
      'about.giftDesc': '歡迎造訪「小禮」網站——記錄日常開發工作日誌、設計實驗與數位作品的專屬空間。',
      'about.giftCta': '前往小禮網站 →',
      'about.logEyebrow': '開發緣起 · 解決客戶專案中的橫向溝通痛點',
      'about.logH2': '從構想到成形的五個階段',
      'log.v1.h3': '為什麼先做極簡灰階 Design Token？',
      'log.v1.body': '在協助客戶規劃網站初期，色彩與圖片常會分散大家對「架構」的注意力。因此第一步先建立純粹的無彩色線框規範（tokens.css），並把技術藍（#2563EB）單獨留給解剖標註，讓橫向討論聚焦在資訊層級本身。',
      'log.v2.h3': '像逛真實網站一樣對焦版型，而不是看靜態簡報',
      'log.v2.body': '靜態截圖很難讓客戶與團隊感受捲動節奏與區塊銜接。我們決定做成可實際操作的完整網站，在區塊右上角放上變體切換鈕，搭配滑鼠懸停提示、X-Ray 全開標註（[X]）與點擊側欄詳解，開會時邊逛邊對焦。',
      'log.v3.h3': '兼顧雙語術語與手機／平板的真實體感',
      'log.v3.body': '跨角色討論常夾雜英文專業術語與中文語境，且客戶常關心手機版怎麼排。因此加入了即時 EN / 中文切換、橫跨 100% 頁寬的沉浸式首屏，以及桌機／平板（768px）／手機（390px）即時響應式預覽。',
      'log.v4.h3': '把各類客戶專案最常用的版型一次補齊',
      'log.v4.body': '從品牌落地頁一路延伸到 Tabs、時間軸、功能對照表、完整表單驗證、Mega Menu、輪播圖、9:16 直式瀑布流、跑馬燈、骨架屏與空狀態，更補齊了後台儀表板與電商商品頁（PDP）。',
      'log.v5.h3': '進化成開會隨手可用的橫向溝通圖鑑',
      'log.v5.body': '最後加上 12/8/4 欄格線開關（[G]）、Inspector 語意 HTML 標籤／即時像素尺寸／一鍵複製規格、網址深層定位分享、可自動切頁展開變體的 ⌘K 快搜、登入／404 頁與專屬 WF 標籤圖示。'
    }
  };

  // --------------------------------------------------------------------------
  // 2. BILINGUAL ANATOMY CATALOG (EN + ZH)
  // --------------------------------------------------------------------------
  const CATALOG = {
    'Announcement Bar': {
      en: {
        label: 'Announcement Bar',
        category: 'Navigation & Chrome',
        desc: 'A slim, full-width utility banner above the primary navbar used for time-sensitive notices, product launches, or promotions.',
        tips: [
          'Keep copy to a single short line with one clear link',
          'Avoid stacking multiple announcement bars',
          'Allow dismissal if the message is promotional'
        ]
      },
      zh: {
        label: '頂部公告條 (Announcement Bar)',
        short: '頂部公告條',
        category: '導覽與外框',
        desc: '位於主導覽列正上方的細長滿版橫幅，用來傳達限時公告、新版本發佈或促銷活動。',
        tips: [
          '文字維持單行精簡，並只放一個明確連結',
          '避免同時堆疊多條公告橫幅造成視覺壓迫',
          '若屬促銷性質，建議提供關閉按鈕'
        ]
      }
    },
    'Navbar': {
      en: {
        label: 'Navbar',
        category: 'Navigation & Chrome',
        desc: 'The primary persistent header housing brand identity, top-level navigation links, and key utility or conversion actions.',
        tips: [
          'Limit top-level links to 4–6 items for scannability',
          'Keep primary CTA visually distinct on the far right',
          'Collapse into a drawer/hamburger menu on mobile'
        ]
      },
      zh: {
        label: '頂部導覽列 (Navbar)',
        short: '導覽列 Navbar',
        category: '導覽與外框',
        desc: '全站共用的頂部主要頁首，承載品牌識別、主選單連結以及登入或主要行動按鈕。',
        tips: [
          '第一層導覽連結建議控制在 4–6 個以利快速掃視',
          '最右側放置視覺突出的主要 CTA 按鈕',
          '行動版收合為漢堡選單或側邊抽屜'
        ]
      }
    },
    'Brand Logo': {
      en: {
        label: 'Brand Logo',
        category: 'Navigation & Chrome',
        desc: 'The visual identity mark and wordmark that anchors the site and conventionally links back to the homepage.',
        tips: [
          'Place top-left (standard) or center (editorial/brand)',
          'Maintain clear padding around the mark'
        ]
      },
      zh: {
        label: '品牌標誌 (Brand Logo)',
        short: '品牌 Logo',
        category: '導覽與外框',
        desc: '網站的品牌識別圖標與標準字，依慣例點擊後會返回首頁。',
        tips: [
          '一般網站置於左上角，品牌／雜誌型網站可置中',
          '周圍保留足夠留白以確保識別清晰度'
        ]
      }
    },
    'Nav Links': {
      en: {
        label: 'Nav Links',
        category: 'Navigation & Chrome',
        desc: 'Primary site destinations grouped horizontally in the navbar for direct access to top-level pages.',
        tips: [
          'Highlight the active route clearly',
          'Use concise 1–2 word labels'
        ]
      },
      zh: {
        label: '導覽選單連結 (Nav Links)',
        short: '導覽連結',
        category: '導覽與外框',
        desc: '水平排列於導覽列中的主要頁面入口，讓使用者快速切換網站核心區塊。',
        tips: [
          '清楚標示目前所在的頁面狀態（Active State）',
          '連結名稱保持 2–4 字以內最易掃讀'
        ]
      }
    },
    'Search Input': {
      en: {
        label: 'Search Input',
        category: 'Navigation & Chrome',
        desc: 'An inline utility field allowing visitors to jump directly to content, products, or documentation.',
        tips: [
          'Include a clear placeholder or keyboard shortcut hint',
          'Essential for content-heavy or e-commerce sites'
        ]
      },
      zh: {
        label: '搜尋輸入框 (Search Input)',
        short: '搜尋框',
        category: '導覽與外框',
        desc: '內嵌於導覽列的功能型搜尋欄位，協助訪客直達特定內容、商品或文件。',
        tips: [
          '提供清楚的佔位提示文字或快捷鍵提示',
          '內容型、電商型與文件站點特別需要'
        ]
      }
    },
    'Mobile Menu Trigger': {
      en: {
        label: 'Mobile Menu Trigger (Hamburger)',
        category: 'Responsive Navigation',
        desc: 'A compact icon button shown on tablet and mobile breakpoints that toggles a collapsible navigation drawer.',
        tips: [
          'Replace horizontal desktop nav links below ~768px',
          'Toggle aria-expanded and switch ☰ to × when open'
        ]
      },
      zh: {
        label: '行動版選單鈕 (Hamburger Menu)',
        short: '漢堡選單鈕',
        category: '響應式導覽',
        desc: '在平板與手機尺寸下取代水平導覽列的折疊按鈕，點擊後展開行動版導覽抽屜。',
        tips: [
          '螢幕寬度小於約 768px 時自動顯示',
          '開啟時切換圖示（☰ → ×）並同步更新無障礙狀態'
        ]
      }
    },
    'Split Hero Section': {
      en: {
        label: 'Split Hero Section',
        category: 'Hero Pattern',
        desc: 'A two-column above-the-fold layout pairing headline, lead copy, and CTAs on one side with a product visual on the other.',
        tips: [
          'Ideal for SaaS and product landing pages',
          'Keep key copy and primary CTA visible without scrolling',
          'Stacks vertically on mobile viewports'
        ]
      },
      zh: {
        label: '左右分割首屏 (Split Hero)',
        short: '左右分割首屏',
        category: '首屏版型',
        desc: '經典的雙欄首屏架構：一側放置主標題、副標與行動按鈕，另一側展示產品介面截圖或主視覺。',
        tips: [
          '最適合 SaaS 軟體、App 與產品介紹落地頁',
          '確保標題與主要 CTA 在不捲動的首屏高度內完整呈現',
          '行動版自動改為上下堆疊排列'
        ]
      }
    },
    'Centered Banner Hero': {
      en: {
        label: 'Centered Banner Hero',
        category: 'Hero Pattern',
        desc: 'A symmetrical, center-aligned hero that focuses full attention on the headline and CTA, often followed by a wide visual frame below.',
        tips: [
          'Great for bold statements and high-impact product launches',
          'Constrain headline width to ~12–16 words for balanced line breaks'
        ]
      },
      zh: {
        label: '置中大橫幅首屏 (Centered Banner Hero)',
        short: '置中大橫幅',
        category: '首屏版型',
        desc: '左右對稱置中的首屏排版，將視覺焦點完全集中於大標題與 CTA，下方常搭配寬幅產品視覺畫布。',
        tips: [
          '適合品牌宣言、新品發表或強調視覺氣勢的頁面',
          '控制標題最大寬度，避免單行過長影響閱讀節奏'
        ]
      }
    },
    'Immersive Full-Bleed Hero': {
      en: {
        label: 'Immersive Full-Bleed Hero',
        category: 'Hero Pattern',
        desc: 'An edge-to-edge visual stage (photography, video, or 3D canvas) with overlaid typography and calls-to-action.',
        tips: [
          'Ideal for editorial, brand storytelling, and hospitality sites',
          'Ensure strong contrast scrim or card behind overlaid text'
        ]
      },
      zh: {
        label: '沉浸式滿版首屏 (Immersive Hero)',
        short: '沉浸式滿版首屏',
        category: '首屏版型',
        desc: '以滿版攝影、影片或 3D 場景為舞台，將標題與操作按鈕疊加於畫面之上的高沉浸感首屏。',
        tips: [
          '常見於品牌形象站、旅宿、建築與設計作品集',
          '文字下方務必加遮罩或高對比底卡，確保可讀性'
        ]
      }
    },
    'Eyebrow / Kicker': {
      en: {
        label: 'Eyebrow / Kicker',
        category: 'Typography',
        desc: 'A short uppercase or monospace label directly above a heading to establish category, context, or release status.',
        tips: [
          'Keep to 2–4 words',
          'Visually quieter than the heading it introduces'
        ]
      },
      zh: {
        label: '眉標 (Eyebrow / Kicker)',
        short: '眉標 Eyebrow',
        category: '文字層級',
        desc: '位於主標題或區塊標題正上方的簡短提示文字，用來快速定調分類、章節主題或版本狀態。',
        tips: [
          '字數精簡（約 2–6 字）',
          '視覺權重應明顯輕於下方標題，作為引導而非主角'
        ]
      }
    },
    'Badge / Tag': {
      en: {
        label: 'Badge / Tag',
        category: 'Micro-Component',
        desc: 'A compact pill or chip used to communicate status, category, plan tier, or metadata.',
        tips: [
          'Use sparingly so badges retain visual signal',
          'Never style non-clickable tags identically to buttons'
        ]
      },
      zh: {
        label: '標籤／徽章 (Badge / Tag)',
        short: '標籤 Badge',
        category: '微元件',
        desc: '帶外框或底色的小型膠囊元件，用來標示狀態（如 NEW、推薦）、內容分類或屬性。',
        tips: [
          '克制使用數量，避免滿頁標籤稀釋重點',
          '不可點擊的標籤樣式應與按鈕做出區隔'
        ]
      }
    },
    'H1 Heading': {
      en: {
        label: 'H1 Heading',
        category: 'Typography',
        desc: 'The single primary page headline expressing the core value proposition or article title.',
        tips: [
          'Use exactly one H1 per page for semantic hierarchy',
          'Largest type scale with tight line-height and letter-spacing'
        ]
      },
      zh: {
        label: '主標題 (H1 Heading)',
        short: '主標題 H1',
        category: '文字層級',
        desc: '整頁層級最高的核心標題，負責在第一時間傳達頁面主題或產品價值主張。',
        tips: [
          '每個頁面建議僅使用一個 H1 以維持語意與 SEO 結構',
          '採用全頁最大字級搭配較緊湊的行高'
        ]
      }
    },
    'H2 Section Heading': {
      en: {
        label: 'H2 Section Heading',
        category: 'Typography',
        desc: 'Major section title that divides the page into scannable thematic chapters.',
        tips: [
          'Pair with a short Lead / Subtitle to frame the section',
          'Keep consistent vertical rhythm across sections'
        ]
      },
      zh: {
        label: '區塊主標題 (H2 Heading)',
        short: '區塊標題 H2',
        category: '文字層級',
        desc: '區隔各大功能區塊的主標題，讓訪客快速捲動瀏覽時能掌握頁面章節脈絡。',
        tips: [
          '常搭配簡短副標說明該區塊重點',
          '全站各區塊的 H2 字級與上下間距應保持一致'
        ]
      }
    },
    'H3 Subheading': {
      en: {
        label: 'H3 Subheading',
        category: 'Typography',
        desc: 'Card-level or subsection title nested under an H2 to organize individual features or content blocks.',
        tips: [
          'Clearly smaller than H2 yet noticeably bolder than Body Copy',
          'Keep concise so cards align evenly across columns'
        ]
      },
      zh: {
        label: '次標題／卡片標題 (H3 Subheading)',
        short: '次標題 H3',
        category: '文字層級',
        desc: '隸屬於 H2 之下的子標題，常用於卡片標題、特色項目名稱或文章次章節。',
        tips: [
          '字級明顯小於 H2，但字重高於一般內文',
          '並排卡片的 H3 建議維持相近行數以保持對齊'
        ]
      }
    },
    'Lead / Subtitle': {
      en: {
        label: 'Lead / Subtitle',
        category: 'Typography',
        desc: 'An introductory 1–2 sentence summary placed immediately beneath a headline to clarify scope and value.',
        tips: [
          'Slightly larger than body copy with secondary ink contrast',
          'Target 45–65 characters per line for comfortable reading'
        ]
      },
      zh: {
        label: '副標題／導言 (Lead / Subtitle)',
        short: '副標／導言',
        category: '文字層級',
        desc: '緊接在主標題下方的補充說明段落，用精煉語句展開背景脈絡或價值細節。',
        tips: [
          '字級略大於內文，顏色採次級灰階以拉開與主標題的層次',
          '控制單行寬度，提升閱讀舒適度'
        ]
      }
    },
    'Body Copy': {
      en: {
        label: 'Body Copy',
        category: 'Typography',
        desc: 'Standard paragraph text used for explanations, card descriptions, and long-form reading.',
        tips: [
          'Maintain generous line-height (1.5–1.65)',
          'Break long passages into short paragraphs or lists'
        ]
      },
      zh: {
        label: '內文段落 (Body Copy)',
        short: '內文 Body',
        category: '文字層級',
        desc: '網頁最基礎的閱讀文字，用於功能說明、卡片描述與文章正文。',
        tips: [
          '行高建議維持在 1.5–1.7 之間以確保長時間閱讀不吃力',
          '適度分段或改為條列清單以降低閱讀阻力'
        ]
      }
    },
    'Caption / Meta': {
      en: {
        label: 'Caption / Meta',
        category: 'Typography',
        desc: 'Small-scale supporting text for image credits, timestamps, helper notes, or author roles.',
        tips: [
          'Use tertiary ink so it never competes with body copy',
          'Keep strictly supplemental'
        ]
      },
      zh: {
        label: '註解／輔助資訊 (Caption / Meta)',
        short: '註解 Meta',
        category: '文字層級',
        desc: '最小字級的輔助說明，用於圖說、發佈日期、作者職稱、表單提示或版權列。',
        tips: [
          '使用最淺一階的文字灰階，不搶奪內文焦點',
          '僅放補充資訊，不承載關鍵核心訊息'
        ]
      }
    },
    'CTA Button Group': {
      en: {
        label: 'CTA Button Group',
        category: 'Action Pattern',
        desc: 'A paired Primary and Secondary button set offering a clear main path alongside a lower-commitment alternative.',
        tips: [
          'Use only one Primary CTA per visual cluster',
          'Place Primary CTA first in reading order'
        ]
      },
      zh: {
        label: '行動按鈕群組 (CTA Group)',
        short: '按鈕群組',
        category: '互動模式',
        desc: '將主要按鈕與次要按鈕成對配置，同時提供「立即轉換」與「先了解更多」兩種路徑。',
        tips: [
          '同一個按鈕群組內只放一顆實心主要 CTA',
          '依閱讀動線將主要按鈕置於最左側'
        ]
      }
    },
    'Primary CTA': {
      en: {
        label: 'Primary CTA',
        category: 'Micro-Component',
        desc: 'The highest-contrast interactive button representing the primary conversion action.',
        tips: [
          'Use clear action verbs (e.g., Start Free Trial, Get Started)',
          'Reserve solid high-contrast fill for primary actions only'
        ]
      },
      zh: {
        label: '主要行動按鈕 (Primary CTA)',
        short: '主要按鈕 CTA',
        category: '微元件',
        desc: '視覺對比度最高的實心按鈕，代表該區塊最希望使用者點擊的核心目標。',
        tips: [
          '使用明確動詞（如「免費試用」、「立即開始」）',
          '實心高對比樣式僅保留給最重要的動作'
        ]
      }
    },
    'Secondary CTA': {
      en: {
        label: 'Secondary CTA',
        category: 'Micro-Component',
        desc: 'A lower-emphasis action paired with a Primary CTA for exploratory paths like viewing a demo or reading docs.',
        tips: [
          'Style with outline or subtle surface fill',
          'Never visually overpower the Primary CTA'
        ]
      },
      zh: {
        label: '次要行動按鈕 (Secondary CTA)',
        short: '次要按鈕',
        category: '微元件',
        desc: '搭配主要按鈕使用的低視覺權重按鈕，提供觀看導覽、查看文件等低門檻選項。',
        tips: [
          '採線框（Outlined）或淺灰底樣式',
          '視覺強度不可蓋過主要按鈕'
        ]
      }
    },
    'Media Placeholder': {
      en: {
        label: 'Media Placeholder',
        category: 'Media',
        desc: 'A structural frame representing photography, product UI screenshots, illustrations, or embedded video.',
        tips: [
          'Lock to consistent aspect ratios (16:9, 4:3, 1:1)',
          'Diagonal cross-lines signal visual slots in lo-fi wireframes'
        ]
      },
      zh: {
        label: '視覺媒體佔位框 (Media Placeholder)',
        short: '圖片／影音佔位',
        category: '媒體元件',
        desc: '在線框階段代表照片、產品截圖、插畫或影片區塊的結構佔位框。',
        tips: [
          '固定長寬比例（如 16:9、4:3、1:1）以確保排版穩定',
          '對角叉線與斜紋是 Lo-Fi Wireframe 識別圖片區的核心語言'
        ]
      }
    },
    'Social Proof / Logo Cloud': {
      en: {
        label: 'Social Proof / Logo Cloud',
        category: 'Section Pattern',
        desc: 'A horizontal band of partner, client, or press logos positioned near the hero to build immediate trust.',
        tips: [
          'Render logos in monochrome grayscale for visual harmony',
          'Introduce with a brief single-line caption'
        ]
      },
      zh: {
        label: '合作品牌牆 (Logo Cloud)',
        short: '品牌 Logo 牆',
        category: '區塊版型',
        desc: '通常緊接在首屏下方，以水平排列的客戶、合作夥伴或媒體 Logo 快速建立信任感。',
        tips: [
          '統一轉為單色灰階以避免五顏六色破壞版面平衡',
          '上方搭配一行簡短引導語即可'
        ]
      }
    },
    'Bento Grid': {
      en: {
        label: 'Bento Grid',
        category: 'Feature Pattern',
        desc: 'An asymmetric, modular grid inspired by Japanese bento boxes where cards span varying widths to emphasize hierarchy.',
        tips: [
          'Highlight 1–2 flagship features in wider spans (7–8 cols)',
          'Keep consistent internal padding and border radius across cells'
        ]
      },
      zh: {
        label: '便當盒網格 (Bento Grid)',
        short: 'Bento 網格',
        category: '特色版型',
        desc: '靈感源自日式便當盒的非對稱模組化網格，透過不同格寬大小自然區分主打功能與輔助功能。',
        tips: [
          '將 1–2 個主力特色放在寬格（如 7–8 欄）以突顯視覺焦點',
          '所有格子維持一致的內距、邊框與圓角規範'
        ]
      }
    },
    'Alternating Zig-Zag Split': {
      en: {
        label: 'Alternating Zig-Zag Split',
        category: 'Feature Pattern',
        desc: 'A vertical sequence of 2-column rows alternating image-left and image-right to explain multi-step workflows.',
        tips: [
          'Best for 2–4 detailed features that need both copy and visuals',
          'Avoid more than 4 consecutive rows to prevent visual fatigue'
        ]
      },
      zh: {
        label: '圖文交錯區塊 (Zig-Zag Split)',
        short: '圖文交錯',
        category: '特色版型',
        desc: '以左右雙欄交錯排列（左文右圖 → 左圖右文），引導視線呈 Z 字形閱讀步驟或功能細節。',
        tips: [
          '適合 2–4 個需要較詳細文字搭配示意圖的功能介紹',
          '避免連續超過 4 列造成視覺疲乏'
        ]
      }
    },
    'Card Grid': {
      en: {
        label: 'Card Grid',
        category: 'Feature Pattern',
        desc: 'A uniform multi-column grid of equal-weight cards, ideal for catalogs, feature lists, or resource directories.',
        tips: [
          'Keep card content length parallel across rows',
          '3 columns on desktop gracefully collapse to 1 column on mobile'
        ]
      },
      zh: {
        label: '等寬卡片網格 (Card Grid)',
        short: '卡片網格',
        category: '特色版型',
        desc: '由等寬等權重卡片組成的整齊網格，適合功能列表、文章目錄或商品陳列。',
        tips: [
          '同列卡片的文字行數盡量相近，確保底部切齊',
          '桌機三欄於行動版自然收合為單欄'
        ]
      }
    },
    'Stats / KPI Bar': {
      en: {
        label: 'Stats / KPI Bar',
        category: 'Section Pattern',
        desc: 'A compact horizontal strip displaying 3–4 headline metrics to quantify scale, performance, or adoption.',
        tips: [
          'Pair large bold numbers with concise 2–4 word labels',
          'Avoid cluttering with footnotes inside the metric box'
        ]
      },
      zh: {
        label: '關鍵數據列 (Stats / KPI Bar)',
        short: '數據指標列',
        category: '區塊版型',
        desc: '以精簡橫列呈現 3–4 組關鍵量化指標，用具體數字強化產品規模與成效說服力。',
        tips: [
          '大字粗體數字搭配簡短標籤，一眼可讀',
          '避免在數據格內塞入過多附註說明'
        ]
      }
    },
    'Pricing Table': {
      en: {
        label: 'Pricing Table',
        category: 'Conversion Pattern',
        desc: 'A side-by-side tier comparison enabling visitors to evaluate plans, billing cadence, and included features.',
        tips: [
          'Visually highlight the recommended middle tier',
          'Keep feature lists scannable and aligned across tiers'
        ]
      },
      zh: {
        label: '定價方案表 (Pricing Table)',
        short: '定價表',
        category: '轉換版型',
        desc: '並排比較不同等級方案的價格、計費週期與包含功能，協助訪客做出購買決策。',
        tips: [
          '以粗框或標籤突顯主力推薦方案（通常居中）',
          '條列項目保持簡明且便於橫向對照'
        ]
      }
    },
    'Billing Toggle': {
      en: {
        label: 'Billing Toggle',
        category: 'Micro-Component',
        desc: 'A segmented switch allowing users to toggle between Monthly and Annual pricing views.',
        tips: [
          'Indicate annual savings clearly near the toggle',
          'Update prices immediately without page reload'
        ]
      },
      zh: {
        label: '計費週期切換器 (Billing Toggle)',
        short: '計費切換器',
        category: '微元件',
        desc: '分段式切換開關，讓訪客即時切換月繳與年繳價格。',
        tips: [
          '在年繳選項旁直接標註折扣幅度（如省 20%）',
          '切換時即時更新下方價格，不需重整頁面'
        ]
      }
    },
    'Testimonials Section': {
      en: {
        label: 'Testimonials Section',
        category: 'Social Proof Pattern',
        desc: 'Customer quotes paired with avatars, names, and roles to validate real-world outcomes.',
        tips: [
          'Specific outcomes outperform generic praise',
          'Include author role/company for credibility'
        ]
      },
      zh: {
        label: '客戶見證區塊 (Testimonials)',
        short: '客戶見證',
        category: '社會認同',
        desc: '呈現真實使用者推薦語，搭配頭像、姓名與職稱以強化可信度。',
        tips: [
          '具體的使用成果描述比空泛稱讚更有說服力',
          '附上公司與職稱可大幅提升真實感'
        ]
      }
    },
    'Avatar': {
      en: {
        label: 'Avatar',
        category: 'Micro-Component',
        desc: 'A circular user or author portrait thumbnail used alongside quotes, bylines, or comments.',
        tips: [
          'Use initials fallback when no photo is available',
          'Maintain uniform diameter within the same list'
        ]
      },
      zh: {
        label: '使用者頭像 (Avatar)',
        short: '頭像 Avatar',
        category: '微元件',
        desc: '圓形個人肖像縮圖，常見於客戶見證、文章作者欄與留言區。',
        tips: [
          '無照片時以姓名縮寫作為預設樣式',
          '同區塊內維持一致的圓形尺寸'
        ]
      }
    },
    'FAQ Accordion': {
      en: {
        label: 'FAQ Accordion',
        category: 'Interactive Pattern',
        desc: 'A vertically stacked list of expandable question-and-answer rows that keep dense information compact.',
        tips: [
          'Use for 4–8 common objections or operational questions',
          'Clearly show expand/collapse affordance (+ / −)'
        ]
      },
      zh: {
        label: '常見問題折疊選單 (FAQ Accordion)',
        short: 'FAQ 折疊選單',
        category: '互動版型',
        desc: '可點擊展開與收合的垂直問答清單，將大量疑問精簡收納而不拉長頁面。',
        tips: [
          '精選 4–8 個最常被問到的疑慮或操作問題',
          '清楚標示展開／收合符號（+ / −）'
        ]
      }
    },
    'CTA Banner': {
      en: {
        label: 'CTA Banner',
        category: 'Conversion Pattern',
        desc: 'A high-emphasis closing band near the bottom of the page prompting visitors to convert or subscribe.',
        tips: [
          'Reinforce the primary value proposition one final time',
          'Minimize competing links inside the banner'
        ]
      },
      zh: {
        label: '行動呼籲橫幅 (CTA Banner)',
        short: 'CTA 橫幅',
        category: '轉換版型',
        desc: '位於頁面底部的高強調度收尾區塊，再次提醒核心價值並引導轉換或訂閱。',
        tips: [
          '與首屏呼應，給瀏覽到底部的訪客最後一次行動入口',
          '區塊內避免放置過多分散注意力的次要連結'
        ]
      }
    },
    'Newsletter Form Group': {
      en: {
        label: 'Newsletter Form Group',
        category: 'Form Pattern',
        desc: 'An inline email input paired with a submit CTA for lead capture or product updates.',
        tips: [
          'Include clear placeholder copy and a brief privacy caption',
          'Stack input and button cleanly on narrow screens'
        ]
      },
      zh: {
        label: '訂閱表單群組 (Newsletter Form)',
        short: '表單輸入群組',
        category: '表單版型',
        desc: '將電子郵件輸入框與送出按鈕水平結合的輕量表單，常用於收集潛在名單或電子報訂閱。',
        tips: [
          '搭配清楚的輸入提示與隱私保障註解',
          '小螢幕下自動改為上下滿寬排列'
        ]
      }
    },
    'Overlay Triggers': {
      en: {
        label: 'Overlay Triggers',
        category: 'Interactive Pattern',
        desc: 'Triggers demonstrating transient UI layers—Modal Dialogs and Toast Notifications—that sit above page flow.',
        tips: [
          'Use Modals for focused decisions requiring confirmation',
          'Use Toasts for non-blocking status feedback'
        ]
      },
      zh: {
        label: '覆蓋層觸發區 (Overlay Triggers)',
        short: '覆蓋層觸發器',
        category: '互動版型',
        desc: '示範浮現於主文件流之上的暫時性介面（彈窗 Modal 與輕提示 Toast）。',
        tips: [
          '需要使用者明確確認的流程使用 Modal 彈窗',
          '不中斷操作的狀態回饋使用 Toast 提示條'
        ]
      }
    },
    'Modal Dialog': {
      en: {
        label: 'Modal Dialog',
        category: 'Overlay Pattern',
        desc: 'A centered dialog over a dimmed backdrop that interrupts page flow for critical actions or focused input.',
        tips: [
          'Always provide an explicit close button and Escape key support',
          'Keep content focused on a single task'
        ]
      },
      zh: {
        label: '彈出視窗 (Modal Dialog)',
        short: 'Modal 彈窗',
        category: '覆蓋層元件',
        desc: '搭配半透明暗色遮罩置中顯示的對話框，用來聚焦處理重要確認動作或表單輸入。',
        tips: [
          '務必提供明確的關閉鈕並支援按 Esc 關閉',
          '單一彈窗只處理一項明確任務'
        ]
      }
    },
    'Toast Notification': {
      en: {
        label: 'Toast Notification',
        category: 'Overlay Pattern',
        desc: 'A brief, non-blocking floating message confirming an action (e.g., Saved, Copied, Subscribed).',
        tips: [
          'Auto-dismiss after 3–5 seconds',
          'Keep message under one short sentence'
        ]
      },
      zh: {
        label: '輕量提示條 (Toast Notification)',
        short: 'Toast 提示條',
        category: '覆蓋層元件',
        desc: '浮現於畫面角落的短暫通知，不阻斷操作流程，用來回饋儲存成功、已複製等狀態。',
        tips: [
          '約 3–5 秒後自動消失',
          '訊息維持在一句短文以內'
        ]
      }
    },
    'Footer': {
      en: {
        label: 'Footer',
        category: 'Navigation & Chrome',
        desc: 'The persistent bottom landmark containing brand summary, structured link columns, and legal/copyright metadata.',
        tips: [
          'Group links into 3–4 logical columns',
          'Separate copyright and legal links in a bottom sub-footer bar'
        ]
      },
      zh: {
        label: '頁尾區塊 (Footer)',
        short: '頁尾 Footer',
        category: '導覽與外框',
        desc: '全站最底部的結構地標，收納品牌簡介、分類網站地圖連結與最下方的版權／法務列。',
        tips: [
          '連結依邏輯分為 3–4 欄最易瀏覽',
          '最底部以細線隔出版權宣告與隱私權條款'
        ]
      }
    },
    'Breadcrumb': {
      en: {
        label: 'Breadcrumb',
        category: 'Navigation & Chrome',
        desc: 'A secondary trail showing the current page’s location within the site hierarchy.',
        tips: [
          'Essential for docs, blogs, and multi-level e-commerce',
          'Current page item is plain text, not a link'
        ]
      },
      zh: {
        label: '麵包屑導覽 (Breadcrumb)',
        short: '麵包屑',
        category: '導覽與外框',
        desc: '呈現目前頁面在網站階層中位置的路徑導覽，方便使用者快速退回上層分類。',
        tips: [
          '文件站、部落格與多層級電商必備',
          '最後一項（目前頁面）以純文字顯示且不設超連結'
        ]
      }
    },
    'Article Header': {
      en: {
        label: 'Article Header',
        category: 'Editorial Pattern',
        desc: 'The top framing block of an article combining category tag, H1 title, deck/subtitle, and author byline metadata.',
        tips: [
          'Establish clear reading time and publish date',
          'Keep width comfortable for scanning'
        ]
      },
      zh: {
        label: '文章頁首 (Article Header)',
        short: '文章頁首',
        category: '內容編輯版型',
        desc: '長文頂部的資訊框架，整合分類標籤、H1 標題、副標導言與作者發佈資訊列。',
        tips: [
          '清楚標示發佈日期與預估閱讀時間',
          '寬度與下方正文對齊以保持視覺秩序'
        ]
      }
    },
    'Blockquote / Pull Quote': {
      en: {
        label: 'Blockquote / Pull Quote',
        category: 'Typography',
        desc: 'An indented, left-bordered quotation highlighting a key takeaway or external citation inside long-form prose.',
        tips: [
          'Use sparingly to create visual pacing in long articles',
          'Style distinctly from standard body paragraphs'
        ]
      },
      zh: {
        label: '引言區塊 (Blockquote)',
        short: '引言 Blockquote',
        category: '文字層級',
        desc: '左側帶粗線條的縮排引述區，用來突顯文章金句或外部引用，為長文創造視覺節奏。',
        tips: [
          '適度使用以打破大段文字的單調感',
          '透過左框線、斜體或淺底色與正文明確區隔'
        ]
      }
    },
    'Callout Box': {
      en: {
        label: 'Callout Box',
        category: 'Editorial Pattern',
        desc: 'A bordered highlight block inside an article used for tips, warnings, definitions, or key takeaways.',
        tips: [
          'Lead with a clear label (Note, Tip, Important)',
          'Keep concise—2 to 4 lines'
        ]
      },
      zh: {
        label: '重點提示框 (Callout Box)',
        short: '提示框 Callout',
        category: '內容編輯版型',
        desc: '穿插於正文中的獨立框線區塊，用於標示注意事項、小技巧、名詞定義或關鍵結論。',
        tips: [
          '開頭加上明確標籤（如 Note、Tip、重要提醒）',
          '內容控制在 2–4 行內最具掃讀效率'
        ]
      }
    },
    'Table of Contents (TOC)': {
      en: {
        label: 'Table of Contents (TOC)',
        category: 'Navigation & Chrome',
        desc: 'A sticky sidebar index listing section headings so readers can scan and jump through long-form pages.',
        tips: [
          'Keep sticky while scrolling the main prose column',
          'Limit depth to H2 and H3 headings'
        ]
      },
      zh: {
        label: '側邊目錄 (Table of Contents)',
        short: '側邊目錄 TOC',
        category: '導覽與外框',
        desc: '固定於長文側欄的章節索引，讓讀者隨時掌握文章架構並快速跳轉至特定段落。',
        tips: [
          '隨頁面捲動固定（Sticky）於可視範圍內',
          '目錄層級通常收錄至 H2 與 H3 即可'
        ]
      }
    },
    'Pagination / Next-Prev': {
      en: {
        label: 'Pagination / Next-Prev',
        category: 'Navigation & Chrome',
        desc: 'Sequential links at the end of an article or list guiding readers to the previous or next entry.',
        tips: [
          'Show both direction label (Previous/Next) and target title',
          'Keep symmetrically aligned at the bottom of the prose column'
        ]
      },
      zh: {
        label: '上下頁導覽 (Pagination)',
        short: '上下頁導覽',
        category: '導覽與外框',
        desc: '位於文章或列表底部的連續閱讀引導，連結至上一篇與下一篇內容。',
        tips: [
          '同時標示方向（上一篇／下一篇）與目標文章標題',
          '左右對稱排列於正文底部'
        ]
      }
    },
    'Tabs Section': {
      en: {
        label: 'Tabs Section',
        category: 'Interactive Pattern',
        desc: 'A multi-view container pairing horizontal tab triggers with swappable content panels to keep related topics compact.',
        tips: [
          'Limit to 3–5 concise tabs',
          'Use when views are mutually exclusive and share the same context'
        ]
      },
      zh: {
        label: '頁籤切換區塊 (Tabs Section)',
        short: '頁籤區塊 Tabs',
        category: '互動版型',
        desc: '透過水平頁籤切換對應內容面板的互動區塊，適合在同一空間展示多個平行的產品視角。',
        tips: [
          '頁籤數量建議控制在 3–5 個以內',
          '適合呈現互斥且層級相同的內容視角'
        ]
      }
    },
    'Tab List': {
      en: {
        label: 'Tab List',
        category: 'Interactive Pattern',
        desc: 'The horizontal bar holding clickable tab triggers, highlighting the currently active panel.',
        tips: [
          'Allow horizontal scroll on narrow mobile viewports',
          'Keep tab labels short (1–3 words)'
        ]
      },
      zh: {
        label: '頁籤列 (Tab List)',
        short: '頁籤列',
        category: '互動版型',
        desc: '承載所有頁籤按鈕的水平容器，清楚標示目前啟用的分頁狀態。',
        tips: [
          '手機寬度下支援橫向滑動而不折行破版',
          '每個頁籤名稱維持簡短易掃讀'
        ]
      }
    },
    'Tab Panel': {
      en: {
        label: 'Tab Panel',
        category: 'Interactive Pattern',
        desc: 'The active content region controlled by a Tab List, displaying copy, checklists, or media for the selected tab.',
        tips: [
          'Maintain consistent panel height to prevent layout jump when switching tabs'
        ]
      },
      zh: {
        label: '頁籤內容面板 (Tab Panel)',
        short: '頁籤面板',
        category: '互動版型',
        desc: '受頁籤列控制的內容顯示區，呈現所選分頁的文案、清單與示意圖。',
        tips: [
          '各面板高度盡量接近，避免切換時頁面上下劇烈跳動'
        ]
      }
    },
    'Process Stepper': {
      en: {
        label: 'Process Stepper',
        category: 'Section Pattern',
        desc: 'A numbered horizontal sequence (Step 01 → 02 → 03) illustrating how a workflow or onboarding process unfolds.',
        tips: [
          'Ideal for 3–4 sequential steps',
          'Stacks into a vertical sequence on mobile'
        ]
      },
      zh: {
        label: '橫向步驟流程 (Process Stepper)',
        short: '步驟流程 Stepper',
        category: '區塊版型',
        desc: '以編號卡片（01 → 02 → 03）由左至右說明操作步驟或導入流程的結構化區塊。',
        tips: [
          '最適合 3–4 個明確的先後步驟',
          '在平板與手機上自然轉為垂直順序排列'
        ]
      }
    },
    'Step Indicator': {
      en: {
        label: 'Step Indicator',
        category: 'Micro-Component',
        desc: 'A circular numbered badge marking sequential order inside a stepper or onboarding flow.',
        tips: [
          'Use monospace numerals (01, 02, 03) for crisp alignment'
        ]
      },
      zh: {
        label: '步驟編號圓章 (Step Indicator)',
        short: '步驟編號',
        category: '微元件',
        desc: '標示順序的圓形數字徽章，幫助使用者一眼建立流程先後感。',
        tips: [
          '搭配等寬數字（01、02、03）呈現俐落對齊感'
        ]
      }
    },
    'Vertical Timeline': {
      en: {
        label: 'Vertical Timeline',
        category: 'Section Pattern',
        desc: 'A chronological vertical rail with milestone nodes used for roadmaps, changelogs, or company history.',
        tips: [
          'Anchor each milestone with a clear phase or date label',
          'Scales effortlessly to any number of entries'
        ]
      },
      zh: {
        label: '縱向時間軸 (Vertical Timeline)',
        short: '縱向時間軸',
        category: '區塊版型',
        desc: '以垂直軸線與節點串連各階段里程碑，常用於產品路線圖、更新日誌或品牌歷史。',
        tips: [
          '每個節點上方標註清楚的日期或階段名稱',
          '適合項目數量較多或文字較長的歷程敘事'
        ]
      }
    },
    'Timeline Item': {
      en: {
        label: 'Timeline Item',
        category: 'Section Pattern',
        desc: 'An individual milestone card anchored to a dot along the vertical timeline rail.',
        tips: [
          'Keep heading and summary concise for rapid scanning'
        ]
      },
      zh: {
        label: '時間軸節點卡 (Timeline Item)',
        short: '時間軸節點',
        category: '區塊版型',
        desc: '掛載於縱向時間軸上的單一里程碑卡片，包含階段標記、標題與說明。',
        tips: [
          '標題與內文維持精簡，方便由上而下快速瀏覽'
        ]
      }
    },
    'Comparison Matrix': {
      en: {
        label: 'Comparison Matrix',
        category: 'Conversion Pattern',
        desc: 'A structured multi-column feature table comparing capabilities across pricing tiers or product editions.',
        tips: [
          'Group rows under clear category subheaders',
          'Wrap in a horizontally scrollable container for mobile usability'
        ]
      },
      zh: {
        label: '功能對照矩陣表 (Comparison Matrix)',
        short: '功能比較表',
        category: '轉換版型',
        desc: '常位於定價卡片下方的詳細對照表，以勾選（✓）、橫線（—）或數值橫向比較各方案差異。',
        tips: [
          '將大量功能依類別分組，降低閱讀負擔',
          '外層包裹橫向捲動容器，確保手機版不擠壓欄位'
        ]
      }
    },
    'Table Header': {
      en: {
        label: 'Table Header',
        category: 'Data Display',
        desc: 'The top column-label row defining each comparison dimension or data field.',
        tips: [
          'Use subtle surface tint and bold/uppercase styling to separate from body rows'
        ]
      },
      zh: {
        label: '表格標頭列 (Table Header)',
        short: '表頭列',
        category: '資料呈現',
        desc: '定義各欄位名稱的頂部標題列，讓使用者一眼對齊直欄資料。',
        tips: [
          '以淺灰底色與粗體／大寫字體與下方資料列做出區隔'
        ]
      }
    },
    'Form Section': {
      en: {
        label: 'Form Section',
        category: 'Form Pattern',
        desc: 'A structured data-entry block combining inputs, selectors, choices, validation feedback, and a submit action.',
        tips: [
          'Group related fields logically (e.g., Name + Email in one row)',
          'Mark required fields clearly and end with a single Primary CTA'
        ]
      },
      zh: {
        label: '完整表單區塊 (Form Section)',
        short: '表單區塊',
        category: '表單版型',
        desc: '整合文字輸入、下拉選單、單多選、切換開關與驗證狀態的完整資料填寫介面。',
        tips: [
          '將高度相關的短欄位並排（如姓名與信箱），縮短填寫長度',
          '清楚標示必填欄位，底部以單一主要送出按鈕收尾'
        ]
      }
    },
    'Form Field / Input': {
      en: {
        label: 'Form Field / Input',
        category: 'Form Control',
        desc: 'A labeled single-line text entry control for names, emails, or short answers.',
        tips: [
          'Always keep a visible label above the input rather than relying solely on placeholders'
        ]
      },
      zh: {
        label: '文字輸入欄位 (Text Input)',
        short: '文字輸入框',
        category: '表單元件',
        desc: '搭配上方標籤的單行文字輸入框，用於填寫姓名、信箱或簡短資訊。',
        tips: [
          '務必保留可見的外部 Label，不可只靠 Placeholder 取代標籤'
        ]
      }
    },
    'Validation Error': {
      en: {
        label: 'Validation Error State',
        category: 'Form State',
        desc: 'An inline error indicator pairing a highlighted border with an actionable message directly beneath an invalid field.',
        tips: [
          'Explain how to fix the error instead of just saying "Invalid"',
          'Clear the error immediately once the user enters valid input'
        ]
      },
      zh: {
        label: '欄位驗證錯誤狀態 (Validation Error)',
        short: '錯誤驗證狀態',
        category: '表單狀態',
        desc: '欄位填寫不符規定時的即時回饋，以警示框線搭配欄位正下方的具體修正說明。',
        tips: [
          '明確告知正確格式，而非只顯示「輸入錯誤」',
          '使用者修正為有效格式後即時消除錯誤狀態'
        ]
      }
    },
    'Select Dropdown': {
      en: {
        label: 'Select Dropdown',
        category: 'Form Control',
        desc: 'A compact single-choice menu used when offering 4 or more predefined options.',
        tips: [
          'Use Radio Buttons instead when there are only 2–3 short options'
        ]
      },
      zh: {
        label: '下拉選單 (Select Dropdown)',
        short: '下拉選單',
        category: '表單元件',
        desc: '收納 4 個以上預設選項的單選清單，節省表單垂直空間。',
        tips: [
          '若選項只有 2–3 個，改用單選鈕（Radio）會更直覺易選'
        ]
      }
    },
    'Radio Group': {
      en: {
        label: 'Radio Button Group',
        category: 'Form Control',
        desc: 'A mutually exclusive set of visible options where users pick exactly one choice.',
        tips: [
          'Best for 2–4 short options that users benefit from comparing side-by-side'
        ]
      },
      zh: {
        label: '單選按鈕群組 (Radio Group)',
        short: '單選鈕群組',
        category: '表單元件',
        desc: '互斥的單選選項群組，將 2–4 個選項直接攤開呈現以利比較。',
        tips: [
          '永遠只能選取其中一項，且建議預設一個常見選項'
        ]
      }
    },
    'Checkbox': {
      en: {
        label: 'Checkbox Group',
        category: 'Form Control',
        desc: 'Independent multi-select toggles allowing users to choose zero, one, or multiple options.',
        tips: [
          'Use for multi-select lists or explicit opt-in confirmations'
        ]
      },
      zh: {
        label: '核取方塊群組 (Checkbox)',
        short: '多選核取方塊',
        category: '表單元件',
        desc: '彼此獨立的多選方塊，允許使用者複選多項條件或勾選同意條款。',
        tips: [
          '點擊文字標籤本身也應能觸發勾選，擴大操作熱區'
        ]
      }
    },
    'Toggle Switch': {
      en: {
        label: 'Toggle Switch',
        category: 'Form Control',
        desc: 'A binary on/off control representing an immediate system setting or preference.',
        tips: [
          'Use for instant settings; use Checkboxes when a separate Submit button is required'
        ]
      },
      zh: {
        label: '切換開關 (Toggle Switch)',
        short: '切換開關 Switch',
        category: '表單元件',
        desc: '代表「開啟／關閉」二元狀態的滑動開關，常見於系統設定與偏好切換。',
        tips: [
          '適合立即生效的設定；需搭配送出按鈕才生效的多選項則建議用 Checkbox'
        ]
      }
    },
    'Textarea': {
      en: {
        label: 'Textarea',
        category: 'Form Control',
        desc: 'A multi-line resizable text field for longer comments, project briefs, or messages.',
        tips: [
          'Set an initial height that signals expected response length (3–4 lines)'
        ]
      },
      zh: {
        label: '多行文字輸入區 (Textarea)',
        short: '多行文字框',
        category: '表單元件',
        desc: '支援換行與調整高度的長文輸入框，用於留言、備註或需求描述。',
        tips: [
          '預設高度設定為 3–4 行，視覺上暗示可輸入較長內容'
        ]
      }
    },
    'Mega Menu': {
      en: {
        label: 'Mega Menu',
        category: 'Navigation & Chrome',
        desc: 'An expanded multi-column dropdown panel triggered from the Navbar, organizing deep site hierarchies alongside featured promo cards.',
        tips: [
          'Use when a site has 10+ secondary pages across 3–4 categories',
          'Keep group headings scannable and avoid nesting flyouts inside mega menus'
        ]
      },
      zh: {
        label: '大型展開選單 (Mega Menu)',
        short: 'Mega Menu 大選單',
        category: '導覽與外框',
        desc: '從導覽列下方展開的多欄大型選單面板，適合收納深層分類架構並搭配精選推薦卡。',
        tips: [
          '網站子頁面超過 10 個且可分成 3–4 大類時特別適用',
          '避免在 Mega Menu 內再套多層次級滑出選單'
        ]
      }
    },
    'Carousel / Slider': {
      en: {
        label: 'Carousel / Slider',
        category: 'Gallery Pattern',
        desc: 'A horizontal frame switcher letting users cycle through multiple slides with arrow buttons and pagination indicators.',
        tips: [
          'Always provide explicit Prev/Next controls and dot indicators',
          'Avoid placing mission-critical CTAs exclusively on hidden slides'
        ]
      },
      zh: {
        label: '輪播圖區塊 (Carousel / Slider)',
        short: '輪播圖 Carousel',
        category: '展示版型',
        desc: '以左右切換或圓點指示器瀏覽多張投影片的橫向展示區，節省垂直頁面空間。',
        tips: [
          '務必提供明確的上一張／下一張按鈕與底部頁數圓點',
          '避免把最重要的轉換資訊藏在第 2、3 張之後'
        ]
      }
    },
    'Pagination Dots': {
      en: {
        label: 'Pagination Dots',
        category: 'Micro-Component',
        desc: 'Compact indicator dots beneath a carousel showing total slide count and the currently active slide.',
        tips: [
          'Highlight the active dot with elongated pill shape or high-contrast fill'
        ]
      },
      zh: {
        label: '輪播頁碼圓點 (Pagination Dots)',
        short: '分頁圓點',
        category: '微元件',
        desc: '位於輪播圖底部的指示點，用來顯示總張數與目前所在位置。',
        tips: [
          '目前啟用的圓點可以拉長成膠囊狀或填滿實心以強化辨識'
        ]
      }
    },
    'Masonry Grid': {
      en: {
        label: 'Masonry Grid',
        category: 'Gallery Pattern',
        desc: 'A staggered multi-column layout where items of varying heights pack tightly together without uniform row baselines.',
        tips: [
          'Best for photography portfolios, visual moodboards, and user-generated galleries',
          'Avoid when strict left-to-right chronological reading order matters'
        ]
      },
      zh: {
        label: '瀑布流網格 (Masonry Grid)',
        short: '瀑布流 Masonry',
        category: '展示版型',
        desc: '不等高卡片緊密交錯堆疊的多欄版型，消除混合比例圖片之間的尷尬空白。',
        tips: [
          '非常適合攝影作品集、靈感牆與圖文探索頁',
          '若需要嚴格的由左至右順序閱讀，則應改用標準 Card Grid'
        ]
      }
    },
    'Infinite Marquee': {
      en: {
        label: 'Infinite Marquee',
        category: 'Gallery Pattern',
        desc: 'A continuously scrolling horizontal ticker loop used for partner logos, press mentions, or ambient highlights.',
        tips: [
          'Pause motion on hover for readability and accessibility',
          'Keep animation speed gentle and smooth'
        ]
      },
      zh: {
        label: '無限跑馬燈 (Infinite Marquee)',
        short: '無限跑馬燈',
        category: '展示版型',
        desc: '無縫循環橫向捲動的動態展示列，常用於品牌牆、媒體報導或重點標籤輪播。',
        tips: [
          '滑鼠移入時務必暫停捲動以利閱讀與無障礙體驗',
          '移動速度保持平緩不刺眼'
        ]
      }
    },
    'Alert Banner': {
      en: {
        label: 'Alert Banner',
        category: 'System Feedback',
        desc: 'An inline contextual notice communicating Info, Success, Warning, or Error status inside a page or form.',
        tips: [
          'Use left accent border + clear heading to communicate severity at a glance'
        ]
      },
      zh: {
        label: '頁內狀態提示條 (Alert Banner)',
        short: '狀態提示條 Alert',
        category: '系統回饋',
        desc: '嵌入頁面或表單內的靜態提示框，區分資訊（Info）、成功（Success）、警告（Warning）與錯誤（Error）。',
        tips: [
          '透過左側粗色條與清楚標題一眼傳達訊息嚴重程度'
        ]
      }
    },
    'Skeleton Loader': {
      en: {
        label: 'Skeleton Loader',
        category: 'System State',
        desc: 'An animated low-fidelity wireframe placeholder mimicking upcoming content layout while data is loading.',
        tips: [
          'Reduces perceived wait time and prevents jarring layout shifts once data arrives'
        ]
      },
      zh: {
        label: '骨架屏載入器 (Skeleton Loader)',
        short: '骨架屏 Skeleton',
        category: '系統狀態',
        desc: '資料非同步載入期間顯示的微光灰塊佔位動畫，模擬即將呈現的卡片或文字結構。',
        tips: [
          '比單純轉圈圈更能降低等待焦慮，且可避免載入完成時畫面跳動'
        ]
      }
    },
    'Empty State': {
      en: {
        label: 'Empty State',
        category: 'System State',
        desc: 'A purposeful placeholder shown when a list, table, or workspace has zero items yet, pairing explanation with a primary action.',
        tips: [
          'Never leave a blank white void; guide users toward creating their first item'
        ]
      },
      zh: {
        label: '空狀態畫面 (Empty State)',
        short: '空狀態 Empty',
        category: '系統狀態',
        desc: '當列表尚無資料或篩選無結果時呈現的引導區塊，結合圖示、說明與下一步行動按鈕。',
        tips: [
          '切忌留下一片死白，應提供明確的「建立第一筆」或「清除篩選」入口'
        ]
      }
    },
    'Slide-over Drawer': {
      en: {
        label: 'Slide-over Drawer',
        category: 'Overlay Pattern',
        desc: 'A vertical overlay panel sliding in from the screen edge for secondary workflows, filters, carts, or detail inspectors.',
        tips: [
          'Better than a Modal when users need more vertical space or want to keep page context visible'
        ]
      },
      zh: {
        label: '側邊滑出抽屜 (Slide-over Drawer)',
        short: '側邊抽屜 Drawer',
        category: '覆蓋層元件',
        desc: '從畫面左緣或右緣滑出的垂直覆蓋面板，常用於進階篩選、購物車或詳細資料編輯。',
        tips: [
          '比置中 Modal 擁有更多垂直空間，且能保留主頁面上下文感'
        ]
      }
    },
    'App Shell': {
      en: {
        label: 'App Shell (Dashboard Layout)',
        category: 'Page Architecture',
        desc: 'The foundational SaaS/application frame combining a persistent left Sidebar Navigation with a scrollable main workspace.',
        tips: [
          'Keep navigation fixed on the left on desktop and collapse cleanly on tablet/mobile'
        ]
      },
      zh: {
        label: '應用程式外框 (App Shell)',
        short: '後台框架 App Shell',
        category: '頁面架構',
        desc: 'SaaS 與後台系統最常見的框架結構，結合左側導覽欄與右側可捲動的主工作區。',
        tips: [
          '桌機採左右雙欄常駐，平板與手機自動收合為上方導覽'
        ]
      }
    },
    'Sidebar Navigation': {
      en: {
        label: 'Sidebar Navigation',
        category: 'Navigation & Chrome',
        desc: 'A vertical navigation rail grouping application routes, counters, and system settings into scannable sections.',
        tips: [
          'Group links under muted section headers (e.g., Workspace, System)'
        ]
      },
      zh: {
        label: '左側導覽欄 (Sidebar Navigation)',
        short: '側邊導覽欄',
        category: '導覽與外框',
        desc: '垂直排列的應用程式主選單，適合容納較多層級與計數徽章（Badge）的功能入口。',
        tips: [
          '依功能性質分組並加上淺色小標題以利快速定位'
        ]
      }
    },
    'Chart / Data Viz': {
      en: {
        label: 'Chart / Data Visualization',
        category: 'Data Display',
        desc: 'A dedicated analytical card displaying trends, comparisons, or distributions (bar, line, or area charts).',
        tips: [
          'Highlight the peak or current period clearly and keep axis labels uncluttered'
        ]
      },
      zh: {
        label: '數據圖表區 (Chart / Data Viz)',
        short: '圖表區塊 Chart',
        category: '資料呈現',
        desc: '儀表板中呈現趨勢、分佈或週期比較的視覺化卡片（長條圖、折線圖、面積圖等）。',
        tips: [
          '突顯關鍵峰值或當期數據，座標軸標籤保持精簡不擁擠'
        ]
      }
    },
    'Progress Bar': {
      en: {
        label: 'Progress Bar',
        category: 'Data Display',
        desc: 'A linear horizontal indicator visualizing completion percentage toward a goal, quota, or milestone.',
        tips: [
          'Pair the bar with an explicit numeric percentage label'
        ]
      },
      zh: {
        label: '進度條 (Progress Bar)',
        short: '進度條 Progress',
        category: '資料呈現',
        desc: '以水平填滿比例直觀呈現任務完成度、配額使用率或階段進度。',
        tips: [
          '搭配明確的百分比數字標籤，避免只能目測'
        ]
      }
    },
    'Filter Bar': {
      en: {
        label: 'Filter & Toolbar Bar',
        category: 'Data Display',
        desc: 'A horizontal control strip above a data table or grid providing quick status pills, search, and bulk actions.',
        tips: [
          'Place directly above the dataset it controls so scope is unmistakable'
        ]
      },
      zh: {
        label: '篩選工具列 (Filter Bar)',
        short: '篩選工具列',
        category: '資料呈現',
        desc: '位於資料表格或列表正上方的控制列，整合狀態篩選膠囊、關鍵字搜尋與排序動作。',
        tips: [
          '緊貼所控制的資料表上方，讓使用者明確知道篩選作用範圍'
        ]
      }
    },
    'Data Table': {
      en: {
        label: 'Data Table',
        category: 'Data Display',
        desc: 'A structured multi-column grid for scanning, comparing, and managing records with status badges and pagination.',
        tips: [
          'Align text left, status badges center, and wrap in horizontal scroll on narrow screens'
        ]
      },
      zh: {
        label: '資料表格 (Data Table)',
        short: '資料表格 Table',
        category: '資料呈現',
        desc: '後台系統核心元件，以結構化行列呈現大量紀錄，常搭配狀態標籤與底部分頁器。',
        tips: [
          '文字靠左對齊、狀態標籤居中，行動版以橫向捲動容器保護欄位寬度'
        ]
      }
    },
    'Table Pagination': {
      en: {
        label: 'Table Pagination',
        category: 'Navigation & Chrome',
        desc: 'A footer bar beneath a Data Table displaying record range counts and numbered page navigation controls.',
        tips: [
          'Always show total item count alongside page numbers (e.g., Showing 1–4 of 24)'
        ]
      },
      zh: {
        label: '表格分頁器 (Table Pagination)',
        short: '分頁器 Pagination',
        category: '導覽與外框',
        desc: '位於資料表底部的頁碼控制列，顯示目前筆數範圍並提供上一頁／下一頁與頁碼跳轉。',
        tips: [
          '左側標示總筆數與當前範圍（如 Showing 1–4 of 24）提升掌控感'
        ]
      }
    },
    'Product Gallery': {
      en: {
        label: 'Product Gallery',
        category: 'E-Commerce Pattern',
        desc: 'A dedicated visual showcase pairing a large hero product image with selectable multi-angle thumbnails.',
        tips: [
          'Include multiple angles, scale-in-context shots, and dimension specs',
          'Support click/tap thumbnail switching without page reload'
        ]
      },
      zh: {
        label: '商品圖庫展示區 (Product Gallery)',
        short: '商品圖庫 Gallery',
        category: '電商版型',
        desc: '電商商品頁核心視覺區，由大尺寸主圖搭配下方或側邊的多角度縮圖切換列組成。',
        tips: [
          '建議涵蓋主視角、細節近拍、使用情境與尺寸規格圖',
          '點擊縮圖即時切換主圖，不重整頁面'
        ]
      }
    },
    'Thumbnail Strip': {
      en: {
        label: 'Thumbnail Strip',
        category: 'E-Commerce Pattern',
        desc: 'A row of compact image previews beneath the main product photo indicating available gallery views.',
        tips: [
          'Outline the active thumbnail clearly with a strong border'
        ]
      },
      zh: {
        label: '縮圖切換列 (Thumbnail Strip)',
        short: '縮圖切換列',
        category: '電商版型',
        desc: '位於商品主圖下方的迷你預覽圖列，讓買家快速瀏覽不同角度。',
        tips: [
          '目前檢視中的縮圖以粗框明確標示'
        ]
      }
    },
    'Buy Box': {
      en: {
        label: 'Buy Box (Purchase Panel)',
        category: 'E-Commerce Pattern',
        desc: 'The primary conversion column of a Product Detail Page grouping title, rating, price, variant selectors, and Add to Cart.',
        tips: [
          'Keep price, variant selection, and Add to Cart visible above the fold',
          'Reinforce confidence with shipping and return assurances directly below the CTA'
        ]
      },
      zh: {
        label: '商品購買決策區 (Buy Box)',
        short: '購買區 Buy Box',
        category: '電商版型',
        desc: '電商商品頁右側的轉換核心區，依序整合標題、評分、價格、規格選擇與加入購物車按鈕。',
        tips: [
          '確保價格、規格與「加入購物車」按鈕位於首屏可視範圍內',
          '按鈕下方補上免運、退換貨與保固資訊以降低購買猶豫'
        ]
      }
    },
    'Star Rating': {
      en: {
        label: 'Star Rating',
        category: 'Social Proof',
        desc: 'A compact 5-star score and review count link positioned near the product title to provide immediate quality validation.',
        tips: [
          'Always show both numeric score (4.8) and total review count (128)'
        ]
      },
      zh: {
        label: '星等評分 (Star Rating)',
        short: '星等評分',
        category: '社會認同',
        desc: '緊鄰商品標題的五星圖示、平均分數與評論數，提供第一時間的品質背書。',
        tips: [
          '同時標示平均分（4.8）與總評論數（128）最具可信度'
        ]
      }
    },
    'Price Display': {
      en: {
        label: 'Price Display',
        category: 'E-Commerce Pattern',
        desc: 'Prominent current pricing optionally paired with a strikethrough compare-at price and discount percentage badge.',
        tips: [
          'Make current price significantly bolder than the original strikethrough price'
        ]
      },
      zh: {
        label: '價格呈現列 (Price Display)',
        short: '價格顯示',
        category: '電商版型',
        desc: '突顯目前售價的視覺區塊，促銷時搭配刪除線原價與折扣百分比標籤。',
        tips: [
          '現行售價字級與粗細應遠高於原價刪除線'
        ]
      }
    },
    'Variant Swatches': {
      en: {
        label: 'Variant Swatches (Color & Size)',
        category: 'E-Commerce Pattern',
        desc: 'Visual color circles or tactile pill buttons allowing shoppers to pick product options without opening dropdowns.',
        tips: [
          'Display the currently selected swatch name in text next to the label',
          'Clearly mark out-of-stock variants with a diagonal slash or muted state'
        ]
      },
      zh: {
        label: '商品規格色票 (Variant Swatches)',
        short: '規格色票 Swatches',
        category: '電商版型',
        desc: '以視覺色圓或尺寸膠囊按鈕取代傳統下拉選單，讓買家直覺點選顏色、尺寸或版本。',
        tips: [
          '在標籤旁同步顯示目前選中的顏色名稱文字',
          '缺貨規格應以淡化或斜線狀態清楚區分'
        ]
      }
    },
    'Quantity Stepper': {
      en: {
        label: 'Quantity Stepper',
        category: 'Form Control',
        desc: 'A compact numeric counter with minus (−) and plus (+) buttons for adjusting order quantity.',
        tips: [
          'Enforce a minimum value of 1 and disable minus at the floor'
        ]
      },
      zh: {
        label: '數量加減器 (Quantity Stepper)',
        short: '數量加減器',
        category: '表單元件',
        desc: '附帶減號（−）與加號（+）按鈕的精巧數字調整器，常用於商品數量或人數選擇。',
        tips: [
          '設定最小值（如 1），達下限時防止負數輸入'
        ]
      }
    },
    'Rating Summary': {
      en: {
        label: 'Rating Summary & Distribution',
        category: 'Social Proof',
        desc: 'An aggregate review block showing overall score alongside 5★-to-1★ horizontal distribution bars and verified buyer quotes.',
        tips: [
          'Distribution bars help shoppers judge rating consensus at a glance'
        ]
      },
      zh: {
        label: '評分分佈與買家評論區 (Rating Summary)',
        short: '評分分佈區',
        category: '社會認同',
        desc: '整合總平均分、5★ 至 1★ 比例長條圖與已驗證買家評論的信任區塊。',
        tips: [
          '星等分佈條讓買家快速判斷評價是否集中或兩極化'
        ]
      }
    },
    'Product Grid': {
      en: {
        label: 'Related Products Shelf',
        category: 'E-Commerce Pattern',
        desc: 'A 4-column cross-sell or up-sell product card shelf encouraging continued discovery at the bottom of a PDP.',
        tips: [
          'Keep card metadata minimal: thumbnail, title, and price'
        ]
      },
      zh: {
        label: '相關商品推薦列 (Product Grid)',
        short: '相關商品推薦',
        category: '電商版型',
        desc: '位於商品頁底部的四欄推薦貨架，用於交叉銷售（Cross-sell）與延伸逛街動線。',
        tips: [
          '每張推薦卡保持極簡：縮圖、品名、價格三要素即可'
        ]
      }
    },
    'Sticky Add-to-Cart Bar': {
      en: {
        label: 'Sticky Add-to-Cart Bar (Mobile)',
        category: 'E-Commerce Pattern',
        desc: 'A persistent bottom bar on mobile viewports keeping product price and the Add to Cart button within thumb reach while scrolling.',
        tips: [
          'Essential on long mobile PDPs where the primary Buy Box scrolls out of view'
        ]
      },
      zh: {
        label: '手機底部固定購買列 (Sticky ATC Bar)',
        short: '底部固定購買列',
        category: '電商版型',
        desc: '專為手機版設計的底部浮動條，當買家往下滑看商品評論時，仍將價格與「加入購物車」固定於拇指熱區。',
        tips: [
          '在長版行動端商品頁可顯著提升轉換率'
        ]
      }
    },
    'Split-Screen Auth': {
      en: {
        label: 'Split-Screen Auth Layout',
        category: 'Auth Pattern',
        desc: 'A 50/50 authentication page pairing a focused sign-in/sign-up form on one side with brand visuals or social proof on the other.',
        tips: [
          'Stacks into a single focused form column on mobile screens',
          'Keep form fields minimal to maximize sign-up conversion'
        ]
      },
      zh: {
        label: '左右分割登入／註冊頁 (Split-Screen Auth)',
        short: '左右分割認證頁',
        category: '認證版型',
        desc: '50/50 雙欄帳號註冊／登入版型：左側專注於表單輸入，右側呈現品牌視覺或客戶見證建立信任。',
        tips: [
          '手機版自動收合為單欄專注表單',
          '減少非必要欄位以降低註冊阻力'
        ]
      }
    },
    'Social Login Group': {
      en: {
        label: 'Social Login Group (OAuth)',
        category: 'Auth Pattern',
        desc: 'One-click federated sign-in buttons (Google, GitHub, Apple) placed above email/password inputs to reduce friction.',
        tips: [
          'Place equal-width social buttons side-by-side above the email form'
        ]
      },
      zh: {
        label: '第三方登入按鈕群組 (Social Login)',
        short: '第三方登入群組',
        category: '認證版型',
        desc: '置於傳統信箱表單上方的單鍵 OAuth 登入（如 Google、GitHub），大幅降低新用戶註冊門檻。',
        tips: [
          '並排等寬呈現，視覺權重低於主要送出按鈕'
        ]
      }
    },
    'Social Login Divider': {
      en: {
        label: 'Text Divider ("or continue with")',
        category: 'Micro-Component',
        desc: 'A horizontal hairline rule centered with short text separating OAuth buttons from standard email/password fields.',
        tips: [
          'Use muted uppercase/monospace copy so it stays visually subtle'
        ]
      },
      zh: {
        label: '文字分隔線 (Text Divider)',
        short: '文字分隔線',
        category: '微元件',
        desc: '中段嵌入簡短提示（如「或使用信箱繼續」）的水平細線，用來區隔第三方登入與傳統表單。',
        tips: [
          '使用最淺文字灰階與細線，作為視覺過渡即可'
        ]
      }
    },
    'Password Strength Meter': {
      en: {
        label: 'Password Strength Meter',
        category: 'Form Control',
        desc: 'A real-time segmented bar beneath a password input providing immediate visual feedback on complexity.',
        tips: [
          'Combine color bars with an explicit text label (Weak / Fair / Good / Strong) for accessibility'
        ]
      },
      zh: {
        label: '密碼強度條 (Password Strength Meter)',
        short: '密碼強度條',
        category: '表單元件',
        desc: '緊接於密碼輸入框下方的分段式即時評估條，隨輸入內容即時回饋安全等級。',
        tips: [
          '除了顏色變化，務必搭配文字標籤（弱／中／強）兼顧色覺無障礙'
        ]
      }
    },
    'OTP Verification Input': {
      en: {
        label: 'OTP Verification Input',
        category: 'Form Control',
        desc: 'Segmented single-character input boxes (typically 4 or 6 digits) for SMS or authenticator verification codes.',
        tips: [
          'Auto-advance focus on digit entry and step back on Backspace',
          'Use inputmode="numeric" to trigger the numeric keypad on mobile'
        ]
      },
      zh: {
        label: 'OTP 驗證碼輸入格 (OTP Input)',
        short: 'OTP 驗證碼格',
        category: '表單元件',
        desc: '將 4 位或 6 位一次性驗證碼拆分為獨立單字方格，提升輸入辨識度與儀式感。',
        tips: [
          '輸入單碼後自動跳至下一格，按倒退鍵自動退回上一格',
          '設定 inputmode="numeric" 讓手機自動叫出數字鍵盤'
        ]
      }
    },
    '404 Error Page': {
      en: {
        label: '404 Error Page',
        category: 'System State',
        desc: 'A dedicated fallback page shown when a URL does not exist, pairing clear error messaging with recovery links.',
        tips: [
          'Always provide a clear path back to the Homepage or global Search'
        ]
      },
      zh: {
        label: '404 找不到頁面 (404 Error Page)',
        short: '404 錯誤頁',
        category: '系統狀態',
        desc: '當使用者造訪無效網址時呈現的系統引導頁，以友善語氣說明並提供返回首頁或站內搜尋入口。',
        tips: [
          '務必提供明確的返回首頁或站內搜尋按鈕，避免成為死胡同'
        ]
      }
    }
  };

  // --------------------------------------------------------------------------
  // 3. STATE & DOM REFERENCES
  // --------------------------------------------------------------------------
  let currentLang = 'en';
  try {
    const saved = localStorage.getItem('wf-arch-lang');
    if (saved === 'en' || saved === 'zh') currentLang = saved;
  } catch (_) {}

  const xrayToggle = document.getElementById('xrayToggle');
  const gridToggle = document.getElementById('gridToggle');
  const variantToggle = document.getElementById('variantToggle');
  const tooltip = document.getElementById('anatomyTooltip');
  const tooltipName = document.getElementById('tooltipName');
  const tooltipCat = document.getElementById('tooltipCat');

  const drawer = document.getElementById('inspectorDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const drawerCategory = document.getElementById('drawerCategory');
  const drawerName = document.getElementById('drawerName');
  const drawerTag = document.getElementById('drawerTag');
  const drawerDims = document.getElementById('drawerDims');
  const drawerDesc = document.getElementById('drawerDesc');
  const drawerTips = document.getElementById('drawerTips');
  const drawerCopyBtn = document.getElementById('drawerCopyBtn');
  const drawerShareBtn = document.getElementById('drawerShareBtn');
  const cmdBackdrop = document.getElementById('cmdBackdrop');
  const cmdInput = document.getElementById('cmdInput');
  const cmdList = document.getElementById('cmdList');
  let cmdCategory = 'all';
  let currentPage = 'landing';
  let currentViewport = 'desktop';

  function syncUrlHash() {
    const params = new URLSearchParams();
    params.set('page', currentPage);
    if (currentViewport !== 'desktop') params.set('vp', currentViewport);
    params.set('lang', currentLang);
    if (selectedEl && drawer.classList.contains('open')) {
      params.set('inspect', selectedEl.dataset.anatomy);
    }
    try {
      history.replaceState(null, '', '#' + params.toString());
    } catch (_) {}
  }

  function setViewport(mode, skipHash) {
    currentViewport = (mode === 'tablet' || mode === 'mobile') ? mode : 'desktop';
    document.body.classList.remove('vp-tablet', 'vp-mobile');
    if (currentViewport === 'tablet') document.body.classList.add('vp-tablet');
    if (currentViewport === 'mobile') document.body.classList.add('vp-mobile');

    document.querySelectorAll('[data-vp-btn]').forEach((btn) => {
      const active = btn.dataset.vpBtn === currentViewport;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    if (currentViewport === 'desktop') closeMobileNav();
    if (!skipHash) syncUrlHash();
  }

  const modalBackdrop = document.getElementById('demoModalBackdrop');
  const toastEl = document.getElementById('demoToast');

  let selectedEl = null;
  let toastTimer = null;

  // --------------------------------------------------------------------------
  // 4. LANGUAGE ENGINE (EN / 中文)
  // --------------------------------------------------------------------------
  function t(key) {
    return (UI_I18N[currentLang] && UI_I18N[currentLang][key]) || UI_I18N.en[key] || key;
  }

  function getAnatomyEntry(key) {
    const item = CATALOG[key];
    if (!item) {
      return { label: key, short: key, category: currentLang === 'zh' ? '介面元件' : 'Component', desc: '', tips: [] };
    }
    return item[currentLang] || item.en;
  }

  function refreshMetaButtons() {
    const xrayOn = document.body.classList.contains('xray-active');
    xrayToggle.setAttribute('aria-pressed', String(xrayOn));
    xrayToggle.innerHTML = `<span class="meta-dot"></span>${t(xrayOn ? 'meta.xrayOn' : 'meta.xrayOff')}`;

    if (gridToggle) {
      const gridOn = document.body.classList.contains('grid-active');
      gridToggle.setAttribute('aria-pressed', String(gridOn));
      gridToggle.innerHTML = `<span class="meta-dot"></span>${t(gridOn ? 'meta.gridOn' : 'meta.gridOff')}`;
    }

    const variantsVisible = !document.body.classList.contains('hide-variants');
    variantToggle.setAttribute('aria-pressed', String(variantsVisible));
    variantToggle.innerHTML = `<span class="meta-dot"></span>${t(variantsVisible ? 'meta.variantsOn' : 'meta.variantsOff')}`;
  }

  function renderDrawerForElement(el) {
    if (!el) return;
    const key = el.dataset.anatomy;
    const entry = getAnatomyEntry(key);
    const rect = el.getBoundingClientRect();

    drawerCategory.textContent = entry.category;
    drawerName.textContent = entry.label;
    if (drawerTag) drawerTag.textContent = `<${el.tagName.toLowerCase()}>`;
    if (drawerDims) drawerDims.textContent = `${Math.round(rect.width)} × ${Math.round(rect.height)} px`;
    drawerDesc.textContent = entry.desc;

    drawerTips.innerHTML = '';
    (entry.tips || []).forEach((tip) => {
      const li = document.createElement('li');
      li.textContent = tip;
      drawerTips.appendChild(li);
    });

    if (drawerCopyBtn) drawerCopyBtn.textContent = t('drawer.copy');
  }

  function applyLanguage(lang) {
    currentLang = lang === 'zh' ? 'zh' : 'en';
    document.documentElement.lang = currentLang === 'zh' ? 'zh-Hant' : 'en';
    try {
      localStorage.setItem('wf-arch-lang', currentLang);
    } catch (_) {}

    // Update language switch buttons
    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      const active = btn.dataset.langBtn === currentLang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    // Update text content for [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      const val = t(key);
      if (val) el.textContent = val;
    });

    // Update placeholders for [data-i18n-placeholder]
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      const val = t(key);
      if (val) el.setAttribute('placeholder', val);
    });

    // Update X-Ray overlay labels on every [data-anatomy] element
    document.querySelectorAll('[data-anatomy]').forEach((el) => {
      const key = el.dataset.anatomy;
      const entry = getAnatomyEntry(key);
      el.setAttribute('data-anatomy-label', currentLang === 'zh' ? (entry.short || entry.label) : key);
    });

    refreshMetaButtons();

    // If Inspector Drawer is open, immediately update its language
    if (selectedEl && drawer.classList.contains('open')) {
      renderDrawerForElement(selectedEl);
    }
    if (cmdBackdrop && cmdBackdrop.classList.contains('is-open')) {
      renderCmdList();
    }
    syncUrlHash();
  }

  document.addEventListener('click', (e) => {
    const langBtn = e.target.closest('[data-lang-btn]');
    if (langBtn) {
      applyLanguage(langBtn.dataset.langBtn);
      return;
    }

    // Viewport Preview Switcher (Desktop / Tablet / Mobile)
    const vpBtn = e.target.closest('[data-vp-btn]');
    if (vpBtn) {
      setViewport(vpBtn.dataset.vpBtn);
    }
  });

  // Mobile Hamburger Menu Drawer
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');

  function closeMobileNav() {
    if (!mobileNavDrawer || !mobileMenuBtn) return;
    mobileNavDrawer.classList.remove('is-open');
    mobileNavDrawer.setAttribute('aria-hidden', 'true');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileMenuBtn.textContent = '☰';
  }

  if (mobileMenuBtn && mobileNavDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const open = mobileNavDrawer.classList.toggle('is-open');
      mobileNavDrawer.setAttribute('aria-hidden', String(!open));
      mobileMenuBtn.setAttribute('aria-expanded', String(open));
      mobileMenuBtn.textContent = open ? '×' : '☰';
    });
  }

  // --------------------------------------------------------------------------
  // 5. X-RAY & VARIANT CONTROLS TOGGLES
  // --------------------------------------------------------------------------
  function toggleXRay() {
    document.body.classList.toggle('xray-active');
    refreshMetaButtons();
  }

  function toggleGrid() {
    document.body.classList.toggle('grid-active');
    refreshMetaButtons();
  }

  xrayToggle.addEventListener('click', toggleXRay);
  if (gridToggle) gridToggle.addEventListener('click', toggleGrid);

  // One-click Copy Spec in Inspector Drawer
  if (drawerCopyBtn) {
    drawerCopyBtn.addEventListener('click', () => {
      if (!selectedEl) return;
      const key = selectedEl.dataset.anatomy;
      const entry = getAnatomyEntry(key);
      const tag = `<${selectedEl.tagName.toLowerCase()}>`;
      const dims = drawerDims ? drawerDims.textContent : '';
      const tipsText = (entry.tips || []).map((tip) => `- ${tip}`).join('\n');
      const spec = `[${entry.category}] ${entry.label}\nHTML: ${tag} | Size: ${dims}\n${entry.desc}${tipsText ? '\n' + tipsText : ''}`;

      const markCopied = () => {
        drawerCopyBtn.textContent = t('drawer.copied');
        setTimeout(() => {
          drawerCopyBtn.textContent = t('drawer.copy');
        }, 1800);
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(spec).then(markCopied).catch(markCopied);
      } else {
        const ta = document.createElement('textarea');
        ta.value = spec;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        markCopied();
      }
    });
  }

  variantToggle.addEventListener('click', () => {
    document.body.classList.toggle('hide-variants');
    refreshMetaButtons();
  });

  // --------------------------------------------------------------------------
  // 6. NAVBAR PAGE SWITCHING (Landing / Article / Dashboard / E-Commerce / Auth / Tokens)
  // --------------------------------------------------------------------------
  function switchPage(pageId, skipScroll, skipHash) {
    const exists = document.querySelector(`.wf-page[data-page="${pageId}"]`);
    if (!exists) return;
    currentPage = pageId;
    document.querySelectorAll('.wf-page').forEach((page) => {
      page.classList.toggle('is-active', page.dataset.page === pageId);
    });
    document.querySelectorAll('[data-nav-target]').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.navTarget === pageId);
    });
    closeMobileNav();
    if (!skipScroll) window.scrollTo({ top: 0, behavior: 'smooth' });
    if (!skipHash) syncUrlHash();
  }

  document.addEventListener('click', (e) => {
    const navBtn = e.target.closest('[data-nav-target]');
    if (navBtn) {
      e.preventDefault();
      switchPage(navBtn.dataset.navTarget);
    }
  });

  // --------------------------------------------------------------------------
  // 7. INLINE VARIANT SWITCHERS (Navbar / Hero / Features)
  // --------------------------------------------------------------------------
  document.addEventListener('click', (e) => {
    const pill = e.target.closest('.variant-pill');
    if (!pill) return;

    const group = pill.dataset.variantGroup;
    const value = pill.dataset.variantValue;

    document.querySelectorAll(`.variant-pill[data-variant-group="${group}"]`).forEach((btn) => {
      btn.classList.toggle('is-active', btn === pill);
    });

    if (group === 'navbar') {
      const navbar = document.getElementById('siteNavbar');
      const searchBox = document.getElementById('navSearchBox');
      const announcement = document.getElementById('siteAnnouncement');
      const megaMenu = document.getElementById('megaMenuPanel');

      navbar.classList.toggle('wf-navbar--centered', value === 'centered');
      searchBox.style.display = value === 'search' ? 'inline-block' : 'none';
      announcement.style.display = value === 'standard' ? 'flex' : 'none';
      if (megaMenu) megaMenu.classList.toggle('is-open', value === 'megamenu');
      return;
    }

    document.querySelectorAll(`[data-variant-panel="${group}"]`).forEach((panel) => {
      panel.classList.toggle('is-active', panel.dataset.variantKey === value);
    });
  });

  // --------------------------------------------------------------------------
  // 8. INTERACTIVE WIREFRAME DEMOS (Accordion, Billing Toggle, Modal, Toast)
  // --------------------------------------------------------------------------
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.accordion-trigger');
    if (trigger) {
      const item = trigger.closest('.accordion-item');
      const isOpen = item.classList.toggle('is-open');
      trigger.querySelector('.accordion-icon').textContent = isOpen ? '−' : '+';
    }

    const billingBtn = e.target.closest('.billing-btn');
    if (billingBtn) {
      const mode = billingBtn.dataset.billing;
      document.querySelectorAll('.billing-btn').forEach((b) => b.classList.toggle('is-active', b === billingBtn));
      document.querySelectorAll('[data-price-monthly]').forEach((el) => {
        const val = mode === 'annual' ? el.dataset.priceAnnual : el.dataset.priceMonthly;
        el.innerHTML = `${val}<span> / mo</span>`;
      });
    }

    if (e.target.closest('#openModalBtn')) {
      modalBackdrop.classList.add('is-open');
    }
    if (e.target.closest('[data-close-modal]') || e.target === modalBackdrop) {
      modalBackdrop.classList.remove('is-open');
    }

    if (e.target.closest('#openToastBtn')) {
      toastEl.classList.add('is-open');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toastEl.classList.remove('is-open'), 3800);
    }

    // Tabs Switcher
    const tabBtn = e.target.closest('[data-tab-btn]');
    if (tabBtn) {
      const targetTab = tabBtn.dataset.tabBtn;
      const wrap = tabBtn.closest('.wf-tabs-wrap');
      if (wrap) {
        wrap.querySelectorAll('[data-tab-btn]').forEach((btn) => {
          const active = btn === tabBtn;
          btn.classList.toggle('is-active', active);
          btn.setAttribute('aria-selected', String(active));
        });
        wrap.querySelectorAll('[data-tab-panel]').forEach((panel) => {
          panel.classList.toggle('is-active', panel.dataset.tabPanel === targetTab);
        });
      }
    }

    // Form Toggle Switch
    const switchBtn = e.target.closest('#demoFormSwitch');
    if (switchBtn) {
      const next = switchBtn.getAttribute('aria-checked') !== 'true';
      switchBtn.setAttribute('aria-checked', String(next));
    }

    // Slide-over Drawer Open / Close
    const slideoverBackdrop = document.getElementById('demoSlideoverBackdrop');
    if (e.target.closest('#openSlideoverBtn') && slideoverBackdrop) {
      slideoverBackdrop.classList.add('is-open');
    }
    if (slideoverBackdrop && (e.target.closest('[data-close-slideover]') || e.target === slideoverBackdrop)) {
      slideoverBackdrop.classList.remove('is-open');
    }

    // Carousel Prev / Next / Dots
    const track = document.getElementById('carouselTrack');
    if (track) {
      const slidesCount = track.children.length;
      let idx = Number(track.dataset.slideIndex || 0);
      let changed = false;

      if (e.target.closest('#carouselPrev')) {
        idx = (idx - 1 + slidesCount) % slidesCount;
        changed = true;
      } else if (e.target.closest('#carouselNext')) {
        idx = (idx + 1) % slidesCount;
        changed = true;
      } else if (e.target.closest('[data-slide-to]')) {
        idx = Number(e.target.closest('[data-slide-to]').dataset.slideTo);
        changed = true;
      }

      if (changed) {
        track.dataset.slideIndex = String(idx);
        track.style.transform = `translateX(-${idx * 100}%)`;
        document.querySelectorAll('[data-slide-to]').forEach((dot) => {
          dot.classList.toggle('is-active', Number(dot.dataset.slideTo) === idx);
        });
      }
    }

    // Dashboard Filter Pills
    const dashFilter = e.target.closest('[data-dash-filter]');
    if (dashFilter) {
      const status = dashFilter.dataset.dashFilter;
      document.querySelectorAll('[data-dash-filter]').forEach((btn) => {
        btn.classList.toggle('is-active', btn === dashFilter);
      });
      document.querySelectorAll('#dashTableBody tr').forEach((row) => {
        row.style.display = status === 'all' || row.dataset.rowStatus === status ? '' : 'none';
      });
    }

    // E-Commerce PDP: Thumbnail Switcher
    const pdpThumb = e.target.closest('[data-pdp-thumb]');
    if (pdpThumb) {
      document.querySelectorAll('[data-pdp-thumb]').forEach((b) => b.classList.toggle('is-active', b === pdpThumb));
      const mainLabel = document.getElementById('pdpMainMediaLabel');
      if (mainLabel) mainLabel.textContent = pdpThumb.dataset.pdpThumb;
    }

    // E-Commerce PDP: Color Swatch Switcher
    const colorSwatch = e.target.closest('[data-color-swatch]');
    if (colorSwatch) {
      document.querySelectorAll('[data-color-swatch]').forEach((b) => b.classList.toggle('is-active', b === colorSwatch));
      const colorName = document.getElementById('pdpColorName');
      if (colorName) colorName.textContent = colorSwatch.dataset.colorSwatch;
    }

    // E-Commerce PDP: Size Pill Switcher
    const sizePill = e.target.closest('[data-size-pill]');
    if (sizePill) {
      document.querySelectorAll('[data-size-pill]').forEach((b) => b.classList.toggle('is-active', b === sizePill));
    }

    // E-Commerce PDP: Quantity Stepper
    if (e.target.closest('#qtyMinus') || e.target.closest('#qtyPlus')) {
      const valEl = document.getElementById('qtyValue');
      const addBtn = document.getElementById('pdpAddBtn');
      if (valEl) {
        let qty = Number(valEl.textContent) || 1;
        qty = e.target.closest('#qtyPlus') ? qty + 1 : Math.max(1, qty - 1);
        valEl.textContent = String(qty);
        if (addBtn) {
          const total = qty * 148;
          addBtn.textContent = currentLang === 'zh' ? `加入購物車 — $${total}` : `Add to Cart — $${total}`;
        }
      }
    }

    // E-Commerce PDP: Add to Cart Toast
    if (e.target.closest('#pdpAddBtn') || e.target.closest('#pdpStickyAddBtn')) {
      toastEl.classList.add('is-open');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toastEl.classList.remove('is-open'), 3800);
    }
  });

  // Live Email Validation Demo & Form Submit Toast
  const emailErrInput = document.getElementById('wfEmailErr');
  if (emailErrInput) {
    emailErrInput.addEventListener('input', () => {
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailErrInput.value.trim());
      emailErrInput.classList.toggle('wf-input--error', !valid);
      const errMsg = emailErrInput.parentElement.querySelector('.wf-error-msg');
      if (errMsg) errMsg.style.display = valid ? 'none' : 'block';
    });
  }

  const contactForm = document.getElementById('demoContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      toastEl.classList.add('is-open');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toastEl.classList.remove('is-open'), 3800);
    });
  }

  // --------------------------------------------------------------------------
  // 9. HOVER TOOLTIP & CLICK INSPECTOR DRAWER
  // --------------------------------------------------------------------------
  document.addEventListener('mousemove', (e) => {
    const target = e.target.closest('[data-anatomy]');
    if (!target || e.target.closest('.variant-bar') || e.target.closest('.meta-bar')) {
      tooltip.classList.remove('visible');
      return;
    }
    const key = target.dataset.anatomy;
    const entry = getAnatomyEntry(key);
    tooltipName.textContent = currentLang === 'zh' ? (entry.short || entry.label) : key;
    tooltipCat.textContent = entry.category;
    tooltip.style.left = `${Math.min(e.clientX + 14, window.innerWidth - 260)}px`;
    tooltip.style.top = `${Math.max(e.clientY - 34, 10)}px`;
    tooltip.classList.add('visible');
  });

  document.addEventListener('click', (e) => {
    if (
      e.target.closest('.meta-bar') ||
      e.target.closest('.variant-bar') ||
      e.target.closest('.inspector-drawer') ||
      e.target.closest('[data-close-modal]') ||
      e.target.closest('[data-close-slideover]')
    ) {
      return;
    }

    const target = e.target.closest('[data-anatomy]');
    if (!target) return;
    if (e.target.closest('[data-nav-target]') || e.target.closest('#mobileMenuBtn')) return;

    if (selectedEl) selectedEl.classList.remove('is-selected');
    selectedEl = target;
    selectedEl.classList.add('is-selected');

    renderDrawerForElement(target);
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    syncUrlHash();
  });

  function closeDrawer() {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    if (selectedEl) {
      selectedEl.classList.remove('is-selected');
      selectedEl = null;
    }
    syncUrlHash();
  }

  drawerClose.addEventListener('click', closeDrawer);

  // Copy Shareable Deep Link Button
  if (drawerShareBtn) {
    drawerShareBtn.addEventListener('click', () => {
      syncUrlHash();
      const url = window.location.href;
      const done = () => {
        drawerShareBtn.textContent = t('drawer.shared');
        setTimeout(() => { drawerShareBtn.textContent = t('drawer.share'); }, 1800);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(done).catch(done);
      } else {
        done();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 10. COMMAND PALETTE (⌘K) & ANATOMY GLOSSARY + SMART AUTO-JUMP
  // --------------------------------------------------------------------------
  function getCategoryBucket(catEn) {
    const c = (catEn || '').toLowerCase();
    if (c.includes('nav') || c.includes('chrome')) return 'nav';
    if (c.includes('hero') || c.includes('section') || c.includes('feature') || c.includes('gallery') || c.includes('editorial') || c.includes('conversion') || c.includes('social')) return 'layout';
    if (c.includes('typography') || c.includes('micro') || c.includes('media') || c.includes('action')) return 'type';
    if (c.includes('form') || c.includes('auth')) return 'form';
    if (c.includes('e-commerce')) return 'ecom';
    return 'data';
  }

  function jumpToAnatomy(key) {
    const target = document.querySelector(`[data-anatomy="${CSS.escape(key)}"]`);
    if (!target) return;

    // 1. Switch to the page containing this element
    const pageEl = target.closest('.wf-page');
    if (pageEl && pageEl.dataset.page) {
      switchPage(pageEl.dataset.page, true, true);
    }

    // 2. If inside a hidden variant panel, activate that variant!
    const variantPanel = target.closest('[data-variant-panel]');
    if (variantPanel) {
      const group = variantPanel.dataset.variantPanel;
      const val = variantPanel.dataset.variantKey;
      const pill = document.querySelector(`.variant-pill[data-variant-group="${group}"][data-variant-value="${val}"]`);
      if (pill) pill.click();
    }

    // 3. If it's the Mega Menu panel, activate Mega Menu navbar variant
    if (target.id === 'megaMenuPanel') {
      const mmPill = document.querySelector('.variant-pill[data-variant-group="navbar"][data-variant-value="megamenu"]');
      if (mmPill) mmPill.click();
    }

    // 4. Select, scroll, pulse, and open Inspector
    if (selectedEl) selectedEl.classList.remove('is-selected', 'anatomy-pulse');
    selectedEl = target;
    selectedEl.classList.add('is-selected', 'anatomy-pulse');
    setTimeout(() => target.classList.remove('anatomy-pulse'), 1200);

    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    renderDrawerForElement(target);
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    syncUrlHash();
  }

  function renderCmdList() {
    if (!cmdList) return;
    const q = (cmdInput ? cmdInput.value : '').trim().toLowerCase();
    const keys = Object.keys(CATALOG).filter((key) => {
      const item = CATALOG[key];
      const bucket = getCategoryBucket(item.en.category);
      if (cmdCategory !== 'all' && bucket !== cmdCategory) return false;
      if (!q) return true;
      const hay = `${key} ${item.en.label} ${item.en.category} ${item.en.desc} ${item.zh.label} ${item.zh.short || ''} ${item.zh.category} ${item.zh.desc}`.toLowerCase();
      return hay.includes(q);
    });

    cmdList.innerHTML = '';
    if (keys.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'cmd-empty';
      empty.textContent = currentLang === 'zh' ? '找不到符合條件的版型或元件' : 'No matching patterns found.';
      cmdList.appendChild(empty);
      return;
    }

    keys.forEach((key) => {
      const entry = getAnatomyEntry(key);
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'cmd-item';
      btn.innerHTML = `
        <div class="cmd-item-main">
          <span class="cmd-item-title">${entry.label}</span>
          <span class="cmd-item-desc">${entry.desc}</span>
        </div>
        <span class="cmd-item-meta">${entry.category}</span>
      `;
      btn.addEventListener('click', () => {
        closeCmdPalette();
        jumpToAnatomy(key);
      });
      cmdList.appendChild(btn);
    });
  }

  function openCmdPalette() {
    if (!cmdBackdrop) return;
    cmdBackdrop.classList.add('is-open');
    if (cmdInput) {
      cmdInput.value = '';
      setTimeout(() => cmdInput.focus(), 40);
    }
    renderCmdList();
  }

  function closeCmdPalette() {
    if (cmdBackdrop) cmdBackdrop.classList.remove('is-open');
  }

  if (cmdInput) cmdInput.addEventListener('input', renderCmdList);

  document.addEventListener('click', (e) => {
    if (e.target.closest('#openCmdBtn') || e.target.closest('#openGlossaryLink') || e.target.closest('#errOpenSearchBtn')) {
      e.preventDefault();
      openCmdPalette();
      return;
    }
    if (cmdBackdrop && e.target === cmdBackdrop) {
      closeCmdPalette();
      return;
    }
    const catBtn = e.target.closest('[data-cmd-cat]');
    if (catBtn) {
      cmdCategory = catBtn.dataset.cmdCat;
      document.querySelectorAll('[data-cmd-cat]').forEach((b) => b.classList.toggle('is-active', b === catBtn));
      renderCmdList();
    }
  });

  // --------------------------------------------------------------------------
  // 11. AUTH INTERACTIVE DEMOS (Password Strength Meter & OTP Auto-Advance)
  // --------------------------------------------------------------------------
  const authPwd = document.getElementById('authPassword');
  const pwdBars = document.querySelectorAll('#pwdMeterBars .pwd-bar');
  const pwdText = document.getElementById('pwdStrengthText');

  if (authPwd && pwdBars.length) {
    authPwd.addEventListener('input', () => {
      const v = authPwd.value;
      let score = 0;
      if (v.length >= 6) score++;
      if (v.length >= 10) score++;
      if (/[0-9]/.test(v) && /[A-Z]/.test(v)) score++;
      if (/[^A-Za-z0-9]/.test(v)) score++;

      const classes = ['', 'is-weak', 'is-fair', 'is-good', 'is-strong'];
      const labelsEn = ['—', 'Weak', 'Fair', 'Good', 'Strong'];
      const labelsZh = ['—', '弱', '普通', '良好', '強'];

      pwdBars.forEach((bar, i) => {
        bar.className = 'pwd-bar' + (i < score ? ' ' + classes[score] : '');
      });
      if (pwdText) {
        const lbl = currentLang === 'zh' ? labelsZh[score] : labelsEn[score];
        pwdText.textContent = (currentLang === 'zh' ? '強度：' : 'Strength: ') + lbl;
      }
    });
  }

  const otpBoxes = Array.from(document.querySelectorAll('.otp-box'));
  otpBoxes.forEach((box, idx) => {
    box.addEventListener('input', () => {
      box.value = box.value.replace(/\D/g, '').slice(0, 1);
      if (box.value && idx < otpBoxes.length - 1) otpBoxes[idx + 1].focus();
    });
    box.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !box.value && idx > 0) {
        otpBoxes[idx - 1].focus();
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (cmdBackdrop && cmdBackdrop.classList.contains('is-open')) closeCmdPalette();
      else openCmdPalette();
      return;
    }
    if (e.key === 'Escape') {
      closeCmdPalette();
      closeDrawer();
      modalBackdrop.classList.remove('is-open');
      const sb = document.getElementById('demoSlideoverBackdrop');
      if (sb) sb.classList.remove('is-open');
    }
    if ((e.key === 'x' || e.key === 'X') && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
      toggleXRay();
    }
    if ((e.key === 'g' || e.key === 'G') && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
      toggleGrid();
    }
  });

  // --------------------------------------------------------------------------
  // 12. INITIALIZE & RESTORE FROM DEEP-LINK URL HASH
  // --------------------------------------------------------------------------
  function restoreFromUrlHash() {
    const hash = window.location.hash.replace(/^#/, '');
    if (!hash) {
      applyLanguage(currentLang);
      return;
    }
    const params = new URLSearchParams(hash);
    const lang = params.get('lang');
    const page = params.get('page');
    const vp = params.get('vp');
    const inspect = params.get('inspect');

    applyLanguage(lang === 'zh' || lang === 'en' ? lang : currentLang);
    if (vp) setViewport(vp, true);
    if (page) switchPage(page, true, true);
    if (inspect) {
      setTimeout(() => jumpToAnatomy(inspect), 80);
    }
  }

  restoreFromUrlHash();
})();

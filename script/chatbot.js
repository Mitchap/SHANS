// ==========================================================================
// SHAN'S Support Bot - Standalone FAQ & Customer Care Chatbot Engine
// Extracted and adapted from nts-rgph-web-app architecture
// ==========================================================================

(function () {
    'use strict';

    let chatHistory = [];
    let isTyping = false;

    // Comprehensive decision-tree menu structure for SHAN'S Trade 'N Game Credits
    const botMenus = {
        main: {
            message: "👋 Welcome to SHAN'S TRADE 'N GAME CREDITS Support!\n\nI am your automated 24/7 assistant. How can I help you elevate your gaming experience today?",
            options: [
                { text: "🎮 How to Top-Up Game Credits", action: "topup_menu", icon: "🎮" },
                { text: "💳 Payment Methods & Verification", action: "payment_menu", icon: "💳" },
                { text: "⚡ Order Delivery & Status", action: "delivery_menu", icon: "⚡" },
                { text: "🛡️ Safety, Legitimacy & Reviews", action: "safety_menu", icon: "🛡️" },
                { text: "💎 Promos, Rates & Discounts", action: "promos_menu", icon: "💎" },
                { text: "💬 Talk to Human Support Agent", action: "agent_support", icon: "💬" }
            ]
        },

        // --- TOP-UP GUIDES ---
        topup_menu: {
            message: "🎮 Game Top-Up Guides\n\nSelect a game below for quick instructions on where to find your Player ID and how to place an order:",
            options: [
                { text: "Valorant Points (VP)", action: "topup_valorant", icon: "🎯" },
                { text: "Mobile Legends: Bang Bang (MLBB)", action: "topup_mlbb", icon: "🗡️" },
                { text: "Call of Duty: Mobile (CODM CP)", action: "topup_codm", icon: "🔫" },
                { text: "Genshin Impact & Honkai Star Rail", action: "topup_hoyoverse", icon: "🔮" },
                { text: "Other Games (LoL, Wild Rift, TFT, etc.)", action: "topup_others", icon: "🕹️" },
                { text: "⬅️ Back to Main Menu", action: "main", icon: "🏠" }
            ]
        },

        topup_valorant: {
            message: "🎯 Valorant Points (VP) Guide:\n\n✅ What is required:\n• Riot ID and Tagline (e.g., Player#1234)\n• Region must be Philippines (PH / SEA)\n\n⚡ How to order:\n1️⃣ Pick your preferred VP denomination.\n2️⃣ Provide your Riot ID + Tagline during checkout.\n3️⃣ Send payment via GCash/Maya and submit screenshot proof.\n4️⃣ VP will be credited directly to your account within 1-5 minutes!\n\n🔒 No password or Riot login details required!",
            options: [
                { text: "💳 View Payment Options", action: "payment_menu", icon: "💳" },
                { text: "⬅️ Back to Top-Up Menu", action: "topup_menu", icon: "🎮" },
                { text: "🏠 Main Menu", action: "main", icon: "🏠" }
            ]
        },

        topup_mlbb: {
            message: "🗡️ Mobile Legends: Bang Bang Diamonds Guide:\n\n✅ What is required:\n• User ID (numbers before parentheses)\n• Zone ID (4 or 5 digits in parentheses)\n• Example: 12345678 (1234)\n\n⚡ Features available:\n• Weekly Diamond Pass\n• Twilight Pass\n• Regular Diamonds (up to 6,000+ packs)\n• Starlight Membership\n\n💡 Tip: You can find both IDs by tapping your profile avatar in the upper left corner of the MLBB lobby.",
            options: [
                { text: "💳 Payment Methods", action: "payment_menu", icon: "💳" },
                { text: "⚡ Delivery Timeframe", action: "delivery_menu", icon: "⚡" },
                { text: "⬅️ Back to Top-Up Menu", action: "topup_menu", icon: "🎮" },
                { text: "🏠 Main Menu", action: "main", icon: "🏠" }
            ]
        },

        topup_codm: {
            message: "🔫 Call of Duty: Mobile (CP) Guide:\n\n✅ What is required:\n• Garena OpenID or Player UID\n• Server: Garena (PH/SEA)\n\n⚡ How to find your OpenID:\n1️⃣ Open CODM and go to Settings (Gear icon).\n2️⃣ Tap the 'OTHER' or 'LEGAL AND PRIVACY' tab.\n3️⃣ Locate your OpenID and tap 'Copy'.\n\n🛡️ Safe & fast direct top-up. No account access required!",
            options: [
                { text: "💳 View Payment Methods", action: "payment_menu", icon: "💳" },
                { text: "⬅️ Back to Top-Up Menu", action: "topup_menu", icon: "🎮" },
                { text: "🏠 Main Menu", action: "main", icon: "🏠" }
            ]
        },

        topup_hoyoverse: {
            message: "🔮 Genshin Impact & Honkai: Star Rail Guide:\n\n✅ Supported Products:\n• Genesis Crystals & Blessing of the Welkin Moon\n• Oneiric Shards & Express Supply Pass\n\n📋 Information needed:\n• In-game UID (bottom right of your screen)\n• Server selection (Asia / America / Europe / TW, HK, MO)\n\n⚡ 100% official direct top-up through authorized partner channels. No login needed!",
            options: [
                { text: "🛡️ Learn about Safety", action: "safety_menu", icon: "🛡️" },
                { text: "⬅️ Back to Top-Up Menu", action: "topup_menu", icon: "🎮" },
                { text: "🏠 Main Menu", action: "main", icon: "🏠" }
            ]
        },

        topup_others: {
            message: "🕹️ Other Supported Games:\n\nWe provide top-ups for over 15+ popular titles:\n• League of Legends: Riot Points (PC)\n• League of Legends: Wild Rift (Wild Cores)\n• Teamfight Tactics (TFT Coins)\n• Dragon Nest Mobile Cash (DNMC)\n• Zenless Zone Zero (Monochrome)\n• CrossFire (E-Coins)\n• Blood Strike (Gold & Strike Pass)\n• Undawn (Raven Coins)\n• Legends of Runeterra (Coins)\n• Magic Chess: Go Go (Diamonds)\n\n💡 Check the catalogue section on our home page for full details!",
            options: [
                { text: "💬 Ask Support About a Game", action: "agent_support", icon: "💬" },
                { text: "⬅️ Back to Top-Up Menu", action: "topup_menu", icon: "🎮" },
                { text: "🏠 Main Menu", action: "main", icon: "🏠" }
            ]
        },

        // --- PAYMENT METHODS ---
        payment_menu: {
            message: "💳 Payment Methods & Processing:\n\nWe support all major Philippine e-wallets and banks with zero extra fees:\n\n📱 E-Wallets:\n• GCash (Express Send & QR Ph)\n• Maya / PayMaya (Send Money & Scan QR)\n• ShopeePay\n\n🏦 Online Banking:\n• BDO Unibank\n• BPI (Bank of the Philippine Islands)\n• UnionBank of the Philippines\n• Any bank via QR Ph / InstaPay\n\n🎯 What would you like to know more about?",
            options: [
                { text: "📱 GCash & Maya Guide", action: "payment_ewallet", icon: "📱" },
                { text: "🏦 Bank Transfer & QR Ph", action: "payment_banks", icon: "🏦" },
                { text: "🧾 How to send payment proof", action: "payment_proof", icon: "🧾" },
                { text: "⬅️ Back to Main Menu", action: "main", icon: "🏠" }
            ]
        },

        payment_ewallet: {
            message: "📱 E-Wallet Payment Guide (GCash & Maya):\n\n1️⃣ Select GCash or Maya at payment.\n2️⃣ Scan our official QR Ph code or send to our verified business number.\n3️⃣ Always take a clear screenshot of the completed transaction receipt showing the Reference Number.\n4️⃣ Send the receipt screenshot to our chat or checkout form.\n\n⚡ Processing: Instant upon receipt verification (usually within 60 seconds)!",
            options: [
                { text: "🧾 Sending payment proof", action: "payment_proof", icon: "🧾" },
                { text: "⚡ Order Delivery Time", action: "delivery_menu", icon: "⚡" },
                { text: "⬅️ Back to Payment Menu", action: "payment_menu", icon: "💳" },
                { text: "🏠 Main Menu", action: "main", icon: "🏠" }
            ]
        },

        payment_banks: {
            message: "🏦 Online Bank Transfer & QR Ph:\n\n✅ Supported via InstaPay (Real-time):\n• BDO, BPI, UnionBank, RCBC, Metrobank, Landbank, Seabank, GoTyme, and Maya Bank.\n\n💡 Scan to Pay with QR Ph:\n• You can use any Philippine banking app to scan our unified QR Ph code.\n• Saves time and eliminates typos in account numbers!\n\n⚡ InstaPay transfers credit instantly 24/7.",
            options: [
                { text: "📱 E-Wallet options", action: "payment_ewallet", icon: "📱" },
                { text: "⬅️ Back to Payment Menu", action: "payment_menu", icon: "💳" },
                { text: "🏠 Main Menu", action: "main", icon: "🏠" }
            ]
        },

        payment_proof: {
            message: "🧾 Submitting Payment Proof:\n\nTo ensure swift order processing, please make sure your receipt shows:\n• Reference Number / Transaction ID\n• Date & exact timestamp\n• Amount paid\n• Sender & recipient details\n\n⚠️ Avoid cropped or blurry screenshots to prevent verification delays.",
            options: [
                { text: "⚡ How fast is delivery?", action: "delivery_menu", icon: "⚡" },
                { text: "⬅️ Back to Payment Menu", action: "payment_menu", icon: "💳" },
                { text: "🏠 Main Menu", action: "main", icon: "🏠" }
            ]
        },

        // --- DELIVERY & ORDER STATUS ---
        delivery_menu: {
            message: "⚡ Order Delivery & Turnaround:\n\n⏱️ Standard Delivery Speed:\n• 1 to 5 minutes on average after payment verification!\n• Up to 15 minutes during major game patch days, events, or peak evening hours.\n\n📦 Automated & Direct:\n• Credits are automatically dispatched directly to your in-game UID / Riot ID.\n• No need to log out of your game in most cases (restart game client if balance hasn't updated).",
            options: [
                { text: "❓ Haven't received my credits yet", action: "delivery_delay", icon: "❓" },
                { text: "🔄 Refund & Exchange Policy", action: "refund_policy", icon: "🔄" },
                { text: "💬 Check Order Status with Agent", action: "agent_support", icon: "💬" },
                { text: "⬅️ Back to Main Menu", action: "main", icon: "🏠" }
            ]
        },

        delivery_delay: {
            message: "❓ Credits Not Showing Up? Let's check:\n\n1️⃣ Restart your game client:\nOften the game cache needs a quick restart to reflect new balance.\n\n2️⃣ Check your entered ID:\nMake sure the Player UID or Server entered during checkout matched your account exactly.\n\n3️⃣ Server maintenance:\nOccasionally game publishers (e.g. Riot, Moonton) experience server lag during updates.\n\n💬 If 15 minutes have passed, please click 'Talk to Human Agent' below with your Reference Number!",
            options: [
                { text: "💬 Talk to Human Agent Now", action: "agent_support", icon: "💬" },
                { text: "🔄 Refund Policy", action: "refund_policy", icon: "🔄" },
                { text: "⬅️ Back to Delivery Menu", action: "delivery_menu", icon: "⚡" },
                { text: "🏠 Main Menu", action: "main", icon: "🏠" }
            ]
        },

        refund_policy: {
            message: "🔄 Refund & Compensation Policy:\n\n✅ 100% Money-Back Guarantee:\n• If we fail to deliver your credits due to stock outage or technical issue on our end, you are entitled to a full and immediate refund.\n\n⚠️ Note on User Errors:\n• Once game credits are successfully credited to the Player UID submitted, transactions cannot be reversed or refunded due to game publisher policies.\n• Please always double-check your ID before paying!",
            options: [
                { text: "🛡️ Safety & Legitimacy", action: "safety_menu", icon: "🛡️" },
                { text: "⬅️ Back to Delivery Menu", action: "delivery_menu", icon: "⚡" },
                { text: "🏠 Main Menu", action: "main", icon: "🏠" }
            ]
        },

        // --- SAFETY & LEGITIMACY ---
        safety_menu: {
            message: "🛡️ Safety & Legitimacy - Why Choose SHAN'S?\n\n🔒 100% Safe - No Passwords Ever:\n• We NEVER ask for your game password, email login, or authentication codes.\n• All top-ups are processed via official ID/UID direct-deposit channels.\n\n⭐ Trusted by Thousands of Filipino Gamers:\n• Over 5,000+ completed transactions across Valorant, MLBB, Genshin, and CODM.\n• Verified reviews and high customer satisfaction.\n• Registered trade with active community presence.\n\n❌ Zero Risk of Account Bans:\n• We strictly use legitimate regional distributor pins and official direct top-up APIs. No fraudulent credit cards or cracked vouchers.",
            options: [
                { text: "⭐ Read Customer Reviews", action: "customer_reviews", icon: "⭐" },
                { text: "💎 View Rates & Promos", action: "promos_menu", icon: "💎" },
                { text: "⬅️ Back to Main Menu", action: "main", icon: "🏠" }
            ]
        },

        customer_reviews: {
            message: "⭐ Customer Feedback & Testimonials:\n\n\"Super bilis ng transaction! Seconds lang pasok agad VP ko sa Valorant. Salamat SHAN'S!\" - Mitch V. ★★★★★\n\n\"Legit seller! Dito na ako lagi nagpapa-top up ng Weekly Pass sa MLBB. Mas mura pa sa in-game shop.\" - Jian M. ★★★★★\n\n\"Friendly support and very responsive. Legit 100% recommend to my squad.\" - Lei M. ★★★★★\n\n📍 Check out the Testimonials section on our landing page to read more verified feedback!",
            options: [
                { text: "🎮 How to Top-Up", action: "topup_menu", icon: "🎮" },
                { text: "⬅️ Back to Safety Menu", action: "safety_menu", icon: "🛡️" },
                { text: "🏠 Main Menu", action: "main", icon: "🏠" }
            ]
        },

        // --- PROMOS & RATES ---
        promos_menu: {
            message: "💎 Promos, Rates & Reseller Program:\n\n🏷️ Discounted Rates:\n• Our game credit packages are consistently 5% to 15% cheaper than official app stores (Google Play & Apple Store) because there are no app store surcharges!\n\n🤝 Reseller & Bulk Orders:\n• Are you a gaming guild leader or aspiring game top-up reseller?\n• We offer wholesale bulk pricing for high-volume buyers with priority dispatch.\n\n🎁 Seasonal Giveaways:\n• Follow our social channels for monthly skin giveaways and discount vouchers!",
            options: [
                { text: "🤝 Inquire about Reseller Program", action: "agent_support", icon: "🤝" },
                { text: "🎮 Browse Supported Games", action: "topup_menu", icon: "🎮" },
                { text: "⬅️ Back to Main Menu", action: "main", icon: "🏠" }
            ]
        },

        // --- HUMAN AGENT SUPPORT ---
        agent_support: {
            message: "💬 Contact SHAN'S Human Support Team:\n\nNeed assistance with a specific order, custom top-up, or reseller inquiry? Our support agents are ready to assist you!\n\n🕒 Support Hours:\n• Monday to Sunday: 9:00 AM – 12:00 AM Midnight (PHT)\n\n🌐 Official Channels:\n• Facebook Messenger: facebook.com/shansgamecredits\n• Discord Support: discord.gg/shansgaming\n• Telegram: @shanscredits\n• Email: support@shansgamecredits.com\n\n💡 Please include your Order Reference Number and Player ID when messaging for faster service!",
            options: [
                { text: "⚡ Order Delivery Questions", action: "delivery_menu", icon: "⚡" },
                { text: "💳 Payment Inquiries", action: "payment_menu", icon: "💳" },
                { text: "🏠 Return to Main Menu", action: "main", icon: "🏠" }
            ]
        }
    };

    // Keyword matching map for smart search / free-text typing fallback
    const keywordRoutes = [
        { keywords: ["valorant", "vp", "riot", "riot points"], action: "topup_valorant" },
        { keywords: ["mlbb", "mobile legends", "diamonds", "weekly pass", "starlight"], action: "topup_mlbb" },
        { keywords: ["codm", "call of duty", "cp", "cod points", "garena"], action: "topup_codm" },
        { keywords: ["genshin", "honkai", "star rail", "crystals", "shards", "welkin"], action: "topup_hoyoverse" },
        { keywords: ["topup", "top up", "how to buy", "buy", "order", "catalogue", "games"], action: "topup_menu" },
        { keywords: ["gcash", "maya", "paymaya", "bank", "payment", "bdo", "bpi", "qr ph", "qr"], action: "payment_menu" },
        { keywords: ["proof", "receipt", "screenshot", "reference"], action: "payment_proof" },
        { keywords: ["tagal", "delay", "not received", "status", "delivery", "pending", "arrival"], action: "delivery_delay" },
        { keywords: ["refund", "cancel", "exchange", "money back"], action: "refund_policy" },
        { keywords: ["legit", "safe", "scam", "ban", "trust", "reviews"], action: "safety_menu" },
        { keywords: ["promo", "discount", "cheap", "mura", "reseller", "wholesale"], action: "promos_menu" },
        { keywords: ["agent", "human", "facebook", "chat", "person", "admin", "contact", "support"], action: "agent_support" },
        { keywords: ["menu", "home", "start", "restart", "reset", "back"], action: "main" }
    ];

    // Add message to chat history
    function addMessage(text, isBot = true, options = []) {
        chatHistory.push({
            text: text,
            isBot: isBot,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            options: options
        });
        renderChat();
    }

    // Format structured message text (sections, bullet points, numbered items, paragraphs)
    function formatMessageText(text) {
        if (!text) return '';
        const sections = text.split('\n\n');

        let formatted = sections.map(section => {
            const lines = section.split('\n');

            // Bullet list or emoji-led lists
            if (lines.length > 1 && lines[0].match(/^[•✅🆘💡🎯📱🎮🚶😰💰🌍🕹️🗡️🔫🔮💳⚡🛡️💎⭐🕒🌐❌⚠️]/)) {
                const title = lines[0];
                const items = lines.slice(1).filter(l => l.trim());

                if (items.length > 0) {
                    return `
                        <div class="message-section">
                            <div class="section-title">${escapeHTML(title)}</div>
                            <div class="section-list">
                                ${items.map(item => `<div class="list-item">${escapeHTML(item)}</div>`).join('')}
                            </div>
                        </div>
                    `;
                }
            }

            // Numbered list (e.g. 1️⃣, 2️⃣)
            if (lines.length > 1 && lines.some(l => l.match(/^[0-9]️⃣/))) {
                return `
                    <div class="message-section">
                        ${lines.map(line => {
                            if (line.match(/^[0-9]️⃣/)) {
                                return `<div class="numbered-item">${escapeHTML(line)}</div>`;
                            }
                            return `<div class="section-title">${escapeHTML(line)}</div>`;
                        }).join('')}
                    </div>
                `;
            }

            // Regular paragraph with linebreaks
            return `<div class="message-paragraph">${escapeHTML(section).replace(/\n/g, '<br>')}</div>`;
        }).join('');

        return formatted;
    }

    function escapeHTML(str) {
        return str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // Render chat messages and interactive option pills
    function renderChat() {
        const container = document.getElementById('shansChatMessages');
        if (!container) return;

        let html = chatHistory.map((msg, index) => {
            const isLatest = (index === chatHistory.length - 1);
            return `
                <div class="chat-message ${msg.isBot ? 'bot' : 'user'}">
                    <div class="chat-avatar">
                        ${msg.isBot ? '<i class="fa-solid fa-robot"></i>' : '<i class="fa-solid fa-user"></i>'}
                    </div>
                    <div class="chat-content">
                        <div class="chat-bubble">
                            ${formatMessageText(msg.text)}
                        </div>
                        <div class="chat-time">${msg.time}</div>
                    </div>
                </div>
                ${msg.options && msg.options.length > 0 && isLatest ? `
                    <div class="chat-options">
                        ${msg.options.map(opt => `
                            <button type="button" class="chat-option-btn" data-action="${opt.action}">
                                <span class="option-icon">${opt.icon || '💬'}</span>
                                <span class="option-text">${escapeHTML(opt.text)}</span>
                            </button>
                        `).join('')}
                    </div>
                ` : ''}
            `;
        }).join('');

        // Typing indicator when bot is thinking
        if (isTyping) {
            html += `
                <div class="chat-message bot">
                    <div class="chat-avatar">
                        <i class="fa-solid fa-robot"></i>
                    </div>
                    <div class="chat-content">
                        <div class="chat-bubble">
                            <div class="shans-typing-indicator">
                                <span class="shans-typing-dot"></span>
                                <span class="shans-typing-dot"></span>
                                <span class="shans-typing-dot"></span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        container.innerHTML = html;

        // Attach option click listeners
        container.querySelectorAll('.chat-option-btn').forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                const action = this.dataset.action;
                const text = this.querySelector('.option-text').textContent.trim();
                handleUserChoice(text, action);
            });
        });

        // Smooth scroll to bottom
        container.scrollTop = container.scrollHeight;
    }

    // Handle user choice from buttons
    function handleUserChoice(choiceText, action) {
        addMessage(choiceText, false, []);

        isTyping = true;
        renderChat();

        setTimeout(() => {
            isTyping = false;
            const menu = botMenus[action];
            if (menu) {
                const message = typeof menu.message === 'function' ? menu.message() : menu.message;
                const options = menu.options.map(opt => ({
                    ...opt,
                    text: typeof opt.text === 'function' ? opt.text() : opt.text
                }));
                addMessage(message, true, options);
            } else {
                // Fallback to main menu
                addMessage("I'm sorry, I couldn't find that section. Let me take you back to the main menu.", true, botMenus.main.options);
            }
        }, 300);
    }

    // Handle free-form user text query
    function handleUserInput(queryText) {
        const trimmed = queryText.trim();
        if (!trimmed) return;

        addMessage(trimmed, false, []);

        isTyping = true;
        renderChat();

        setTimeout(() => {
            isTyping = false;
            const lower = trimmed.toLowerCase();

            // Match against keywordRoutes
            let matchedRoute = null;
            for (const route of keywordRoutes) {
                if (route.keywords.some(k => lower.includes(k))) {
                    matchedRoute = route;
                    break;
                }
            }

            if (matchedRoute && botMenus[matchedRoute.action]) {
                const menu = botMenus[matchedRoute.action];
                addMessage(menu.message, true, menu.options);
            } else {
                addMessage(
                    `Thank you for asking! I couldn't match "${trimmed}" directly, but here are the most frequent topics or you can speak with an agent:`,
                    true,
                    [
                        { text: "🎮 How to Top-Up", action: "topup_menu", icon: "🎮" },
                        { text: "💳 Payment Methods", action: "payment_menu", icon: "💳" },
                        { text: "⚡ Order Delivery", action: "delivery_menu", icon: "⚡" },
                        { text: "💬 Talk to Human Agent", action: "agent_support", icon: "💬" },
                        { text: "🏠 Main Menu", action: "main", icon: "🏠" }
                    ]
                );
            }
        }, 400);
    }

    // Restart conversation to main menu
    function restartChat() {
        chatHistory = [];
        const mainMenu = botMenus.main;
        addMessage(mainMenu.message, true, mainMenu.options);
    }

    // Build chatbot UI DOM elements dynamically if not already in document
    function initializeWidgetDOM() {
        if (document.getElementById('shansChatWidget')) return;

        // 1. Floating Launcher Button
        const launcher = document.createElement('button');
        launcher.id = 'shansChatLauncher';
        launcher.className = 'shans-chat-launcher';
        launcher.setAttribute('aria-label', 'Open SHAN\'S Support Chat');
        launcher.setAttribute('title', 'Chat with SHAN\'S Support');
        launcher.innerHTML = `
            <span class="launcher-icon-open"><i class="fa-solid fa-headset"></i></span>
            <span class="launcher-icon-close"><i class="fa-solid fa-xmark"></i></span>
            <span class="launcher-badge"></span>
        `;

        // 2. Chat Widget Window
        const widget = document.createElement('div');
        widget.id = 'shansChatWidget';
        widget.className = 'shans-chat-widget';
        widget.innerHTML = `
            <div class="shans-chat-header">
                <div class="shans-chat-header-info">
                    <div class="shans-bot-avatar">
                        <i class="fa-solid fa-robot"></i>
                    </div>
                    <div class="shans-bot-details">
                        <h3>SHAN'S Assistant</h3>
                        <span class="shans-bot-status">
                            <span class="status-dot"></span> Online • Instant Reply
                        </span>
                    </div>
                </div>
                <div class="shans-header-actions">
                    <button type="button" class="shans-header-btn" id="shansChatRestartBtn" title="Restart conversation">
                        <i class="fa-solid fa-rotate-right"></i>
                    </button>
                    <button type="button" class="shans-header-btn" id="shansChatCloseBtn" title="Close chat">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
            </div>

            <div id="shansChatMessages" class="shans-chat-messages">
                <!-- Dynamic messages and options rendered here -->
            </div>

            <div class="shans-chat-footer">
                <form id="shansChatForm" class="shans-chat-input-row" onsubmit="return false;">
                    <input
                        type="text"
                        id="shansChatInput"
                        class="shans-chat-input"
                        placeholder="Type a question or choose an option..."
                        autocomplete="off"
                    />
                    <button type="submit" id="shansChatSendBtn" class="shans-chat-send" title="Send message">
                        <i class="fa-solid fa-paper-plane"></i>
                    </button>
                </form>
                <p class="shans-chat-subtext">Powered by SHAN'S TRADE 'N GAME CREDITS</p>
            </div>
        `;

        document.body.appendChild(launcher);
        document.body.appendChild(widget);

        // Bind launcher toggle
        launcher.addEventListener('click', function () {
            const isOpen = widget.classList.toggle('open');
            launcher.classList.toggle('active', isOpen);
            if (isOpen) {
                const input = document.getElementById('shansChatInput');
                if (input && window.innerWidth > 768) input.focus();
                const container = document.getElementById('shansChatMessages');
                if (container) container.scrollTop = container.scrollHeight;
            }
        });

        // Bind close button
        document.getElementById('shansChatCloseBtn').addEventListener('click', function () {
            widget.classList.remove('open');
            launcher.classList.remove('active');
        });

        // Bind restart button
        document.getElementById('shansChatRestartBtn').addEventListener('click', function () {
            restartChat();
        });

        // Bind input submission
        const form = document.getElementById('shansChatForm');
        const input = document.getElementById('shansChatInput');
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const text = input.value;
            if (text.trim()) {
                input.value = '';
                handleUserInput(text);
            }
        });

        // Initialize greeting message
        restartChat();
    }

    // Start on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeWidgetDOM);
    } else {
        initializeWidgetDOM();
    }

    // Expose standalone global API for programmatic control
    window.ShansChatbot = {
        open: function () {
            const widget = document.getElementById('shansChatWidget');
            const launcher = document.getElementById('shansChatLauncher');
            if (widget) widget.classList.add('open');
            if (launcher) launcher.classList.add('active');
        },
        close: function () {
            const widget = document.getElementById('shansChatWidget');
            const launcher = document.getElementById('shansChatLauncher');
            if (widget) widget.classList.remove('open');
            if (launcher) launcher.classList.remove('active');
        },
        restart: restartChat,
        send: handleUserInput
    };
})();

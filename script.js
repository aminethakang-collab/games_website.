// Database Kamla faha: Jeux, PC Gamer, Consoles, Keyboards, Souris, Écrans & Accessoires
const products = [
    // --- 1. JEUX VIDEO REALISTES ---
    { id: 1, title: "Cyberpunk 2077: Phantom Liberty", price: 60, category: "tendance", tag: "Ray-Tracing Realism", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600" },
    { id: 2, title: "Red Dead Redemption 2", price: 35, category: "rockstar", tag: "Rockstar Games", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600" },
    { id: 3, title: "GTA V Premium Edition", price: 25, category: "rockstar", tag: "Rockstar Games", img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600" },
    { id: 4, title: "God of War Ragnarök", price: 50, category: "sony", tag: "Exclusif Sony", img: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600" },
    { id: 5, title: "Marvel's Spider-Man 2", price: 60, category: "sony", tag: "Exclusif Sony", img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600" },
    { id: 6, title: "The Last of Us Part II Remastered", price: 45, category: "sony", tag: "Exclusif Sony", img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600" },
    { id: 7, title: "Resident Evil 4 Remake", price: 45, category: "capcom", tag: "Capcom / RE", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600" },
    { id: 8, title: "Resident Evil Village", price: 35, category: "capcom", tag: "Capcom / RE", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600" },
    { id: 9, title: "Black Myth: Wukong", price: 60, category: "tendance", tag: "Tendance 🔥", img: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=600" },
    { id: 10, title: "Elden Ring: Shadow of Erdtree", price: 60, category: "tendance", tag: "Tendance 🔥", img: "https://images.unsplash.com/photo-1552824723-231362e84869?w=600" },
    { id: 11, title: "Call of Duty: Black Ops 6", price: 70, category: "tendance", tag: "Tendance 🔥", img: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600" },

    // --- 2. PC GAMER SETUPS ---
    { id: 101, title: "PC Gamer Beast (RTX 4090 + Ryzen 7 7800X3D)", price: 3499, category: "pc_gamer", tag: "Ultra Gaming PC", img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600" },
    { id: 102, title: "PC Gamer Pro (RTX 4070 Ti Super + i7 14700K)", price: 1999, category: "pc_gamer", tag: "Pro Gaming PC", img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600" },
    { id: 103, title: "PC Gamer Streamer (RTX 4060 Ti + 32GB RAM)", price: 1299, category: "pc_gamer", tag: "Mid Gaming PC", img: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=600" },

    // --- 3. CONSOLES DE JEU ---
    { id: 201, title: "PlayStation 5 Slim (1TB Edition)", price: 499, category: "consoles", tag: "Console Sony", img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600" },
    { id: 202, title: "Xbox Series X (1TB Black)", price: 499, category: "consoles", tag: "Console Xbox", img: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=600" },
    { id: 203, title: "Nintendo Switch OLED Model", price: 349, category: "consoles", tag: "Console Nintendo", img: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600" },
    { id: 204, title: "Steam Deck OLED 512GB", price: 549, category: "consoles", tag: "Console PC Portable", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600" },

    // --- 4. CLAVIERS GAMER (KEYBOARDS) ---
    { id: 301, title: "SteelSeries Apex Pro TKL Wireless", price: 249, category: "keyboards_mice", tag: "Clavier Rapid Trigger", img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600" },
    { id: 302, title: "Razer Huntsman V3 Pro Analog", price: 229, category: "keyboards_mice", tag: "Clavier Optique", img: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600" },
    { id: 303, title: "Logitech G PRO X TKL Lightspeed", price: 199, category: "keyboards_mice", tag: "Clavier E-Sports", img: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=600" },

    // --- 5. SOURIS GAMER (MICE) ---
    { id: 401, title: "Logitech G Pro X Superlight 2 (60g)", price: 159, category: "keyboards_mice", tag: "Souris 32K DPI", img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600" },
    { id: 402, title: "Razer Viper V3 Pro Wireless (54g)", price: 159, category: "keyboards_mice", tag: "Souris 8000Hz", img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600" },

    // --- 6. COMPOSANTS HARDWARE PC ---
    { id: 501, title: "NVIDIA GeForce RTX 4090 24GB", price: 1799, category: "pc_hardware", tag: "GPU 4K Ultra", img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600" },
    { id: 502, title: "AMD Ryzen 7 7800X3D CPU", price: 399, category: "pc_hardware", tag: "Processeur Gaming", img: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=600" },
    { id: 503, title: "Samsung 990 PRO SSD 2TB NVMe", price: 175, category: "pc_hardware", tag: "SSD 7450MB/s", img: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600" },

    // --- 7. ACCESSOIRES & ECRANS ---
    { id: 601, title: "ASUS ROG Swift OLED 27\" 240Hz", price: 899, category: "accessoires", tag: "Écran OLED 0.03ms", img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600" },
    { id: 602, title: "SteelSeries Arctis Nova Pro Wireless", price: 349, category: "accessoires", tag: "Casque ANC 3D", img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600" },
    { id: 603, title: "Secretlab TITAN Evo Gaming Chair", price: 549, category: "accessoires", tag: "Chaise Ergonomique", img: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=600" },
    { id: 604, title: "Tapis de Souris XXL RGB Gaming", price: 39, category: "accessoires", tag: "Deskmat Speed", img: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600" }
];

let cart = [];

// Affichage dyal les produits
function renderProducts(items) {
    const grid = document.getElementById('gamesGrid');
    if (!grid) return;
    
    grid.innerHTML = items.map(item => `
        <div class="game-card">
            <img src="${item.img}" alt="${item.title}" class="game-img">
            <div class="game-info">
                <span class="game-category">${item.tag}</span>
                <h3 class="game-title">${item.title}</h3>
                <div class="game-footer">
                    <span class="game-price">$${item.price}</span>
                    <button class="add-cart-btn" onclick="addToCart(${item.id})">
                        <i class="fa-solid fa-cart-plus"></i> Ajouter
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter Functions
function filterProducts(cat, btnElement) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');
    
    if (cat === 'all') {
        renderProducts(products);
    } else {
        renderProducts(products.filter(p => p.category === cat));
    }
}

// Search Function
document.getElementById('searchInput')?.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = products.filter(p => p.title.toLowerCase().includes(query) || p.tag.toLowerCase().includes(query));
    renderProducts(filtered);
});

// Cart Management
function addToCart(id) {
    const item = products.find(p => p.id === id);
    if (item) {
        cart.push(item);
        updateCart();
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function getTotalPrice() {
    return cart.reduce((sum, item) => sum + item.price, 0);
}

function updateCart() {
    document.getElementById('cartBadge').innerText = cart.length;
    const itemsDiv = document.getElementById('cartItems');
    
    itemsDiv.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <img src="${item.img}" alt="${item.title}">
            <div style="flex-grow: 1; padding-left: 10px;">
                <strong style="font-size: 0.9rem;">${item.title}</strong><br>
                <small style="color: #00ff88; font-weight: bold;">$${item.price}</small>
            </div>
            <i class="fa-solid fa-trash" style="color: #ff4757; cursor: pointer;" onclick="removeFromCart(${index})"></i>
        </div>
    `).join('');

    const total = getTotalPrice();
    document.getElementById('cartTotal').innerText = `$${total}`;

    renderPayPalButton();
}

function toggleCart() {
    document.getElementById('cartModal').classList.toggle('open');
}

// Payment Integrations
function renderPayPalButton() {
    const container = document.getElementById('paypal-button-container');
    if (!container) return;
    
    container.innerHTML = '';

    if (cart.length === 0) return;

    if (window.paypal) {
        paypal.Buttons({
            style: { layout: 'vertical', color: 'gold', shape: 'rect' },
            createOrder: function(data, actions) {
                return actions.order.create({
                    purchase_units: [{ amount: { value: getTotalPrice().toFixed(2) } }]
                });
            },
            onApprove: function(data, actions) {
                return actions.order.capture().then(function(details) {
                    alert('Paiement réussi b PayPal b ism ' + details.payer.name.given_name + ' !');
                    cart = [];
                    updateCart();
                    toggleCart();
                });
            }
        }).render('#paypal-button-container');
    }
}

function payWithStripe() {
    const total = getTotalPrice();
    if (total === 0) {
        alert('Votre panier est vide !');
        return;
    }
    alert(`Redirection vers Stripe pour régler $${total}...`);
}

document.addEventListener("DOMContentLoaded", () => {
    renderProducts(products);
});
// Your business details
const BUSINESS_CONFIG = {
  name: "AutomataWorldSG",
  whatsapp: "+6581183373",
  paynowUEN: "53497838W"
};

// Load products on home page
function loadProductGrid() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  grid.innerHTML = products.map(product => `
    <a href="product.html?id=${product.id}" class="product-card">
      <div class="product-image-placeholder">${product.image || "📦"}</div>
      <h3>${product.name}</h3>
      <p class="product-price">$${product.price}</p>
      <p class="product-age">Age ${product.ageGroup}</p>
    </a>
  `).join("");
}

// Load product detail page
function loadProductDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id"));
  const product = products.find(p => p.id === productId);

  if (!product) {
    document.body.innerHTML = "<h2>Product not found</h2>";
    return;
  }

  // Populate product details
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-description").textContent = product.description;
  document.getElementById("product-age").textContent = product.ageGroup;
  document.getElementById("product-price").textContent = `SGD $${product.price}`;
  document.getElementById("product-delivery").textContent = product.delivery;
  document.getElementById("product-image").textContent = product.image || "📦";

  // Populate features
  const featuresList = document.getElementById("product-features");
  featuresList.innerHTML = product.features.map(feature => `<li>${feature}</li>`).join("");

  // WhatsApp button
  const whatsappMsg = encodeURIComponent(
    `Hi ${BUSINESS_CONFIG.name}, I'm interested in the "${product.name}" for SGD $${product.price}. Can you confirm availability and delivery options?`
  );
  document.getElementById("whatsapp-btn").href = `https://wa.me/${BUSINESS_CONFIG.whatsapp.replace(/\s/g, "")}?text=${whatsappMsg}`;

  // PayNow button - generates static QR code link
  // You can customize this with your actual PayNow merchant link
  document.getElementById("paynow-btn").href = `https://www.paynow.sg/sg/paynow?uen=${BUSINESS_CONFIG.paynowUEN}&amount=${product.price}&ref=${product.id}-${product.name.replace(/\s/g, "-")}`;
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function() {
  if (window.location.pathname.includes("product.html")) {
    loadProductDetail();
  } else {
    loadProductGrid();
  }
});

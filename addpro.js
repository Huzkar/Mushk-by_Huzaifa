
const premiumProducts = [
  { name: "White oud",        price3ml: 580, price6ml: 999, price12ml: 1499, img: "img/premium/prd1.webp" },
  { name: "oud-e-junaid",     price3ml: 580, price6ml: 999, price12ml: 1499, img: "img/premium/n7.jpeg" },
  { name: "oud-ul-asal",      price3ml: 580, price6ml: 999, price12ml: 1499, img: "img/premium/n1.jpeg" },
  { name: "Harare",           price3ml: 580, price6ml: 999, price12ml: 1499, img: "img/premium/n2.jpeg" },
  { name: "Ameer-ul-oud",     price3ml: 580, price6ml: 999, price12ml: 1499, img: "img/premium/n3.jpeg" },
  { name: "Ameer-ul-oud",     price3ml: 580, price6ml: 999, price12ml: 1499, img: "img/premium/n4.jpeg" },
  { name: "Ameer-ul-oud",     price3ml: 580, price6ml: 999, price12ml: 1499, img: "img/premium/n5.jpeg" },
  { name: "Krigler elegentez",price3ml: 580, price6ml: 999, price12ml: 1499, img: "img/premium/n6.jpeg" }
];

const goodProducts = [
  
  { name: "Krigler elegentez", price3ml: 580, price6ml: 999, price12ml: 1499, img: "img/n11.jpeg" },
  { name: "Fragrance 2",       price3ml: 580, price6ml: 999, price12ml: 1499, img: "img/n12.jpeg" },
  { name: "Fragrance 3",       price3ml: 580, price6ml: 999, price12ml: 1499, img: "img/n13.jpeg" },
  { name: "Fragrance 4",       price3ml: 580, price6ml: 999, price12ml: 1499, img: "img/n14.jpeg" },
  { name: "Fragrance 4",       price3ml: 580, price6ml: 999, price12ml: 1499, img: "img/n15.jpeg" },
  { name: "Fragrance 4",       price3ml: 580, price6ml: 999, price12ml: 1499, img: "img/n16.jpeg" },
  { name: "Fragrance 5",       price3ml: 580, price6ml: 999, price12ml: 1499, img: "img/n17.jpeg" }

];

function createProductCard(product) {
  return `
    <div class="product">
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      
      <select class="price-dropdown">
        <option value="${product.price3ml}">3ml - Rs ${product.price3ml}</option>
        <option value="${product.price6ml}">6ml - Rs ${product.price6ml}</option>
        <option value="${product.price12ml}">12ml - Rs ${product.price12ml}</option>
      </select>

      <button onclick="redirectToOrderPageWithDropdown('${product.name}')">Order Now</button>

    </div>
  `;
}
function redirectToOrderPage(productName, price) {
  const url = `order.html?product=${encodeURIComponent(productName)}&price=${price}`;
  window.location.href = url;
}
function redirectToOrderPageWithDropdown(productName) {
  const selectedPrice = event.target.parentElement.querySelector('.price-dropdown').value;
  redirectToOrderPage(productName, selectedPrice);
}


function renderProducts() {
  const query = document.getElementById("searchInput").value.toLowerCase();

  const filteredPremium = premiumProducts.filter(p => p.name.toLowerCase().includes(query));
  const filteredGood = goodProducts.filter(p => p.name.toLowerCase().includes(query));

  document.getElementById("premiumList").innerHTML = filteredPremium.map(createProductCard).join("");
  document.getElementById("goodList").innerHTML = filteredGood.map(createProductCard).join("");
}

document.getElementById("searchInput").addEventListener("input", renderProducts);

// Initial rendering
renderProducts();


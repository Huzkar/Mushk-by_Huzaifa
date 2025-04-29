
const premiumProducts = [

  { name: "oud aromatic",        price3ml: 700, price6ml: 1200, price12ml: 2200, img: "img/premium/n4.jpeg" },
  { name: "silk musk",        price3ml: 700, price6ml: 1150, price12ml: 2100, img: "img/premium/silkmusk.jpeg" },
  { name: "musk-al-huid",        price3ml:750 , price6ml: 1500, price12ml: 3000, img: "img/premium/n4.jpeg" },
  { name: "musk-al-huid",        price3ml:450 , price6ml: 900, price12ml: 1700, img: "img/premium/n4.jpeg" },
  { name: "Ameer-ul-oud",     price3ml: 270, price6ml: 550, price12ml: 1000, img: "img/premium/Ameer-ul-oud.jpeg" },
  { name: "jannan",        price3ml:250 , price6ml: 500, price12ml: 900, img: "img/premium/jannan.jpeg" },
  { name: "versache pink",        price3ml:250 , price6ml: 500, price12ml: 900, img: "img/premium/versace.jpeg" },
  { name: "oud-e-junaid",     price3ml: 260, price6ml: 520, price12ml: 950, img: "img/premium/oud-e-junaid.jpeg" },
  { name: "purple oud",        price3ml:300 , price6ml: 600, price12ml: 1200, img: "img/premium/purpleoud.jpeg" },
  { name: "Bom Shell",        price3ml:230 , price6ml: 450, price12ml: 850, img: "img/premium/n4.jpeg" },
  { name: "Armani Mania",        price3ml:250 , price6ml: 500, price12ml: 1000, img: "img/premium/n4.jpeg" },
  { name: "Vanila 28",        price3ml:300 , price6ml: 600, price12ml: 1200, img: "img/premium/vanila.jpeg" },
  { name: "Urba pura",        price3ml:250 , price6ml: 500, price12ml: 900, img: "img/premium/n4.jpeg" },


  // { name: "White oud",        price3ml: 300, price6ml: 600, price12ml: 1200, img: "img/premium/whiteoud.jpeg" },
  // { name: "Harare",           price3ml: 580, price6ml: 999, price12ml: 1499, img: "img/premium/Harare.jpeg" },
  // { name: "oud-ul-asal",      price3ml: 580, price6ml: 999, price12ml: 1499, img: "img/premium/n1.jpeg" },
  // { name: "Ameer-ul-oud",     price3ml: 580, price6ml: 999, price12ml: 1499, img: "img/premium/n4.jpeg" },
  // { name: "Ameer-ul-oud",     price3ml: 580, price6ml: 999, price12ml: 1499, img: "img/premium/n5.jpeg" },
  // { name: "Krigler elegentez",price3ml: 580, price6ml: 999, price12ml: 1499, img: "img/premium/n6.jpeg" }
];

const goodProducts = [
  
  { name: "Husne Yousaf",        price3ml:160 , price6ml: 330, price12ml: 600, img: "img/good/husneyousaf.jpeg" },
  { name: "Gucci Rush",        price3ml:160 , price6ml: 330, price12ml: 600, img: "img/good/gucchirash.jpeg" },
  { name: "Ghulaf-e-Kaaba",        price3ml:160 , price6ml: 330, price12ml: 600, img: "img/good/Ghulaf-e-Kaaba.jpeg" },
  { name: "Nostrademis(N)",        price3ml:160 , price6ml: 330, price12ml: 600, img: "img/premium/n4.jpeg" },
  { name: "Formatia",        price3ml:160 , price6ml: 330, price12ml: 600, img: "img/premium/n4.jpeg" },
  { name: "Sabaya",        price3ml:160 , price6ml: 330, price12ml: 600, img: "img/good/sabaya.jpeg" },
  { name: "Havoe",        price3ml:160 , price6ml: 330, price12ml: 600, img: "img/premium/n4.jpeg" },



  // { name: "Krigler elegentez", price3ml: 580, price6ml: 999, price12ml: 1499, img: "img/n11.jpeg" },
  // { name: "Fragrance 2",       price3ml: 580, price6ml: 999, price12ml: 1499, img: "img/n12.jpeg" },
  // { name: "Fragrance 3",       price3ml: 580, price6ml: 999, price12ml: 1499, img: "img/n13.jpeg" },
  // { name: "Fragrance 4",       price3ml: 580, price6ml: 999, price12ml: 1499, img: "img/n14.jpeg" },
  // { name: "Fragrance 4",       price3ml: 580, price6ml: 999, price12ml: 1499, img: "img/n15.jpeg" },
  // { name: "Fragrance 4",       price3ml: 580, price6ml: 999, price12ml: 1499, img: "img/n16.jpeg" },
  // { name: "Fragrance 5",       price3ml: 580, price6ml: 999, price12ml: 1499, img: "img/n17.jpeg" }

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


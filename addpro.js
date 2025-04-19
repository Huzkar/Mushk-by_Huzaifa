
  const premiumProducts = [
    { name: "White oud", price: "nill", img: "img/premium/prd1.webp" },
    { name: "oud-e-junaid", price: "nill", img: "img/premium/prd2.jpg" },
    { name: "oud-ul-asal", price: "nill", img: "img/premium/prd3.webp" },
    { name: "Harare", price: "nill", img: "img/premium/prd3.webp" },
    { name: "Ameer-ul-oud", price: "nill", img: "img/premium/pdr5.webp" },
    { name: "Krigler elegentez", price: "nill", img: "img/premium/prd6.png" }
  ];

  const goodProducts = [
    { name: "Krigler elegentez", price: "nill", img: "img/img3.jpg" },
    { name: "Fragrance 2", price: 1500, img: "img/img3.jpg" },
    { name: "Fragrance 3", price: 800, img: "img/img3.jpg" },
    { name: "Fragrance 4", price: 1200, img: "img/img5.jpg" },
    { name: "Fragrance 5", price: 3500, img: "img/img5.jpg" }
  ];

  function createProductCard(product) {
    return `
      <div class="product">
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Price: Rs ${product.price}</p>
        <button onclick="redirectToOrderPage('${product.name}', ${product.price})">Order Now</button>
      </div>
    `;
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


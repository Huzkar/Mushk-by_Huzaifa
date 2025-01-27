function redirectToOrderPage(productName, price) {
    const url = `order.html?product=${encodeURIComponent(productName)}&price=${price}`;
    window.location.href = url;
}

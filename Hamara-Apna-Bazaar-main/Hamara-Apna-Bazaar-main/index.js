const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

// Popup
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

if (popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hide-popup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide-popup");
    }, 1000);
  });
}
// Search functionality
function searchProducts() {
  const searchQuery = document.getElementById('search-bar').value.toLowerCase();
  const products = document.querySelectorAll('.product');

  products.forEach(product => {
      const productName = product.getAttribute('data-name').toLowerCase();
      if (productName.includes(searchQuery)) {
          product.style.display = 'block';
      } else {
          product.style.display = 'none';
      }
  });
}


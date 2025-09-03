
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  const productCards = document.querySelectorAll('.product-card');

  const data = [
    'Appliance', 'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape',
    'Honeydew', 'Indian Fig', 'Jackfruit', 'Kiwi', 'Lemon', 'Mango', 'Nectarine',
    'Orange', 'Papaya', 'Quince', 'Raspberry', 'Strawberry', 'Tangerine', 'Ugli Fruit',
    'Vanilla', 'Watermelon', 'Xigua', 'Yellow Passion Fruit', 'Zucchini', 'adobe express'
  ];

  // ========== Auto-suggest as you type ==========
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = '';

    if (query) {
      const filteredData = data.filter(item => item.toLowerCase().includes(query));
      filteredData.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item;
        div.classList.add('search-suggestion');
        div.addEventListener('click', () => {
          searchInput.value = item;
          searchResults.innerHTML = '';
          searchResults.style.display = 'none';
          filterProducts(item); // Trigger filtering
        });
        searchResults.appendChild(div);
      });
      searchResults.style.display = 'block';
    } else {
      searchResults.style.display = 'none';
    }
  });

  // ========== Hide suggestion box when clicking outside ==========
  document.addEventListener('click', (event) => {
    if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
      searchResults.style.display = 'none';
    }
  });

  // ========== Filter product cards when pressing Enter ==========
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const searchTerm = searchInput.value.trim().toLowerCase();
      searchResults.innerHTML = '';
      searchResults.style.display = 'none';
      filterProducts(searchTerm);
    }
  });

  // ========== Function to filter and show matching product cards ==========
  function filterProducts(searchTerm) {
    let found = false;

    productCards.forEach(card => {
      const productName = card.textContent.toLowerCase();
      if (productName.includes(searchTerm)) {
        card.style.display = 'block';
        found = true;
      } else {
        card.style.display = 'none';
      }
    });

    // Show message if nothing found
    if (!found) {
      const noResult = document.createElement('div');
      noResult.textContent = 'No products found.';
      noResult.classList.add('no-results');
      searchResults.innerHTML = '';
      searchResults.appendChild(noResult);
      searchResults.style.display = 'block';
    }
  }
});

// ========== Banner Auto Slide ==========
let currentIndex = 0;

function slideBanner() {
    const banner = document.querySelector(".display-banner");

    currentIndex++;
    if (currentIndex >= banner.children.length) {
        currentIndex = 0; // Loop back to the first image
    }

    banner.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

// Auto-slide every 3 seconds
setInterval(slideBanner, 3000);

// ========== Owl Carousel ==========
$(document).ready(function () {
    $('.carousel1').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000, // Corrected: was autoplayTimeOut
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

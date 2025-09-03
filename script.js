// Search function
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  const data = [
      'Apple',
      'Banana',
      'Cherry',
      'Date',
      'Elderberry',
      'Fig',
      'Grape',
      'Honeydew',
      'Indian Fig',
      'Jackfruit',
      'Kiwi',
      'Lemon',
      'Mango',
      'Nectarine',
      'Orange',
      'Papaya',
      'Quince',
      'Raspberry',
      'Strawberry',
      'Tangerine',
      'Ugli Fruit',
      'Vanilla',
      'Watermelon',
      'Xigua',
      'Yellow Passion Fruit',
      'Zucchini',
      'adobe express'
  ];

  searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      searchResults.innerHTML = '';

      if (query) {
          const filteredData = data.filter(item => item.toLowerCase().includes(query));
          filteredData.forEach(item => {
              const div = document.createElement('div');
              div.textContent = item;
              div.addEventListener('click', () => {
                  searchInput.value = item;
                  searchResults.innerHTML = '';
                  searchResults.style.display = 'none';
              });
              searchResults.appendChild(div);
          });
          searchResults.style.display = 'block';
      } else {
          searchResults.style.display = 'none';
      }
  });

  document.addEventListener('click', (event) => {
      if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
          searchResults.style.display = 'none';
      }
  });
});

function nrWrapper() {
    var i, u, d, f;
    try {
      u = this, i = [...arguments], d = "function" == typeof n ? n(i, u) : n || {}
    } catch (t) {
      c([t, "", [i, u, a], d], e)
    }
    o(r + "start", [i, u, a], d, s);
    try {
      return f = t.apply(u, i)
    } catch (e) {
      throw o(r + "err", [i, u, e], d, s), e
    } finally {
      o(r + "end", [i, u, f], d, s)
    }
  }

let currentIndex = 0;

function slideBanner() {
    const banner = document.querySelector(".display-banner");
    currentIndex++;

    if (currentIndex >= banner.children.length) {
        currentIndex = 0; // Loop back to first image
    }

    banner.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

// Auto-slide every 3 seconds
setInterval(slideBanner, 3000);
  // owl carousel script
  $('.carousel1').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
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

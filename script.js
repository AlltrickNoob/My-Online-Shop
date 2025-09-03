document.addEventListener("DOMContentLoaded", () => {
  const categoryFilter = document.getElementById("category-filter");
  const clearFiltersBtn = document.getElementById("clear-filters");
  const productCards = document.querySelectorAll(".product-card");

  categoryFilter.addEventListener("change", () => {
    const selected = categoryFilter.value.toLowerCase();

    productCards.forEach(card => {
      const text = card.textContent.toLowerCase();

      if (selected === "all" || text.includes(selected)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });

  clearFiltersBtn.addEventListener("click", () => {
    categoryFilter.value = "all";
    productCards.forEach(card => {
      card.style.display = "block";
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".scroll-product-section .product-card");
  const loadMoreBtn = document.getElementById("load-more-btn");
  let visibleCount = 6;

  function showCards() {
    cards.forEach((card, index) => {
      card.style.display = index < visibleCount ? "block" : "none";
    });

    if (visibleCount >= cards.length) {
      loadMoreBtn.style.display = "none";
    }
  }

  loadMoreBtn.addEventListener("click", () => {
    visibleCount += 6;
    showCards();
  });

  showCards(); // Initial call
});

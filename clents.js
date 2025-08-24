const filterButtons = document.querySelectorAll(".filter-btn");
const clientCards = document.querySelectorAll(".card-container .client-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active state from all buttons
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    clientCards.forEach(card => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".cards .card");
    const nextBtn = document.querySelector(".btn.next");
    const prevBtn = document.querySelector(".btn.prev");

    let currentIndex = 0; 
    const cardsPerPage = 2; // ✅ shows 2 testimonials at a time

    function showCards() {
      cards.forEach((card, index) => {
        if (index >= currentIndex && index < currentIndex + cardsPerPage) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });

      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex + cardsPerPage >= cards.length;
    }

    nextBtn.addEventListener("click", function () {
      if (currentIndex + cardsPerPage < cards.length) {
        currentIndex += cardsPerPage;
        showCards();
      }
    });

    prevBtn.addEventListener("click", function () {
      if (currentIndex - cardsPerPage >= 0) {
        currentIndex -= cardsPerPage;
        showCards();
      }
    });

    // Initialize first view
    showCards();
  });
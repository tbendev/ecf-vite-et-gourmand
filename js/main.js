// MENU BURGER - MOBILE
const burgerToggle = document.getElementById("mobile-nav");
const mainNav = document.getElementById("main-nav");
const navIcons = document.querySelectorAll(".nav-icon");

if (burgerToggle && mainNav) {
  burgerToggle.addEventListener("click", () => {
    mainNav.classList.toggle("is-open");

    const isExpanded = burgerToggle.getAttribute("aria-expanded");
    if (isExpanded === "false") {
      burgerToggle.setAttribute("aria-expanded", "true");
    } else {
      burgerToggle.setAttribute("aria-expanded", "false");
    }

    navIcons.forEach((icon) => {
      icon.toggleAttribute("hidden");
    });
  });
}

// CARROUSEL - ACCUEIL
const trackElement = document.querySelector(".carousel-track");

const reviewsData = [
  {
    id: 1,
    name: "Marc.T",
    rating: 5,
    text: "Julie et José ont géré le buffet de notre événement d'entreprise avec brio. Produits frais, présentation soignée et service très pro. Nos invités ont adoré !",
  },
  {
    id: 2,
    name: "Sopie.M",
    rating: 4,
    text: "Génial",
  },
  {
    id: 3,
    name: "Antoine & Léo",
    rating: 4.5,
    text: "Nous avions demandé un menu 100% sur-mesure pour notre réception et le défi a été relevé haut la main. C'était original, copieux et vraiment très gourmand du début à la fin. Un grand merci",
  },
  {
    id: 4,
    name: "Pierre.R",
    rating: 1,
    text: "Un buffet magnifique pour notre mariage. Julie et José ont été à l'écoute et les produits étaient exceptionnels.",
  },
  {
    id: 5,
    name: "Julie.L",
    rating: 4.5,
    text: "Prestation au top pour le séminaire de notre entreprise. Tout le monde s'est régalé, une organisation millimétrée !",
  },
  {
    id: 6,
    name: "Margot.D",
    rating: 5,
    text: "Un service traiteur irréprochable pour notre événement, les invités ont adoré !",
  },
];

const generateStars = (rating) => {
  let starsHTML = "";
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  let emptyStars = 5 - fullStars;
  if (hasHalfStar) {
    emptyStars = emptyStars - 1;
  }

  for (let i = 0; i < fullStars; i++) {
    starsHTML += `<img src="./assets/icons/icon-star-filled.svg" height="24" width="24" alt="" aria-hidden="true">`;
  }
  if (hasHalfStar) {
    starsHTML += `<img src="./assets/icons/icon-star-half.svg" height="24" width="24" alt="" aria-hidden="true">`;
  }
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += `<img src="./assets/icons/icon-star-empty.svg" height="24" width="24" alt="" aria-hidden="true">`;
  }
  return starsHTML;
};

const createReviewCard = (review) => {
  return `
        <article class="review-card swiper-slide bg-dark">
            <div class="review-header">
                <h3 class="review-name">${review.name}</h3>
                <div class="stars-container" role="img" aria-label="Note de ${review.rating} sur 5">
                    ${generateStars(review.rating)}
                </div>
            </div>
            <div class="review-body">
                <p class="review-text">${review.text}</p>
            </div>
        </article>
    `;
};

if (trackElement) {
  reviewsData.forEach((review) => {
    let cardHTML = createReviewCard(review);
    trackElement.innerHTML += cardHTML;
  });

  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 32,
    centeredSlides: true,
    grabCursor: true,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
  });
}

// ACCORDÉONS FILTRES / BOISSONS - MENUS
const accordionButtons = document.querySelectorAll(".btn-title[aria-controls]");

accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("aria-controls");
    const targetContent = document.getElementById(targetId);

    if (targetContent) {
      const isExpanded = button.getAttribute("aria-expanded") === "true";

      button.setAttribute("aria-expanded", !isExpanded);
      targetContent.hidden = isExpanded;
    }
  });
});

// SÉLECTEUR DE QUANTITÉ - MENUS / FILTRES 
document.addEventListener("DOMContentLoaded", () => {
  const btnDecrease = document.querySelector(
    'button[aria-label="Diminuer le nombre de personnes"]',
  );
  const btnIncrease = document.querySelector(
    'button[aria-label="Augmenter le nombre de personnes"]',
  );
  const qtyValue = document.querySelector(".qty-value");

  if (btnDecrease && btnIncrease && qtyValue) {
    btnIncrease.addEventListener("click", () => {
      let currentQty = parseInt(qtyValue.textContent, 10);
      qtyValue.textContent = currentQty + 1;
    });

    btnDecrease.addEventListener("click", () => {
      let currentQty = parseInt(qtyValue.textContent, 10);
      if (currentQty > 1) {
        qtyValue.textContent = currentQty - 1;
      }
    });
  }
});

// CURSEUR PRIX - MENUS / FILTRES 
const priceRange = document.getElementById("price-range");
const currentPrice = document.getElementById("current-price");

if (priceRange && currentPrice) {
  priceRange.addEventListener('input', () => {
    currentPrice.textContent = priceRange.value;
  });
}
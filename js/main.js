// MENU BURGER - MOBILE
// Sélection des éléments
const burgerToggle = document.getElementById("mobile-nav");
const mainNav = document.getElementById("main-nav");
const navIcons = document.querySelectorAll(".nav-icon");

burgerToggle.addEventListener("click", () => {
  // Affichage navigation
  mainNav.classList.toggle("is-open");

  // Maj RGAA accessibilité
  const isExpanded = burgerToggle.getAttribute("aria-expanded");
  if (isExpanded === "false") {
    burgerToggle.setAttribute("aria-expanded", "true");
  } else {
    burgerToggle.setAttribute("aria-expanded", "false");
  }

  // Alterne les icônes burger / croix
  navIcons.forEach((icon) => {
    icon.toggleAttribute("hidden");
  });
});

// REVIEWS CARDS
// Fausse donnée le temps d'avoir une base de donnée
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
    text: "Une prestation impeccable ! Les bouchées apéritives étaient un délice. Je recommande les yeux fermés.",
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
    rating: 4,
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

const trackElement = document.querySelector(".carousel-track");

// Génération des étoiles en fonction de la note
const generateStars = (rating) => {
  let starsHTML = "";

  // Nombre d'étoiles pleines
  const fullStars = Math.floor(rating);

  // Demi-étoile
  const hasHalfStar = rating % 1 !== 0;

  // Combien d'étoiles vides
  let emptyStars = 5 - fullStars;

  if (hasHalfStar) {
    emptyStars = emptyStars - 1;
  }

  // Ajout étoiles pleines
  for (let i = 0; i < fullStars; i++) {
    starsHTML += `<img src="./assets/icons/icon-star-filled.svg" height="24" width="24" alt="" aria-hidden="true">`;
  }

  // Ajout demi-étoile
  if (hasHalfStar) {
    starsHTML += `<img src="./assets/icons/icon-star-half.svg" height="24" width="24" alt="" aria-hidden="true">`;
  }

  // Ajout étoiles vides
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += `<img src="./assets/icons/icon-star-empty.svg" height="24" width="24" alt="" aria-hidden="true">`;
  }

  return starsHTML;
};

// Fonction qui prépare la structure HTML d'un avis
const createReviewCard = (review) => {
  return `
        <article class="review-card">
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

// Boucle pour afficher tous les avis dans le carrousel
reviewsData.forEach((review) => {
  let cardHTML = createReviewCard(review);
  trackElement.innerHTML += cardHTML;
});

window.addEventListener("DOMContentLoaded", () => {
  // Animazione Hero
  const wandering = document.querySelector(".hero-wandering");
  const italy = document.querySelector(".hero-italy");

  if (wandering && italy) {
    // entra "Wandering"
    setTimeout(() => {
      wandering.style.left = "0";
      wandering.style.opacity = "1";
    }, 100);

    // entra "Italy.com"
    setTimeout(() => {
      italy.style.right = "0";
      italy.style.opacity = "1";
    }, 400);

    // posizionamento finale
    setTimeout(() => {
      wandering.style.transform = "translate(-10px, -20px)";
      italy.style.transform = "translate(10px, 20px)";
    }, 1500);
  }

  // -----------------------------
  // Carousel universale (desktop only)
  // -----------------------------
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel) => {
    // Disattiva su mobile
    if (window.innerWidth <= 768) return;

    const items = carousel.querySelectorAll(".carousel-item");
    let currentIndex = 0;
    const totalItems = items.length;
    const stepTime = 3000;

    function showItem(index) {
      items.forEach((item, i) => {
        item.classList.remove("front");
        if (i === index) item.classList.add("front");
      });
    }

    // Mostra la prima immagine
    showItem(currentIndex);

    // Rotazione automatica
    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalItems;
      showItem(currentIndex);
    }, stepTime);
  });

  // -----------------------------
  // Navbar scroll
  // -----------------------------
  let lastScrollY = window.scrollY;

  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      header.classList.add("hide");
    } else {
      header.classList.remove("hide");
    }

    lastScrollY = currentScrollY;
  });
});

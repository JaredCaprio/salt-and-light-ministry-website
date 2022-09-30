const heroItem = document.querySelectorAll("[data-hero-item]");

heroItem.forEach((item, index) => {
  item.style.animation = `hero-load ${index * 0.5}s ease-in-out forwards 3ms`;
});

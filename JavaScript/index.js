const card = document.querySelector(".card");
const header = document.querySelector(".header");

header.addEventListener("mouseenter", () => {
  card.classList.remove("shadow-notActiveShadow");
  card.classList.add("shadow-activeShadow");
});

header.addEventListener("mouseleave", () => {
  card.classList.remove("shadow-activeShadow");
  card.classList.add("shadow-notActiveShadow");
});

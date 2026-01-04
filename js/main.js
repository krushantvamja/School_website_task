const track = document.querySelector(".highlights__track");
const prev = document.querySelector(".highlights__nav--prev");
const next = document.querySelector(".highlights__nav--next");

let index = 0;
const cardWidth = 304; // card + gap

next.addEventListener("click", () => {
  index++;
  track.style.transform = `translateX(-${index * cardWidth}px)`;
});

prev.addEventListener("click", () => {
  index = Math.max(index - 1, 0);
  track.style.transform = `translateX(-${index * cardWidth}px)`;
});

document.getElementById("current-year").textContent =
    new Date().getFullYear();
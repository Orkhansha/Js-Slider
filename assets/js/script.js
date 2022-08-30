const gap = 16;

const carousel = document.getElementById("sliderr"),
  content = document.getElementById("content"),
  item=document.querySelector(".item")
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = item.offsetWidth;
window.addEventListener("resize", e => (width = item.offsetWidth + gap));

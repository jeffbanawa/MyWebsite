const path = document.querySelector("path");

let coords = {
  x: 0,
  y: 0,
};

let width = 0;

document.addEventListener("mousemove", (event) => {
  coords.x = event.clientX;
  coords.y = event.clientY;

  width = coords.x / window.innerWidth;

  console.log(width.toFixed(1));

  updateCoords(coords);
});

document.addEventListener("mouseout", (event) => {
  gsap.to(path, {
    ease: Elastic.easeOut.config(1, 0.3),
    attr: { d: "M168,495 Q362,494 1385,495" },
  });
});

function updateCoords(coords) {
  coords.x = width * 10;
  path.setAttribute("d", `M168,495 Q${coords.x},${coords.y} 1385,495`);
}

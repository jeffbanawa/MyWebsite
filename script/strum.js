const path = document.querySelector("path");

let coords = {
  x: 0,
  y: 0,
};

let length = 0;

document.addEventListener("mousemove", (event) => {
  coords.x = event.clientX;
  coords.y = event.clientY;

  length = coords.y / window.innerHeight;

  console.log(length.toFixed(1));
  updateCoords(coords);
});

document.addEventListener("mouseout", (event) => {
  gsap.to(path, {
    ease: Elastic.easeOut.config(1, 0.3),
    attr: { d: "M168,495 Q362,495 1385,495" },
  });
});

function updateCoords(coords) {
  coords.y = length * 1080;
  path.setAttribute("d", `M168,495 Q${coords.x},${coords.y} 1385,495`);
}

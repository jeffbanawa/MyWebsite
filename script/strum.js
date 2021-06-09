const path6 = document.getElementById("string6");
const path5 = document.getElementById("string5");
const path4 = document.getElementById("string4");
const path3 = document.getElementById("string3");
const path2 = document.getElementById("string2");
const path1 = document.getElementById("string1");

const val6 = "M168,493 Q362,493 1385,493";
const val5 = "M168,506 Q362,506 1385,506";
const val4 = "M168,520 Q362,520 1386,520";
const val3 = "M168,533 Q362,533 1386,533";
const val2 = "M168,547 Q362,547 1386,547";
const val1 = "M168,560 Q362,560 1386,560";

const x6 = "M168,493 ";
const x5 = "M168,506 ";
const x4 = "M168,520 ";
const x3 = "M168,533 ";
const x2 = "M168,493 ";
const x1 = "M168,547 ";

const y6 = "1385,493";
const y5 = "1385,506";
const y4 = "1386,520";
const y3 = "1386,533";
const y2 = "1386,547";
const y1 = "1386,560";

function strumString(path, val, x, y) {
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
    coords.y = length * 1080;
    path.setAttribute("d", `${x} Q${coords.x},${coords.y} ${y}`);
  });

  document.addEventListener("mouseout", (event) => {
    gsap.to(path, {
      ease: Elastic.easeOut.config(1, 0.3),
      attr: { d: val },
    });
  });
}

strumString(path6, val6, x6, y6);
strumString(path5, val5, x5, y5);
strumString(path4, val4, x4, y4);
strumString(path3, val3, x3, y3);
strumString(path2, val2, x2, y2);
strumString(path1, val1, x1, y1);

function updateCoords(coords) {
  coords.y = length * 1080;
  path.setAttribute("d", `M168,495 Q${coords.x},${coords.y} 1385,495`);
}

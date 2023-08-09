"use strict";

const canvasContainer = document.querySelector(".canvas-container");
console.log(canvasContainer);

const createCanvas = function () {
  for (let i = 0; i < 64; i++) {
    const canvasBox = document.createElement("div");

    canvasBox.classList.add("canvas-box");
    canvasContainer.appendChild(canvasBox);
  }

  const boxes = document.querySelectorAll(".canvas-box");
  //   console.log(boxes);

  boxes.forEach((box) => {
    box.addEventListener("mouseover", function (e) {
      //   console.log("Hovered over box");
      //   e.target.style["background-color"] = "blue";
      e.target.classList.toggle("color-change");
    });
  });
};

createCanvas();

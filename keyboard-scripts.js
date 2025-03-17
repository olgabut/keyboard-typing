"use strict";

const enLayout = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
];

const ruLayout = [
  ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ"],
  ["ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э"],
  ["я", "ч", "с", "м", "и", "т", "ь", "б", "ю"],
];

const layoutFingers = [
  "pinkie",
  "ring",
  "middle",
  "left-index",
  "left-index",
  "right-index",
  "right-index",
  "middle",
  "ring",
  "pinkie",
  "pinkie",
  "pinkie",
];

const addInterval = (intervalNum, parentElement) => {
  for (var i = 0; i < intervalNum; i++) {
    const divInterval = document.createElement("div");
    divInterval.classList.add("interval");
    parentElement.appendChild(divInterval);
  }
};

const createVirtualKeyboard = (parentElement) => {
  console.log(parentElement);
  if (parentElement) {
    ruLayout.forEach((keysLine, lineNumber) => {
      // line
      const divLine = document.createElement("div");
      divLine.classList.add("keys-line");
      // interval
      addInterval(lineNumber, divLine);
      // keys
      keysLine.forEach((key, index) => {
        const divKey = document.createElement("div");
        divKey.classList.add("key");
        divKey.classList.add("key-" + layoutFingers[index]);
        divKey.id = "key-" + key.toUpperCase();
        divKey.innerHTML = key.toUpperCase();
        divLine.appendChild(divKey);
      });
      parentElement.appendChild(divLine);
    });
  }
  // space key
  const divSpaceLine = document.createElement("div");
  divSpaceLine.classList.add("keys-line");
  addInterval(7, divSpaceLine);
  const divSpaceKey = document.createElement("div");
  divSpaceKey.classList.add("key-space");
  divSpaceKey.classList.add("key-thumb");
  divSpaceKey.id = "key-space";
  divSpaceLine.appendChild(divSpaceKey);
  parentElement.appendChild(divSpaceLine);
};

const keyDownVisualization = (event) => {
  const key = event.key;
  console.log(key);
  document
    .getElementById("key-" + key.toUpperCase())
    ?.classList.add("key-pressed");
};

const keyUpVisualization = (event) => {
  const key = event.key;
  document
    .getElementById("key-" + key.toUpperCase())
    ?.classList.remove("key-pressed");
};

const main = () => {
  createVirtualKeyboard(document.getElementById("keyboard"));
  document.addEventListener("keydown", keyDownVisualization);
  document.addEventListener("keyup", keyUpVisualization);
};

main();

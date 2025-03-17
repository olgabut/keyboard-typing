"use strict";

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function moveMainCharacter() {
  const isMove = true;
  const imgMainCharacter = document.getElementById("main-character");
  for (var i = 0; i < 5; i++) {
    imgMainCharacter.src = `./sources/rabbit${i}.gif`;
    imgMainCharacter.style.transform = `translate(${i * 10}px, 0px)`;
    await wait(200);
  }
  imgMainCharacter.src = `./sources/rabbit0.gif`;
}

//moveMainCharacter();
const spaceButton = document.getElementById("key-space");
spaceButton.addEventListener("click", moveMainCharacter);

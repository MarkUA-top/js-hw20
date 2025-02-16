// Task 1
// const listImg = document.querySelector(".gallery");

// document.addEventListener("keydown", (event) => {
//   if (event.code === "ArrowRight") {
//     const firstImage = listImg.firstElementChild;
//     listImg.append(firstImage);
//   }
//   if (event.code === "ArrowLeft") {
//     const lastImage = listImg.lastElementChild;
//     listImg.prepend(lastImage);
//   }
// });

const allImg = document.querySelectorAll(".image");
let currentIndex = 0;

allImg[currentIndex].classList.add("active");

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    allImg[currentIndex].classList.remove("active");
    currentIndex++;
    if (currentIndex >= allImg.length) {
      currentIndex = 0;
    }
    allImg[currentIndex].classList.add("active");
  } else if (event.key === "ArrowLeft") {
    allImg[currentIndex].classList.remove("active");
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = allImg.length - 1;
    }
    allImg[currentIndex].classList.add("active");
  }
});

// Task 2
const controlBox = document.querySelector("#controls");
const numberInput = document.querySelector("input");
const destroyButton = document.querySelector('[data-action="destroy"]');
const renderButton = document.querySelector('[data-action="render"]');
const boxesElement = document.querySelector("#boxes");
let boxSize = 30;

const createDifferentBoxes = function (amount) {
  const max = 255;
  const min = 0;
  for (let i = 0; i < amount; i += 1) {
    const colorBox = document.createElement("div");
    colorBox.style.backgroundColor = `rgb(
            ${Math.round(Math.random() * (max - min) + min)},
            ${Math.round(Math.random() * (max - min) + min)},
            ${Math.round(Math.random() * (max - min) + min)}
          )`;
    colorBox.style.width = `${boxSize}px`;
    colorBox.style.height = `${boxSize}px`;
    boxesElement.append(colorBox);
    boxSize += 10;
  }
};

renderButton.addEventListener("click", () => {
  const amount = Number(numberInput.value);
  createDifferentBoxes(amount);
});

const destroyBoxes = function () {
  boxesElement.innerHTML = "";
};

destroyButton.addEventListener("click", () => {
  destroyBoxes();
  boxSize = 30;
});

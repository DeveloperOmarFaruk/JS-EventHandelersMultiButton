// Green button function
function makeGreen() {
  document.body.style.backgroundColor = "green";
}

// Blue button id call and use onClick event
const blueBtn = document.getElementById("make-blue-btn");
blueBtn.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// Orange button id call and use onClick event
const orangeBtn = document.getElementById("orange-btn-event");
// anonymous function
orangeBtn.onclick = function () {
  document.body.style.backgroundColor = "#FFA500";
};

// Pink button id call and use addEventListener
const pinkButton = document.getElementById("pink-btn-event");
pinkButton.addEventListener("click", makePinkBtn);

function makePinkBtn() {
  document.body.style.backgroundColor = "#FF1493";
}

// Indigo button id call and use addEventListener
const indigoButton = document.getElementById("indigo-btn-event");
indigoButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "#4B0082";
});

// Olive button id call and use addEventListener

document
  .getElementById("olive-btn-event")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "#808000";
  });

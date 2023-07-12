let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;
let btnTry = document.querySelector("#btnTry");
let btnReset = document.querySelector("#btnReset");
let inputNumber = document.querySelector("#inputNumber");
let spanScreen = document.querySelector(".screen span");
let spanScreen2 = document.querySelector(".screen2 span");

btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);

function handleTryClick(event) {
  event.preventDefault();

  if (
    inputNumber.value == "" ||
    inputNumber.value < 0 ||
    inputNumber.value > 10
  ) {
    spanScreen.innerText = "Digite um numero valido entre 0 a 10";
    return;
  }

  if (Number(inputNumber.value) === randomNumber) {
    toggleHide();
    spanScreen2.innerText = `Você acertou em ${xAttempts} tentativas!`;
  } else if (Number(inputNumber.value) != randomNumber) {
    spanScreen.innerText = `Você fez ${xAttempts} tentativas!`;
  }

  inputNumber.value = "";
  xAttempts++;
}
function handleResetClick() {
  toggleHide();
  xAttempts = 1;
  spanScreen.innerText = "";
  randomNumber = Math.round(Math.random() * 10);
}
function toggleHide() {
  document.querySelector(".screen2").classList.toggle("hide");
  document.querySelector(".screen").classList.toggle("hide");
}

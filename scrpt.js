let btn = document.querySelector("#clicker");
let adviceText = document.querySelector("#myAdviceText");
let adviceID = document.querySelector("#myAdviceID");

function content() {
  fetch("https://api.adviceslip.com/advice")
    .then((data) => {
      return data.json();
    })
    .then((adviceData) => {
      console.log(adviceData);
      adviceText.innerHTML = `"${adviceData.slip.advice}"`;
      adviceID.innerHTML = `Advice #${adviceData.slip.id}`;
    })
    .catch((err) => {
      console.log(err);
    });
}
function btnClick() {
  content();
  window.location.reload();
}

btn.addEventListener("click", btnClick);
window.addEventListener("load", content);

/*---------- DECLARAR DATAS ----------*/
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
/*---------- FIM DECLARAR DATAS ----------*/

/*---------- FUNÇÕES DE TROCA DE TELA ----------*/
function countdown() {
  /*----------  countdown  ---------- */
  let diaInput = document.getElementById("dateinput").value;
  const dataMeta = new Date(diaInput);
  const currentDate = new Date();

  const totalSeconds = (dataMeta - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minsEl.innerHTML = mins;
  secondsEl.innerHTML = seconds;
}

function screenChange() {
  document.getElementById("selector").style.display = "none";
  document.getElementById("counter").style.display = "flex";
  countdown();
  setInterval(countdown, 1000);
}

function resetChange() {
  document.getElementById("selector").style.display = "flex";
  document.getElementById("counter").style.display = "none";
}
/*---------- FIM FUNÇÕES DE TROCA DE TELA ----------*/

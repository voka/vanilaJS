const country = document.querySelector(".countryName");
const Msg = document.querySelector(".Msg");
const refreshBtn = document.querySelector(".refreshBtn");
const reLocalBtn = document.querySelector(".reLocalBtn");

function handleselect(event) {
  const result = event.target.value;
  if (result === "") {
    alert("!  Pleses Select Your Contry  !");
  } else {
    saveLocal(result);
  }
}

function saveLocal(result) {
  localStorage.setItem("country", result);
}
function refresh() {
  window.location.reload();
}
function refreshLocal() {
  localStorage.clear();
}
function msg() {
  const getCountry = localStorage.getItem("country");
  alert(`You are from a ${getCountry}`);
}

function init() {
  country.addEventListener("change", handleselect);
  Msg.addEventListener("click", msg);
  refreshBtn.addEventListener("click", refresh);
  reLocalBtn.addEventListener("click", refreshLocal);
}

init();

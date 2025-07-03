const plano = document.getElementById("plan");
const meu = document.getElementById("meu");
const item = document.getElementsByClassName("item");

const body = document.body;
meu.addEventListener("click", () => {
  const ligado = meu.classList.contains("fa-toggle-on");
  if (ligado) {
    meu.classList.remove("fa-toggle-on");
    meu.classList.add("fa-toggle-off");
    body.classList.remove("dark");
    body.classList.add("light");
  } else {
    meu.classList.remove("fa-toggle-off");
    meu.classList.add("fa-toggle-on");
    body.classList.remove("light");
    body.classList.add("dark");
  }
});

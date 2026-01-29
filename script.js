const barra = document.getElementById("barra");
const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

let timeoutSopro;
let timeoutRetorno;

botao.addEventListener("click", () => {
  clearTimeout(timeoutSopro);
  clearTimeout(timeoutRetorno);

  barra.className = "";
  barra.style.transition = "none";
  barra.style.width = "0%";

  mensagem.innerText = "Sopre!";

  setTimeout(() => {
    barra.classList.add("barra-sopro");
    barra.style.transition = "width 6s linear";
    barra.style.width = "100%";
  }, 50);

  timeoutSopro = setTimeout(() => {
    mensagem.innerText = "Agora puxe todo o ar de volta!";

    barra.className = "barra-retorno";
    barra.style.transition = "width 3s linear";
    barra.style.width = "0%";
  }, 6000);
});

const barra = document.getElementById("barra");
const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

let intervalo;

botao.addEventListener("click", () => {
  clearInterval(intervalo);
  barra.style.width = "0%";
  mensagem.innerText = "Soprando...";

  let tempo = 0;

  intervalo = setInterval(() => {
    tempo += 0.1;
    barra.style.width = (tempo / 6) * 100 + "%";

    if (tempo >= 6) {
      clearInterval(intervalo);
      mensagem.innerText = "Finalizado";
    }
  }, 100);
});

// Necessário fazer com que função de validação desconsidere a tecla TAB por meio do atributo key que é achado no event

function trocaTextoIndicativo(imc) {
  const textoIndicativoIMC = document.querySelector("#textoIndicativo__imc");

  if (imc <= 18.5) {
    textoIndicativoIMC.innerHTML = "Abaixo do peso";
  } else if (imc <= 24.9) {
    textoIndicativoIMC.innerHTML = "Peso normal";
  } else if (imc <= 29.9) {
    textoIndicativoIMC.innerHTML = "Peso normal";
  } else if (imc <= 34.9) {
    textoIndicativoIMC.innerHTML = "Obesidade moderada.";
  } else if (imc <= 39.9) {
    textoIndicativoIMC.innerHTML = "Obesidade grave";
  } else if (imc >= 40) {
    textoIndicativoIMC.innerHTML = "Obesidade mórbida";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  $("#altura").mask("0,00");
  $("#peso").mask("00,0");
});

let alturaUsuario = document.querySelector("#altura");
let pesoUsuario = document.querySelector("#peso");

const containerPrincipal = document.querySelector("#container");
const botaoSubmit = document.querySelector("#btn__submit");

botaoSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  validaValoresAoEnviar(alturaUsuario.value, pesoUsuario.value);
  const imcCalculado = calculaIMC(pesoUsuario.value, alturaUsuario.value);
  console.log(pesoUsuario.value);
  console.log(imcCalculado);

  {
    /* <div class="relatorio__resultado"> */
  }

  trocaTela(`<div class="container__relatorio">
  <div class="relatorio__resultado"><h1 id="pontuacao__imc"></h1></div>
  <div class="relatorio__descricao">
    <h1>O que o valor do meu IMC indica?</h1>
    <p id="textoIndicativo__imc"></p>
  </div>
  <div class="relatorio__informacoes">
    <h1>Os valores do IMC e suas interpretações:</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum dolor a imperdiet aliquet. Fusce venenatis ut nulla nec pretium. Sed non tincidunt sem. Mauris eu rhoncus mi. Aliquam nibh.</p>
  </div></div>`);

  exibeImcNaTela(imcCalculado);
  trocaTextoIndicativo(imcCalculado);
});

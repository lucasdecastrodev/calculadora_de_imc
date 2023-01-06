function trocaTela(codigo) {
  containerPrincipal.innerHTML = codigo;
  containerPrincipal.classList.remove("container");
  containerPrincipal.classList.add("container-segunda-tela");
}

function exibeImcNaTela(valorImc) {
  const tituloImc = document.querySelector("#pontuacao__imc");
  tituloImc.innerHTML = `Seu IMC é igual a ${valorImc}`;
}

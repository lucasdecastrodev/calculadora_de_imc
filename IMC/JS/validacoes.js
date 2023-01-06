// Necessário fazer com que função de validação desconsidere a tecla TAB por meio do atributo key que é achado no event

function contemSomenteNumeros(str) {
  return /^[0-9.,]+$/.test(str);
}

function limpaCampos() {
  alturaUsuario.value = "";
  pesoUsuario.value = "";
}

function validaValor(event) {
  // console.log(event.key != "Tab");
  //if (contemSomenteNumeros(this.value) === false && event.key != "Tab") {
  if (!contemSomenteNumeros(this.value) && event.key != "Tab") {
    window.alert(
      "Você preencheu os campos com valores inválidos! Apenas números são válidos."
    );
    this.value = this.value.slice(0, this.value.lastIndexOf());
  }
}

alturaUsuario.addEventListener("keyup", validaValor);
pesoUsuario.addEventListener("keyup", validaValor);

function validaValoresAoEnviar(altura, peso) {
  if (altura == "" || peso == "") {
    window.alert(
      "Você deixou de preencher algum dos campos, por favor, preencha novamente!"
    );
    limpaCampos();
  }
}

function calculaIMC(peso, altura) {
  let pesoFormatado = parseInt(peso.replace(",", "."));
  let alturaFormatado = parseInt(altura.replace(",", "")) / 100;
  console.log(alturaFormatado);

  const imc = pesoFormatado / (alturaFormatado * 2);
  return imc.toFixed(1);
}

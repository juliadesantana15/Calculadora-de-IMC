
const formulario = document.getElementById("formulario");

const paginaCalculadora = document.getElementById("paginaCalculadora");
const paginaResultado = document.getElementById("paginaResultado");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const peso = Number(document.getElementById("peso").value);
    const altura = Number(document.getElementById("altura").value);

    // Verificar os valores
    if (peso <= 0 || altura <= 0) {
        alert("Digite valores válidos!");
        return;
    }

    // Calcular IMC
    const imc = peso / (altura * altura);

    let classificacao = "";
    let faixaPeso = "";

    // Classificação para adultos
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
        faixaPeso = "Abaixo de 18,5";

    } else if (imc < 25) {
        classificacao = "Peso adequado";
        faixaPeso = "18,5 a 24,9";

    } else if (imc < 30) {
        classificacao = "Sobrepeso";
        faixaPeso = "25 a 29,9";

    } else if (imc < 35) {
        classificacao = "Obesidade grau I";
        faixaPeso = "30 a 34,9";

    } else if (imc < 40) {
        classificacao = "Obesidade grau II";
        faixaPeso = "35 a 39,9";

    } else {
        classificacao = "Obesidade grau III";
        faixaPeso = "40 ou mais";
    }

    // Resultados
    document.getElementById("imcValor").textContent =
        imc.toFixed(2).replace(".", ",") + " kg/m²";

    document.getElementById("classificacao").textContent =
        classificacao;

    document.getElementById("faixaPeso").textContent =
        faixaPeso;

    // Trocar de página
    paginaCalculadora.hidden = true;
    paginaResultado.hidden = false;

});

// Botão voltar
document.getElementById("voltar").addEventListener("click", function() {

    paginaResultado.hidden = true;
    paginaCalculadora.hidden = false;

});

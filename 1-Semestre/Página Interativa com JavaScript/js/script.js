const inputNome = document.querySelector("#nome");
const inputCurso = document.querySelector("#curso");
const inputNota1 = document.querySelector("#nota1");
const inputNota2 = document.querySelector("#nota2");
const inputNota3 = document.querySelector("#nota3");
const botaoCalcular = document.querySelector("#calcular");
const botaoLimpar = document.querySelector("#limpar");
const resultado = document.querySelector("#resultado");

function calcularMedia() {
    const nome = inputNome.value;
    const curso = inputCurso.value;
    const nota1 = Number(inputNota1.value);
    const nota2 = Number(inputNota2.value);
    const nota3 = Number(inputNota3.value);
    const media = (nota1 + nota2 + nota3) / 3;

    if (nota1 == "" || nota2 == "" || nota3 == "") {
        resultado.textContent = "Preencha todas as notas para o cálculo da média.";
        resultado.style.color = "#dc2626";
    } else if (nome === "" || curso === "") {
        resultado.textContent = "Preencha o nome e o curso antes de calcular.";
        resultado.style.color = "#dc2626";
    } else if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        resultado.textContent = "Digite notas válidas entre 0 e 10.";
        resultado.style.color = "#dc2626";
    } else if (media >= 8) {
        resultado.textContent = `Olá, ${nome}. No curso de ${curso}, sua média foi ${media.toFixed(1)}.\nConceito: A.\nSituação: Aprovado.\nParabéns! Você está entre os melhores!`;
        resultado.style.color = "#156eb8";
        document.body.style.background = "#70bdfc";
    } else if (media >= 6) {
        resultado.textContent = `Olá, ${nome}. No curso de ${curso}, sua média foi ${media.toFixed(1)}.\nConceito: B.\nSituação: Aprovado.\nParabéns, continue assim!`;
        resultado.style.color = "#16a34a";
        document.body.style.background = "#72ffa6";
    } else if (media >= 4) {
        resultado.textContent = `Olá, ${nome}. No curso de ${curso}, sua média foi ${media.toFixed(1)}.\nConceito: C\nSituação: Recuperação.\nNão desanime, você consegue!`;
        resultado.style.color = "#ca8a04";
        document.body.style.background = "#ffcd62";
    } else {
        resultado.textContent = `Olá, ${nome}. No curso de ${curso}, sua média foi ${media.toFixed(1)}.\nConceito: D.\nSituação: Reprovado.\nNunca é tarde para tentar melhorar.`;
        resultado.style.color = "#dc2626";
        document.body.style.background = "#ff8282";
    }
}


function limparFormulario() {
    inputNome.value = "";
    inputCurso.value = "";
    inputNota1.value = "";
    inputNota2.value = "";
    inputNota3.value = "";
    resultado.textContent = "";
    document.body.style.background = "";
}

botaoCalcular.addEventListener("click", calcularMedia);
botaoLimpar.addEventListener("click", limparFormulario);
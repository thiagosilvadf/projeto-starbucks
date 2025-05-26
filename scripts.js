/*

variaveis: Pedacinhos de memória do computador que posso colocar o que eu quiser

Quando é nome coloca ""
Console.log: Ferramento que mostra  na tela

Função: Um pedacinho de código, que só é execultado quando é chamado

Algorítmo: Passos para fazer algo, ex atravessar a rua

Lógica de Programação: Saber fazer o algoritmo, saber os passos para criar o programa que você quer

QuerySelector = Pega algo que eu quero no HTML

Quando estamos no JavaScript e queremos chamar o HTML, usamos o document

 Cores usadas: #017143; #eb7495; #d752b1.

*/

let circulo = document.querySelector(".circulo")
let imagem = document.querySelector(".starbucks")


function trocarCor(cor) {
    circulo.style.background = cor
}

function trocaimagem(img) {
    imagem.src = img
}



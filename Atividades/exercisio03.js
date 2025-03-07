// Criar uma função que recebe três números como parâmetros e retorna a média deles.

function mediaNumeros(num1, num2, num3){
    let soma = num1 + num2 + num3;
    let media = soma / 3;
    console.log(`A soma dos números: ${num1} + ${num2} + ${num3} é ${soma}. E sua media é ${media}.`);
}

mediaNumeros(10, 20, 30);
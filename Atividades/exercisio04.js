// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function maiorNumero(num1, num2) {
    if (num1 > num2){
        console.log(`O Primeiro número ${num1} é maior que o segundo ${num2}.`);
    }else{
        if (num2 > num1){
            console.log(`O segundo número ${num2} é maior que o primeiro ${num1}.`);
        }else{
            console.log(`O números são iguais. ${num1}, ${num2}`);
        }
    }
}

maiorNumero(0, 5);
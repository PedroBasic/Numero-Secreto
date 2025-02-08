// document.() - para ter possibilidade de interação junto ao corpo do HTML utilizamos o metodo document em seguida da variavel que deseja manipular.
// querySelector ('') - Para selecionar a variavel que deseja utilizar dentro do corpo do HTML.

let titulo = document.querySelector('h1');
let paragrafo = document.querySelector('p');
let input = document.querySelector('.container__input');
let acertou = document.querySelector('h2');
let escolhaNumero;
let tentativas = 0;

// innerHTML - > recebe um valor.

let novoNumSecreto = parseInt(prompt("Digite o limite de número Secreto? "));
let numeroSecreto = parseInt(Math.random() * novoNumSecreto) + 1;

escolhaNumero = ("Digite um número");
input.innerHTML = escolhaNumero;

alert('ABRA O CONSOLE PARA VALIDAR SE VOCÊ ACERTOU O NÚMERO SECRETO! TECLA F12 ;)');

titulo.innerHTML = 'Hora do Desafio';
paragrafo.innerHTML = `Escolha um numero entre 1 e ${novoNumSecreto}?`;
input.max = novoNumSecreto;


// Criando função.

function jogar(){
    
    // Seleciona o input pelo ID
    inputNumero = document.getElementById('numeroInput');
    
    // Obtém o valor e converte para número
    escolhaNumero = Number(inputNumero.value);
    
}


function verificarChute(){
    
    if (jogar() > novoNumSecreto){
        console.log('Ultrapassou o limite de número. Tente novamente.');
    }
    
    if(escolhaNumero == numeroSecreto){
        // Armazena no localStorage que o usuário acertou
        localStorage.setItem("acertou", "true");
        window.location.href = "acertou.html";
    }else{
        
        if(escolhaNumero > numeroSecreto){
            console.log(`O número secreto e menor que ${escolhaNumero}`);
        }else{
            console.log(`O número secreto e maior que ${escolhaNumero}`);
      }
    }

    // Abaixo utilizamos o '++'  para contabilizar toda vez que for tentado um número.
    tentativas++;
    
}

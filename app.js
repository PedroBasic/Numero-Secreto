// document.() - para ter possibilidade de interação junto ao corpo do HTML utilizamos o metodo document em seguida da variavel que deseja manipular.
// querySelector ('') - Para selecionar a variavel que deseja utilizar dentro do corpo do HTML.

let titulo = document.querySelector('h1');
let paragrafo = document.querySelector('p');
let input = document.querySelector('.container__input');
let acertou = document.querySelector('h2');
let escolhaNumero;
let tentativas = 1;

// innerHTML - > recebe um valor.

let novoNumSecreto = prompt("Digite o limite de número Secreto? ");
let numeroSecreto = parseInt(Math.random() * novoNumSecreto) + 1;

if(novoNumSecreto == '' && novoNumSecreto == 0){
    numeroSecreto = Error('Fim');
    throw new Error('Nenhum valor inserido');
}else{
    if(novoNumSecreto == Number){
        console.log('Continue.');
    }else{
        Error('Error');
    }
}


//input.innerHTML = escolhaNumero;
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
    
    jogar();

    if (escolhaNumero > novoNumSecreto){
        alert('Ultrapassou o limite do número secreto. Tente novamente.');

    }else if(escolhaNumero == numeroSecreto){
        // Armazena no localStorage que o usuário acertou
        //localStorage.setItem("acertou", "true");
        //window.location.href = "acertou.html";
        titulo.innerHTML = `Acertou o número secreto era ${numeroSecreto}!!`;
        paragrafo.innerHTML = `Número de Tentativas: ${tentativas}`;

    }else{
        
        if(escolhaNumero > numeroSecreto){
            titulo.innerHTML = (`O número secreto e menor que ${escolhaNumero}`);
        }else{
            titulo.innerHTML = (`O número secreto e maior que ${escolhaNumero}`);
      }
    }

    // Abaixo utilizamos o '++'  para contabilizar toda vez que for tentado um número.
    tentativas++;
    
}

// document.() - para ter possibilidade de interação junto ao corpo do HTML utilizamos o metodo document em seguida da variavel que deseja manipular.
// querySelector ('') - Para selecionar a variavel que deseja utilizar dentro do corpo do HTML.

let titulo = document.querySelector('h1');
let paragrafo = document.querySelector('p');
let input = document.querySelector('.container__input');
let acertou = document.querySelector('h2');
let escolhaNumero;
let tentativas = 1;

// innerHTML - > recebe um valor.
alert('Na mensagem a seguir você deve escolher até quando o número aleatorio vai ser gerado. Exemplo: 0 a X.')

let novoNumSecreto = prompt("Digite o limite de número Secreto? ");
let numeroSecreto;

// Valida se o usuário colocou um número válido
if (!novoNumSecreto || isNaN(parseInt(novoNumSecreto)) || parseInt(novoNumSecreto) <= 0) {
    alert('⚠️ Insira um número válido!');
    window.location.reload(); // Reinicia o jogo
} else {
    novoNumSecreto = parseInt(novoNumSecreto);
    numeroSecreto = Math.floor(Math.random() * novoNumSecreto) + 1;
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
        //Armazena no localStorage que o usuário acertou

        localStorage.setItem("acertou", "true");
        localStorage.setItem("tentativas", tentativas);
        window.location.href = "acertou.html";  

    }else{
        let dica = escolhaNumero > numeroSecreto
            ? `O número secreto é menor que ${escolhaNumero}`
            : `O número secreto é maior que ${escolhaNumero}`;
        
        paragrafo.innerHTML = dica;

        // Efeito de tremer para indicar erro
        paragrafo.classList.add('shake');
        setTimeout(() => paragrafo.classList.remove('shake'), 500);
    }

    // Abaixo utilizamos o '++'  para contabilizar toda vez que for tentado um número.
    tentativas++;
    
}

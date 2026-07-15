const numeroSenha = document.querySelector('.parametro-senha__texto');

let tamanhaSenha = 12;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if(tamanhaSenha > 1){
        //tamanhaSenha = tamanhaSenha - 1;
        tamanhaSenha--;
    }
    
    numeroSenha.textContent = tamanhaSenha;
}

function aumentaTamanho(){
    if(tamanhaSenha < 20){
        //tamanhaSenha = tamanhaSenha + 1;
        tamanhaSenha++;
    }
    
    numeroSenha.textContent = tamanhaSenha;
}

const campoSenha = document.querySelector('#campo-senha');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQTSXYWZ';
geraSenha();

function geraSenha{
    let numeroAleatorio = Math.random()*letrasMaiusculas.length;
    numeroAleatorio = Math.floor(numeroAleatorio);
    console.log(numeroAleatorio);
}

campoSenha.value = letrasMaiusculas;
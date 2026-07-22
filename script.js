const numeroSenha = document.querySelector('.parametro-senha__texto');

let tamanhaSenha = 5;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if(tamanhaSenha > 1){
        //tamanhaSenha = tamanhaSenha - 1;
        tamanhaSenha--;
    }
    
    numeroSenha.textContent = tamanhaSenha;
    geraSenha();
}

function aumentaTamanho(){
    if(tamanhaSenha < 20){
        //tamanhaSenha = tamanhaSenha + 1;
        tamanhaSenha++;
    }
    
    numeroSenha.textContent = tamanhaSenha;
    geraSenha();
}

const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');

console.log(checkbox[0].checked);

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQTSXYWZ';
geraSenha();

function geraSenha () {
    let senha = '';
    for(let i = 0; i < tamanhaSenha; i++){
        let numeroAleatorio = Math.random()*letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + letrasMaiusculas[numeroAleatorio];
        
    }
    campoSenha.value = senha;
}


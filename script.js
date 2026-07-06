const numeroSenha = document.querySelector('.parametro-senha__texto');

let tamanhaSenha = 12;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if(tamanhaSenha > 1){
        tamanhaSenha = tamanhaSenha - 1;
    }
    
    numeroSenha.textContent = tamanhaSenha;
}

function aumentaTamanho(){
    tamanhaSenha = tamanhaSenha + 1;
    numeroSenha.textContent = tamanhaSenha;
}



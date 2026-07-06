const numeroSenha = document.querySelector('.parametro-senha__texto');

let tamanhaSenha = 12;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;

function diminuiTamanho(){
    tamanhaSenha = tamanhaSenha - 1;
    numeroSenha.textContent = tamanhaSenha;
}

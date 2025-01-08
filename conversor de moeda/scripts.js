/*
[x] saber quando o botão é clicado
[x] Saber o valor digitado pelo usuario
[x] Saber qual tipo de conversão
[x] Converter os valores
[x] exibir o valor para o usuario
*/

const botao = document.getElementById('botao')
const input = document.getElementById('input')
const origem = document.getElementById('origem')
const destino = document.getElementById('destino')

botao.addEventListener('click', converter)

function converter() {
    if(origem.value == 'real' &&  destino.value == 'dolar') {
        alert(input.value / 6)
    } else if(origem.value == 'dolar' &&  destino.value == 'real') {
        alert(input.value * 6)
    } else if(input.value == 0) {
        alert('ERRO, Digite um valor para conversão')
    } else {
        alert('ERRO, escolha as opções corretamente')
    }

}
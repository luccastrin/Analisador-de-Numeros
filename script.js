var texto_digitado = document.getElementById('texto_num');
var lista_digitada = document.getElementById('flista');

var resultado = document.getElementById('resultado');

var matriz = [];

function eUmNumero(n) {
    if( Number(n) >= 1 && Number(n) <= 100 ) {
        return true;
    } else {
        return false;
    }
}

function estaNaLista(n, l) {
    if( l.indexOf(Number(n)) !== -1 ) {
        return true;
    } else {
        return false;
    }
}

function adicionaValor() {
    if( eUmNumero(texto_digitado.value) && !estaNaLista(texto_digitado.value, matriz) ) {
        matriz.push(Number(texto_digitado.value));
        var novo_item = document.createElement('option');
        novo_item.innerHTML = 'Valor ' + texto_digitado.value + ' adicionado.';
        lista_digitada.appendChild(novo_item);
    } else {
        alert('Confira os valores e digite novamente');
    }
    texto_digitado.focus();
    texto_digitado.value = ''; 
}

function finalizaValor() {
    if( matriz.length === 0 ) {
        alert('Adicione valores antes de finalizar.');
    } else {

        var total = matriz.length;
        var maior = matriz[0];
        var menor = matriz[0];
        var soma = 0;
        var media = 0;

        //Varrer todas as posições da matriz e escolher o maior/menor valor
        for( var posicao in matriz ) {
            soma += matriz[posicao];
            if( matriz[posicao] > maior ) {
                maior = matriz[posicao];
            }
            if( matriz[posicao] < menor ) {
                menor = matriz[posicao];
            }
        }

        media = soma / total;

        resultado.innerHTML += '<p> A matriz possui ' + total + ' números cadastrados.</p>';
        resultado.innerHTML += '<p> O maior valor é ' + maior + '.</p>';
        resultado.innerHTML += '<p> O menor valor é ' + menor + '.</p>';
        resultado.innerHTML += '<p> A soma dos valores é ' + soma + '.</p>';
        resultado.innerHTML += '<p> O valor da média é ' + media + '.</p>';
    }
}



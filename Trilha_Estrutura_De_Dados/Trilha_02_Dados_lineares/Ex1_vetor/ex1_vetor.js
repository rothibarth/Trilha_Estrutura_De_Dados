// Lista de Exercícios de Fixação

// 1. Vetores:
// ○ Crie um vetor que armazene 10 números inteiros e desenvolva uma função
// para buscar um número específico no vetor.
// ○ Implemente uma função para remover um elemento do vetor em uma
// posição específica.

let vetor = [2,3,5,6,7,8,10,11,13,14];

function exibirVetor() {
    document.getElementById('vetorAtual').textContent = vetor.join(', ');
}


function buscar(){

    let numero = parseInt(document.getElementById('numero').value);
    let indice = vetor.indexOf(numero);

    if(indice !== -1){

        alert(`numero ${numero} encontrado na posição ${indice}`);
    }else{
        alert(`Numero ${numero} não encontrado no vetor`);
    }
    
}

function remover(){
    
    let numero = parseInt(document.getElementById('numero').value);
    let indice = vetor.indexOf(numero);

    if(indice !== -1){
        vetor.splice(indice, 1);
        alert(`Numero ${numero} foi removido do vetor`);
        exibirVetor();
    }else{
        alert(`Numero ${numero} não encontrado no vetor`)
    }
}

window.onload = exibirVetor;


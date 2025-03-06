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






// 2. Lista Simplesmente Encadeada:
// ○ Implemente uma lista simplesmente encadeada com as seguintes operações:
// inserir no início, inserir no final e remover de uma posição específica.
// ○ Modifique o código anterior para permitir a busca de um elemento por valor.
// 3. Lista Duplamente Encadeada:
// ○ Implemente uma lista duplamente encadeada com as operações de inserir no
// início e remover do final da lista.
// ○ Crie uma função que percorra a lista em ambas as direções, imprimindo os
// valores dos nós.
// 4. Pilha (Stack):
// ○ Implemente uma pilha e adicione operações para verificar se a pilha está
// cheia ou vazia.
// ○ Utilize uma pilha para verificar se uma expressão aritmética contém
// parênteses balanceados (exemplo: ((1+2) * (3/4))).
// 5. Fila (Queue):
// ○ Crie uma fila e implemente as operações de enqueue e dequeue.
// ○ Modifique o código para implementar uma fila circular.
// ○ Desenvolva um programa que simule o atendimento de um banco utilizando
// uma fila simples.


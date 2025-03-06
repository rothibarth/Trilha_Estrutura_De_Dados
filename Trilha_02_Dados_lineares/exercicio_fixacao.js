// Lista de Exercícios de Fixação

// 1. Vetores:
// ○ Crie um vetor que armazene 10 números inteiros e desenvolva uma função
// para buscar um número específico no vetor.
// ○ Implemente uma função para remover um elemento do vetor em uma
// posição específica.

var vetor10 = [10];

function buscar(vetor10){

    var resultado = vetor10.indexOf(8);
        if(resultado == 8){
            return true;
        }else{
            return false;
        }
}

var mostra = buscar(8);
console.log(mostra);




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


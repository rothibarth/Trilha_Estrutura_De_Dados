// 4. Pilha (Stack):
// ○ Implemente uma pilha e adicione operações para verificar se a pilha está
// cheia ou vazia.
// ○ Utilize uma pilha para verificar se uma expressão aritmética contém
// parênteses balanceados (exemplo: ((1+2) * (3/4))).

// Classe para representar a pilha
class Pilha {
    constructor(tamanhoMaximo) {
        this.tamanhoMaximo = tamanhoMaximo;
        this.itens = [];
    }

    // Verificar se a pilha está vazia
    estaVazia() {
        return this.itens.length === 0;
    }

    // Verificar se a pilha está cheia
    estaCheia() {
        return this.itens.length === this.tamanhoMaximo;
    }

    // Adicionar um elemento no topo da pilha (push)
    empilhar(valor) {
        if (this.estaCheia()) {
            alert("A pilha está cheia!");
        } else {
            this.itens.push(valor);
        }
    }

    // Remover o elemento do topo da pilha (pop)
    desempilhar() {
        if (this.estaVazia()) {
            alert("A pilha está vazia!");
        } else {
            return this.itens.pop();
        }
    }

    // Retornar o elemento no topo da pilha (sem remover)
    topo() {
        if (this.estaVazia()) {
            return null;
        }
        return this.itens[this.itens.length - 1];
    }

    // Exibir a pilha como uma string
    exibirPilha() {
        return this.itens.join(" -> ");
    }
}

// Função para verificar se uma expressão tem parênteses balanceados
function verificarParentesesBalanceados(expressao) {
    const pilha = new Pilha(expressao.length);
    for (let i = 0; i < expressao.length; i++) {
        const caractere = expressao[i];
        if (caractere === "(") {
            pilha.empilhar(caractere);
        } else if (caractere === ")") {
            if (pilha.estaVazia()) {
                return false; // Fecha parênteses sem abrir
            }
            pilha.desempilhar();
        }
    }
    return pilha.estaVazia(); // Se a pilha estiver vazia, os parênteses estão balanceados
}

// Criar uma instância da pilha
const tamanhoMaximoPilha = 10; // o tamanho máximo da pilha
let pilha = new Pilha(tamanhoMaximoPilha);

// Função para empilhar um valor
function empilhar() {
    let valor = document.getElementById("valorPilha").value;
    if (valor) {
        pilha.empilhar(valor);
        atualizarPilha();
    } else {
        alert("Por favor, insira um valor.");
    }
}

// Função para desempilhar um valor
function desempilhar() {
    pilha.desempilhar();
    atualizarPilha();
}

// Função para verificar se a pilha está vazia
function verificarVazia() {
    alert(pilha.estaVazia() ? "A pilha está vazia." : "A pilha não está vazia.");
}

// Função para verificar se a pilha está cheia
function verificarCheia() {
    alert(pilha.estaCheia() ? "A pilha está cheia." : "A pilha não está cheia.");
}

// Função para verificar parênteses balanceados
function verificarBalanceamento() {
    let expressao = prompt("Digite uma expressão aritmética para verificar parênteses balanceados:");
    if (expressao) {
        let balanceado = verificarParentesesBalanceados(expressao);
        alert(balanceado ? "Os parênteses estão balanceados." : "Os parênteses NÃO estão balanceados.");
    }
}

// Função para atualizar a exibição da pilha na página
function atualizarPilha() {
    document.getElementById("pilhaAtual").innerText = pilha.exibirPilha();
}

// Exibir a pilha inicial ao carregar a página
window.onload = function () {
    atualizarPilha();
};
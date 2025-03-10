// Classe para representar um nó da lista duplamente encadeada
class No {
    constructor(valor) {
        this.valor = valor;
        this.anterior = null;
        this.proximo = null;
    }
}

// Classe para representar a lista duplamente encadeada
class ListaDuplamenteEncadeada {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Inserir no início da lista
    inserirInicio(valor) {
        const novoNo = new No(valor);
        if (!this.head) {
            this.head = novoNo;
            this.tail = novoNo;
        } else {
            novoNo.proximo = this.head;
            this.head.anterior = novoNo;
            this.head = novoNo;
        }
    }

    // Remover do final da lista
    removerFinal() {
        if (!this.tail) {
            return; // Lista vazia
        }
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.anterior;
            this.tail.proximo = null;
        }
    }

    // Percorrer a lista do início ao fim
    percorrerInicioAoFim() {
        let atual = this.head;
        let valores = [];
        while (atual) {
            valores.push(atual.valor);
            atual = atual.proximo;
        }
        return valores.join(" -> ");
    }

    // Percorrer a lista do fim ao início
    percorrerFimAoInicio() {
        let atual = this.tail;
        let valores = [];
        while (atual) {
            valores.push(atual.valor);
            atual = atual.anterior;
        }
        return valores.join(" <- ");
    }

    // Exibir a lista como uma string (do início ao fim)
    exibirLista() {
        return this.percorrerInicioAoFim();
    }
}

// Criar uma instância da lista duplamente encadeada
let lista = new ListaDuplamenteEncadeada();

// Função para inserir no início
function inserir_inicio() {
    let numero = parseInt(document.getElementById("numero").value);
    if (!isNaN(numero)) {
        lista.inserirInicio(numero);
        atualizarVetor();
    } else {
        alert("Por favor, insira um número válido.");
    }
}

// Função para remover do final
function remover_final() {
    lista.removerFinal();
    atualizarVetor();
}

// Função para percorrer a lista em ambas as direções
function percorrer_lista() {
    let inicioAoFim = lista.percorrerInicioAoFim();
    let fimAoInicio = lista.percorrerFimAoInicio();
    alert(`Percorrendo do início ao fim:\n${inicioAoFim}\n\nPercorrendo do fim ao início:\n${fimAoInicio}`);
}

// Função para atualizar o vetor exibido na página
function atualizarVetor() {
    document.getElementById("vetorAtual").innerText = lista.exibirLista();
}

// Exibir o vetor inicial ao carregar a página
window.onload = function () {
    atualizarVetor();
};
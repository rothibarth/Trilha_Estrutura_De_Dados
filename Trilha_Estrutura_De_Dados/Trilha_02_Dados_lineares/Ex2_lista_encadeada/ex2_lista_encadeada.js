
// 2. Lista Simplesmente Encadeada:
// ○ Implemente uma lista simplesmente encadeada com as seguintes operações:
// inserir no início, inserir no final e remover de uma posição específica.
// ○ Modifique o código anterior para permitir a busca de um elemento por valor

// Classe para representar um nó da lista
class No {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
    }
}

// Classe para representar a lista simplesmente encadeada
class ListaSimplesmenteEncadeada {
    constructor() {
        this.head = null;
    }

    // Inserir no início da lista
    inserirInicio(valor) {
        const novoNo = new No(valor);
        novoNo.proximo = this.head;
        this.head = novoNo;
    }

    // Inserir no final da lista
    inserirFinal(valor) {
        const novoNo = new No(valor);
        if (!this.head) {
            this.head = novoNo;
        } else {
            let atual = this.head;
            while (atual.proximo) {
                atual = atual.proximo;
            }
            atual.proximo = novoNo;
        }
    }

    // Remover de uma posição específica
    removerPosicao(posicao) {
        if (posicao < 0 || !this.head) {
            return;
        }
        if (posicao === 0) {
            this.head = this.head.proximo;
            return;
        }
        let atual = this.head;
        let anterior = null;
        let contador = 0;
        while (atual && contador < posicao) {
            anterior = atual;
            atual = atual.proximo;
            contador++;
        }
        if (atual) {
            anterior.proximo = atual.proximo;
        }
    }

    // Buscar um elemento por valor
    buscarPorValor(valor) {
        let atual = this.head;
        let posicao = 0;
        while (atual) {
            if (atual.valor === valor) {
                return posicao;
            }
            atual = atual.proximo;
            posicao++;
        }
        return -1; // Retorna -1 se o valor não for encontrado
    }

    // Exibir a lista como uma string
    exibirLista() {
        let atual = this.head;
        let listaString = "";
        while (atual) {
            listaString += atual.valor + " ";
            atual = atual.proximo;
        }
        return listaString.trim();
    }
}

// Criar uma instância da lista encadeada
let lista = new ListaSimplesmenteEncadeada();

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

// Função para inserir no final
function inserir_final() {
    let numero = parseInt(document.getElementById("numero").value);
    if (!isNaN(numero)) {
        lista.inserirFinal(numero);
        atualizarVetor();
    } else {
        alert("Por favor, insira um número válido.");
    }
}

// Função para remover de uma posição específica
function remover_especifico() {
    let posicao = parseInt(prompt("Digite a posição a ser removida:"));
    if (!isNaN(posicao) && posicao >= 0) {
        lista.removerPosicao(posicao);
        atualizarVetor();
    } else {
        alert("Por favor, insira uma posição válida.");
    }
}

// Função para buscar um elemento por valor
function buscar_elemento() {
    let valor = parseInt(prompt("Digite o valor a ser buscado:"));
    if (!isNaN(valor)) {
        let posicao = lista.buscarPorValor(valor);
        if (posicao !== -1) {
            alert(`O valor ${valor} foi encontrado na posição ${posicao}.`);
        } else {
            alert(`O valor ${valor} não foi encontrado na lista.`);
        }
    } else {
        alert("Por favor, insira um número válido.");
    }
}

// Função para atualizar o vetor exibido na página
function atualizarVetor() {
    document.getElementById("vetorAtual").innerText = lista.exibirLista();
}

// Exibir o vetor inicial ao carregar a página
window.onload = function () {
    atualizarVetor();
};
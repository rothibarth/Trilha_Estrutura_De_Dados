 // Implementação da Fila Simples
 class Fila {
    constructor() {
        this.itens = [];
    }

    enqueue(elemento) {
        this.itens.push(elemento);
    }

    dequeue() {
        if (this.estaVazia()) {
            return "A fila está vazia!";
        }
        return this.itens.shift();
    }

    estaVazia() {
        return this.itens.length === 0;
    }

    exibirFila() {
        return this.itens.join(" --> ");
    }
}

// Implementação da Fila Circular
class FilaCircular {
    constructor(tamanhoMaximo = 5) {
        this.tamanhoMaximo = tamanhoMaximo;
        this.itens = [];
        this.inicio = 0;
        this.fim = 0;
    }

    enqueue(elemento) {
        if (this.estaCheia()) {
            return "A fila está cheia!";
        }
        this.itens[this.fim] = elemento;
        this.fim = (this.fim + 1) % this.tamanhoMaximo;
    }

    dequeue() {
        if (this.estaVazia()) {
            return "A fila está vazia!";
        }
        const elemento = this.itens[this.inicio];
        this.inicio = (this.inicio + 1) % this.tamanhoMaximo;
        return elemento;
    }

    estaVazia() {
        return this.inicio === this.fim && !this.itens[this.inicio];
    }

    estaCheia() {
        return this.inicio === this.fim && !!this.itens[this.inicio];
    }

    exibirFila() {
        if (this.estaVazia()) {
            return "Fila vazia!";
        }
        let resultado = [];
        let i = this.inicio;
        while (i !== this.fim || (i === this.fim && !!this.itens[i])) {
            resultado.push(this.itens[i]);
            i = (i + 1) % this.tamanhoMaximo;
        }
        return resultado.join(" --> ");
    }
}

// Implementação da Simulação de Banco
class Banco {
    constructor() {
        this.fila = new Fila();
    }

    adicionarCliente(nome) {
        this.fila.enqueue(nome);
    }

    atenderCliente() {
        if (this.fila.estaVazia()) {
            return "Não há clientes na fila.";
        }
        return this.fila.dequeue();
    }

    exibirFila() {
        return this.fila.exibirFila();
    }
}

// Instâncias globais
let filaSimples = new Fila();
let filaCircular = new FilaCircular();
let banco = new Banco();

// Funções para interagir com a Fila Simples
function adicionarFilaSimples() {
    const valor = document.getElementById("filaSimplesInput").value;
    if (valor) {
        filaSimples.enqueue(valor);
        document.getElementById("filaSimplesOutput").textContent = `Fila: [${filaSimples.exibirFila()}]`;
    }
}

function removerFilaSimples() {
    const valor = filaSimples.dequeue();
    if (valor) {
        alert(`Valor removido: ${valor}`);
        document.getElementById("filaSimplesOutput").textContent = `Fila: [${filaSimples.exibirFila()}]`;
    }
}

// Funções para interagir com a Fila Circular
function adicionarFilaCircular() {
    const valor = document.getElementById("filaCircularInput").value;
    if (valor) {
        filaCircular.enqueue(valor);
        document.getElementById("filaCircularOutput").textContent = `Fila: [${filaCircular.exibirFila()}]`;
    }
}

function removerFilaCircular() {
    const valor = filaCircular.dequeue();
    if (valor) {
        alert(`Valor removido: ${valor}`);
        document.getElementById("filaCircularOutput").textContent = `Fila: [${filaCircular.exibirFila()}]`;
    }
}

// Funções para interagir com a Simulação de Banco
function adicionarCliente() {
    const nome = document.getElementById("clienteInput").value;
    if (nome) {
        banco.adicionarCliente(nome);
        document.getElementById("bancoOutput").textContent = `Fila de espera: [${banco.exibirFila()}]`;
    }
}

function atenderCliente() {
    const cliente = banco.atenderCliente();
    if (cliente) {
        alert(`Cliente atendido: ${cliente}`);
        document.getElementById("bancoOutput").textContent = `Fila de espera: [${banco.exibirFila()}]`;
    }
}
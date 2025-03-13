// 4. Soma dos Elementos de uma Lista Encadeada:
// ○ Crie uma função recursiva que percorra uma lista simplesmente encadeada e
// retorne a soma de todos os elementos da lista

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}   

class lista_encadeada {
    constructor() {
        this.head = null;
    }

    append(value) {
        if (!this.head) {
            this.head = new Node(value);
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = new Node(value);
    }
}

function soma_lista_encadeada(node) {
    if (node === null) {
        return 0;
    }
    return node.value + soma_lista_encadeada(node.next);
}

// Teste no console
const list = new lista_encadeada();
list.append(10);
list.append(20);
list.append(30);
list.append(40);

console.log(soma_lista_encadeada(list.head)); // resultado 100

// Busca em uma Árvore Binária de Busca:
// ○ Implemente uma função recursiva para buscar um valor em uma árvore
// binária de busca.
// ○ Qual é a complexidade de tempo da busca em termos de nnn, onde nnn é o
// número de nós na árvore?

// Definição da classe Node
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Definição da classe arvore binaria de busca
class arvore_bi_de_busca {
    constructor() {
        this.root = null;
    }

    // Método para inserir um novo valor na arvore binaria de busca
    inserir(value) {
        this.root = this._inserirRec(this.root, value);
    }

    _inserirRec(node, value) {
        if (node === null) {
            return new Node(value);
        }
        if (value < node.value) {
            node.left = this._inserirRec(node.left, value);
        } else if (value > node.value) {
            node.right = this._inserirRec(node.right, value);
        }
        return node;
    }

    // Método recursivo para buscar um valor na arvore binaria de busca
    buscar(value) {
        return this._buscarRec(this.root, value);
    }

    _buscarRec(node, value) {
        if (node === null || node.value === value) {
            return node;
        }
        if (value < node.value) {
            return this._buscarRec(node.left, value);
        }
        return this._buscarRec(node.right, value);
    }
}

// Testando no console
const teste_arvore_bi_busca = new arvore_bi_de_busca();
teste_arvore_bi_busca.inserir(50);
teste_arvore_bi_busca.inserir(30);
teste_arvore_bi_busca.inserir(70);
teste_arvore_bi_busca.inserir(20);
teste_arvore_bi_busca.inserir(40);
teste_arvore_bi_busca.inserir(60);
teste_arvore_bi_busca.inserir(80);

console.log(teste_arvore_bi_busca.buscar(40)); // Deve retornar o nó com valor 40
console.log(teste_arvore_bi_busca.buscar(25)); // Deve retornar null (não encontrado)

// 3. Travessia em Árvores:
// ○ Implemente um algoritmo recursivo para realizar o percurso in-order de uma
// árvore binária.
// ○ Altere o código para implementar os percursos pre-order e post-order.

class Node {
    constructor(value) {
        this.value = value;
        this.left = this.right = null;
    }
}

class arvore_binaria {
    constructor() {
        this.root = null;
    }

    insercao(value) {
        this.root = this.insercao_recursiva(this.root, value);
    }

    insercao_recursiva(root, value) {
        if (!root) return new Node(value);
        if (value < root.value) root.left = this.insercao_recursiva(root.left, value);
        else root.right = this.insercao_recursiva(root.right, value);
        return root;
    }

    preOrder(node, result = []) {
        if (node) {
            result.push(node.value);
            this.preOrder(node.left, result);
            this.preOrder(node.right, result);
        }
        return result;
    }

    postOrder(node, result = []) {
        if (node) {
            this.postOrder(node.left, result);
            this.postOrder(node.right, result);
            result.push(node.value);
        }
        return result;
    }
}

const arvore = new arvore_binaria();
[50, 30, 70, 20, 40, 60, 80].forEach(value => arvore.insercao(value));

console.log("Pre-Order:", arvore.preOrder(arvore.root).join(" "));
console.log("Post-Order:", arvore.postOrder(arvore.root).join(" "));
   
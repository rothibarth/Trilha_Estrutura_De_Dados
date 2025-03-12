// 1. Fatorial Recursivo:
// ○ Implemente uma função recursiva para calcular o fatorial de um número
// inteiro nnn.
// ○ Determine a complexidade de tempo do algoritmo.

let cont = 0

function fatorial(n){

    cont++

    if (n == 1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}

console.log("Calcula do fatorial: " , fatorial(4), "Contador: " , cont)
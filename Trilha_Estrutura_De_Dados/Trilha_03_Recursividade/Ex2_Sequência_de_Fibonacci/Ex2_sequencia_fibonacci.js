// Sequência de Fibonacci:
// ○ Implemente uma função recursiva que calcule o enésimo número da
// sequência de Fibonacci.
// ○ Analise o desempenho do algoritmo e sugira uma otimização (por exemplo,
// usando memoization ou uma abordagem iterativa).

function fibonacci(n){
    if(n == 0){
        return 0
    }else if(n == 1){
        return 1
    }else{
        return fibonacci(n-1) + fibonacci(n-2)
    }
}

console.log(fibonacci(10))
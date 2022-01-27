/* A função é um verbo, uma ação. Ela executa um processo baseado na sentensa de código.
A função define um bloco associoado. É um bloco de código nomeado. Pode não receber nenhum parâmetro,
pode não retornar dado, pode receber dados de entrada, pode receber e retornar... */

//Função sem retorno:
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // renorna NaN porque o b não tem nada atribuido para b. Ele somou o 2 com Undefined
imprimirSoma(2, 10, 5, 7, 9, 1) // simplesmente somou os dois que importam e ignorou o resto
imprimirSoma()

//Função com retorno:
function soma(a, b = 1) {
    return a + b 
}
console.log(soma(2, 3))
console.log(soma(2))
imprimirSoma()
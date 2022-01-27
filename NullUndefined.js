/* Atribuição por valor: tipos primitivos da liguagem
Atribuição por referência: objetos, funções */

let valor // não inicializada
console.log(valor) // Undefined
// console.log(valor2) vai imprimir: valor2 is not defined

//Undefined é diferente de not defined

valor = null // null significa que a variável não está apontando para nenhum endereço de memória
// Null quer dizer ausência de valor

console.log(valor)

// sempre use o null se quiser zerar o valor de uma variável. Não use o Undefined

// console.log(valor.toString()) imprime: TypeError: Cannot read properties of null (reading 'toString')

const produto = {}
console.log(produto.preco) // undefined porque não atribuí nada a preco
console.log(produto)
produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)
delete produto.preco // melhor deletar que atribuir undefined
console.log(produto)

produto.preco = null 
console.log(!!produto.preco)
console.log(produto)
// Armazenando uma função dentro de uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável 
// arrow: forma reduzida de escrever a função. => substitue a palavra function
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3))

// Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(10, 1))

const imprimir2 = a => console.log(a)
imprimir2('Legal!')
/* Array: forma de agrupar múltiplos valores numa estrutura só a partir de um único identificador.
Essa estrutura é indexada. Você acessa os elementos de um array a partir de um número. O primeiro elemento 
a partir do índice 0, o segundo elemento acessa a partir do índice 1, terceiro elemento com o 2 e assim
sucessivamente. Em JS o array é heterogêneo, fracamente tipada */

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) // retorna o índece 0 = 7.7 e o indice 3 (que é o quarto) = 9.2
console.log(valores [4]) // deu undefined porque não existe índice 4

valores [4] = 10
console.log(valores)

valores [10] = 10
console.log(valores) // ele já diz que tem 5 ítens vazios no meio

console.log(valores.length)  // pra saber a quantidade de ítens

valores.push({id: 3}, false, null, 'teste') //misturado objeto com falso com nulo com texto. Mesmo assim ele entende
console.log(valores)

console.log(valores.pop()) //pega o último valor do array e tira 
delete valores[0] // outra forma de deletar ítens
console.log(valores) 

console.log(typeof valores) // em JS o array é tipo object
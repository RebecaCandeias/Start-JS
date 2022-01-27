const peso1 = 1.0
const peso2 = Number ('2.1')

console.log(peso1, peso2)

console.log(Number.isInteger(peso1)) // para saber se peso1 é inteiro
console.log(Number.isInteger(peso2))  // peso2 não é inteiro


const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 + peso2
const media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2)) // fixei em apenas 2 casas decimais 
console.log(media.toString()) // retornou o valor original
console.log(media.toString(2)) // transforma em valor binário
console.log(typeof media)
console.log(typeof Number)

// Number (com N maiúsculo) é uma função e number (com n minúsculo) é o tipo do dado
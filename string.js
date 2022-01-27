const escola = "Cod3r"

console.log(escola.charAt(4)) // imprime a letra que está no índice 4 da string. O "C" é o índice zero

console.log(escola.charAt(5))  // como não tem índice 5, ele imprime um espaço vazio

console.log(escola.charCodeAt(3)) // imprime o código relacionado a tabela unicode no índe 3 (que no caso é o número 3)
console.log(escola.indexOf(3)) // índice associado ao dígito 3
console.log(escola.substring(1)) // vai imprimir a string do índice 1 até o final
console.log(escola.substring(0,3)) // imprime do índice 0 ao 3 sem incluir o 3°

console.log('Escola '.concat(escola).concat('!'))
console.log('Escola ' + escola + '!')

console.log(escola.replace(3,'e')) // substituiu o índice 3 pela vogal "e"
console.log(escola.replace(/\d/,'e')) // /\d/ é uma expressão regular

console.log('Ana,Maria,Pedro'.split(',')) // array

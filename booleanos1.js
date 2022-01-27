let isAtivo = false 
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 // além do 'verdadeiro' e do 'falso', o "1" também pode representar um valor booleano
console.log(isAtivo) /* aqui ele imprimiu um 1 que é um number e não um booleano. Para transformar em
verdadeiro e falso tenho que colocar uma negação, que é uma exclamação. Então para transformar em verdadeiro
ou falso vamos usar a negação da negação, que são duas exclamações. Pela lógica, a negação da negação volta 
a ser o valor original */
console.log(!!isAtivo) // se eu colocasse uma ! só inverteria a lógica e seria só a negação. Daria false
console.log(!isAtivo)

console.log("os verdadeiros...")
console.log(!!3) // todos os números interos são verdadeiros com exceção do zero
console.log(!!-1)
console.log(!!' ') // um espaço
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("os falsos...")
console.log(!!0)
console.log(!!'') // uma string vazia
console.log(!!NaN)  //not a number
console.log(!!undefined)
console.log(!!(isAtivo = false))
console.log(!!null) //nulo

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) /* deu verdadeiro porque basta que um seja verdadeiro. 
Um espaço é verdadeiro, então tudo se torna verdadeiro */
console.log(('' || null || 0 || 'epa')) // Ao tirar as !! ele retorna o primeiro valor verdadeiro 
console.log(('' || null || 0 || 'epa' || 123)) // continua imprimindo epa porque é o primeiro valor verdadeiro
 

// Esse símbolo || significa 'ou'. Serve para dar um valor padrão pra uma determinada variável

let nome = ''
console.log(nome || 'desconhecido') // retornou desconhecido porque o nome é falso
nome = 'Rebeca'
console.log(nome || 'desconhecido')
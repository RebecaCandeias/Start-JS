let preco = 19.90
let desconto = 0.4

console.log(19.9 * 0.6) // posso fazer dessa maneira, mas não é a mais usual (valor literal)

console.log(preco * 1 - desconto) /* se eu executar dessa forma o cálculo dará errado por conta 
da prioridade matemática. Precisa de parêntesis (valor com código) */ 

console.log(preco * (1 - desconto))  // cálculo correto


let precoComDesconto = preco * (1 - desconto)  //tb posso criar uma variável
console.log(precoComDesconto) // palavras juntas se escrevem com a primeira letra maiúscula 

nome = "caderno " // coloquei um espaço antes das últimas ". Com isso o nome ficou separado no console
categoria = "papelaria"
console.log(nome + categoria)
nome = "caderno"
console.log(nome + categoria)

console.log(nome + " " + categoria) // dessa forma o nome também fica separado

console.log("produto:" + " " + nome 
+ ", categoria:" + " " + categoria
 + " " + ", preço:" + " " + preco
 + " " + ", desconto:" + " " + desconto)

 


/* O objeto em JS é uma coleção de chave-valor. Você tem o nome do atributo, ou seja,
 o identificador e você passa um valor pra ele que pode ser um texto, 
 pode ser um boolean, pode ser uma função, mas sempre sendo uma coleção de chaves e valores */

const prod1 = {} // um par de chaves é a forma literal de escrever um objeto
prod1.nome = 'Celular ultra mega' // esse nome foi criado dinamicamente dentro de um objeto
prod1.preco = 4998.90
prod1["Desconto Legal"] = 0.40 //evitar atributos com espaço
console.log(prod1)

const prod2 = {
nome: "Camisa Polo",
preco: 78.80
}
console.log(prod2)

// objeto não é a mesma coisa que json. O json fica dentro de aspas simples

'{ "nome": "camisa polo", "preco": 79.90 }' // isso é um json

/* json é para comunicação entre sistemas. 
Forma de trocas dados entre sistemas.
json é um formato textual e objeto é uma coleção de chave-valor.
json: JavaScript Object Notation */



console.log(7 / 0) //essa é uma operação infinita. Qualquer número dividido por zero vai dar infinity.

console.log("10" / 2) /* mesmo "10" sendo uma string, ele vai identificar e vai dar certo. 
Esse é mais um exemplo da linguagem fracamente tipada de JS. */

console.log("10,2" / 2) //já se vier com número quebrado ele não vai entender e dará errado.

console.log("show" * 2) // Tb não dará certo e ele retornará NAN. Not a number

console.log(0.1 + 0.7) /* Não dá a precisão de 0,8. Algumas imprecisões acontecem por
 conta da especificação que é seguida em JS que é bem mais rápida que a especificação que é 100% precisa */

 console.log('3' +2)  // não vai somar. Vai concatenar porque a string tem preferência
/* 
  Function() constructor

  * expressão new
  * criar um novo objeto
  * this keyword
*/

function Person(name) {
  this.name = name //referencia o kevyn que está la fora, e vice versa
  this.walk = function () {
    return this.name + ' está andando'
  }
}

const kevyn = new Person('Kevyn') // se torna uma função construtora por causa do new
const joao = new Person('João')
console.log(kevyn)
console.log(joao.walk())

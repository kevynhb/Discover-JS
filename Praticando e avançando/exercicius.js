// 1. declare uma variável de nome weight
let weight

// 2. que tipo de dado é a variável acima?
console.log(typeof weight)

/*
  3. declare uma variável e atribua valores para cada um dos dados:
    name: String
    age: Number (integer)  
    stars: Number (float)
    isSubscribed: Boolean
*/
let name = 'kevyn'
let age = 22
let stars = 2.5
let isSubscribed = true
console.log(typeof name)
console.log(typeof age)
console.log(typeof stars)
console.log(typeof isSubscribed)

// 4. a variável student a baixo é de que tipo?
let student = {} //object
console.log(typeof student)
// 4.1 atribua a ela as mesma proprieddades e valores do exercício 3.
student = {
  name: 'kevyn',
  age: 22,
  weight: 85.9,
  isSubscribed: false
}
console.log(student)

/* 4.2 mostre no console a seguinte mensaguem:

  <name> de idade <age> pesa <weight> kg.

  atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
*/

console.log(
  `${student.name} de idade ${student.age} pesa ${student.weight} Kg.`
)

/*
  5. declare uma variável do tipo Array, de nome students e atrivua a ela nenhum valor, ou seja, somente o Array vazio
*/
let students = []

/*
  6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (não copiar e colar o o objeto, mas usar o objeto criado e inserir ele no Array)
*/
students = [student]
console.log(students)

// 7. coloque no console o valor da posição zero do Array acima
console.log(students[0])

// 8. Crie um novo student e coloque na posição 1 do Array students
const San = {
  name: 'San',
  age: 22,
  weight: 55.8,
  isSubscribed: true
}
students[1] = San
console.log(students)

/*
  9. Sem rodar o código reponda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.
*/
console.log(a)
var a = 1 //sofre o efeito hoisting

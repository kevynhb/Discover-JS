// Array

const animals = ['lion', 'Monkey', 'Cat']

// acessar valores dentro do Array
console.log(animals.length)
console.log(animals[2])

// Posso colocar objeto diretamente no array
const animais = [
  'Leão',
  'Cachorro',
  {
    name: 'Cat',
    idade: 3
  }
]
console.log(animais)
console.log(animais[2].name)
console.log(animais[1].name) // não é objeto, é uma string

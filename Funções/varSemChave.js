// oarâmetros - parameters
const sum = function (number1, number2) {
  total = number1 + number2 // não criar uma váriavel sem a palavra chave (let, var, const)
  return total
}

let number1 = 34
let number2 = 25

sum(number1, number2)
console.log(`o numero 1 é ${number1}`)
console.log(`o numero 1 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)

console.log(total) // variavél não definida então fica global, depois de rodar a função

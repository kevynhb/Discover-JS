// Callback function
// É chamar uma função dentro de outra função, passando o valor dela para dentro da primeira função

function sayMyName(name) {
  console.log(name)
}

sayMyName(() => {
  console.log('estou em uma callback')
})

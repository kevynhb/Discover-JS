// function hoisting
// por devaixo dos panos a function sofre hoisting, como se estivesse antes da chamada da função

sayMyName()

function sayMyName() {
  console.log('Kevyn')
}

// diferente se eu fazer uma const
// const sayMyName = function () { // não sofre elevação (hoisting)
//   console.log('Kev')
// }

// function scope
let subject = 'create video'

// só existe um novo subject se eu passar ele como parametro
function createThink(subject) {
  subject = 'study' // não sobrecreve a variavpel que esta de fora
  return subject
}

console.log(createThink(subject)) // essa função cria o pensamento, atualiza a variavél subject
console.log(subject)

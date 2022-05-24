function Deque() {
  let itens = []

  // Inserir atrás
  this.insertBack = function (elemento) {
    itens.push(elemento)
  }

  // Inserir na frente
  this.insertFront = function (elemento) {
    itens.splice(0, 0, elemento)
  }

  // Remover de trás
  this.removeBack = function () {
    return itens.pop()
  }

  // Remover da frente
  this.removeFront = function () {
    return itens.shift()
  }

  // Limpar a fila (remover todos os elementos)
  this.clear = function () {
    itens = []
  }

  // Tamanho da fila
  this.size = function () {
    return itens.length
  }

  // Mostrar o primeiro elemento da fila
  this.front = function () {
    return itens[0]
  }

  // Mostrar o último elemento da fila
  this.back = function () {
    return itens[itens.length - 1]
  }

  // Imprimir os elementos da fila
  this.print = function () {
    console.log(`[${itens.toString()}]`)
  }

  // Verificar se a fila está vazia
  this.isEmpty = function () {
    return itens.length == 0
  }
}

const deque = new Deque()
deque.insertBack(1)
deque.print()
deque.insertBack(2)
deque.print()
deque.insertBack(3)
deque.print()
deque.insertFront(4)
deque.print()
deque.removeBack()
deque.print()
deque.removeFront()
deque.print()

function palindromo(frase) {
  const deque = new Deque()
  frase = frase.toLowerCase()
  for (let i = 0; i < frase.length; i++) {
    if (frase[i] != ' ') {
      deque.insertBack(frase[i])
    }
  }

  while (!deque.isEmpty() && deque.size() != 1) {
    if (deque.removeBack() != deque.removeFront()) {
      return false
    }
  }
  return true
}

console.log(palindromo('ana'))
console.log(palindromo('Roma me tem amor'))
console.log(palindromo('Roma nao me tem amor'))
console.log(
  palindromo('O romano acata amores a damas amadas e Roma ataca o namoro')
)
console.log(
  palindromo('O romano acata amores a damas amadas e Roma ataca o namorado')
)
console.log(palindromo(''))
console.log(palindromo('a'))

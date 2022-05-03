function Queue() {
  let itens = []

  // Enfileirar
  this.enqueue = function (elemento) {
    itens.push(elemento)
  }

  // Desenfileirar
  this.dequeue = function () {
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
const read = require('readline-sync')
const queue = new Queue()

for (;;) {
  console.log('1 - inserir elemento na fila')
  console.log('2 - remover elemento na fila')
  console.log('3 - imprimir a fila')
  console.log('4 - tamanho da fila')
  console.log('0 - sair')
  let op = read.questionInt('Digite uma opcao -->')
  switch (op) {
    case 1:
      queue.enqueue(read.questionInt('Digite um numero: '))
      queue.print()
      break
    case 2:
      if (queue.isEmpty()) {
        console.log('A fila está vazia')
      } else {
        console.log(`Elemento removido ${queue.dequeue()}`)
        queue.print()
      }
      break
    case 3:
      queue.print()
      break
    case 4:
      console.log(`O tamanho da fila é ${queue.size()}`)
      break
    case 0:
      return
    default:
      console.log('Opcao invalida')
  }
}

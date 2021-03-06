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

  this.queueJump = function (pos, elemento) {
    if (pos < 0 || pos > this.size()) {
      console.log('Valores inválidos')
    } else {
      itens.splice(pos, 0, elemento)
    }
  }
}
const read = require('readline-sync')
const queue = new Queue()
queue.enqueue(1)
queue.print()
queue.enqueue(2)
queue.print()
queue.enqueue(3)
queue.print()
queue.enqueue(4)
queue.print()
queue.enqueue(5)
queue.print()
queue.enqueue(6)
queue.print()
queue.enqueue(7)
queue.print()
queue.queueJump(4, 1000)
queue.print()

function Queue() {
  let itens = []
  let max = 0

  this.setSizeMax = function (tamanho) {
    max = tamanho
  }

  this.isFull = function () {
    return this.size() == max
  }

  // Enfileirar
  this.enqueue = function (elemento) {
    if (this.isFull()) {
      console.log('A fila está cheia!')
    } else {
      itens.push(elemento)
    }
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

const queue = new Queue()
queue.setSizeMax(5)
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

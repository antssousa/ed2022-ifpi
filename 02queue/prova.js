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

  this.copy = function () {
    const queue = new Queue()
    for (let i = 0; i < itens.length; i++) {
      queue.enqueue(itens[i])
    }
    return queue
  }

  this.contains = function (elemento) {
    const copia = this.copy()
    while (!copia.isEmpty()) {
      if (elemento == copia.dequeue()) {
        copia.clear()
        return true
      }
    }
    return false
  }

  this.indexOf = function (elemento) {
    const copia = this.copy()
    let index = 0
    while (!copia.isEmpty()) {
      if (elemento == copia.dequeue()) {
        copia.clear()
        return index
      }
      index++
    }
    return -1
  }

  this.indexLastOf = function (elemento) {
    const copia = this.copy()
    let index = 0,
      pos = -1
    while (!copia.isEmpty()) {
      if (elemento == copia.dequeue()) {
        pos = index
      }
      index++
    }
    return pos
  }
}

const queue = new Queue()
queue.enqueue(7)
queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(3)
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(7)
queue.enqueue(7)

console.log(queue.contains(6))
console.log(queue.contains(10))
console.log(queue.indexOf(7))
console.log(queue.indexLastOf(7))

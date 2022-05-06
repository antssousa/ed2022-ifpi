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

  this.isSorted = function () {
    const temp = this.copy()
    let num = temp.dequeue()
    while (!temp.isEmpty()) {
      let suc = temp.dequeue()
      if (num > suc) {
        temp.clear()
        return false
      }
      num = suc
    }
    return true
  }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(0)
queue.enqueue(5)
queue.enqueue(6)
queue.print()
if (queue.isSorted()) {
  console.log('Fila ordenada')
} else {
  console.log('Fila não ordenada')
}

queue.print()

function isSorted(array) {
  let flag = true
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      flag = false
      break
      // return false
    }
  }
  if (flag == true) {
    return true
  } else {
    return false
  }
  // return true
}

console.log(isSorted([1, 2, 3, 4, 0, 6]))

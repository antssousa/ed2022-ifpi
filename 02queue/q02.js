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

  this.reverse = function () {
    const stack = new Stack()
    while (!this.isEmpty()) {
      stack.push(this.dequeue())
    }
    while (!stack.isEmpty()) {
      this.enqueue(stack.pop())
    }
  }
}

function Stack() {
  let itens = []
  // Inserir no topo
  this.push = function (elemento) {
    itens.push(elemento)
  }
  // Remover do topo
  this.pop = function () {
    return itens.pop()
  }
  // Exibir o topo
  this.peek = function () {
    return itens[itens.length - 1]
  }
  // Verificar se está vazia
  this.isEmpty = function () {
    return itens.length == 0
  }
  // Imprimir a pilha toda
  this.printStack = function () {
    // let stack = ''
    // for(let i = 0; i < itens.length; i++){
    //   stack += itens[i] + ' '
    // }
    return itens.toString()
    // return stack
  }

  // Limpar a pilha
  this.clear = function () {
    itens = []
  }

  // Retornar o tamanho da pilha
  this.size = function () {
    return itens.length
  }
}

function reverse(queue) {
  const stack = new Stack()
  while (!queue.isEmpty()) {
    stack.push(queue.dequeue())
  }
  while (!stack.isEmpty()) {
    queue.enqueue(stack.pop())
  }
}

const queue = new Queue()
for (let i = 0; i < 10; i++) {
  let n = Math.floor(Math.random() * 100)
  queue.enqueue(n)
}
queue.print()
queue.reverse()
// reverse(queue)
queue.print()

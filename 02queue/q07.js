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
const filas = []
for (let i = 0; i < 7; i++) {
  filas[i] = new Queue()
}

let d = 0
let pessoa = 0
for (;;) {
  console.log('0 - Sair')
  if (d > 6) {
    d = 0
  } else {
    d = d + 1
  }
  let op = read.questionInt(
    'Digite qual dia da semana deseja reservar o filme: '
  )
  if (op == 0) {
    break
  }
  let nome = read.question('Digite seu nome: ')
  filas[op - 1].enqueue(nome)
  do {
    let alugar = read.question(
      `${filas[d].dequeue()} vai alugar? 1 - sim, 0 - não: `
    )
  } while (!filas[d].isEmpty() && alugar != 0)
}

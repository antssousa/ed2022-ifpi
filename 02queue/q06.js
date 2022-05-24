function Queue(maxLength = 0) {
  let itens = []
  let max = maxLength

  this.setSizeMax = function (tamanho) {
    max = tamanho
  }

  this.isFull = function () {
    return this.size() == max
  }

  // Enfileirar
  this.enqueue = function (elemento, tempo) {
    if (this.isFull()) {
      console.log('A fila está cheia!')
    } else {
      itens.push({ item: elemento, tempo: tempo })
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
const read = require('readline-sync')
const fila = new Queue(100)

let pessoa = 0
let tempoTotal = 0
for (;;) {
  console.log('1 - Entrada')
  console.log('2 - Saída')
  console.log('3 - Tempo')
  console.log('0 - Sair')
  let op = read.questionInt('Digite uma opcao: ')
  switch (op) {
    case 1:
      let tempo = Date.now()
      fila.enqueue(++pessoa, tempo)
      break
    case 2:
      let removido = fila.dequeue()
      let dif = Date.now() - removido['tempo']
      tempoTotal += dif
      break
    case 3:
      let tempoMedio = tempoTotal / pessoa
      console.log(`Tempo médio igual a ${tempoMedio.toFixed(2)} ms`)
      break
    case 0:
      return
    default:
      console.log('Opção invalida')
      break
  }
}

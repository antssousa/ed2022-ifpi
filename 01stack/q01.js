function Stack() {
  let itens = []
  let max = 0

  this.setSizeMax = function (tam) {
    max = tam
  }

  this.isFull = function () {
    return itens.length == max
  }
  // Inserir no topo
  this.push = function (elemento) {
    if (!this.isFull()) {
      itens.push(elemento)
    } else {
      console.log('A pilha está cheia')
    }
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
    // console.log(`[${itens.toString()}]`)
    console.log('---------------')
    for (let i = itens.length - 1; i >= 0; i--) {
      console.log(`${itens[i]}`)
    }
    // console.log('---------------');
    // return itens.toString()
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

const pilha = new Stack()
pilha.setSizeMax(5)
pilha.push('Antonio')
pilha.printStack()
pilha.push('Renato')
pilha.printStack()
pilha.push('Maria')
pilha.printStack()
pilha.push('Lucas')
pilha.printStack()
pilha.push('Pedro')
pilha.printStack()
pilha.push('Matheus')
console.log('\nRemovendo os elementos da pilha')
pilha.printStack()
while (!pilha.isEmpty()) {
  pilha.pop()
  pilha.printStack()
}

// pilha2 = new Stack()
// pilha2.setSizeMax(Math.floor(Math.random() * 100))
// while(!pilha2.isFull()){
//   pilha2.push(Math.floor(Math.random() * 100))
//   pilha2.printStack()
// }
// console.log("A pilha 2 está cheia")

// console.log(pilha2.size())

const pilha = new Stack()
pilha.push('Antonio')
pilha.push('Renato')
pilha.push('Maria')
pilha.push('Lucas')
pilha.push('Pedro')
pilha.push('Matheus')

while (pilha.size() > 0) {
  console.log(pilha.pop())
}

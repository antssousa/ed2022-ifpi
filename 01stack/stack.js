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

const stack = new Stack()
stack.push(4)
console.log(stack.printStack())
stack.push(9)
console.log(stack.printStack())
stack.push(0)
console.log(stack.printStack())
stack.pop()
console.log(stack.printStack())
console.log(stack.isEmpty())
stack.pop()
console.log(stack.printStack())
stack.pop()
console.log(stack.printStack())
console.log(stack.isEmpty())

console.log(stack.clear())

const pilha = new Stack()
pilha.push('Antonio')
pilha.push('Renato')
pilha.push('Maria')
pilha.push('Lucas')
pilha.push('Pedro')
pilha.push('Matheus')
console.log(pilha.printStack())
while (pilha.size() > 0) {
  console.log(pilha.pop())
}

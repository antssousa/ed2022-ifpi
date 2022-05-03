function Stack(){
  let itens = []
  // Inserir no topo
  this.push = function(elemento){
    itens.push(elemento)
  }
  // Remover do topo
  this.pop = function(){
    return itens.pop()
  }
  // Exibir o topo
  this.peek = function(){
    return itens[itens.length - 1]
  }
  // Verificar se está vazia
  this.isEmpty = function(){
    return itens.length == 0
  }
  // Imprimir a pilha toda
  this.printStack = function(){
    for(let i = itens.length - 1; i >=0; i--){
      console.log(`${itens[i]}`)
    }
    console.log('---------------');
  }

  // Limpar a pilha
  this.clear = function(){
    itens = []
  }

  // Retornar o tamanho da pilha
  this.size = function(){
    return itens.length
  }

  this.arrayToStack = function(array){
    for(let i = 0; i < array.length; i++){
        this.push(array[i])
    }
  }
}

const stack = new Stack()
const stack2 = new Stack()
for(let i = 0; i < 10; i++){
  let n = Math.floor(Math.random() * 100)
  stack.push(n)
}
console.log("Pilha 1")
stack.printStack()
console.log("Pilha 2")
stack2.printStack()

while(!stack.isEmpty()){
  let n = stack.pop()
  stack2.push(n)
}

console.log("Pilha 1")
stack.printStack()
console.log("Pilha 2")
stack2.printStack()


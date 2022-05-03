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
    console.log('---------------');
    for(let i = itens.length - 1; i >=0; i--){
      console.log(`${itens[i]}`)
    }
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
for(let i = 0; i < 10; i++){
  let n = Math.floor(Math.random() * 100)
  stack.push(n)
}
stack.printStack()

let par = 0
while(!stack.isEmpty()){
  let n = stack.pop()
  if (n % 2 == 0){
    par++
  }
}

console.log(`A pilha tinha ${par} números pares`)
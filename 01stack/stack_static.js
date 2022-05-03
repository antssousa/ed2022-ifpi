function Stack(){
  let itens = new Array(100)
  let topo = 0
  // Inserir no topo
  this.push = function(elemento){
    if (!this.isFull()){
      itens[topo] = elemento
      topo++
    } else {
      console.log("Pilha cheia")
    }
  }
  // Remover do topo
  this.pop = function(){
    if(!this.isEmpty()){
      topo--
      let rem = itens[topo]
      return rem
    }
    return undefined
  }
  // Exibir o topo
  this.peek = function(){
    return itens[topo - 1]
  }
  // Verificar se está vazia
  this.isEmpty = function(){
    return topo == 0
  }

  this.isFull = function(){
    return topo == itens.length
  }
  // Imprimir a pilha toda
  this.printStack = function(){
    if (!this.isEmpty()){
      console.log("----------")
      for (let i = topo - 1; i >=0; i--) {
        console.log(itens[i])    
      }
    } else {
      console.log("----------")
    }    
  }

  // Limpar a pilha
  this.clear = function(){
    itens = new Array(100)
  }

  // Retornar o tamanho da pilha
  this.size = function(){
    return topo
  }
}

const stack = new Stack()

stack.push(1)
stack.printStack()
stack.push(2)
stack.printStack()
stack.push(3)
stack.printStack()
stack.pop()
stack.printStack()
stack.push(5)
stack.printStack()

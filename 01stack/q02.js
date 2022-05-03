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
    // let stack = ''
    // for(let i = 0; i < itens.length; i++){
    //   stack += itens[i] + ' '
    // }
    return itens.toString()
    // return stack
  }

  // Limpar a pilha
  this.clear = function(){
    itens = []
  }

  // Retornar o tamanho da pilha
  this.size = function(){
    return itens.length
  }

  this.equals = function(otherStack){
    if (this.size() !== otherStack.size()){
      return false
    }
    while(!this.isEmpty()){
      if(this.pop() !== otherStack.pop()){
        return false
      } 
    }
    return true
  }
}

function compareStack(stack1, stack2){
  if (stack1.size() !== stack2.size()){
    return false
  }
  while(!stack1.isEmpty()){
    if(stack1.pop() !== stack2.pop()){
      return false
    } 
  }
  return true
}
const b = new Stack()
const a = new Stack()
if(compareStack(a, b)){
  console.log("A pilhas são iguais")
} else {
  console.log("A pilhas são diferentes")
}
a.push(1)
a.push(2)
a.push(3)
a.push(4)
b.push(1)
b.push(2)
b.push(3)
b.push(4)
if(compareStack(a, b)){
  console.log("A pilhas são iguais")
} else {
  console.log("A pilhas são diferentes")
}

if(a.equals(b)){
  console.log("A pilhas são iguais")
} else {
  console.log("A pilhas são diferentes")
}


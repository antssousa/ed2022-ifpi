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
    // console.log(`[${itens.toString()}]`)
    console.log('---------------');
    for(let i = itens.length - 1; i >=0; i--){
      console.log(`${itens[i]}`)
    }
    // console.log('---------------');
    // return itens.toString()
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

  this.arrayToStack = function(array){
    for(let i = 0; i < array.length; i++){
      // if (array[i] != null || array[i] != undefined || array[i] != NaN){ if (array[i]) {
        this.push(array[i])
      // }
    }
  }
}

const stack = new Stack()
const array = [1, 6, 8, 0, -1, undefined, null, 3, 2, 10, 23, NaN]
stack.printStack()
console.log(array)
stack.arrayToStack(array)
stack.printStack()
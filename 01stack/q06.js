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

const read = require('readline-sync')
const stack = new Stack()

let n = read.questionInt("Digite um numero: ")
const baseStr = '012345679ABCDEF'
let base

for(;;){
  base = read.questionInt("Digite a base: ")
  if (base == 2 || base == 8 || base == 16){
    break
  }
}
let d = n
while(d > 0){
  stack.push(d % base)
  d = Math.floor(d / base)
}

stack.printStack()

let conv = ''
while(!stack.isEmpty()){
  conv = conv + baseStr[stack.pop()]
}

console.log(`${n} na base ${base} é ${conv}`)
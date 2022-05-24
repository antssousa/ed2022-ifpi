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
  this.print = function () {
    let pilha = ''
    for (let i = itens.length - 1; i >= 0; i--) {
      pilha += itens[i] + '\n'
    }
    console.log(pilha)
  }

  // Limpar a pilha
  this.clear = function () {
    itens = []
  }

  // Retornar o tamanho da pilha
  this.size = function () {
    return itens.length
  }

  this.contains = function (n) {
    while (!this.isEmpty()) {
      if (n == this.pop()) {
        return true
      }
    }
    return false
  }

  this.indexOf = function (elemento) {
    let index = 0
    let tam = this.size() - 1
    while (!this.isEmpty()) {
      if (elemento == this.pop()) {
        return tam - index
      }
      index++
    }
    return -1
  }

  this.indexLastOf = function (elemento) {
    let index = 0
    let tam = this.size() - 1
    let pos = -1
    while (!this.isEmpty()) {
      if (elemento == this.pop()) {
        pos = tam - index
      }
      index++
    }
    return pos
  }
}

const pilha = new Stack()
pilha.push(10)
for (let i = 0; i < 10; i++) {
  pilha.push(Math.floor(Math.random() * 100))
}
pilha.push(10)
pilha.print()

// function contains(stack, n) {
//   while (!stack.isEmpty()) {
//     if (n == stack.pop()) {
//       return true
//     }
//   }
//   return false
// }

// if (contains(pilha, 10)) {
//   console.log('10 está na pilha')
// } else {
//   console.log('10 não está na pilha')
// }

// console.log(pilha.indexLastOf(10))
console.log(pilha.indexOf(10))
// console.log(pilha.indexLastOf(10))

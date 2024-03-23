let listaDeCompras = [] // Cria um Array da lista de compras
let listaDosItensComprados = [] // Cria um Array dos itens que já foram comprados

const form = document.getElementById('form-itens') // Captura o formulário do HTML
const itensInput = document.getElementById('receber-item') // Captura o input que indica o valor digitado pelo usuario
const listaDeItens = document.getElementById('lista-de-itens') // Captura a lista "ul" do HTML
const itensComprados = document.getElementById('itens-comprados') // Captura a lista "ul" do HTML
const instrução = "Selecione para enviar o item para lista de comprados." // Instrução para informar ao usuário
const instruçãoDel = "Clique para deletar um item." // Instrução para infor
const iconeClass = "material-symbols-outlined"

// Aguarda clique do usuário para disparar as funções.
form.addEventListener("submit", function(evento) { 
  evento.preventDefault()
  salvarItem()
  printItem()
})

// Função para salvar item na lista, compara os valores e verifica se já existe.
function salvarItem(valor) { 
  const comprasItem = itensInput.value
  // Verifica se o item já existe.
  const checarDuplicado = listaDeCompras.some((elemento) => elemento.valor.toUpperCase() === comprasItem.toUpperCase() )
  // Teste se o item já existe.
  if (checarDuplicado) {
    alert("Item já existe.")
  // Se não, envia o item para o array.
  } else {
  listaDeCompras.push({valor:  comprasItem})
  }
}

// Função para imprimir os dados do array na tela.
function printItem() {
  // Limpa o elemento HTML na tela.
  listaDeItens.innerHTML = ''
    // Itera a lista de compras.
    listaDeCompras.forEach((item) => {
      // Para cada objeto imprimi o HTML na tela com seu respectivo valor.
      listaDeItens.innerHTML += `
    <li class="item-lista">
      <input type="checkbox" onClick="itemComprado('${item.valor}')" abbr title="${instrução}"/>
      <input type="text" value="${item.valor}"></input>
      <span class="${iconeClass}" onClick="itemDeletado('${item.valor}')" abbr title="${instruçãoDel}">delete</span>
    </li>    
    `
  })
}

// Função para remover do array um item selecionado pelo usuário.
function itemDeletado(element) {
  let index = listaDeCompras.findIndex(item => item.valor === element)
    if(index !== -1) {
      listaDeCompras.splice(index, 1)
    }
  // Após isso chama a função para reexibir a lista atualizada na tela.
  printItem() 
}

// Função para levar um item para lista de itens comprados pelo usuário,
// Verifica se o item existe no array, se não leva o mesmo para a lista.
function itemComprado(element) {
  const itemComprado = element
  const checarDuplicado = listaDosItensComprados.some((elemento) => elemento.valor.toUpperCase() === itemComprado.toUpperCase() )

    if(checarDuplicado) {
      alert("Item já comprado.")
    } else {
      // Envia item para lista de itens comprados.
      listaDosItensComprados.push({valor:  element})
      // Chama a função para reexibir a lista na tela
      printItensComprados(element)
  } 
  // Se o item foi comprado então chama função para deletar do array
  itemDeletado(element)
}

// Função para exibir na tela os itens comprados
function printItensComprados(element) {
    itensComprados.innerHTML = ''
      listaDosItensComprados.forEach((item, index) => {
       itensComprados.innerHTML += `
    <li class="item-lista">
      <input type="text" value="${item.valor}"></input>
      <span class="${iconeClass}" onClick="itemDeletadoDoComprado('${item.valor}')" abbr title="${instruçãoDel}">delete</span>
    </li>    
    `
    })
}

// Função para deletar da lista um item que já foi comprado.
function itemDeletadoDoComprado(element) {
  let index = listaDosItensComprados.findIndex(item => item.valor === element)
    if(index !== -1) {
      listaDosItensComprados.splice(index, 1)
    }
    printItensComprados(element) 
}





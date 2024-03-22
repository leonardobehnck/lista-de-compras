let listaDeCompras = [] // Cria um Array da lista de compras
let listaDosItensComprados = [] // Cria um Array dos itens que já foram comprados

const form = document.getElementById('form-itens') // Captura o formulário do HTML
const itensInput = document.getElementById('receber-item') // Captura o input que indica o valor digitado pelo usuario
const listaDeItens = document.getElementById('lista-de-itens') // Captura a lista "ul" do HTML
const itensComprados = document.getElementById('itens-comprados') // Captura a lista "ul" do HTML

// Aguarda clique do usuário para disparar as funções
form.addEventListener("submit", function(evento) { 
  evento.preventDefault()
  salvarItem()
  printItem()
})

// Função para salvar item na lista, compara os valores e verifica se já existe.
function salvarItem(valor) { 
  const comprasItem = itensInput.value
  // Verifica se o item já existe
  const checarDuplicado = listaDeCompras.some((elemento) => elemento.valor.toUpperCase() === comprasItem.toUpperCase() )
  // Teste se o item já existe
  if (checarDuplicado) {
    alert("Item já existe.")
  // Se não, envia o item para o array
  } else {
  listaDeCompras.push({valor:  comprasItem})
  }
}

// Função para imprimir os dados do array na tela.
function printItem() {
  listaDeItens.innerHTML = ''
    listaDeCompras.forEach((item, index) => {
      listaDeItens.innerHTML += `
    <li class="item-lista" data-value="${item.index}">
      <input type="checkbox" onClick="itemComprado('${item.valor}')"/>
      <input type="text" value="${item.valor}"></input>
      <span class="material-symbols-outlined" id="deletarItem${item.index}" onClick="itemDeletado('${item.valor}')">delete</span>
    </li>    
    `
  })
  
}

// Função para deletar um elemento selecionado pelo usuário, remove do array.
function itemDeletado(element) {
  let index = listaDeCompras.findIndex(item => item.valor === element)
    if(index !== -1) {
      listaDeCompras.splice(index, 1)
    }
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

  listaDosItensComprados.push({valor:  element})
    itensComprados.innerHTML = ''
      listaDosItensComprados.forEach((item, index) => {
       itensComprados.innerHTML += `
    <li class="item-lista">
      <input type="text" value="${item.valor}"></input>
      <span class="material-symbols-outlined" onClick="itemDeletadoDoComprado('${item.valor}')">delete</span>
    </li>    
    `
    })
  } 
  // Se o item foi comprado então chama função para deletar do array
  itemDeletado(element)
}

function itemDeletadoDoComprado(element) {
  let index = listaDosItensComprados.findIndex(item => item.valor === element)
    if(index !== -1) {
      listaDosItensComprados.splice(index, 1)
    }
    itemComprado(element) 
}





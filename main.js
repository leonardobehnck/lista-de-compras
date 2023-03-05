let listaDeCompras = []

const form = document.getElementById('form-itens')
const itensInput = document.getElementById('receber-item')
const listaDeItens = document.getElementById('lista-de-itens')

form.addEventListener("submit", function(evento) {
  evento.preventDefault()
  salvarItem()
  printItem()
})



function salvarItem() {
  const comprasItem = itensInput.value
  const checarDuplicado = listaDeCompras.some((elemento) => elemento.valor.toUpperCase() === comprasItem.toUpperCase() )

  if(checarDuplicado) {
    alert("Item já existe.")
  } else {

   listaDeCompras.push({
    valor:  comprasItem
  })
  console.log(listaDeCompras)
  }
}

function printItem() {
  listaDeItens.innerHTML = ''
  listaDeCompras.forEach((elemento, index) => {
    listaDeItens.innerHTML += `
    <li class="item-lista" data-value="${elemento.index}">
      <input type="checkbox"/>
      <input type="text" value="${elemento.valor}"></input>
      <span class="material-symbols-outlined" id="deletar-item">delete</span>
    </li>    
    `
  })
}


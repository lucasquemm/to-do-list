let listaTarefas = []

const telaLista = document.querySelector('.telaLista')

const salvaTarefa = (titulo, descricao, prioridade) => {
  listaTarefas.push(new Tarefa(titulo, descricao, prioridade))
}

const mostraTarefa = () => {
  telaLista.innerHTML = ''
  listaTarefas.forEach((tarefa) => criaTarefaItem(tarefa))
}

// const limpaForm = (titulo, descricao, prioridade) => {
//   titulo.value = ''
//   descricao.value = ''
//   prioridade.value = ''
// }

const criaTarefaItem = (tarefa) => {
  const itemTarefa = document.createElement('div')
  itemTarefa.classList.add('item-tarefa')

  const tituloItem = document.createElement('h2')
  tituloItem.classList.add('titulo-item')
  tituloItem.textContent = `${tarefa.titulo}`

  const descricaoItem = document.createElement('p')
  descricaoItem.classList.add('descricao-item')
  descricaoItem.textContent = `${tarefa.descricao}`

  const prioridadeItem = document.createElement('p')
  prioridadeItem.classList.add('prioridade-item')

  if (`${tarefa.prioridade}` == 3) {
    itemTarefa.style.backgroundColor = 'rgba(238, 4, 4, 0.900)'
  } else if (tarefa.prioridade == 2) {
    itemTarefa.style.backgroundColor = 'rgba(253, 173, 52, 0.900)'
  } else {
    itemTarefa.style.backgroundColor = 'rgba(10, 126, 0, 0.900)'
  }

  telaLista.appendChild(itemTarefa)
  itemTarefa.appendChild(tituloItem)
  itemTarefa.appendChild(descricaoItem)
  itemTarefa.appendChild(prioridadeItem)
}

const criaFormulario = () => {
  const form = document.querySelector('.form')

  const formDivInterna = document.createElement('div')
  formDivInterna.classList.add('formDivInterna')
  form.appendChild(formDivInterna)

  const tituloLabel = document.createElement('label')
  tituloLabel.classList.add('tituloForm')
  tituloLabel.textContent = 'Titulo:'

  const recebeTitulo = document.createElement('input')
  recebeTitulo.classList.add('tituloForm')

  const descricaoLabel = document.createElement('label')
  descricaoLabel.classList.add('descricaoForm')
  descricaoLabel.textContent = 'Descricao:'

  const recebeDescricao = document.createElement('input')
  recebeDescricao.classList.add('descricaoForm')

  const prioridadeLabel = document.createElement('label')
  prioridadeLabel.classList.add('prioridadeForm')
  prioridadeLabel.textContent = 'prioridade:'

  const recebePrioridade = document.createElement('input')
  recebePrioridade.classList.add('prioridadeForm')
  recebePrioridade.setAttribute('type', 'range')
  recebePrioridade.setAttribute('min', '1')
  recebePrioridade.setAttribute('max', '3')

  const salvarTarefabtn = document.createElement('button')
  salvarTarefabtn.classList.add('salvarBotao')
  salvarTarefabtn.textContent = 'Criar Tarefa'
  salvarTarefabtn.addEventListener('click', function () {
    salvaTarefa(
      recebeTitulo.value,
      recebeDescricao.value,
      recebePrioridade.value
    )
    mostraTarefa()(recebeTitulo, recebeDescricao, recebePrioridade)
  })

  formDivInterna.appendChild(tituloLabel)
  formDivInterna.appendChild(recebeTitulo)
  formDivInterna.appendChild(descricaoLabel)
  formDivInterna.appendChild(recebeDescricao)
  formDivInterna.appendChild(prioridadeLabel)
  formDivInterna.appendChild(recebePrioridade)
  formDivInterna.appendChild(salvarTarefabtn)
}

criaFormulario()

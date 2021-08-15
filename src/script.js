import { Tarefa } from './tarefa'

let listaTarefas = []

const telaLista = document.querySelector('.telaLista')
const form = document.querySelector('#formTarefa')

const recebeTitulo = document.querySelector('#recebeTitulo')
const recebeDescricao = document.querySelector('#recebeDescricao')
const recebePrioridade = document.querySelector('#recebePrioridade')

const salvaTarefa = (titulo, descricao, prioridade) => {
  listaTarefas.push(new Tarefa(titulo, descricao, prioridade))
}

const mostraTarefa = () => {
  telaLista.innerHTML = ''
  listaTarefas.forEach((tarefa) => criaTarefaItem(tarefa))
}

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

const html = (str) => {
  const el = document.createElement('div')
  el.innerHTML = str
  return el.firstChild
}

form.addEventListener('submit', function (e) {
  e.preventDefault()
  salvaTarefa(recebeTitulo.value, recebeDescricao.value, recebePrioridade.value)
  mostraTarefa()
})

import { Tarefa } from './tarefa'
import { Projeto } from './projeto'

let listaTarefas = []
let listaProjetos = []

const telaLista = document.querySelector('.painel-lista')
const formTarefa = document.querySelector('#form-tarefa')
const formProjeto = document.querySelector('#form-projeto')
const recebeTituloTarefa = document.querySelector('#recebeTitulo')
const recebeDescricaoTarefa = document.querySelector('#recebeDescricao')
const recebePrioridadeTarefa = document.querySelector('#recebePrioridade')
const recebeTituloProjeto = document.querySelector('#recebe-titulo-projeto')
const recebeDescricaoProjeto = document.querySelector(
  '#recebe-descricao-projeto',
)
const recebePrioridadeProjeto = document.querySelector(
  '#recebe-prioridade-projeto',
)
const mudaModoDeSalvar = document.querySelector('#troca-lista')

let modoProjeto = false

const salvaTarefa = (titulo, descricao, prioridade) => {
  listaTarefas.push(new Tarefa(titulo, descricao, prioridade))
}

const mostraTarefa = () => {
  telaLista.innerHTML = ''
  listaTarefas.forEach((tarefa) => criaTarefa(tarefa))
}

const salvaProjeto = (titulo, descricao, prioridade) => {
  listaProjetos.push(new Projeto(titulo, descricao, prioridade))
}

const mostraProjeto = () => {
  telaLista.innerHTML = ''
  listaProjetos.forEach((projeto) => criaProjeto(projeto))
}

const criaProjeto = (projeto) => {
  const itemProjeto = document.createElement('div')
  itemProjeto.classList.add('item-projeto')

  const tituloItem = document.createElement('h2')
  tituloItem.classList.add('titulo-item-projeto')
  tituloItem.textContent = `${projeto.titulo}`

  const descricaoItem = document.createElement('p')
  descricaoItem.classList.add('descricao-item-projeto')
  descricaoItem.textContent = `${projeto.descricao}`

  const prioridadeItem = document.createElement('p')
  prioridadeItem.classList.add('prioridade-item-projeto')

  if (`${projeto.prioridade}` == 3) {
    itemProjeto.style.backgroundColor = 'rgba(238, 4, 4, 0.900)'
  } else if (projeto.prioridade == 2) {
    itemProjeto.style.backgroundColor = 'rgba(253, 173, 52, 0.900)'
  } else {
    itemProjeto.style.backgroundColor = 'rgba(10, 126, 0, 0.900)'
  }

  itemProjeto.style.borderRadius = '0px'

  telaLista.appendChild(itemProjeto)
  itemProjeto.appendChild(tituloItem)
  itemProjeto.appendChild(descricaoItem)
  itemProjeto.appendChild(prioridadeItem)
}

const criaTarefa = (tarefa) => {
  const itemTarefa = document.createElement('div')
  itemTarefa.classList.add('item-tarefa')

  const tituloItem = document.createElement('h2')
  tituloItem.classList.add('titulo-item-tarefa')
  tituloItem.textContent = `${tarefa.titulo}`

  const descricaoItem = document.createElement('p')
  descricaoItem.classList.add('descricao-item-tarefa')
  descricaoItem.textContent = `${tarefa.descricao}`

  const prioridadeItem = document.createElement('p')
  prioridadeItem.classList.add('prioridade-item-tarefa')

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
const mudaExibicao = () => {
  if (modoProjeto) {
    return (mudaModoDeSalvar.textContent = 'Mudar Para Tarefas')
  } else {
    return (mudaModoDeSalvar.textContent = 'Mudar Para Projetos')
  }
}

const trocaModo = () => {
  if (modoProjeto) {
    formTarefa.classList.add('hidden')
    formProjeto.classList.remove('hidden')
  } else {
    formProjeto.classList.add('hidden')
    formTarefa.classList.remove('hidden')
  }
}

const html = (str) => {
  const el = document.createElement('div')
  el.innerHTML = str
  return el.firstChild
}

formTarefa.addEventListener('submit', function (e) {
  e.preventDefault()
  salvaTarefa(
    recebeTituloTarefa.value,
    recebeDescricaoTarefa.value,
    recebePrioridadeTarefa.value,
  )
  mostraTarefa()
  formTarefa.reset()
})

formProjeto.addEventListener('submit', function (e) {
  e.preventDefault()
  salvaProjeto(
    recebeTituloProjeto.value,
    recebeDescricaoProjeto.value,
    recebePrioridadeProjeto.value,
  )
  mostraProjeto()
  formProjeto.reset()
})

mudaModoDeSalvar.addEventListener('click', function () {
  modoProjeto = !modoProjeto
  mudaExibicao()
  trocaModo()
})

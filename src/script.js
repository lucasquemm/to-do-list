import { Tarefa } from './tarefa'
import { Projeto } from './projeto'
import './style.css'

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

  const itemCorpo = document.createElement('div')
  itemCorpo.classList.add('corpo-item-projeto')

  const itemMod = document.createElement('div')
  itemMod.classList.add('mod-item-projeto')

  const tituloItem = document.createElement('h2')
  tituloItem.setAttribute('id', 'titulo-item-projeto')
  tituloItem.textContent = `${projeto.titulo}`

  const descricaoItem = document.createElement('p')
  descricaoItem.setAttribute('id', 'descricao-item-projeto')
  descricaoItem.textContent = `${projeto.descricao}`

  const prioridadeItem = document.createElement('button')
  prioridadeItem.setAttribute('id', 'prioridade-item-projeto')
  prioridadeItem.textContent = '*'

  if (`${projeto.prioridade}` == 3) {
    prioridadeItem.style.backgroundColor = 'rgba(238, 4, 4, 0.900)'
  } else if (projeto.prioridade == 2) {
    prioridadeItem.style.backgroundColor = 'rgba(253, 173, 52, 0.900)'
  } else {
    prioridadeItem.style.backgroundColor = 'rgba(10, 126, 0, 0.900)'
  }

  itemProjeto.style.borderRadius = '0px'

  telaLista.appendChild(itemProjeto)
  itemProjeto.appendChild(itemCorpo)
  itemProjeto.appendChild(itemMod)
  itemCorpo.appendChild(tituloItem)
  itemCorpo.appendChild(descricaoItem)
  itemMod.appendChild(prioridadeItem)
}

const criaTarefa = (tarefa) => {
  const itemTarefa = document.createElement('div')
  itemTarefa.classList.add('item-tarefa')

  const itemCorpo = document.createElement('div')
  itemCorpo.classList.add('corpo-item-tarefa')

  const itemMod = document.createElement('div')
  itemMod.classList.add('mod-item-tarefa')

  const tituloItem = document.createElement('h2')
  tituloItem.setAttribute('id', 'titulo-item-tarefa')
  tituloItem.textContent = `${tarefa.titulo}`

  const descricaoItem = document.createElement('p')
  descricaoItem.setAttribute('id', 'descricao-item-tarefa')
  descricaoItem.textContent = `${tarefa.descricao}`

  const prioridadeItem = document.createElement('button')
  prioridadeItem.setAttribute('id', 'prioridade-item-tarefa')
  prioridadeItem.textContent = '*'

  if (`${tarefa.prioridade}` == 3) {
    prioridadeItem.style.backgroundColor = 'rgba(238, 4, 4, 0.900)'
  } else if (tarefa.prioridade == 2) {
    prioridadeItem.style.backgroundColor = 'rgba(253, 173, 52, 0.900)'
  } else {
    prioridadeItem.style.backgroundColor = 'rgba(10, 126, 0, 0.900)'
  }

  telaLista.appendChild(itemTarefa)
  itemTarefa.appendChild(itemCorpo)
  itemTarefa.appendChild(itemMod)
  itemCorpo.appendChild(tituloItem)
  itemCorpo.appendChild(descricaoItem)
  itemMod.appendChild(prioridadeItem)
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

// const html = (str) => {
//   const el = document.createElement('div')
//   el.innerHTML = str
//   return el.firstChild
// }

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

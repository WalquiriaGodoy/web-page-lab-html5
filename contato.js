import turmasForro from "./componentes/turmasForro.js"
import turmasSamba from "./componentes/turmasSamba.js"
import formularioEnviado from "./componentes/formularioEnviado.js"

const selecionaForro = document.querySelector('[data-select-forro]')
selecionaForro.addEventListener('click', turmasForro)

const selecionaSamba = document.querySelector('[data-select-samba]')
selecionaSamba.addEventListener('click', turmasSamba)

const form = document.querySelector('form')
form.addEventListener('submit', formularioEnviado)

// TODO: Refatorar ou compartimentalizar função de armazenamento localStorage




// Adiciona conteúdo do localStorage no input nome

const nomeLocalStorage = localStorage.getItem('nome')
const inputNome = document.querySelector('[data-tipo="nome"]')
inputNome.value = nomeLocalStorage

// Salva conteúdo do input nome no localStorage

inputNome.addEventListener('blur', (evento) =>{
    const nome = inputNome.value 
    localStorage.setItem('nome', nome)
})




// Adiciona conteúdo do localStorage no input email

const emailLocalStorage = localStorage.getItem('email')
const inputEmail = document.querySelector('[data-tipo="email"]')
inputEmail.value = emailLocalStorage

// Salva conteúdo do input email no localStorage

inputEmail.addEventListener('blur', (evento) =>{
    const email = inputEmail.value 
    localStorage.setItem('email', email)
})





// Adiciona conteúdo do localStorage no input telefone

const telefoneLocalStorage = localStorage.getItem('telefone')
const inputTelefone = document.querySelector('[data-tipo="telefone"]')
inputTelefone.value = telefoneLocalStorage

// Salva conteúdo do input telefone no localStorage

inputTelefone.addEventListener('blur', (evento) =>{
    const telefone = inputTelefone.value 
    localStorage.setItem('telefone', telefone)
})




// Adiciona conteúdo do localStorage no input nascimento

const nascimentoLocalStorage = localStorage.getItem('nascimento')
const inputNascimento = document.querySelector('[data-tipo="nascimento"]')
inputNascimento.value = nascimentoLocalStorage

// Salva conteúdo do input telefone no localStorage

inputNascimento.addEventListener('blur', (evento) =>{
    const nascimento = inputNascimento.value 
    localStorage.setItem('nascimento', nascimento)
})
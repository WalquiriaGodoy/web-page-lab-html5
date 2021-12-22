import turmasForro from "./componentes/turmasForro.js"
import turmasSamba from "./componentes/turmasSamba.js"
import formularioEnviado from "./componentes/formularioEnviado.js"
import { validaDados } from "./componentes/funcoesValida.js"


// Dinamiza parte do formulário que seleciona turmas
const selecionaForro = document.querySelector('[data-select-forro]')
selecionaForro.addEventListener('click', turmasForro)
const selecionaSamba = document.querySelector('[data-select-samba]')
selecionaSamba.addEventListener('click', turmasSamba)
const form = document.querySelector('form')
form.addEventListener('submit', formularioEnviado)

// Usa armazenamento no localStorage para manter dados nos inputs TODO: Refatorar ou compartimentalizar função de armazenamento localStorage


// Adiciona conteúdo do localStorage no input nome e salva conteúdo do input no localStorage
const nomeLocalStorage = localStorage.getItem('nome')
const inputNome = document.querySelector('[data-tipo="nome"]')
inputNome.value = nomeLocalStorage

inputNome.addEventListener('blur', (evento) =>{
    const input = evento.target
    const nome = input.value 
    validaDados(input) //passa o alvo do evento para a função, ou seja, o imput.
    localStorage.setItem('nome', nome)
})

// Idem para email

const emailLocalStorage = localStorage.getItem('email')
const inputEmail = document.querySelector('[data-tipo="email"]')
inputEmail.value = emailLocalStorage

inputEmail.addEventListener('blur', (evento) =>{
    const input = evento.target
    const email = inputEmail.value 
    validaDados(input) 
    localStorage.setItem('email', email)
})

// idem para telefone

const telefoneLocalStorage = localStorage.getItem('telefone')
const inputTelefone = document.querySelector('[data-tipo="telefone"]')
inputTelefone.value = telefoneLocalStorage

inputTelefone.addEventListener('blur', (evento) =>{
    const input = evento.target
    const telefone = inputTelefone.value 
    validaDados(input) 
    localStorage.setItem('telefone', telefone)
})


// idem para data de nascimento

const nascimentoLocalStorage = localStorage.getItem('nascimento')
const inputNascimento = document.querySelector('[data-tipo="nascimento"]')
inputNascimento.value = nascimentoLocalStorage

inputNascimento.addEventListener('blur', (evento) =>{
    const input = evento.target
    const nascimento = inputNascimento.value 
    validaDados(input) 
    localStorage.setItem('nascimento', nascimento)
})

// idem para cpf

const CPFLocalStorage = localStorage.getItem('CPF')
const inputCPF = document.querySelector('[data-tipo="cpf"]')
inputCPF.value = CPFLocalStorage

inputCPF.addEventListener('blur', (evento) =>{
    const input = evento.target
    const CPF = inputCPF.value 
    validaDados(input) 
    localStorage.setItem('CPF', CPF)
})

// idem para cep

const CEPLocalStorage = localStorage.getItem('CEP')
const inputCEP = document.querySelector('[data-tipo="cep"]')
inputCEP.value = CEPLocalStorage

inputCEP.addEventListener('blur', (evento) =>{
    const input = evento.target
    const CEP = inputCEP.value 
    validaDados(input) 
    localStorage.setItem('CEP', CEP)
})


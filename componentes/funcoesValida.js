export function validaDados(input){
    const valor = input.value 
    const tipoDeInput = input.dataset.tipo
    console.log(tipoDeInput, valor)
    
    if (validadores[tipoDeInput]) {     //Se tiver essa chave no validadores
        validadores[tipoDeInput](input)  //executa a função () que está no respectivo validador
    }
    if (input.validity.valid){
        const span = input.nextElementSibling
        span.classList.add('input-mensagem-erro')
        input.classList.remove('input-container--invalido')
        
    }else{
        input.classList.add('input-container--invalido')
        const span = input.nextElementSibling
        span.classList.remove('input-mensagem-erro')
    }
}

const validadores = {  //dicionario chave: valor => execurar função
    nome:input => validaNome(input),
    email:input => validaEmail(input),
    telefone: input => validaTelefone(input),
    nascimento: input => validaDataNascimento(input)
}

function validaNome(input) {
    const tipoDeInput = input.dataset.tipo
    mostraMensagemDeErro(tipoDeInput, input)
}

function validaEmail(input) {
    const tipoDeInput = input.dataset.tipo
    mostraMensagemDeErro(tipoDeInput, input)
}

function validaTelefone(input) {
    const tipoDeInput = input.dataset.tipo
    mostraMensagemDeErro(tipoDeInput, input)
}

function validaDataNascimento(input) {
    const tipoDeInput = input.dataset.tipo
    mostraMensagemDeErro(tipoDeInput, input)
}

const tiposDeErro = [  // lista/dicionário chave: valor
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const mensagensDeErro = {     //dicionário chave: valor
    nome:{
        valueMissing: 'O campo nome não pode estar vazio'
    },

    email:{
        valueMissing: 'O campo de email não pode estar vazio',
        typeMismatch: 'O email digitado não é válido'
    },

    telefone:{
        valueMissing: 'O campo telefone não pode estar vazio',
        typeMismatch: 'O telefone digitado não é válido'
    },

    nascimento:{
        valueMissing: 'O campo telefone não pode estar vazio',
        typeMismatch: 'A data de nascimento digitada não é válida'
    }
}

function mostraMensagemDeErro(tipoDeInput, input){
    let mensagem = ''
    tiposDeErro.forEach(erro =>{
        if (input.validity[erro]){    // tipo buleano, quando dá erro retorna true
            mensagem = mensagensDeErro[tipoDeInput][erro]
            console.log(mensagem)
        }
    })   

    return mensagem
}
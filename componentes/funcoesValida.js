export function validaDados(input){
    const valor = input.value 
    const tipoDeInput = input.dataset.tipo
    const span = input.nextElementSibling
    console.log(valor, tipoDeInput)
    
    if (validadores[tipoDeInput]) {     //Se tiver essa chave no validadores
        validadores[tipoDeInput](input)  //executa a função () que está no respectivo validador
    }
    if (input.validity.valid){    //retorna true se o input for totalmente válido
        span.classList.add('esconde-mensagem-erro')
        input.classList.remove('input-container--invalido')
        
    }else{
        input.classList.add('input-container--invalido')
        span.classList.remove('esconde-mensagem-erro')
        span.innerHTML = mostraMensagemDeErro(tipoDeInput, input)
    }
}

const validadores = {  //dicionario chave: valor => execurar função
    nome:input => validaNome(input),
    email:input => validaEmail(input),
    telefone: input => validaTelefone(input),
    nascimento: input => validaDataNascimento(input),
    cpf: input => validaCPF(input)
}

function validaNome(input) {
}

function validaEmail(input) {
}

function validaTelefone(input) {
}

function validaDataNascimento(input) {
}

function validaCPF(input){
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
    },

    cpf:{
        valueMissing: 'O campo cpf não pode estar vazio',
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
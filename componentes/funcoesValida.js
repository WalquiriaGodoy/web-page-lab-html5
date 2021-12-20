export function validaDados(input){
    const valor = input.value 
    const tipoDeInput = input.dataset.tipo
    console.log(tipoDeInput, valor)
    
    if (validadores[tipoDeInput]) {     //Se tiver essa chave no validadores
        validadores[tipoDeInput](input)  //executa a função () que está no respectivo validador
    }
}

const validadores = {
    nome:input => validaNome(input),
    email:input => validaEmail(input),
    telefone: input => validaTelefone(input),
    nascimento: input => validaDataNascimento(input)
}

function validaNome(input) {
    console.log("entrou no valida nome")
    const tipoDeInput = input.dataset.tipo
    mostraMensagemDeErro(tipoDeInput, input)
}

function validaEmail(input) {
    console.log("entrou no valida email")
    const tipoDeInput = input.dataset.tipo
    mostraMensagemDeErro(tipoDeInput, input)
}

function validaTelefone() {
    console.log("entrou no valida telefone")
}

function validaDataNascimento() {
    console.log("entrou no valida data de nascimento")
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const mensagensDeErro = {
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
            console.log(input.validity[erro])
            mensagem = mensagensDeErro[tipoDeInput][erro]
            console.log(mensagem)
        }
    })   

    return mensagem
}
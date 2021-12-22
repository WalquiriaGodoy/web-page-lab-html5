export function validaDados(input){
    const tipoDeInput = input.dataset.tipo
    const span = input.nextElementSibling
    
    if (validadores[tipoDeInput]) {     //Se tiver essa chave no validadores
        validadores[tipoDeInput](input)  //executa a função () que está no respectivo validador
    }
    if (input.validity.valid){    //retorna true se o input for totalmente válido
        span.classList.add('esconde-mensagem-erro')
        input.classList.remove('input-container--invalido')
        console.log("esconde mensagem")
    }else{
        input.classList.add('input-container--invalido')
        span.classList.remove('esconde-mensagem-erro')
        span.innerHTML = mostraMensagemDeErro(tipoDeInput, input)
        console.log('mostra mensagem de erro')
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

function validaCPF(input) {
    const cpfFormatado = input.value.replace(/\D/g, '')
    let mensagem = ''

    if (!cpfFormatado){
        return
    }

    if (!checaCPFRepetido(cpfFormatado)|| !cpfEhValido(cpfFormatado)){
        mensagem = 'O CPF digitado não é válido'
    }

    input.setCustomValidity(mensagem)
}

function checaCPFRepetido(cpf) {
    const valoresRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    let cpfValido = true

    valoresRepetidos.forEach(valor => {
        if(valor == cpf){
            cpfValido = false
        }
        
    })
    return cpfValido

}

function cpfEhValido(cpf){
    let Soma;
    let Resto;
    Soma = 0;

    if (cpf == "00000000000"){
        console.log("cpf = 00000000000")
        return false;
    }

    for (let i = 1; i <=9; i++){
        Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
    }

    Resto = (Soma * 10) % 11;// % ou mod, retorna o resto da divisão

    if ((Resto == 10) || (Resto == 11)){ 
        Resto = 0;
    } 

    if (Resto != parseInt(cpf.substring(9, 10)) ){
        return false;
    }

    Soma = 0;
    
    for (let i = 1; i <= 10; i++){
        Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    }

    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)){
        Resto = 0;
    } 

    if (Resto != parseInt(cpf.substring(10, 11) ) ) {
        return false;
    }

    return true;
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
        patternMismatch: 'Digite apenas números',
        customError: 'O cpf não é válido',
    }
}

function mostraMensagemDeErro(tipoDeInput, input){
    let mensagem = ''
    tiposDeErro.forEach(erro =>{
        if (input.validity[erro]){    // tipo buleano, quando dá erro retorna true
            mensagem = mensagensDeErro[tipoDeInput][erro]
            return mensagem
        }
    })   
    return mensagem
}
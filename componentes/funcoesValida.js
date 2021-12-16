export function validaDados(input){
    const nome = input.value 
    const tipoDeInput = input.dataset.tipo
    console.log(tipoDeInput, nome)
    
    if (validadores[tipoDeInput]) {     //Se tiver essa chave no validadores
        validadores[tipoDeInput](input)  //executa a função () que está no respectivo validador
    }
}

const validadores = {
    nome:input => validaNome(input),
    email:input => validaEmail(input),
    telefone: input => validaTelefone(input),
    dataNascimento: input => validaDataNascimento(input)
}

function validaNome() {
    console.log("entrou no valida nome")
}

function validaEmail() {
    console.log("entrou no valida email")
}

function validaTelefone() {
    console.log("entrou no valida telefone")
}

function validaDataNascimento() {
    console.log("entrou no valida data de nascimento")
}
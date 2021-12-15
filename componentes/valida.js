// Validação dos dados de endereço
const fieldsetEndereco = document.querySelector('[data-form-endereco]')
const inputs = fieldsetEndereco.getElementsByTagName('input')
const inputsArr = Array.prototype.slice.call(inputs) //converte um HTMLCollection em um array
inputsArr.forEach(input => {
    console.log(input)
    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
});


const nome = document.getElementById("nomesobrenome").value
const tipoNome = document.getElementById("nomesobrenome").nomesobrenome
const email = document.getElementById("email").value
const telefone = document.getElementById("telefone").value
const datanascimento = document.getElementById("datanascimento").value

console.log(nome, email, telefone, datanascimento)

valida(tipoNome, nome)

export function valida(tipoDeInput, input){
    console.log(tipoDeInput, input)
}
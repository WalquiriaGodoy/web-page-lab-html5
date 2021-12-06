const formularioEnviado = (evento) => {
    evento.preventDefault()

    const lastFieldset = document.querySelector('[data-end-form]')
    const formularioEnviado = document.createElement('p')
    const conteudo = 'Formulário Enviado com Sucesso'
    formularioEnviado.classList.add('subtitulo')

    formularioEnviado.innerHTML = conteudo
    lastFieldset.appendChild(formularioEnviado)

    const button = document.querySelector('[data-buton]')
    button.remove()


    return lastFieldset
}

export default formularioEnviado
const turmasForro = (evento) => {
    evento.preventDefault()

    const fieldset = document.querySelector('[data-fieldset]')
    const novaLegend = document.createElement('legend')
    const subtitulo = 'Selecione a Turma de Forró'
    novaLegend.classList.add('subtitulo')

    novaLegend.innerHTML = subtitulo
    fieldset.appendChild(novaLegend)

    const conteudo = document.createElement('select')
    const opcoes = '<option>Selecione</option> <option>Quinta-feira - 20h</option> <option>Sábado - 18h</option>'
    
    conteudo.innerHTML = opcoes
    fieldset.appendChild(conteudo) 


    return fieldset
}

export default turmasForro
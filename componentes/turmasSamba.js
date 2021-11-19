const turmasSamba = (evento) => {
    evento.preventDefault()

    const fieldset = document.querySelector('[data-fieldset]')
    const novaLegend = document.createElement('legend')
    const subtitulo = 'Selecione a Turma de Samba'
    novaLegend.classList.add('subtitulo')

    novaLegend.innerHTML = subtitulo
    fieldset.appendChild(novaLegend)

    const conteudo = document.createElement('select')
    const opcoes = '<option>Selecione</option> <option>Quinta-feira - 19h</option> <option>Sábado - 17h</option>'
    
    conteudo.innerHTML = opcoes
    fieldset.appendChild(conteudo) 

    return fieldset
}

export default turmasSamba
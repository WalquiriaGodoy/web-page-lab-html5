const turmasForro = (evento) => {
    evento.preventDefault()

    const fieldset = document.querySelector('[data-fieldset]')
    const novaLegend = document.createElement('legend')
    const subtitulo = 'Selecione a Turma de Forró'
    novaLegend.classList.add('subtitulo')

    novaLegend.innerHTML = subtitulo
    fieldset.appendChild(novaLegend)

    const novaLabel1 = document.createElement('label')
    const novaLabel2 = document.createElement('label')
    const opcaoQuinta = '<input type="radio" name="turma" value="quinta" id="radio-quinta">Quinta-feira - 20h'
    const opcaoSabado = '<input type="radio" name="turma" value="sabado" id="radio-sabado">Sábado - 18h'
    
    novaLabel1.innerHTML = opcaoQuinta 
    novaLabel2.innerHTML = opcaoSabado
    fieldset.appendChild(novaLabel1) 
    fieldset.appendChild(novaLabel2)

    return fieldset
}

export default turmasForro
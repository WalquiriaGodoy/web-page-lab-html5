const criarFieldset = (evento) => {
    evento.preventDefault()

    const fieldset = document.querySelector('[data-fieldset]')
    const opcaoQuinta = '<label for="radio-quinta"><input type="radio" name="turma" value="quinta" id="radio-quinta">Quinta-feira - 20h</label>'
    const opcaoSabado = '<label for="radio-sabado"><input type="radio" name="turma" value="sabado" id="radio-sabado">Sábado - 18h</label>'

    fieldset.appendChild = opcaoQuinta
    fieldset.appendChild = opcaoSabado

}

const selecionaForro = document.querySelector('[data-select-forro]')
selecionaForro.addEventListner('click', criarFieldset)


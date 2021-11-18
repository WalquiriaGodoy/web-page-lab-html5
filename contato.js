const criarFieldset = (evento) => {
    evento.preventDefault()

    const fieldset = document.querySelector('[data-fieldset]')
    console.log(fieldset)

    const novaLabel1 = document.createElement('label')
    const novaLabel2 = document.createElement('label')
    const opcaoQuinta = '<input type="radio" name="turma" value="quinta" id="radio-quinta">Quinta-feira - 20h'
    const opcaoSabado = '<input type="radio" name="turma" value="sabado" id="radio-sabado">Sábado - 18h'
    
    novaLabel1.innerHTML = opcaoQuinta 
    novaLabel2.innerHTML = opcaoSabado

    novaLabel1.appendChild = opcaoQuinta 
    novaLabel2.appendChild = opcaoSabado
    console.log(novaLabel1)
    console.log(novaLabel2)

    fieldset.appendChild(novaLabel1) 
    fieldset.appendChild(novaLabel2)
   // fieldset.appendChild = opcaoSabado

}

const selecionaForro = document.querySelector('[data-select-forro]')
selecionaForro.addEventListener('click', criarFieldset)

const selecionaSamba = document.querySelector('[data-select-samba]')
selecionaSamba.addEventListener('click', criarFieldset)



import turmasForro from "./componentes/turmasForro.js"
import turmasSamba from "./componentes/turmasSamba.js"
import formularioEnviado from "./componentes/formularioEnviado.js"

const selecionaForro = document.querySelector('[data-select-forro]')
selecionaForro.addEventListener('click', turmasForro)

const selecionaSamba = document.querySelector('[data-select-samba]')
selecionaSamba.addEventListener('click', turmasSamba)

const button = document.querySelector('[data-button]')
button.addEventListener('click', formularioEnviado)

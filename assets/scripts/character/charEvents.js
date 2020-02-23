'use strict'

// const getFormFields = require('../../../lib/get-form-fields')
const charApi = require('./charApi')
const charUi = require('./charUi')

const onGetChars = event => {
  charApi.charIndex()
    .then(charUi.onCharIndexSuccess)
    .catch(charUi.onCharIndexFailure)
}

// const onCreateChar = event => {
//   event.preventDefault()
//   charApi.signOut()
//     .then(charUi.onCreateCharSuccess)
//     .catch(charUi.onCreateCharFailure)
// }

const onDeleteChar = event => {
  const id = event.target.getAttribute('data-id')
  console.log(id)
}

const onSelectChar = event => {
  const id = event.target.getAttribute('data-id')
  console.log(id)
}

const addHandlers = () => {
  $('.main-content', 'body').on('click', '.char-index-btn', onGetChars)
  $('.main-content', 'body').on('click', '.char-delete-btn', onDeleteChar)
  $('.main-content', 'body').on('click', '.char-select-btn', onSelectChar)
}

module.exports = {
  addHandlers
}

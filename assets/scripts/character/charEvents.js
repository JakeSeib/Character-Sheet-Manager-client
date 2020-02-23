'use strict'

const getFormFields = require('../../../lib/get-form-fields')
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

const addHandlers = () => {
  $('.main-content', 'body').on('click', '.char-index-btn', onGetChars)
}

module.exports = {
  addHandlers
}

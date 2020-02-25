'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const charApi = require('./charApi')
const charUi = require('./charUi')

const onGetChars = event => {
  charApi.charIndex()
    .then(response => {
      store.user.characters = response
      charUi.onCharIndexSuccess(response)
    })
    .catch(charUi.onCharIndexFailure)
}

const onCreateCharForm = event => {
  charUi.onSelectCharSuccess()
}

const onSaveChar = event => {
  const charForm = $('.char-edit-form', '.char-sheet')[0]
  const charData = getFormFields(charForm)
  const charId = event.target.getAttribute('data-id')
  if (charId) {
    charApi.charUpdate(charData, charId)
      .then(charUi.onSaveCharSuccess)
      .catch(charUi.onSaveCharFailure)
  } else {
    charApi.charCreate(charData)
      .then(charUi.onSaveCharSuccess)
      .catch(charUi.onSaveCharFailure)
  }
}

const onDeleteChar = event => {
  const charId = event.target.getAttribute('data-id')
  charApi.charDelete(charId)
    .then(charId => {
      onGetChars()
      charUi.onDeleteCharSuccess(charId)
    })
    .catch(charUi.onDeleteCharFailure)
}

const onSelectChar = event => {
  const charId = event.target.getAttribute('data-id')
  charApi.charSelect(charId)
    .then(charUi.onSelectCharSuccess)
    .catch(charUi.onSelectCharFailure)
}

const addHandlers = () => {
  $('.main-content', 'body').on('click', '.char-index-btn', onGetChars)
  $('.main-content', 'body').on('click', '.char-create-btn', onCreateCharForm)
  $('.main-content', 'body').on('click', '.char-save-btn', onSaveChar)
  $('.main-content', 'body').on('click', '.char-select-btn', onSelectChar)
  $('.main-content', 'body').on('click', '.char-cancel-btn', onGetChars)
  $('.char-delete-modal', 'body').on('show.bs.modal', charUi.onDeleteCharPrompt)
  $('.char-delete-btn', '.char-delete-modal').on('click', onDeleteChar)
}

module.exports = {
  addHandlers
}

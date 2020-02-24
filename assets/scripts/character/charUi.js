'use strict'

const allCharsTemplate = require('../templates/all-chars.handlebars')
const singleCharTemplate = require('../templates/single-char.handlebars')
const charSheetBtnsTemplate = require('../templates/buttons/edit-char-btns.handlebars')
const store = require('../store')

const onCharIndexSuccess = response => {
  if (Object.keys(response).length > 0) {
    $('.char-message', '.char-content-wrapper').text(`Successfully got characters`)
    const allCharsHtml = allCharsTemplate({ characters: Object.values(response) })
    $('.char-sheets', '.char-content-wrapper').html(allCharsHtml)
  } else {
    $('.char-message', '.char-content-wrapper').text(`You don't have any characters`)
  }
}

const onCharIndexFailure = () => {
  $('.char-message', '.char-content-wrapper').text(`Failed to get characters`)
}

const onCharSelect = id => {
  let charSelectHtml
  if (id) {
    charSelectHtml = singleCharTemplate({ char: store.user.characters[id] })
  } else {
    charSelectHtml = singleCharTemplate({ char: {} })
  }
  $('.char-sheets', '.char-content-wrapper').html(charSelectHtml)
}

const onSaveCharSuccess = response => {
  $('.edit-char-message', '.char-sheet').text('Successfully saved character')
  // todo: rather than always recreating buttons, check if the character didn't
  // already exist, and only switch out old buttons for ones with newly created
  // id attached for newly created characters
  const btnHtml = charSheetBtnsTemplate({ id: response.character.id })
  $('.char-sheet-btns').html(btnHtml)
}

const onSaveCharFailure = () => {
  $('.edit-char-message', '.char-sheet').text('Failed to save character')
}

const onDeleteCharSuccess = () => {
  $('.char-delete-message', '.char-content-wrapper').text('Successfully deleted character')
}

const onDeleteCharFailure = () => {
  $('.edit-char-message', '.char-sheet').text('Failed to delete character')
}

module.exports = {
  onCharIndexSuccess,
  onCharIndexFailure,
  onCharSelect,
  onSaveCharSuccess,
  onSaveCharFailure,
  onDeleteCharSuccess,
  onDeleteCharFailure
}

'use strict'

const store = require('../store')
const allCharsTemplate = require('../templates/all-chars.handlebars')
const singleCharTemplate = require('../templates/single-char.handlebars')
const charSheetBtnsTemplate = require('../templates/buttons/edit-char-btns.handlebars')

const onCharIndexSuccess = response => {
  if (Object.keys(response).length > 0) {
    $('.char-message', '.char-content-wrapper').text(`Successfully got characters`)
    const allCharsHtml = allCharsTemplate({ characters: Object.values(response) })
    $('.char-sheets', '.char-content-wrapper').html(allCharsHtml)
  } else {
    $('.char-sheets', '.char-content-wrapper').empty()
    $('.char-message', '.char-content-wrapper').text(`You don't have any characters`)
  }
}

const onCharIndexFailure = () => {
  $('.char-message', '.char-content-wrapper').text(`Failed to get characters`)
}

// to be used if selecting a single character from index
const onCharSelect = char => {
  // Has an optional char if selecting existing character, otherwise creates an
  // empty form
  let charSelectHtml
  if (char) {
    console.log('character', char)
    charSelectHtml = singleCharTemplate({ char: char, skills: store.skills })
  } else {
    charSelectHtml = singleCharTemplate({ char: {}, skills: store.skills })
  }
  $('.char-sheets', '.char-content-wrapper').html(charSelectHtml)
}

// to be used if selecting a single character via the API
const onSelectCharSuccess = response => {
  onCharSelect(response.character)
}

const onSelectCharFailure = response => {
  $('.char-message', '.char-content-wrapper').text(`Failed to select character`)
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

const onDeleteCharSuccess = charId => {
  $('.char-delete-message', '.char-content-wrapper').text('Successfully deleted character')
  $('.modal-backdrop').remove()
}

const onDeleteCharFailure = () => {
  $('.edit-char-message', '.char-sheet').text('Failed to delete character')
}

const onDeleteCharPrompt = event => {
  // unsure why
  // $(this).find('.char-delete-btn').data('id', recipient)
  // doesn't work, so instead do a new jQuery search and use attr() instead of
  // data()
  const deleteButton = $('.char-delete-btn', '.char-delete-modal')
  const button = $(event.relatedTarget) // Button that triggered the modal
  const recipient = button.data('id') // Extract info from data-id attribute
  // Update the modal's content
  deleteButton.attr('data-id', recipient)
}

module.exports = {
  onCharIndexSuccess,
  onCharIndexFailure,
  onCharSelect,
  onSelectCharSuccess,
  onSelectCharFailure,
  onSaveCharSuccess,
  onSaveCharFailure,
  onDeleteCharSuccess,
  onDeleteCharFailure,
  onDeleteCharPrompt
}

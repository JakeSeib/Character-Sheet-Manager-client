'use strict'

const allCharsTemplate = require('../templates/all-chars.handlebars')
// const store = require('../store')

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

module.exports = {
  onCharIndexSuccess,
  onCharIndexFailure
}

'use strict'

const allCharsTemplate = require('../templates/all-chars.handlebars')
const store = require('../store')

const onCharIndexSuccess = data => {
  console.log('data', data)
  if (data.characters.length > 0) {
    $('.char-message', '.char-content-wrapper').text(`Successfully got characters`)
    const allCharsHtml = allCharsTemplate({ characters: data.characters })
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

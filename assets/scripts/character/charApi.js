'use strict'

const config = require('../config')
const store = require('../store')

const charIndex = () => {
  return $.ajax({
    url: `${config.apiUrl}/characters`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const charCreate = charData => {
  return $.ajax({
    url: `${config.apiUrl}/characters`,
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: charData
  })
}

const charUpdate = (charData, charId) => {
  return $.ajax({
    url: `${config.apiUrl}/characters/${charId}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: charData
  })
}

module.exports = {
  charIndex,
  charCreate,
  charUpdate
}
'use strict'

const config = require('../config')
const store = require('../store')

const signUp = userData => {
  return $.ajax({
    url: `${config.apiUrl}/sign-up`,
    method: 'POST',
    data: userData
  })
}

const signIn = userData => {
  return $.ajax({
    url: `${config.apiUrl}/sign-in`,
    method: 'POST',
    data: userData
  })
}

const changePw = userData => {
  return $.ajax({
    url: `${config.apiUrl}/change-password`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: userData
  })
}

const signOut = () => {
  return $.ajax({
    url: `${config.apiUrl}/sign-out`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePw,
  signOut
}

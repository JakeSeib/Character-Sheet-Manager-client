'use strict'

const store = require('../store')
const mainNavTemplate = require('../templates/main-nav.handlebars')

const onSignUpSuccess = response => {
  $('.sign-up-form', '.sign-in-wrapper').trigger('reset')
  $('.sign-up-message', '.sign-in-wrapper').text('signup success')
}

const onSignUpFailure = () => {
  $('.sign-up-message', '.sign-in-wrapper').text(`Failed to sign up. Ensure that password and \
    password confirmation are the same, or try a different email address.`)

  // clear the message
  // setTimeout(() => {
  //   $('#message')
  //     .text('')
  //     .removeClass('failure')
  // }, 3000)
}

const onSignInSuccess = response => {
  const mainNavHtml = mainNavTemplate()
  $('.sign-up-message', '.sign-in-wrapper').text(`You are signed in as ${response.user.email}`)
  $('.sign-in-form', '.sign-in-wrapper').trigger('reset')
  store.user = response.user
  $('.main-content').html(mainNavHtml)
}

const onSignInFailure = () => {
  $('.sign-up-message', '.sign-in-wrapper').text(`Failed to sign in. Ensure that your email and password are correct.`)
}

const onChangePwSuccess = () => {
  $('.auth-message', '.modal-content').text(`Successfully changed password! Congrats, ${store.user.email}!`)
  $('.change-pw-form', '.modal-content').trigger('reset')
}

const onChangePwFailure = () => {
  $('.auth-message', '.modal-content').text(`Failed to change password. Ensure that your current password is correct.`)
}

const onSignOutSuccess = () => {
  $('.change-pw-form', '.modal-content').trigger('reset')
  $('.sign-up-message', '.sign-in-wrapper').text(`Signed out.`)
  store.user = null
}

const onSignOutFailure = () => {
  $('.sign-up-message', '.sign-in-wrapper').text(`Failed to sign out!`)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePwSuccess,
  onChangePwFailure,
  onSignOutSuccess,
  onSignOutFailure
}

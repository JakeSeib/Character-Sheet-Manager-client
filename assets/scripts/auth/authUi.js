'use strict'

const store = require('../store')
const mainContentTemplate = require('../templates/main-content.handlebars')
const signUpTemplate = require('../templates/sign-up-view.handlebars')

const onSignUpSuccess = response => {
  $('.sign-up-form', '.sign-in-wrapper').trigger('reset')
  $('.sign-up-message', '.sign-in-wrapper').text('signup success')
}

const onSignUpFailure = () => {
  $('.sign-up-message', '.sign-in-wrapper').text(`Failed to sign up. Ensure that password and \
    password confirmation are the same, or try a different email address`)

  // clear the message
  // setTimeout(() => {
  //   $('#message')
  //     .text('')
  //     .removeClass('failure')
  // }, 3000)
}

const onSignInSuccess = response => {
  store.user = response.user
  $('.sign-in-wrapper', 'body').empty()
  const mainContentHtml = mainContentTemplate()
  $('.main-content', 'body').html(mainContentHtml)
  $('.nav-message', '.nav-right-ul').text(`Signed in as ${store.user.email}`)
}

const onSignInFailure = () => {
  $('.sign-in-message', '.sign-in-wrapper').text(`Failed to sign in. Ensure that your email and password are correct`)
}

const onChangePwSuccess = () => {
  $('.auth-message', '.modal-content').text(`Successfully changed password for ${store.user.email}`)
  $('.change-pw-form', '.modal-content').trigger('reset')
}

const onChangePwFailure = () => {
  $('.auth-message', '.modal-content').text(`Failed to change password. Ensure that your current password is correct`)
}

const onSignOutSuccess = () => {
  store.user = null
  $('.main-content', 'body').empty()
  const signUpHtml = signUpTemplate()
  $('.sign-in-wrapper', 'body').html(signUpHtml)
}

const onSignOutFailure = () => {
  $('.nav-message', '.nav-right-ul').text(`Failed to sign out`)
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

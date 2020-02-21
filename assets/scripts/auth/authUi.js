'use strict'

const store = require('../store')

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
  $('.sign-up-message', '.sign-in-wrapper').text(`You are signed in as ${response.user.email}`)
  $('.sign-in-form').trigger('reset')
  store.user = response.user
}

const onSignInFailure = () => {
  $('.sign-up-message', '.sign-in-wrapper').text(`Failed to sign in. Ensure that your email and password are correct.`)
}

// const onChangePwSuccess = () => {
//   $('.auth-message', '.nav-wrapper').text(`Successfully changed password! Congrats, ${store.user.email}!`)
//   $('.change-pw-form', '.nav-wrapper').trigger('reset')
// }

// const onChangePwFailure = () => {
//   $('.auth-message', '.nav-wrapper').text(`Failed to change password. Ensure that your current password is correct.`)
//   $('.change-pw-form', '.nav-wrapper').trigger('reset')
// }

// const onSignOutSuccess = () => {
//   $('main').hide()
//   $('.resume-incomplete-container', '.nav-wrapper').hide()
//   $('.sign-in-wrapper', 'body').show()
//   $('.change-pw-form', '.nav-wrapper').trigger('reset')
//   $('.game-history', '.nav-wrapper').text('')
//   store.incompleteGameIds = []
//   store.user = null
// }
//
// const onSignOutFailure = () => {
//   $('auth-message', '.nav-wrapper').text(`Failed to sign out!`)
// }

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure
}

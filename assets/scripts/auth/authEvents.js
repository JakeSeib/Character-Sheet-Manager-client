'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const authApi = require('./authApi')
const authUi = require('./authUi')

const signInWithData = userData => {
  // userData has the format that getFormFields outputs from a form with email
  // and password
  authApi.signIn(userData)
    .then(authUi.onSignInSuccess)
    .catch(authUi.onSignInFailure)
}

const onSignUp = event => {
  event.preventDefault()
  // get values from user's input, format for api
  const userData = getFormFields(event.target)
  // format for sign-in api call
  const signInUserData = {
    credentials: {
      email: userData.credentials.email,
      password: userData.credentials.password
    }
  }
  // send data to api as a post request
  authApi.signUp(userData)
    // handle if api succeeds
    .then(authUi.onSignUpSuccess)
    // automatically log the new user in
    .then(response => signInWithData(signInUserData))
    // handle if api fails
    .catch(authUi.onSignUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const userData = getFormFields(event.target)
  signInWithData(userData)
}

const onChangePw = event => {
  const changePwForm = $('.change-pw-form', '.modal-content')[0]
  const userData = getFormFields(changePwForm)
  authApi.changePw(userData)
    .then(authUi.onChangePwSuccess)
    .catch(authUi.onChangePwFailure)
}

// const showForm = event => {
//   event.preventDefault()
//   console.log(event.target)
// }

const onSignOut = event => {
  event.preventDefault()
  authApi.signOut()
    .then(authUi.onSignOutSuccess)
    .catch(authUi.onSignOutFailure)
}

const addHandlers = () => {
  $('.sign-up-form', '.sign-in-wrapper').on('submit', onSignUp)
  $('.sign-in-form', '.sign-in-wrapper').on('submit', onSignIn)
  $('.main-content').on('click', '.sign-out-btn', onSignOut)
  $('.main-content').on('click', '.change-pw-confirm', onChangePw)
}

module.exports = {
  addHandlers
}

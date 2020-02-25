'use strict'

const authEvents = require('./auth/authEvents')
const charEvents = require('./character/charEvents')
const skillEvents = require('./skill/skillEvents')
// const store = require('./store')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  authEvents.addHandlers()
  charEvents.addHandlers()
  skillEvents.onGetSkills()
})

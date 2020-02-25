'use strict'

const store = require('../store')
const skillApi = require('./skillApi')
const skillUi = require('./skillApi')

const onGetSkills = () => {
  skillApi.skillIndex()
    .then(response => {
      console.log('skills', response)
      store.skills = response.skills
    })
    .catch(skillUi.onGetSkillsFailure)
}

module.exports = {
  onGetSkills
}

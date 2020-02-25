'use strict'

const onGetSkillsFailure = () => {
  $('.sign-up-message', '.sign-in-wrapper').text('Failed to get skills')
}

module.exports = {
  onGetSkillsFailure
}

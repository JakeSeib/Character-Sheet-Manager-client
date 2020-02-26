'use strict'

const config = require('../config')

const skillIndex = () => {
  return $.ajax({
    url: `${config.apiUrl}/skills`,
    method: 'GET'
  })
}

module.exports = {
  skillIndex
}

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

const charSelect = charId => {
  return $.ajax({
    url: `${config.apiUrl}/characters/${charId}`,
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

const charDelete = charId => {
  return $.ajax({
    url: `${config.apiUrl}/characters/${charId}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const charSkillCreate = charSkill => {
  return $.ajax({
    url: `${config.apiUrl}/character_skills`,
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: charSkill
  })
}

const charSkillUpdate = (charSkillData, charSkillId) => {
  return $.ajax({
    url: `${config.apiUrl}/character_skills/${charSkillId}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: {
      character_skill: charSkillData
    }
  })
}

const charSkillDelete = charSkillId => {
  return $.ajax({
    url: `${config.apiUrl}/character_skills/${charSkillId}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  charIndex,
  charSelect,
  charCreate,
  charUpdate,
  charDelete,
  charSkillCreate,
  charSkillUpdate,
  charSkillDelete
}

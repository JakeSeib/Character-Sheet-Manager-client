'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const charApi = require('./charApi')
const charUi = require('./charUi')

const onGetChars = event => {
  charApi.charIndex()
    .then(response => {
      store.user.characters = response
      charUi.onCharIndexSuccess(response)
    })
    .catch(charUi.onCharIndexFailure)
}

const onLoadChar = charId => {
  charApi.charSelect(charId)
    .then(charUi.onSelectCharSuccess)
    .catch(charUi.onSelectCharFailure)
}

// use if selecting a single character via the API
const onGetChar = event => {
  const charId = event.target.getAttribute('data-id')
  onLoadChar(charId)
}

// use if selecting a single character from store.user.characters
// const onSelectChar = event => {
//   const charId = event.target.getAttribute('data-id')
//   const char = store.user.characters[charId]
//   charUi.onCharSelect(char)
// }

const onCreateCharForm = event => {
  charUi.onCharSelect()
}

const formatCharSkill = (level, skillId, characterId, id) => {
  // has optional id parameter if the character_skill already exists
  const formattedCharSkill = {
    character_skill: {
      level: parseInt(level),
      skill_id: parseInt(skillId),
      character_id: parseInt(characterId)
    }
  }
  if (id) {
    formattedCharSkill['id'] = parseInt(id)
  }
  return formattedCharSkill
}

const checkSkillsTable = (charId) => {
  const skillUpdates = {
    create: [],
    update: [],
    delete: []
  }
  const skillBtns = $('.skill-table-btn', '.char-skills')
  skillBtns.each((index, element) => {
    const skillBtn = $(element)
    const charSkillId = skillBtn.attr('data-charskillid')
    const skillId = skillBtn.attr('data-skillid')
    const charSkillLvl = skillBtn.data('lvl')
    // see if skillBtn refers to a pre-existing character_skill
    if (charSkillId) {
      // see if it should be updated
      if (skillId) {
        skillUpdates['update'].push(formatCharSkill(charSkillLvl, skillId, charId, charSkillId))
      // otherwise it should be deleted
      } else {
        skillUpdates['delete'].push(parseInt(charSkillId))
      }
    // if it has a skillId but isn't a pre-existing skill, it should be created
    } else if (skillId) {
      skillUpdates['create'].push(formatCharSkill(charSkillLvl, skillId, charId))
    }
  })
  return skillUpdates
}

const onSaveSkills = charSkills => {
  // charSkills should be an object with keys 'create', 'update', and 'delete',
  // each with an array as a value with information needed to make their
  // respective calls to the API to correctly update character_skills
  const promises = []
  charSkills['create'].forEach(charSkill => {
    promises.push(charApi.charSkillCreate(charSkill))
  })
  charSkills['update'].forEach(charSkill => {
    promises.push(charApi.charSkillUpdate(charSkill.character_skill, charSkill.id))
  })
  charSkills['delete'].forEach(charSkillId => {
    promises.push(charApi.charSkillDelete(charSkillId))
  })
  return promises
}

const onSaveChar = event => {
  let charId = event.target.getAttribute('data-id')
  const charForm = $('.char-edit-form', '.char-sheet')[0]
  const charData = getFormFields(charForm)
  if (charId) {
    charApi.charUpdate(charData, charId)
      .then(response => {
        Promise.all(onSaveSkills(checkSkillsTable(charId)))
          .then(response => {
            onLoadChar(charId)
            charUi.onSaveCharSuccess()
          })
      })
      .catch(charUi.onSaveCharFailure)
  } else {
    charApi.charCreate(charData)
      .then(response => {
        charId = response.character.id
        Promise.all(onSaveSkills(checkSkillsTable(charId)))
          .then(response => {
            onLoadChar(charId)
            charUi.onSaveCharSuccess()
          })
      })
      .catch(charUi.onSaveCharFailure)
  }
}

const onDeleteChar = event => {
  const charId = event.target.getAttribute('data-id')
  charApi.charDelete(charId)
    .then(charId => {
      onGetChars()
      charUi.onDeleteCharSuccess(charId)
    })
    .catch(charUi.onDeleteCharFailure)
}

const onSelectCharSkill = event => {
  charUi.onSetCharSkill(event)
}

const onLoadSplash = event => {
  charUi.onSetSplash(event)
}

const addHandlers = () => {
  $('.main-content', 'body').on('click', '.char-index-btn', onGetChars)
  $('.main-content', 'body').on('click', '.char-create-btn', onCreateCharForm)
  $('.main-content', 'body').on('click', '.char-save-btn', onSaveChar)
  $('.main-content', 'body').on('click', '.char-select-btn', onGetChar)
  $('.main-content', 'body').on('click', '.char-cancel-btn', onGetChars)
  $('.char-delete-modal', 'body').on('show.bs.modal', charUi.onDeleteCharPrompt)
  $('.char-delete-btn', '.char-delete-modal').on('click', onDeleteChar)
  $('.main-content', 'body').on('click', '.dropdown-item', onSelectCharSkill)
}

module.exports = {
  addHandlers,
  onLoadSplash
}

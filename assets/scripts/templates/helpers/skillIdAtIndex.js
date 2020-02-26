// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}}

'use strict'

const skillIdAtIndex = (arr, index) => {
  if (arr[index]) {
    return arr[index].id
  }
}

module.exports = skillIdAtIndex

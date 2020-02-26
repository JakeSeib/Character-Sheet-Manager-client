// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}}

'use strict'

const idAtIndex = (arr, index) => {
  if (arr[index]) {
    return arr[index].id
  }
}

module.exports = idAtIndex

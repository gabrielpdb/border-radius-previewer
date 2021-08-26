const shape = document.querySelector('.shape')
const copyInput = document.querySelector('#copyInput')
const inputsNL = document.querySelectorAll('input')
const inputs = Array.from(inputsNL)
console.log(inputs[0].value)

function getUnity() {
  return document.querySelector('select#unit').value
}

function updateValues() {
  shape.style['border-top-left-radius'] = inputs[0].value + getUnity()
  shape.style['border-top-right-radius'] = inputs[1].value + getUnity()
  shape.style['border-bottom-left-radius'] = inputs[2].value + getUnity()
  shape.style['border-bottom-right-radius'] = inputs[3].value + getUnity()
}

function inputCode() {
  const code = `
    border-radius: ${
      inputs[0].value != 0 ? inputs[0].value + getUnity() + ', ' : '0, '
    } ${inputs[1].value != 0 ? inputs[1].value + getUnity() + ', ' : '0, '} ${
    inputs[2].value != 0 ? inputs[2].value + getUnity() + ', ' : '0, '
  } ${inputs[3].value != 0 ? inputs[3].value + getUnity() + ', ' : '0;'}
  `

  copyInput.value = code
}

document.addEventListener('keydown', event => {
  if (event.key == 'Enter') {
    updateValues()
    inputCode()
  }
})

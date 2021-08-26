const shape = document.querySelector('.shape')

function getUnity() {
  return document.querySelector('select#unit').value
}

function updateValues() {
  shape.style['border-top-left-radius'] =
    document.querySelector('input#top-left').value + getUnity()
  shape.style['border-top-right-radius'] =
    document.querySelector('input#top-right').value + getUnity()
  shape.style['border-bottom-left-radius'] =
    document.querySelector('input#bottom-left').value + getUnity()
  shape.style['border-bottom-right-radius'] =
    document.querySelector('input#bottom-right').value + getUnity()
}

document.addEventListener('keydown', event => {
  if (event.key == 'Enter') {
    updateValues()
  }
})

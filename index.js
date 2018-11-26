var dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - 10}px`
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left < 400) {
    dodger.style.left = `${left + 10}px`
  }
}


document.addEventListener('keydown', function(e) {
  if (e.which === 65) {
    moveDodgerLeft()
  }
  if (e.which === 68) {
    moveDodgerRight()
  }
})

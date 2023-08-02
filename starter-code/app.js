const leftBtn = document.querySelector('.coursel-left')
const rightBtn = document.querySelector('.coursel-right')
let id = 0

const courselItems = Array.from(document.querySelectorAll('.coursel-item'))
leftBtn.addEventListener('click', () =>
  move('previous', 'next', 'offscreenLeft', 'offscreenRight')
)
rightBtn.addEventListener('click', () =>
  move('next', 'previous', 'offscreenRight', 'offscreenLeft')
)

function move(a, b, c, d) {
  for (const item of courselItems) {
    if (item.className.includes(c)) {
      item.classList.remove(c)
      item.classList.add(d)
    } else if (item.className.includes(a)) {
      item.classList.remove(a)
      item.classList.add(c)
    } else if (item.className.includes('active')) {
      item.classList.remove('active')
      item.classList.add(a)
    } else if (item.className.includes(b)) {
      item.classList.remove(b)
      item.classList.add('active')
    } else if (item.className.includes(d)) {
      item.classList.remove(d)
      item.classList.add(b)
    }
  }
}

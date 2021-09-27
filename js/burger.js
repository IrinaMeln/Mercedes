const burger = document.querySelector('.humburger-menu'),
      menuElem = document.querySelector('.menu'),
      menuLists = document.querySelectorAll('.menu-list__item');

const toggleMenu = () => {
  menuElem.classList.toggle('menu-active')
  burger.classList.toggle('humburger-menu-active')
}

burger.addEventListener('click', () => toggleMenu())

menuLists.forEach(item => {
  item.addEventListener('click', () => {
    burger.classList.remove('humburger-menu-active')
    menuElem.classList.remove('menu-active')
  })
})

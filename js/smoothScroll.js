const linksHead = document.querySelectorAll('.menu-list__link'),
      mainScroll = document.querySelector('.main__scroll');
const newArray = [...linksHead, mainScroll] // спред-оператор объединяет массив из шапки и кнопку прокрутки (объединит все linksHead и добавит к ним mainScroll)

newArray.forEach(link => { // и теперь перебираем новый массив
  link.addEventListener('click', (event) => {
    event.preventDefault() // отменяем стандартное поведение

    const ID = event.target.getAttribute('href').substr(1) // находим конкретный атрибут ссылки

    document.getElementById(ID).scrollIntoView({ // плавная прокрутка по id
      behavior: 'smooth',
      block: 'start' // прокрутка к определенному блоку секции, например, к началу
    })
  })
})

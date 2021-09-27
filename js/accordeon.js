const lists = document.querySelectorAll('.feature-sub');
const btns = document.querySelectorAll('.feature__link');


btns.forEach((btnItem, index) => {
  btnItem.addEventListener('click', (e) => {

    e.target.closest('.feature__link').classList.toggle('feature__link_active');
    e.target.closest('.feature__link').nextElementSibling.classList.toggle('hidden');

  //   btns.forEach((btnItem) => {
  //     btnItem.classList.remove('feature__link_active')
  //   });

  //   btnItem.classList.add('feature__link_active')

  //   lists.forEach((listItem) => {
  //     listItem.classList.add('hidden')
  //   });

  //   lists[index].classList.remove('hidden')
  });
});

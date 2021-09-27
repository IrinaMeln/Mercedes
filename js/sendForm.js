const form = document.querySelector('.form-test-drive');
//https://jsonplaceholder.typicode.com - тренировочный сервер
form.addEventListener('submit', (e) => { // стандартное отправление форм submit
  e.preventDefault()

  let data = {} //создаем объект для хранения данных, который мы потом будет отправлять

  for(let { name, value } of form.elements) { // делаем деструктуризацию, чтобы можно было сразу обращаться к элементам по отдельности

    if(name)  {// отсекаем кнопку, оставляем только input
      data[name] = value.trim()
    }
    if(data[name] === '') {
      alert(`заполните поле ${name}`)
      return;
    }
  }

  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data)
  })
    .then(response => { // then отработает только тогда, когда будут полностью получены данные
      if(response.status === 200 || response.status === 201) {
        return response.json()
      } else { // обрабатываем ошибки, в том случае, елси url будет указан неверный

        throw new Error(response.status)
      }
    })
    .then(data => {
      alert('Данные успешно сохранены!')
      form.reset() // этот метод отчищает форму после отправки
    })
    .catch(error => {
      alert('Произошла ошибка, статус ' + error.message) // Наш код не падает, продолжается работа, мы просто сообщаем пользователю о том, что произошла ошибка 404
    })
  })

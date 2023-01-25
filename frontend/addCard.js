let formData = document.querySelector('.formAddCard')
formData.addEventListener('submit', (e) => {
  e.preventDefault()
  let imgVal = document.querySelector('#img-input').value,
    iconVal = document.querySelector('#icon-input').value,
    titleVal = document.querySelector('#title-input').value
  fetch('http://localhost:3000/images', {
      method: 'POST',
      headers: {
        accept: "application/json"
      },
      body: JSON.stringify({
        title: titleVal,
        url: imgVal,
        thumbnailUrl: iconVal,
      }),
    })
    .then((response) => response.json())
    .catch((error) => error)
})
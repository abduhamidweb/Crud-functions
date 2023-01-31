let card_wrapper = document.querySelector('#myCardWrapper')
async function getCard(card) {
  const response = await fetch('http://localhost:3000/images')
  const result = await response.json()
  renderdata(result)
}
getCard()
function renderdata(data) {
  data.forEach((item) => {
    let card = document.createElement('div')
    card.setAttribute('class', 'col-lg-3 col-md-6 col-sm-12 mx-auto p-3 mt-2')
    card.innerHTML = `
                        <div class="card">
                            <div class="card-top bg-light p-3">
                                <span><i class="fa-solid fa-trash" title="Delete" data-id=${item.id}></i></span>
                                <span><i class="bi bi-pencil-fill" title="Edite"></i>
                                </span>
                            </div>
                            <img src=${item.url} class="card-img-top"
                                alt="Fissure in Sandstone" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the
                                    bulk of the card's
                                    content.</p>
                                <a href="#!" class="btn btn-primary">Button</a>
                            </div>
                        </div>
            `
    card_wrapper.appendChild(card)
  })
}
function deleteData(id) {
  if (id) {
    console.log(id);
    const deleteMethod = {
      method: 'DELETE', // Method itself
      headers: {
        'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
      },
      // No need to have body, because we don't send nothing to the server.
    }
        fetch(`http://localhost:3000/images/${id}`,deleteMethod).then(res =>res.json()).then(data => console.log(data))
}
}
  deleteData()
card_wrapper.addEventListener('click', (e) => {
  if (e.target.getAttribute('data-id')) {
    deleteData(e.target.getAttribute('data-id'))
  }
})

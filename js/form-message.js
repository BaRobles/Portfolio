const scriptURL = 'https://script.google.com/macros/s/AKfycbz4nT0Hh7CCdaY56-u-lKRXMO3nM8LS9OwggaNlcTOX5XnM45XTDC-DZgxR9bPeGe0O/exec'

const form = document.forms['contact-us']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("A sua mensagem foi enviada com sucesso!"))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Erro!', error.message))
})
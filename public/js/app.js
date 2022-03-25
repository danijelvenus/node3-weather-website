console.log('client side javascript file isloaded')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    fetch(`http://localhost:3000/weather?address=${encodeURIComponent(location)}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error                
                messageTwo.textContent = ''
            } else {        
                messageOne.textContent = ''        
                messageTwo.textContent = `${data.forecast.description} - ${data.forecast.temp} - ${data.location}`
            }
        })
    })
})
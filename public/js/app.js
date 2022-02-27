const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.getElementById('message-1')
const message2 = document.getElementById('message-2')
const message3 = document.getElementById('message-3')


weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value
    message1.textContent = 'Loading...'
    fetch('/weather-app?adress='+location).then((response)=>{
    response.json().then((data=>{
        if(data.error){
            message2.textContent = ''
            message3.textContent = ''
            return message1.textContent = data.error
        }
        message1.textContent = data.location + ', '+data.description
        message2.textContent = 'Temperature: '+data.temperature 
        message3.textContent = ' FeelsLike: ' + data.feelsLike
    }))
})
})

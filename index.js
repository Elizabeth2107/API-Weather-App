const city = document.getElementById("city")
const temperature = document.getElementById("temperature")
const humidity = document.getElementById("humidity")
const skyDescription = document.getElementById("sky")


const urlLink = (typeCity) => {
  const url = `https://open-weather13.p.rapidapi.com/city/${typeCity}`

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b0599da7eamsh98649367c96cc53p1971f0jsn425ad2a1574a',
      'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
  }
  
fetch(url, options)
.then(response => response.json())
.then(data => {
  //console.log(data)
  //console.log(data.main)
  //console.log(data.main.temp)
  //console.log(data.main.humidity)
  //console.log(data.weather[0].description)
  
  city.innerHTML = `<h1>${typeCity}</h1>`
  temperature.innerHTML = `<h2>${data.main.temp}°F  </h2>`
  humidity.innerHTML = `<h3>Humidity: ${data.main.humidity}</h3>`
  skyDescription.innerHTML = `<h3>${data.weather[0].description}</h3>`

})
.catch(error => console.error(error))
}



function getWeather(){
  const typeCity = document.getElementById("typeCity").value
  urlLink(typeCity)

  console.log(typeCity) 
}
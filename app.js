const city = document.querySelector(".city-search")
const input = document.querySelector(".city")
const button = document.querySelector(".send")
const cloud = document.querySelector(".cloud")
const weather = document.querySelector(".weather-show")
const temperature = document.querySelector(".temperature-show")
const humidity = document.querySelector(".humidity-show")




const API_LINK = "https://api.openweathermap.org/data/2.5/weather?q="
const API_KEY = "&appid=4d7188d24ccfa1ef8506657a532dba29"
const API_UNITS = "&units=metric"

const getWeather = () => {
  const cityName = input.value;
  const URL = `${API_LINK}${cityName}${API_KEY}${API_UNITS}`;
  axios.get(URL).then(res => {
    const temp = res.data.main.temp;
    const hum = res.data.main.humidity;
    city.textContent = res.data.name
    temperature.textContent = Math.floor(temp) + "°C";
    humidity.textContent = hum + "%";
    weather.textContent = res.data.weather[0].main;
    input.value = ""
    
    const id = res.data.weather[0].id
   

    if(id >= 200 && id < 300) {
      cloud.src = "./gallery/thunderstorm.png"
    }
    else if(id >= 300 && id < 400) {
      cloud.src = "./gallery/drizzle.png"
    }
    else if(id >= 500 && id < 600) {
      cloud.src = "./gallery/rain.png"
    }
    else if(id >= 600 && id < 700) {
      cloud.src = "./gallery/ice.png"
    }
    else if(id >= 700 && id < 800) {
      cloud.src = "./gallery/fog.png"
    }
     else if(id === 800  ) {
      cloud.src = "./gallery/sun.png"
    }
     else if(id > 800 && id < 900 ) {
      cloud.src = "./gallery/cloud.png"
    }
    else {
      cloud.src = "./gallery/unknow.png"
    }
  })
}

button.addEventListener("click", getWeather)

const getWeather2 = (e) => {
  if(e.key === "Enter") {
    getWeather()
  }
}

window.addEventListener("keypress", getWeather2)
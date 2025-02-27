const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img =  document.querySelector('.weather_img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind_speed');


async function checkWeather(city){
    let api_key = 'bd5e378503939ddaee76f12ad7a97608'
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch('${url}').then(response => response.json());

    temperature.innerHTML = '${Math.round(weather_data.main.temp - 273.15)}';
}
searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
})


const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img =  document.querySelector('.weather_img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind_speed');


function checkWeather(city){
    const api_key = "bd5e378503939ddaee76f12ad7a97608";
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}';

}
searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
})
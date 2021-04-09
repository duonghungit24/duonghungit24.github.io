const api = '0862d0977a83fb32c1f12db38ff37a6e';
const search = document.querySelector('.search');
const cityName = document.querySelector('.city-name');
const wetherstatus = document.querySelector('.wether-status');
const temperature = document.querySelector('.temperature');
const weatherIcon = document.querySelector('.wethear-icon');
const sunrise = document.querySelector('.start');
const sunset = document.querySelector('.end');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');




search.addEventListener('change',(e) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&lang=vi&appid=${api}&units=metric`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
            cityName.innerHTML = data.name || '---';
            wetherstatus.innerHTML = data.weather[0].description;
            weatherIcon.setAttribute('src' ,`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
            temperature.innerHTML = Math.round(data.main.temp);
            sunrise.innerHTML = moment.unix(data.sys.sunrise).format('H:mm');
            sunset.innerHTML = moment.unix(data.sys.sunset).format('H:mm');
            humidity.innerHTML = data.main.humidity;
            wind.innerHTML = data.wind.speed;
        })
})

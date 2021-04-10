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
            //console.log(data);
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

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
const recogniton = new SpeechRecognition();
recogniton.lang = 'vi-VI'; // set ngôn ngữ
recogniton.continuous = false; //để trả dữ liệu ngay sau khi  nói 
const voice = document.querySelector('.voice');
const point = document.querySelector('.point');
const synth = window.speechSynthesis;    //hàm noí window

const speakNow= (text) => {
    if(synth.speaking)
    {
        //console.error('busy. speaking later');
        return;
    }
    const newspeech = new SpeechSynthesisUtterance(text);
    synth.speak(newspeech);
}
const handlevoice = text => {
    console.log('text' ,text);
    const handleText =  text.toLowerCase();
    if(handleText.includes('thời tiết tại')){
        const city = handleText.split("tại")[1].trim();  //thời tiết tại đà nẵng  = ['thoi tiet tai'] ['da nag '] , tách  ra bằng từ tại thành mảng
        search.value = city; //hiển thị tên thành phố nên ô input 
        const changeEvent = new Event('change'); //tạo 1 sự kiện 
        search.dispatchEvent(changeEvent); //thay đổi khi vừa có 1 sự kiện 
        return;
    }
    const container = document.querySelector('.container');
    if(handleText.includes('đổi màu nền')) //đổi màu nền
    {
        const color = handleText.split('nền')[1].trim();
        console.log(color);
        container.style.background = color;
        return;
    }
    if(handleText.includes('màu mặc định')) //đổi màu nền
    {
        container.style.background = '';
        return ;
    }
    if(handleText.includes('mấy giờ rồi')){
        const time = `${moment().hours()}  hours  ${moment().minutes()}  minutes`;
        speakNow(time);
        return ;
    }

   speakNow('Try Again');
}
voice.addEventListener('click' , e => {
    e.preventDefault();
    recogniton.start();
    voice.style.display = 'none';
    point.style.display = 'block';
})
recogniton.onspeechend = () => {
    recogniton.stop();
    voice.style.display = 'block';
    point.style.display = 'none';
}
recogniton.onerror = (err) => {     //trả về lỗi
    console.error(err)
    voice.style.display = 'block';
    point.style.display = 'none';
}
recogniton.onresult = e => {  //trả về kết quả
     const value = e.results[0][0].transcript; //lấy ra tên thành phố
    handlevoice(value);
}
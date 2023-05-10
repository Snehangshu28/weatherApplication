import './style.css'


const apiKey = '3ded952af4cd6f51810143a260eca9f0';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.getElementById('sc-bx');
const searchBtn = document.getElementById('serh');




async function checkWeather(city) {
    const response = await fetch(apiUrl + city +`&appId=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
    }else{
        let data = await response.json()

    console.log(data);


    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humi").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".tempeMax").innerHTML = Math.round(data.main.temp_max) + " °C max";
    document.querySelector(".tempeMin").innerHTML = Math.round(data.main.temp_min) + " °C min";

    }
    
    

}


searchBtn.onclick = () =>{
checkWeather(searchBox.value);
console.log("click")
}
const apiKey = "3b0291fb021369482a713f2d2bd62ccb";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=";
const navInp = document.querySelector(".nav-bar input");
const navBtn = document.querySelector(".nav-bar button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){

    const response = await fetch(apiURL + city + '&units=metric' + `&appid=${apiKey}`);
    var data = await response.json();
    
    console.log(data);

    if(data.cod == 404){
        document.querySelector(".errorshow").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {   

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-speed").innerHTML = data.wind.speed + "km/hr";

    let weatherCondition = data.weather[0].main.toLowerCase();
    weatherIcon.src = `imgs/${weatherCondition}.png`;

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".errorshow").style.display = "none";
}
}

navBtn.addEventListener("click", () => {
    checkWeather(navInp.value);
});
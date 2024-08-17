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

if (weatherIcon.src == "imgs/clear.png"); {
    neonColor.style.background = "conic-gradient(from var(--angle), transparent 70%, rgb(255, 255, 255), rgb(31, 31, 31))";
} elseif (weatherIcon.src == "imgs/clouds.png"); {
    neonColor.style.background = "conic-gradient(from var(--angle), transparent 70%, rgb(5, 255, 0), rgb(31, 31, 0))";
} elseif (weatherIcon.src == "imgs/rain.png"); {
    neonColor.style.background = "conic-gradient(from var(--angle), transparent 70%, rgb(255, 255, 255), rgb(31, 31, 31))";
} elseif (weatherIcon.src == "imgs/snow.png"); {
    neonColor.style.background = "conic-gradient(from var(--angle), transparent 70%, rgb(255, 255, 255), rgb(31, 31, 31))";
} elseif (weatherIcon.src == "imgs/thunderstorm.png"); {
    neonColor.style.background = "conic-gradient(from var(--angle), transparent 70%, rgb(255, 255, 255), rgb(31, 31, 31))";
} elseif (weatherIcon.src == "imgs/wind.png"); {
    neonColor.style.background = "conic-gradient(from var(--angle), transparent 70%, rgb(255, 255, 255), rgb(31, 31, 31))";
} elseif (weatherIcon.src == "imgs/mist.png"); {
    neonColor.style.background = "conic-gradient(from var(--angle), transparent 70%, rgb(255, 255, 255), rgb(31, 31, 31))";
} elseif (weatherIcon.src == "imgs/haze.png"); {
    neonColor.style.background = "conic-gradient(from var(--angle), transparent 70%, rgb(255, 255, 255), rgb(31, 31, 31))";
} elseif (weatherIcon.src == "imgs/drizzle.png"); {
    neonColor.style.background = "conic-gradient(from var(--angle), transparent 70%, rgb(255, 255, 255), rgb(31, 31, 31))";
}
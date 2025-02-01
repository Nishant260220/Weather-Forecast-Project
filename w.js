
const searchBox = document.getElementById("screen");
const searchBtn = document.getElementById("btn");
const weatherIcon = document.querySelector(".weather-icon");

const apiKey = "fa9934f8cdb372c476517ed61eccec08";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {

    if (city == "") {
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "none";
        alert("Please Enter City Name");
        return;
    }

    //fetching data with API
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    //Checking response to show error
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }

    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    if (data.weather[0].main == "Clear") {
        weatherIcon.src = "/images/clear.png"
    }
    else if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "/images/clouds.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png"
    }
    else if (data.weather[0].main == "Humidity") {
        weatherIcon.src = "/images/humidity.png"
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png"
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png"
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png"
    }
    else if (data.weather[0].main == "Haze") {
        weatherIcon.src = "/images/wind.png"
    }



}


searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})


//   if(searchBox.value == ""){
//         document.querySelector(".error").style.display = "none";
//         document.querySelector(".weather").style.display = "none";
//       }
//     console.log("searchvalue" + searchBox.value);  


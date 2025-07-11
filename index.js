    const apiKey = "&appid=" + "219796e419f4690f982d8023c47c8b15";
    const apiURL = "https://api.openweathermap.org/data/2.5/forecast?q=";

    document.querySelector(".searchbox button").addEventListener("click", function() {
        const value = document.querySelector(".searchbox input").value;

        getWeather(value);
    });


    async function getWeather(city, ) {
        const response = await fetch(apiURL + city + apiKey);




        var data = await response.json();

        document.getElementById('city').innerHTML = data.city.name;
        document.getElementById('country').innerHTML = data.city.country;

        document.getElementById('tempvalue').innerHTML = Math.round(data.list[0].main.temp - 273.15) + "°C";
        document.getElementById('humidityvalue').innerHTML = data.list[0].main.humidity + "%";
        document.getElementById('windvalue').innerHTML = data.list[0].wind.speed + "km/h";



        console.log(data);


    }
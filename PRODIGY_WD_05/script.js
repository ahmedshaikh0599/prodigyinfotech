console.log("Saif");

async function fetchData() {
    const cityName = document.getElementById("city").value;
    const apiKey = "058507f904ba23d8c45d0ccb66471886";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.cod === 200) {
            let weather = data.weather[0].main;
            let temperature = data.main.temp - 273.15; // Convert Kelvin to Celsius
            let city = data.name;
            let description = data.weather[0].description;
            let pressure = data.main.pressure;
            let humidity = data.main.humidity;
            let visibility = data.visibility;

            let weatherIcon = `https://openweathermap.org/img/wn/09n@2x.png`;

            console.log(weather);

            document.getElementById("wIcon").src = weatherIcon;
            document.getElementById("temp").innerHTML = `${temperature.toFixed(2)} °C`; // Limit to two decimal places
            document.getElementById("cityName").innerHTML = city;
            document.getElementById("desc").innerHTML = description;
            document.getElementById("pressure").innerHTML = pressure;
            document.getElementById("humidity").innerHTML = humidity;
            document.getElementById("visibility").innerHTML = visibility;
        } else {
            alert("City not found. Please enter a valid city name.");
        }
    } catch (error) {
        console.error("Error fetching the weather data", error);
    }
}

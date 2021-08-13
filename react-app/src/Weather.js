function Weather() {

    const API_KEY = "63f7e20999d893b9981ee5ec1b241c94";
    function onGeoSuccess(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        //console.log(position);
        //console.log(`You live in ${lat}, ${lng}`);
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        //console.log(url);
        // fetch(url);
        fetch(url).then(response => response.json()).then(data => {
            
            
            console.log(data.name, data.weather[0].main)
            // const name = data.name;
            // const weather = data.weather[0].main;

            const weather = document.querySelector(".weather span:first-child");
            const temp = document.querySelector(".weather span:nth-child(2)");
            const city = document.querySelector(".weather span:last-child");
            weather.innerText = data.weather[0].main;
            city.innerText = data.name;
            temp.innerText = data.main.temp
        });
    }
    function onGeoError() {
        alert("Can't find you. No weather for you.")
    }
    
    navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

    return (
        <div className="weather">
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Weather;
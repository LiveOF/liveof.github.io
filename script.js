var button = document.getElementById("checkbtn");
button.addEventListener("click", myFunction);

async function myFunction() {
    var city = document.getElementById("myText").value;
    var answer = await request(city)
    console.log(answer)
    var cityregion = answer.location.tz_id
    var temp = await answer['current']['dewpoint_c']
    var feelstemp = await answer['current']['feelslike_c']
    var wind = await answer['current']['wind_kph']
    var pressure = await answer['current']['pressure_mb']

    var mydiv = document.getElementById("weather");
    mydiv.innerHTML = `Temperature: ${temp}°C<br>Feels Like: ${feelstemp}°C<br>Wind Speed: ${wind} km/h<br>Pressure: ${pressure} mb<br>${cityregion}`;
  }



async function request(city){
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=d187c09bd95740a681054255243105&q=${city}&aqi=no`;

    let response = await fetch(apiUrl);
    if (response.ok) {
        var json = await response.json();
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    } 
}


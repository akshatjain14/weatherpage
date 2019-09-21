function getdata() {
    var city_name;
    city_name = document.getElementById("city").value;
    var apistart = "http://api.openweathermap.org/data/2.5/forecast?q=";
    var current = "http://api.openweathermap.org/data/2.5/weather?q=";
    var units = "&units=metric";
    var apkey = "&APPID=fdd1908dfdd36efbfff64c7bb3761f9e";
    var url = apistart + city_name + apkey + units;
    var url2 = current + city_name + apkey + units;
    console.log(url);
    // this url is for 5 day forecast.
    fetch(url).then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
        });
    console.log(url2);
    // this url is for  current weather forecast
    fetch(url2)
        .then(function(response) {
            return response.json();
        })
        .then(function(JSON_Data) {
            var mydata = JSON_Data;
            if (mydata.cod == 200) {
                document.getElementById("cardDeck").style.display = "block";
                document.getElementById("msg").style.display = "none";
                document.getElementById("weather").innerHTML = mydata.weather[0].description;
                document.getElementById("temp").innerHTML = mydata.main.temp + " " + "<sup>o</sup> C";
                document.getElementById("wind").innerHTML = " WIND :" + mydata.wind.speed + " " + "meter/sec";
                document.getElementById("humidity").innerHTML = " HUMIDITY :" + mydata.main.humidity + " " + "%";
                document.getElementById("Cloudiness").innerHTML = " CLOUDINESS :" + mydata.clouds.all + " " + "%";
                document.getElementById("visibility").innerHTML = "VISIBILITY :" + mydata.visibility + " " + "meter";
                document.getElementById("bar").style.display = "none";
                document.getElementById("bar2").style.display = "none";
                document.getElementById("bar3").style.display = "none";
                document.getElementById("bar4").style.display = "none";
            } else if (mydata.cod == 404) {
                document.getElementById("cardDeck").style.display = "none";
                document.getElementById("msg").style.display = "block";
            }
            console.log(JSON_Data);
        });
}

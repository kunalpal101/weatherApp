const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4671f334bdmshc05bdbfa1149ffdp1d29a9jsndd0461da52fc",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = async (city) => {
  cityName.innerHTML = city;
  +(await fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then(async (res) => await res.json())
    .then((res) => {
      console.log(res);
      cloud_pct.innerHTML = res.cloud_pct;
      temp.innerHTML = res.temp;
      temp2.innerHTML = res.temp;
      feels_like.innerHTML = res.feels_like;
      humidity.innerHTML = res.humidity;
      humidity2.innerHTML = res.humidity;
      min_temp.innerHTML = res.min_temp;
      max_temp.innerHTML = res.max_temp;
      wind_speed.innerHTML = res.wind_speed;
      wind_speed2.innerHTML = res.wind_speed;
      // wind_degrees = res.wind_degrees;
      sunrise.innerHTML = getTime(res.sunrise);
      sunset.innerHTML = getTime(res.sunset);
    })
    .catch((err) => console.error(err)));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Bengaluru");

//To convert the time from date Unix timestamp
var getTime = (val) => {
  var timestamp = val;
  var date = new Date(timestamp * 1000);

  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  return hours + ":" + minutes + ":" + seconds;
};

const fillDets = async () => {
  var details = {
    temp: document.getElementsByClassName("temp"),
    // cloud_pct: document.getElementsByClassName("cloud_pct"),
    // feels_like: document.getElementsByClassName("feels_like"),
    humidity: document.getElementsByClassName("humidity"),
    max_temp: document.getElementsByClassName("max_temp"),
    min_temp: document.getElementsByClassName("min_temp"),
    sunrise: document.getElementsByClassName("sunrise"),
    sunset: document.getElementsByClassName("sunset"),
    wind_speed: document.getElementsByClassName("wind_speed"),
    // wind_degrees: document.getElementsByClassName("wind_degrees"),
  };

  var cities = ["Shanghai", "New York", "London", "Tokyo", "Mumbai"];

  for (let i = 0; i < 5; i++) {
    await fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" +
        cities[i],
      options
    )
      .then(async (res) => await res.json())
      .then((res) => {
        details.temp[i].innerHTML = res.temp;
        console.log(res);
        // details.cloud_pct[i].innerHTML = res.cloud_pct;
        // details.feels_like[i].innerHTML = res.feels_like;
        details.humidity[i].innerHTML = res.humidity;
        details.min_temp[i].innerHTML = res.min_temp;
        details.max_temp[i].innerHTML = res.max_temp;
        details.wind_speed[i].innerHTML = res.wind_speed;
        // details.wind_degrees[i].innerHTML = res.wind_degrees;
        details.sunrise[i].innerHTML = getTime(res.sunrise);
        details.sunset[i].innerHTML = getTime(res.sunset);
      })
      .catch((err) => console.error(err));
  }
};

fillDets();

var timestamp = 1675616146;
var date = new Date(timestamp * 1000);
console.log(date);

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4671f334bdmshc05bdbfa1149ffdp1d29a9jsndd0461da52fc",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = async (city) => {
  cityName.innerHTML = city;

  await fetch(
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
      sunrise.innerHTML = res.sunrise;
      sunset.innerHTML = res.sunset;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Bengaluru");

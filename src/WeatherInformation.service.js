import axios from "axios";

const city = "London";

export const getGeo = (callback) => {
  axios
    .get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=d746c978bcd31d9b89b5be1a420a1a22`
    )
    .then((res) => {
      callback(res);
      // console.log(res);
    })
    .catch((err) => console.log(err));
};

export const getWeather = (callback) => {
  axios
    .get(
      `http://api.weatherapi.com/v1/current.json?key=5d9bbbe38d40448ea23160911230310&q=${city}`
    )
    .then((res) => {
      const data = {
        response: res,
        text: res.data.current.condition.text,
        icon: res.data.current.condition.icon,
      };
      // console.log(data.text);
      callback(data);
    })
    .catch((err) => console.log(err));
};

export const getWeatherHourly = (callback) => {

let lat;
let lon;
function fetchData(callback) {
  getGeo((data) => {
    const object = data.data[0];
    lat = object.lat;
    lon = object.lon;
    callback(); // Panggil callback setelah selesai
  });
}

fetchData(() => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=d746c978bcd31d9b89b5be1a420a1a22&units=metric`
    )
    .then((res) => {
      callback(res);
      // console.log(res);
    })
    .catch((err) => console.log(err));
});
};

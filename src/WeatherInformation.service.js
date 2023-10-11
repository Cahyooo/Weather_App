import axios from "axios";

//?
//! KEY API,FILE TIDAK ADA JIKA DI PUSH KE GITHUB
import key from './key/key.json'
//?
// const response = await axios.post("/", {
//   city,
// });
// const data = await response.json();


const city = "Jakarta";

export const getGeo = (callback) => {
  axios
    .get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key.keyWeather2}`
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
      `http://api.weatherapi.com/v1/current.json?key=${key.keyWeather1}&q=${city}`
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
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key.keyWeather2}&units=metric`
    )
    .then((res) => {
      callback(res);
      // console.log(res);
    })
    .catch((err) => console.log(err));
});
};

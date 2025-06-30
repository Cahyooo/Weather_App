"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWeatherHourly = exports.getWeather = exports.getGeo = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _key = _interopRequireDefault(require("./key/key.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//?
//! KEY API,FILE TIDAK ADA JIKA DI PUSH KE GITHUB
//?
var data = localStorage.getItem('City'); // console.log(data);

var city;

if (data) {
  city = data;
} else {
  city = "Jakarta";
}

var getGeo = function getGeo(callback) {
  _axios["default"].get("https://api.openweathermap.org/geo/1.0/direct?q=".concat(city, "&appid=").concat(_key["default"].keyWeather2)).then(function (res) {
    callback(res); // console.log(res);
  })["catch"](function (err) {
    return console.log(err);
  });
};

exports.getGeo = getGeo;

var getWeather = function getWeather(callback) {
  _axios["default"].get("https://api.weatherapi.com/v1/current.json?key=".concat(_key["default"].keyWeather1, "&q=").concat(city)).then(function (res) {
    var data = {
      response: res,
      text: res.data.current.condition.text,
      icon: res.data.current.condition.icon
    }; // console.log(data.text);

    callback(data);
  })["catch"](function (err) {
    return console.log(err);
  });
};

exports.getWeather = getWeather;

var getWeatherHourly = function getWeatherHourly(callback) {
  var lat;
  var lon;

  function fetchData(callback) {
    getGeo(function (data) {
      var object = data.data[0];
      lat = object.lat;
      lon = object.lon;
      callback(); // Panggil callback setelah selesai
    });
  }

  fetchData(function () {
    _axios["default"].get("https://api.openweathermap.org/data/2.5/forecast?lat=".concat(lat, "&lon=").concat(lon, "&appid=").concat(_key["default"].keyWeather2, "&units=metric")).then(function (res) {
      callback(res); // console.log(res);
    })["catch"](function (err) {
      return console.log(err);
    });
  });
};

exports.getWeatherHourly = getWeatherHourly;
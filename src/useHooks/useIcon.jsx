import fog from "../img/fog.png";
import Rain from "../img/rain.png";
import Rain_night from "../img/rainy_night.png";
import Clouds from "../img/cloudy_sunny.png";
import Clouds_night from "../img/cloudy_night.png";
import Sunny from "../img/sunny.png";
import Night from "../img/clear_night.png";

const useIcon = (type, time) => {
  // console.log(time);
  if (type === "Clouds") {
    if (time >= 19 || time <= 5) {
      return Clouds_night;
    } else {
      return Clouds;
    }
  } else if (type === "Rain") {
    if (time >= 19 || time <= 5) {
      return Rain_night;
    } else {
      return Rain;
    }
  } else if (type === "Sunny" || type === "Clear") {
    if (time >= 19 || time <= 5) {
      return Night;
    } else {
      return Sunny;
    }
  }
};

export default useIcon;

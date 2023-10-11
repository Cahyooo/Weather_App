import { getWeather, getWeatherHourly } from "./WeatherInformation.service";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./Header";
import TodayOverview from "./TodayOverview";
import ForecastOverview from "./ForecastOverview";

function App() {
  const [weatherInfo, setWeatherInfo] = useState("");
  const [location, setLocation] = useState("");
  const [weatherInfoForChild, setweatherInfoForChild] = useState();
  const [dataHourly, setDataHourly] = useState("");

  useEffect(() => {
    getWeather((data) => {
      setWeatherInfo(data.response.data.current);
      setLocation(data.response.data.location);
      setweatherInfoForChild(data);
    });
    getWeatherHourly((data) => {
      setDataHourly(data.data.list);
    });
  }, []);
  // console.log(weatherInfo);
  // console.log(location);
  // console.log(weatherInfoForChild);
  // console.log(dataHourly);

  return (
    <main>
      {weatherInfo === "" || location === "" || dataHourly === "" ? (
        <div className="text-center align-middle text-white text-3xl mt-[50vh]">
          <p>Getting API Data...</p>
        </div>
      ) : (
        <article className="bg-[#0F172A] w-auto pb-10 rounded-xl mx-10 my-5 text-white px-4 lg:px-7">
          <Header location={location} />
          <h1 className="mb-5 text-2xl">Today Overview</h1>
          <TodayOverview weatherInfo={dataHourly} time={location.localtime} />
          <h5 className="my-5 text-2xl text-bold ">Next 5 Days</h5>
          <ForecastOverview time={location.localtime} data={dataHourly} />
        </article>
      )}
    </main>
  );
}

export default App;

import { getGeo, getWeather, getWeatherHourly } from "./WeatherInformation.service";
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
  const [geo, setGeo] = useState("");

  useEffect(() => {
    getWeather((data) => {
      setWeatherInfo(data.response.data.current);
      setLocation(data.response.data.location);
      setweatherInfoForChild(data);
    });
    getWeatherHourly((data) => {
      setDataHourly(data.data.list);
    });
    getGeo((data) => {
      setGeo(data.data)
    })
  }, []);
  // console.log(weatherInfo);
  // console.log(location);
  // console.log(weatherInfoForChild);
  // console.log(dataHourly);
  console.log(geo);

  const [value, setValue] = useState("");
    const handleSubmit = () => {
      localStorage.setItem("City", value);
      setValue("");
    };
  if(geo.length === 0) {
    return (
      <main>
          <div className="text-center align-middle text-white text-3xl mt-[50vh]">
          <p>City Not Found? Try Search For Another City</p>
          <form method="" action="" className="flex justify-center mt-5" onSubmit={handleSubmit}>
          <button type="submit" className="bg-[#1F293B] h-10 w-14 rounded-lg">
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
              className="w-6 h-6 absolute -translate-y-3 translate-x-3"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                  stroke="#e8e8e8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
          <input
            type="text"
            className="bg-[#384563] h-10 w-[30vw] focus:outline-none text-sm rounded-lg pl-3"
            placeholder="Search City..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
        </div>
      </main>
    )
  }

  return (
    <main>
      {weatherInfo === "" || location === "" || dataHourly === "" ? (
        <div className="text-center align-middle text-white text-3xl mt-[50vh]">
          <p>Getting API Data...</p>
        </div>
      ) : (
        <article className="bg-[#0F172A] w-auto pb-10 rounded-xl md:mx-10 my-5 text-white px-4 lg:px-7 xl:px-14">
          <Header location={location} />
          <h1 className="mb-5 text-2xl">Today Overview</h1>
          <TodayOverview weatherInfo={dataHourly} weatherInfoDetail={weatherInfo} time={location.localtime} />
          <h5 className="my-5 text-2xl text-bold ">Next 5 Days</h5>
          <ForecastOverview time={location.localtime} data={dataHourly} />
        </article>
      )}
    </main>
  );
}

export default App;

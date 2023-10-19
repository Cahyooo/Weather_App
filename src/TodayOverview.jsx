import useIcon from "./useHooks/useIcon";

const TodayOverview = ({ weatherInfo, time, weatherInfoDetail }) => {
  const nowInfo = weatherInfo[0];
  const weather = nowInfo.weather[0];
  const jam = time.split(" ")[1].split(":")[0];
  // console.log(weatherInfo);
  //   console.log(nowInfo);
  // console.log(weatherInfoDetail);

  const WeatherInformation = () => {
    return (
      <div className="bg-[#1F293B] h-[350px] rounded-lg border text-2xl w-[230px]">
        <img
          src={useIcon(weather.main, jam)}
          alt=""
          className="h-[100px] ml-12 mt-7 mb-5"
        />
        <div className="pl-8 mb-5">
          <span className="font-semibold">{nowInfo.main.temp}°C</span> <br />
          <span className="text-[18px] opacity-80 -translate-y-10">
            {weather.description}
          </span>
        </div>
        <hr className="mx-6" />
        <div className="pl-8 mt-5">
          <span className="text-[18px]">Local Time</span> <br />
          <div className="mt-2 opacity-70 flex -translate-x-2">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-1"
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
                  d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                  stroke="#e6e6e6"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M12 6V12"
                  stroke="#e6e6e6"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M16.24 16.24L12 12"
                  stroke="#e6e6e6"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <span className="text-sm">{time}</span>
          </div>
        </div>
      </div>
    );
  };

  const OtherInformation = () => {
    const Box = ({ children }) => {
      return (
        <div className="bg-[#1F293B] w-[220px] 2xl:h-[165px] rounded-lg flex p-2">
          {children}
        </div>
      );
    };

    const svgClassName = "w-8 h-8 ml-6";
    const svgBoxClass = "flex item-center justify-center items-center";

    return (
      <div className="h-[350px] grid md:grid-cols-2 2xl:grid-cols-3 xl:grid-cols-2 gap-[15px]">
        <Box>
          <div className={svgBoxClass}>
            <svg
              className={svgClassName}
              fill="#e3e3e3"
              height="200px"
              width="200px"
              version="1.1"
              id="Icons"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 32 32"
              xmlSpace="preserve"
              stroke="#e3e3e3"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path d="M22,9.6c-1-0.4-2-0.9-3-1.4V17c1,0,2,0.1,3,0V9.6z"></path>{" "}
                  <path d="M27.7,10.6c-0.2-0.2-0.5-0.3-0.8-0.3c-1,0.1-2,0-2.9-0.2v6.5c1.1-0.3,2.2-0.7,3.5-1.4c0.3-0.2,0.5-0.5,0.5-0.9v-3 C28,11.1,27.9,10.8,27.7,10.6z"></path>{" "}
                  <path d="M12,5.6c-0.7-0.1-1.3-0.1-2.1,0C9.4,5.7,9.1,6,9,6.5L6,8.9V3c0-0.6-0.4-1-1-1S4,2.4,4,3v26c0,0.6,0.4,1,1,1s1-0.4,1-1V15.1 l3,2.4v0.1c0,0.4,0.2,0.7,0.5,0.9c0.2,0.1,0.3,0.1,0.5,0.1c0.2,0,0.3,0,0.5-0.1c0.5-0.3,1-0.5,1.5-0.7V5.6z M9,14.9l-3-2.4v-1 l3-2.4V14.9z"></path>{" "}
                  <path d="M17,7.1c-0.9-0.4-1.9-0.8-3-1.1v11.2c1-0.2,2-0.3,3-0.2V7.1z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
          <div className="ml-5">
            <p className="mt-9 opacity-60 mb-2">Wind Speed</p>
            <p className="text-xl">{weatherInfoDetail.wind_kph} km/h</p>
          </div>
        </Box>
        <Box>
          <div className={svgBoxClass}>
            <svg
              className={svgClassName}
              viewBox="0 0 32 32"
              id="svg5"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:svg="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <defs id="defs2"></defs>{" "}
                <g id="layer1" transform="translate(-60,-388)">
                  {" "}
                  <path
                    d="m 76,413.01367 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z"
                    id="path453599"
                    style={{
                      color: "#dbdbdb",
                      fill: "#dbdbdb",
                      fillRule: "evenodd",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 4.1,
                    }}
                  ></path>
                  <path
                    d="m 86,403.01367 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z"
                    id="path453581"
                    style={{
                      color: "#dbdbdb",
                      fill: "#dbdbdb",
                      fillRule: "evenodd",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 4.1,
                    }}
                  ></path>
                  <path
                    d="m 76,403.01367 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z"
                    id="path453579"
                    style={{
                      color: "#dbdbdb",
                      fill: "#dbdbdb",
                      fillRule: "evenodd",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 4.1,
                    }}
                  ></path>
                  <path
                    d="m 66,403.01367 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z"
                    id="path453577"
                    style={{
                      color: "#dbdbdb",
                      fill: "#dbdbdb",
                      fillRule: "evenodd",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 4.1,
                    }}
                  ></path>
                  <path
                    d="m 82.458984,396.65234 a 1.0001,1.0001 0 0 0 -0.453125,0.0625 l -9.193359,3.53711 a 1.0001,1.0001 0 0 0 -0.574219,0.57422 l -3.535156,9.19141 a 1.0001,1.0001 0 0 0 1.291016,1.29297 l 9.193359,-3.53516 a 1.0001,1.0001 0 0 0 0.574219,-0.57422 l 3.535156,-9.19336 a 1.0001,1.0001 0 0 0 -0.837891,-1.35547 z m -1.83789,2.73828 -2.566406,6.67774 -6.675782,2.56641 2.566406,-6.67579 z"
                    id="path453571"
                    style={{
                      color: "#dbdbdb",
                      fill: "#dbdbdb",
                      fillRule: "evenodd",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 4.1,
                    }}
                  ></path>
                  <path
                    d="m 76,393.01367 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z"
                    id="path453565"
                    style={{
                      color: "#dbdbdb",
                      fill: "#dbdbdb",
                      fillRule: "evenodd",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 4.1,
                    }}
                  ></path>
                  <path
                    d="m 76,390.01367 c -7.720111,0 -14,6.27989 -14,14 0,7.72011 6.279889,14 14,14 7.720111,0 14,-6.27989 14,-14 0,-7.72011 -6.279889,-14 -14,-14 z m 0,2 c 6.639228,0 12,5.36078 12,12 0,6.63924 -5.360772,12 -12,12 -6.639228,0 -12,-5.36076 -12,-12 0,-6.63922 5.360772,-12 12,-12 z"
                    id="path453553"
                    style={{
                      color: "#dbdbdb",
                      fill: "#dbdbdb",
                      fillRule: "evenodd",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 4.1,
                      inkscapeStroke: "none",
                    }}
                  ></path>
                </g>{" "}
              </g>
            </svg>
          </div>
          <div className="ml-5">
            <p className="mt-9 opacity-60 mb-2">Wind Degree</p>
            <p className="text-xl">{weatherInfoDetail.humidity}°</p>
          </div>
        </Box>
        <Box>
          <div className={svgBoxClass}>
            <svg
              className={svgClassName}
              fill="#e3e3e3"
              height="200px"
              width="200px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 328.611 328.611"
              xmlSpace="preserve"
              stroke="#e3e3e3"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path d="M209.306,50.798c-2.452-3.337-7.147-4.055-10.485-1.602c-3.338,2.453-4.055,7.147-1.603,10.485 c54.576,74.266,66.032,123.541,66.032,151.8c0,27.691-8.272,52.794-23.293,70.685c-17.519,20.866-42.972,31.446-75.651,31.446 c-73.031,0-98.944-55.018-98.944-102.131c0-52.227,28.103-103.234,51.679-136.829c25.858-36.847,52.11-61.415,52.37-61.657 c3.035-2.819,3.209-7.565,0.39-10.6c-2.819-3.034-7.565-3.209-10.599-0.39c-1.11,1.031-27.497,25.698-54.254,63.765 c-24.901,35.428-54.586,89.465-54.586,145.71c0,31.062,9.673,59.599,27.236,80.353c20.361,24.061,50.345,36.779,86.708,36.779 c36.794,0,66.926-12.726,87.139-36.801c17.286-20.588,26.806-49.117,26.806-80.33C278.25,156.216,240.758,93.597,209.306,50.798z"></path>{" "}
                  <path d="M198.43,148.146l-95.162,95.162c-2.929,2.929-2.929,7.678,0,10.606c1.465,1.464,3.385,2.197,5.304,2.197 s3.839-0.732,5.304-2.197l95.162-95.162c2.929-2.929,2.929-7.678,0-10.606C206.107,145.217,201.359,145.217,198.43,148.146z"></path>{" "}
                  <path d="M191.965,207.899c-13.292,0-24.106,10.814-24.106,24.106s10.814,24.106,24.106,24.106s24.106-10.814,24.106-24.106 S205.257,207.899,191.965,207.899z M191.965,241.111c-5.021,0-9.106-4.085-9.106-9.106s4.085-9.106,9.106-9.106 s9.106,4.085,9.106,9.106S196.986,241.111,191.965,241.111z"></path>{" "}
                  <path d="M125.178,194.162c13.292,0,24.106-10.814,24.106-24.106s-10.814-24.106-24.106-24.106s-24.106,10.814-24.106,24.106 S111.886,194.162,125.178,194.162z M125.178,160.949c5.021,0,9.106,4.085,9.106,9.106s-4.085,9.106-9.106,9.106 c-5.021,0-9.106-4.085-9.106-9.106S120.156,160.949,125.178,160.949z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
          <div className="ml-5">
            <p className="mt-9 opacity-60 mb-2">Wind Speed</p>
            <p className="text-xl">{weatherInfoDetail.humidity}%</p>
          </div>
        </Box>
        <Box>
          <div className={svgBoxClass}>
            <svg
              className={svgClassName}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#d1d1d1"
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
                  d="M12 9C11.4477 9 11 9.44771 11 10V15.2676C10.4022 15.6134 10 16.2597 10 17C10 18.1046 10.8954 19 12 19C13.1046 19 14 18.1046 14 17C14 16.2597 13.5978 15.6134 13 15.2676V10C13 9.44771 12.5523 9 12 9Z"
                  fill="#e8e8e8"
                ></path>{" "}
                <path
                  d="M11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6Z"
                  fill="#e8e8e8"
                ></path>{" "}
                <path
                  d="M16 7C15.4477 7 15 7.44772 15 8C15 8.55229 15.4477 9 16 9C16.5523 9 17 8.55229 17 8C17 7.44772 16.5523 7 16 7Z"
                  fill="#e8e8e8"
                ></path>{" "}
                <path
                  d="M6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12C7 12.5523 6.55228 13 6 13Z"
                  fill="#e8e8e8"
                ></path>{" "}
                <path
                  d="M7 8C7 8.55229 7.44772 9 8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8Z"
                  fill="#e8e8e8"
                ></path>{" "}
                <path
                  d="M18 13C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13Z"
                  fill="#e8e8e8"
                ></path>{" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 20.9932C7.03321 20.9932 3.00683 16.9668 3.00683 12C3.00683 7.03321 7.03321 3.00683 12 3.00683C16.9668 3.00683 20.9932 7.03321 20.9932 12C20.9932 16.9668 16.9668 20.9932 12 20.9932Z"
                  fill="#e8e8e8"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div className="ml-5">
            <p className="mt-9 opacity-60 mb-2">Wind Speed</p>
            <p className="text-xl">{weatherInfoDetail.pressure_mb} hPa</p>
          </div>
        </Box>
        <Box>
          <div className={svgBoxClass}>
            <svg
              className={svgClassName}
              xmlns="http://www.w3.org/2000/svg"
              fill="#dedede"
              viewBox="0 0 24 24"
              stroke="#dedede"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
              </g>
            </svg>
          </div>
          <div className="ml-5">
            <p className="mt-9 opacity-60 mb-2">Visibility</p>
            <p className="text-xl">{weatherInfoDetail.vis_km} km</p>
          </div>
        </Box>
        <Box>
          <div className={svgBoxClass}>
            <svg
              className={svgClassName}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
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
                  d="M2 15H18.5C20.43 15 22 16.57 22 18.5C22 20.43 20.43 22 18.5 22C16.57 22 15 20.43 15 18.5V18"
                  stroke="#e2e3e4"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M2 12H18.5C20.42 12 22 10.43 22 8.5C22 6.58 20.42 5 18.5 5C16.58 5 15 6.57 15 8.5V9"
                  stroke="#e2e3e4"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M2 9H9.31C10.8 9 12 7.79 12 6.31C12 4.82 10.79 3.62 9.31 3.62C7.82 3.62 6.62 4.83 6.62 6.31V6.69"
                  stroke="#e2e3e4"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div className="ml-5">
            <p className="mt-9 opacity-60 mb-2">Gust Wind</p>
            <p className="text-xl">{weatherInfoDetail.gust_kph} km/h</p>
          </div>
        </Box>
      </div>
    );
  };

  const TodayForecast = () => {
    const fiveTimeForecast = weatherInfo.slice(0, 5);
    // console.log(fiveTimeForecast);

    const InformationTime = () => {
      return (
        fiveTimeForecast &&
        fiveTimeForecast.map((data) => {
          const dateAndTime = data.dt_txt;
          const date = dateAndTime.split(" ")[0].split("-");
          const time = dateAndTime.split(" ")[1].substring(0, 5);
          const celcius = data.main.temp;

          const fullDate = new Date(date[0], date[1] - 1, date[2]);
          const dayName = fullDate.toLocaleDateString("en-US", {
            weekday: "long",
          });
          return (
            <div key={dateAndTime} className="flex mb-4 justify-between">
              <div className="">
                <p className="opacity-40 text-sm">{dayName}</p>
                <p>{time}</p>
              </div>
              <div className="translate-y-3 text-[16px]">{celcius}°C</div>
            </div>
          );
        })
      );
    };

    return (
      <div className="bg-[#1F293B] h-[350px] w-[230px] rounded-lg max-[1125px]:mt-5 border px-6 py-6">
        <InformationTime />
      </div>
    );
  };

  return (
    <section className="flex justify-between">
      <WeatherInformation />
      <OtherInformation />
      <TodayForecast />
    </section>
  );
};

export default TodayOverview;

import useIcon from "./useHooks/useIcon";

const TodayOverview = ({ weatherInfo, time }) => {
  const nowInfo = weatherInfo[0];
  const weather = nowInfo.weather[0];
  const jam = time.split(" ")[1].split(":")[0];
  //   console.log(weather);
  //   console.log(nowInfo);

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
    const Box = () => {
      return (
        <div className="bg-[#1F293B] w-[220px] h-[165px] rounded-lg"></div>
      );
    };

    return (
      <div className="h-[350px] ml-5 grid md:grid-cols-2 lg:grid-cols-3 gap-[15px]">
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </div>
    );
  };

  const TodayForecast = () => {
    return <div className="bg-[#1F293B] h-[350px] w-[230px] rounded-lg"></div>;
  };

  return (
    <section className="grid sm:grid-cols-2 gap-y-5 lg:grid-cols-3 gap-0">
      <WeatherInformation />
      <OtherInformation />
      <TodayForecast />
    </section>
  );
};

export default TodayOverview;

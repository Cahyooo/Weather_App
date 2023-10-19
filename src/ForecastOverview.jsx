import { useState } from "react";
import useIcon from "./useHooks/useIcon";

const ForecastOverview = ({ time, data }) => {
  const timeToArray = time.split(" ");
  const SecMinHourNow = timeToArray[1];
  const hour = SecMinHourNow.split(":")[0];
  const yearMonthDate = timeToArray[0];

  const month = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Des",
  };

  //   Ambil Nama Hari(beserta 3 huruf kedepan)
  const tahun = yearMonthDate.split("-")[0];
  const bulan = yearMonthDate.split("-")[1];
  const tanggal = yearMonthDate.split("-")[2];
  const tanggalObj = new Date(tahun, bulan - 1, tanggal);
  const namaHari = tanggalObj
    .toLocaleDateString("en-EN", { weekday: "long" })
    .substring(0, 3);

  function getDate(whichDayLater) {
    const currentDate = new Date(tahun, bulan - 1, tanggal);
    currentDate.setDate(currentDate.getDate() + whichDayLater);

    const day = currentDate.toLocaleDateString("en-US", { day: "numeric" });
    const month = currentDate.toLocaleDateString("en-US", { month: "short" });
    const weekday = currentDate.toLocaleDateString("en-US", {
      weekday: "short",
    });

    return `${day} ${month} ${weekday}`;
  }

  const day1 = getDate(1);
  const day2 = getDate(2);
  const day3 = getDate(3);
  const day4 = getDate(4);
  const day5 = getDate(5);

  const BoxFilter = ({ children, info, activeFilter, setFilter }) => {
    const onClick = () => {
      setFilter(info);
    };

    return (
      <div
        className={`${
          activeFilter === info ? "bg-white text-black" : "bg-[#1F293B]"
        } rounded-sm cursor-pointer ml-5 mb-5`}
        onClick={onClick}
      >
        <p className="text-center px-4 py-1 whitespace-nowrap">{children}</p>
      </div>
    );
  };

  const [activeFilter, setActiveFilter] = useState("all_day");
  const FilterComponent = () => {
    return (
      <div className="flex overflow-auto mb-5">
        <BoxFilter
          info="all_day"
          activeFilter={activeFilter}
          setFilter={setActiveFilter}
        >
          All Day
        </BoxFilter>
        <BoxFilter
          info={day1}
          activeFilter={activeFilter}
          setFilter={setActiveFilter}
        >
          {day1}
        </BoxFilter>
        <BoxFilter
          info={day2}
          activeFilter={activeFilter}
          setFilter={setActiveFilter}
        >
          {day2}
        </BoxFilter>
        <BoxFilter
          info={day3}
          activeFilter={activeFilter}
          setFilter={setActiveFilter}
        >
          {day3}
        </BoxFilter>
        <BoxFilter
          info={day4}
          activeFilter={activeFilter}
          setFilter={setActiveFilter}
        >
          {day4}
        </BoxFilter>
        <BoxFilter
          info={day5}
          activeFilter={activeFilter}
          setFilter={setActiveFilter}
        >
          {day5}
        </BoxFilter>
      </div>
    );
  };

  const Box = () => {
    const getFilter = activeFilter;
    let queryFound;
    if (getFilter !== "all_day") {
      const getFilterTanggal = getFilter.split(" ")[0];
      queryFound = data.map((d) => {
        if (d.dt_txt.split(" ")[0].split("-")[2] === getFilterTanggal) {
          return d;
        }
      });
      queryFound = queryFound.filter(item => item !== undefined);
    } else {
      queryFound = data;
    }
    // console.log(queryFound);

    return (
      queryFound && 
      queryFound.map((d) => {
        const weather = d.weather[0];
        // console.log(weather.main);
        const celcius = d.main.temp;
        // console.log(weather.description)

        const waktu = d.dt_txt;
        const tahunBulanTanggal = waktu.split(" ")[0];
        const jam = waktu.split(" ")[1].substring(0,5);
        const tahun = tahunBulanTanggal.split("-")[0];
        const bulan = month[tahunBulanTanggal.split("-")[1]];
        const tanggal = tahunBulanTanggal.split("-")[2];

        return (
          <div
            key={waktu}
            className="bg-[#1F293B] h-[80px] w-[250px] rounded-md flex"
          >
            <div className="ml-4 mt-2 mr-7">
              <span className="text-sm opacity-50">{`${tanggal} ${bulan} ${tahun}`}</span>{" "}
              <br />
              <span>{jam}</span>
            </div>
            <img
              src={useIcon(weather.main, jam.split(":")[0])}
              alt=""
              className="w-[45px] h-[45px] mt-4"
            />
            <div className="ml-5 mt-3">
              <span>{celcius}°C</span>
              <br />
              <span className="opacity-70 text-sm">{weather.main}</span>
            </div>
          </div>
        );
      })
    );
  };
  // console.log(data);

  return (
    <>
      <FilterComponent />
      <div className="grid min-[1200px]:grid-cols-4 gap-4 min-[885px]:grid-cols-3 grid-cols-2 max-[550px]:flex max-[550px]:flex-col max-[550px]:items-center max-[550px]:justify-center">
        <Box></Box>
      </div>
    </>
  );
};

export default ForecastOverview;

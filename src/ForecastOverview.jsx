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

  const BoxFilter = ({ children, active = false }) => {
    return (
      <div
        className={`${
          active ? "bg-white text-black" : "bg-[#1F293B]"
        } rounded-sm cursor-pointer ml-5 mb-5`}
      >
        <p className="text-center px-4 py-1">{children}</p>
      </div>
    );
  };

  const Box = () => {
    return (
      data &&
      data.map((d) => {
        const weather = d.weather[0];
        // console.log(weather.main);
        const celcius = d.main.temp;
        console.log(weather.description)

        const waktu = d.dt_txt;
        const tahunBulanTanggal = waktu.split(" ")[0];
        const jam = waktu.split(" ")[1];
        const tahun = tahunBulanTanggal.split("-")[0];
        const bulan = month[tahunBulanTanggal.split("-")[1]];
        const tanggal = tahunBulanTanggal.split("-")[2];
        return (
          <div className="bg-[#1F293B] h-[80px] w-[250px] rounded-md flex">
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
  console.log(data);

  return (
    <>
      <div className="flex">
        <BoxFilter active={false}>All Day</BoxFilter>
        <BoxFilter>{day1}</BoxFilter>
        <BoxFilter>{day2}</BoxFilter>
        <BoxFilter>{day3}</BoxFilter>
        <BoxFilter>{day4}</BoxFilter>
        <BoxFilter>{day5}</BoxFilter>
      </div>
      <div className="grid lg:grid-cols-4 gap-4">
        <Box></Box>
      </div>
    </>
  );
};

export default ForecastOverview;

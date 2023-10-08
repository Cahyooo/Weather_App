const ForecastOverview = () => {

    const BoxFilter = ({children}) => {
        return (
            <div className="bg-[#1F293B] rounded-sm cursor-pointer">
                <p className="text-center px-4 py-1">{children}</p>
            </div>
        )
    }

    const Box = () => {
        return (
            <div className="bg-[#1F293B] h-[50px] w-[200px]">

            </div>
        )
    }

  return (
    <>
      <div className="flex">
        <BoxFilter>All Day</BoxFilter>
      </div>
      <div className="grid">

      </div>
    </>
  );
};

export default ForecastOverview;

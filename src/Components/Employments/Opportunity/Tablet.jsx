const Tablet = ({item}) => {
  return (
    <div className=" test md:flex flex-col w-fit gap-5">
      <div className="w-[311px] h-[80px] lg:min-w-[450px] xl:w-[580px] lg:h-[96px] flex justify-between px-3  items-center border-2 border-gray-300 rounded-md">
        <div className="flex flex-col gap-y-2 w-[50%]">
          <p className="font-bold text-[#252525] text-[14px] ">
            {item.manager}
          </p>
          <span className="text-[#4CA773] text-[12px]">{item.city}</span>
        </div>
        <button className="px-3 py-1 h-fit rounded-sm bg-[#D9F9E4] ">
          <p className="text-[10px] text-[#4CA773] ">{item.product}</p>
        </button>
      </div>
      <div className="w-[311px] h-[80px] lg:min-w-[450px] xl:w-[580px] lg:h-[96px] flex justify-between px-3  items-center border-2 border-gray-300 rounded-md">
        <div className="flex flex-col gap-y-2 w-[50%]">
          <p className="font-bold text-[#252525] text-[14px] ">
            {item.manager}
          </p>
          <span className="text-[#4CA773] text-[12px]">{item.city}</span>
        </div>
        <button className="px-3 py-1 h-fit rounded-sm bg-[#D9F9E4] ">
          <p className="text-[10px] text-[#4CA773] ">{item.product}</p>
        </button>
      </div>
      <div className="w-[311px] h-[80px] lg:min-w-[450px] xl:w-[580px] lg:h-[96px] flex justify-between px-3  items-center border-2 border-gray-300 rounded-md">
        <div className="flex flex-col gap-y-2 w-[50%]">
          <p className="font-bold text-[#252525] text-[14px] ">
            {item.manager}
          </p>
          <span className="text-[#4CA773] text-[12px]">{item.city}</span>
        </div>
        <button className="px-3 py-1 h-fit rounded-sm bg-[#D9F9E4] ">
          <p className="text-[10px] text-[#4CA773] ">{item.product}</p>
        </button>
      </div>
      <div className="w-[311px] h-[80px] lg:min-w-[450px] xl:w-[580px] lg:h-[96px] flex justify-between px-3  items-center border-2 border-gray-300 rounded-md">
        <div className="flex flex-col gap-y-2 w-[50%]">
          <p className="font-bold text-[#252525] text-[14px] ">
            {item.manager}
          </p>
          <span className="text-[#4CA773] text-[12px]">{item.city}</span>
        </div>
        <button className="px-3 py-1 h-fit rounded-sm bg-[#D9F9E4] ">
          <p className="text-[10px] text-[#4CA773] ">{item.product}</p>
        </button>
      </div>
    </div>
  );
};

export default Tablet;

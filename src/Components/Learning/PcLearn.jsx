const Pclearn = ({ item }) => {
  return (
    <>
      <div className="lg:flex test md:hidden relative  w-[80%]">
        <div className="flex flex-col   w-full     gap-3  ">
          <h1 className="lg:text-[20px] block  text-[16px] text-[#252525] pr-5 pt-5">
            {item.title}
          </h1>
          <p className="text-[#667085] pr-5 lg:text-[16px] text-[14px] ">
            {item.name}
          </p>
          <div className="flex   w-full lg:gap-7 gap-4    h-[27px]  pr-5 ">
            <div className="flex flex-row gap-1 h-10px items-center  w-fit">
              <i className="fa fa-clock"></i>
              <p className="lg:text-[14px] text-[12px] text-[#667085]">
                {item.time}
              </p>
            </div>
            <div className="flex flex-row gap-1 h-10px items-center w-fit">
              <i className="fa fa-book"></i>
              <p className="lg:text-[14px] text-[12px] text-[#667085]">
                21 درس
              </p>
            </div>
            <div className="flex flex-row gap-1 h-10px items-center w-fit">
              <i className="fa fa-pencil "></i>
              <p className="lg:text-[14px] text-[12px]  text-[#667085]">
                سطح مبتدی
              </p>
            </div>
          </div>
          <div className="flex absolute left-3 top-0 pt-6 flex-col w-fit justify-center items-center">
            <span className="text-[34px] numfont  text-[#101828]">{item.price}</span>
            <span className="text-[14px] text-[#101828]">هزار تومان</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pclearn;

const Sort = ({ item, idx }) => {
  return (
    <>
      <div className="w-full   lg:px-0  lg:flex-row md:flex-row flex flex-col gap-3 pb-5 px-10">
        <div className="lg:w-[376px] md:min-w-[324px] md:h-[413px] w-[299px] h-[380px]  shadow-black border-gray-300 border-2 cursor-pointer lg:h-[431px]  bg-[#FFFFFF] rounded-2xl   ">
          <img
            className="h-[50%] object-center w-full rounded-t-2xl  bg-cover bg-center object-cover"
            src={item.image1}
            alt=""
          />
          <h1 className="lg:text-[20px] text-[16px] text-[#252525] pr-5 pt-5">
            {item.title}
          </h1>
          <div className="flex relative  w-full px-[8%] pt-2 h-[54px] flex-row justify-between items-center ">
            <p className="text-[#667085] lg:text-[16px] text-[14px] ">
              مدرس استاد علی بابایی
            </p>

            <div className="flex lg:pt-6 pt-6 flex-col w-fit justify-center items-center">
              <span className="text-[34px]  text-[#101828] numfont">{item.price}</span>
              <span className="text-[14px] text-[#101828]">هزار تومان</span>
            </div>
          </div>

          <hr className="hrcolor mt-10 mx-auto w-[80%]" />
          <div className="flex justify-center  w-full  gap-4    h-[27px] pt-5   ">
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
        </div>
        <div className="lg:w-[376px]  md:min-w-[324px] md:h-[413px] w-[299px] h-[380px]  lg:h-[431px] shadow-black border-gray-300 border-2 cursor-pointerner  bg-[#FFFFFF] rounded-2xl   ">
          <img
            className="h-[50%] w-full rounded-t-2xl  bg-cover bg-center object-cover"
            src={item.image2}
            alt=""
          />
          <h1 className="lg:text-[20px] text-[16px] text-[#252525] pr-5 pt-5 ">
            {item.title}
          </h1>
          <div className="flex w-full relative px-[8%] pt-2 h-[54px] flex-row justify-between items-center ">
            <p className="text-[#667085] text-[16px]">مدرس استاد علی بابایی</p>

            <div className="flex lg:pt-6  flex-col w-fit justify-center items-center">
              <span className="text-[34px]  text-[#101828] numfont">{item.price}</span>
              <span className="text-[14px] text-[#101828]">هزار تومان</span>
            </div>
          </div>

          <hr className="hrcolor mt-10 mx-auto w-[80%]" />
          <div className="flex justify-center  w-full  gap-4    h-[27px] pt-5  ">
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
        </div>

        <div className="lg:w-[376px] md:hidden lg:inline md:min-w-[324px] md:h-[413px] w-[299px] h-[380px]  lg:h-[431px] shadow-black border-gray-300 border-2 cursor-pointer  bg-[#FFFFFF] rounded-2xl   ">
          <img
            className="h-[50%] object-center w-full rounded-t-2xl  bg-contain bg-center  object-cover"
            src={item.image3}
            alt=""
          />
          <h1 className="lg:text-[20px] text-[16px] text-[#252525] pr-5 pt-5">
            {item.title}
          </h1>
          <div className="flex   relative w-full px-[8%] pt-2 h-[54px] flex-row justify-between items-center ">
            <p className="text-[#667085] lg:text-[16px] text-[14px]">
              مدرس استاد علی بابایی
            </p>

            <div className="flex lg:pt-6 flex-col pt-6 w-fit justify-center items-center">
              <span className="text-[34px]  text-[#101828] numfont">{item.price}</span>
              <span className="text-[14px] text-[#101828]">هزار تومان</span>
            </div>
          </div>

          <hr className="hrcolor mt-10 mx-auto w-[80%]" />
          <div className="flex justify-center  w-full  gap-4    h-[27px] pt-5  ">
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
        </div>
      </div>
    </>
  );
};

export default Sort;

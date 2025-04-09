import axios from "axios";
import { useEffect, useState } from "react";
import Pclearn from "./PcLearn";

const VideoLearn = () => {
  const [Learn, setLearn] = useState([]);
  const fetchHandler = async () => {
    try {
      let res = await axios.get("http://localhost:3001/Learn");
      setLearn(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <>
      <div className="w-full bg-[#F9F9F9] flex-col gap-10 flex my-10 items-center ">
        <div className="top flex w-[80%]  justify-between mt-3">
          <h1 className="text-[#252525] text-[20px] lg:text-[34px]">دوره های پیشنهادی</h1>
          <div className="flex items-center gap-1">
            <span className="text-[12px] lg:text-[16px] text-[#32BCA3] ">نمایش همه</span>
            <i className="text-[12px] text-[#32BCA3] lg:text-[16px] fa fa-arrow-left"></i>
          </div>
        </div>
        <div className="buttom flex md:gap-x-2 md:gap-y-10 lg:gap-y-5 flex-col lg:flex-col  md:flex-row md:flex-wrap gap-5 w-[80%] ">
          {Learn?.map((item) => {
            return (
              <>
                <div className="lg:min-w-[100%] lg:flex md:max-w-[299px] min-w-[299px] h-[380px]  shadow-black border-gray-300 border-2 cursor-pointer lg:h-[135px]  bg-[#FFFFFF] rounded-2xl   ">
                  <img
                    className="h-[50%] lg:hidden lg:h-[100%]  lg:w-[40%]  object-center w-full rounded-t-2xl  bg-cover bg-center object-cover"
                    src={item.image}
                    alt=""
                  />
                  <div className="w-[20%] test md:hidden lg:flex p-2 pr-3">
                    <img
                      className="h-[50%] test lg:h-[100%]  lg:w-[80%]  object-center w-full rounded-lg  bg-cover bg-center object-cover"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <h1 className="lg:text-[20px] lg:hidden text-[16px] text-[#252525] pr-5 md:pr-10 lg:pr-5 pt-5">
                    {item.title}
                  </h1>
                  <div className="flex lg:hidden relative w-full px-5 md:pr-10 pt-2 h-[54px] flex-row justify-between items-center ">
                    <p className="text-[#667085] lg:text-[16px] text-[14px] ">
                      {item.name}
                    </p>
                    <div className="flex flex-row positionmobile md:absolute md:right-10 md:top-[40px]  w-fit items-center pt-3 ">
                      <i className="fa fa-star star    "></i>
                      <span className="text-[16px] text-[#667085]">
                        {item.rating}
                      </span>
                    </div>
                    <div className="flex lg:pt-6 pt-6 flex-col w-fit justify-center items-center">
                      <span className="text-[34px] numfont  text-[#101828]">
                        {item.price}
                      </span>
                      <span className="text-[14px] text-[#101828]">
                        هزار تومان
                      </span>
                    </div>
                  </div>

                  <hr className="hrcolor mt-10 mr-10 w-[80%] lg:hidden" />
                  <div className="flex lg:hidden  w-full lg:gap-7 gap-4    h-[27px] pt-5 pr-10 ">
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
                  <Pclearn item={item} key={item.id}/>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default VideoLearn;

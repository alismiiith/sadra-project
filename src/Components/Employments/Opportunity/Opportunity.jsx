import axios from "axios";
import { useEffect, useState } from "react";
import Opoprops from "./Opoprops";

const Opportunity = () => {
  const [test, setTest] = useState([]);
  const [index, setIndex] = useState(0);
  const fetchHandler = async () => {
    try {
      const res = await axios.get("http://localhost:3001/Employments");
      setTest(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleNext = (idx) => {
    setIndex(idx);
  };
  useEffect(() => {
    fetchHandler();
  }, []);
  return (
    <>
      <div className="w-[100%]  lg:flex lg:flex-col lg:items-center lg:px-[30px] 2xl:px-[13.9%]    my-5 bg-[#F9FAFB]  ">
        <div className="flex w-full  gap-2 items-center self-start ">
          <span className=" text-[#4CA773] mb-3 leading-[30px] md:text-[16px]">__</span>

          <p className=" text-[#4CA773] text-[14px]   md:text-[16px] ">
            فرصت‌های شغلی
          </p>
        </div>
        <h1 className="text-[24px] md:text-[34px] lg:text-[40px] self-start lg:pr-0 pr-[50px] text-[#252525] font-bold px-3 my-3   ">
          فرصت‌هایی برای رسیدن به رویاهای خود
        </h1>
        <div className="flex md:justify-center  lg:self-start 2xl:pr-[3px]  md:mx-6 mx-10 gap-10 h-[42px]   py-2 overflow-auto ">
          {["همه", "محصول", "آموزش", "مارکتینگ","منابع انسانی","مالی","فناوری اطلاعات"].map((text, idx) => {
            return (
              <button
                onClick={() => handleNext(idx)}
                key={idx}
                className="text-[14px]  md:text-[16px]   min-w-fit nth-of-type-[1]:border-b-2 nth-of-type-[1]:text-[#4CA773] nth-of-type-[1]:border-[#4CA773]   hover:border-b-2 hover:cursor-pointer transition-all duration-50 hover:border-[#4CA773]  translate-y-[8px]  text-[#98A2B3]"
              >
                {text}
              </button>
            );
          })}
        </div>
        <hr className="hrsilver  mx-auto lg:mx-0 w-[85%] lg:w-[96%]   " />
        <div className="flex gap-5 flex-col flex-wrap md:flex-row md:justify-center lg:justify-start py-3 items-center mt-10">
          {test?.map((item, idx) => {
            return (
              <>
                {idx === index && (
                  <>
                    <Opoprops item={item} key={idx} />
                  </>
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Opportunity;

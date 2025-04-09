import axios from "axios";
import { useEffect, useState } from "react";

const Questions = () => {
  const [more, setMore] = useState(false);
  const [Why, setWhy] = useState([]);
  const [numberIndex, setNumberState] = useState(null);

  const fetchWhy = async () => {
    try {
      const response = await axios.get("http://localhost:3001/Why");
      setWhy(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const clickHandler = (index) => {
    if (numberIndex === index) {
      setMore(!more);
    } else {
      setNumberState(index);
      setMore(true);
    }
  };

  useEffect(() => {
    fetchWhy();
  }, []);

  return (
    <div className="block my-20 md:my-40 lg:pr-[124px]">
      <div className="flex w-full pr-[32px] gap-2 items-center my-10">
        <span className="text-[#4CA773] mb-3 leading-[30px]">___</span>
        <p className="text-[#4CA773] text-[14px] md:text-[16px]">سوالات پرتکرار</p>
      </div>
      <div className="flex justify-center flex-col pr-[32px] gap-10 w-full">
        {Why?.map((item, index) => {
          return (
            <div key={index} className="w-[90%] flex flex-wrap">
              <div className="right w-[90%]">
                <h1 className="text-[14px] md:text-[16px] tex-[#1D2939] ">
                  {item.title}
                </h1>
              </div>
              <div className="w-[10%]    ">
                <i
                  onClick={() => clickHandler(index)}
                  className={`${
                    more && numberIndex === index
                      ? "fa fa-arrow-down animate-bounce  rotate-180"
                      : "fa fa-arrow-up    rotate-180"
                  } text-[#252525] text-[13px] mb-3 p-[8px] cursor-pointer rounded-[50%] border-2 border-black transition-all duration-600 ease-in-out`}
                ></i>
              </div>
              <div
                className={`${
                  more && numberIndex === index
                    ? "max-h-[500px] transition-all duration-1000 opacity-100"
                    : "max-h-0 transition-all duration-700"
                } overflow-hidden  `}
              >
                <span className="text-[#475467] mt-5 text-[12px]">
                  {item.sub}
                </span>
              </div>
              {!more || numberIndex !== index ? (
                <hr className="hrsilver mx-auto w-[100%] mt-5" />
              ) : <hr className="hrsilver mx-auto w-[100%] mt-5" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Questions;

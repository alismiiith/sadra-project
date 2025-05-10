import axios from "axios";
import { useEffect, useState } from "react";
import Video from "./Video";
import { Link } from "react-router-dom";

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchVideo = async () => {
    let res = await axios.get("http://localhost:3001/videos");
    setVideos(res.data);
  };

  const handleNext = (idx) => {
    setIndex(idx);
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  return (
    <>
      <div className="w-full flex lg:py-[100px]  lg:h-[1015px] mt-[48px]  lg:flex justify-center items-center flex-col gap-5 ">
        <div className="lg:w-[82.7%]   gap-5 lg:gap-0 w-full item-center lg:justify-between items-center flex lg:flex-row flex-col relative lg:h-[25%] ">
          <div className="flex w-full justify-center lg:justify-start lg:absolute lg:top-0 lg:right-0 ">
            <span className="text-[#4CA773]">__</span>
            <span className="text-[#4CA773] text-[16px] pt-2">
              دوره‌های محبوب
            </span>
          </div>
          <h1 className="lg:text-[40px] numfont text-[#101828] text-[24px] text-center lg:text-justify lg:w-[40%] w-[80%] pt-1">
            بیش از 100 دوره‌ی فعال برای پیشرفت شما{" "}
          </h1>
          <span className="text-[18px] text-[#667085] numfont px-[16px] lg:pr-10 w-[92%] lg:text-justify text-center lg:w-[40%]">
            ما طیف وسیعی از دسته‌ها را برای کمک به شما در انتخاب دوره‌هایی که
            متناسب با تخصص شما هستند ارائه می‌کنیم. بیش از 100 دوره شما را از
            پایه راهنمایی می کند.
          </span>
        </div>
        <div className="lg:w-[82.7%] h-[75%]   w-full md:justify-center md:flex md:flex-col overflow-hidden ">
          <div className="w-[100%] lg:pt-3 md:w-[100%] md:justify-center lg:justify-start md:gap-10 lg:w-[100%] border-b-2 pt-3 border-[#E0E0E0] overflow flex flex-row gap-7 ">
            {[
              "طراح UI/UX",
              "طراح گرافیک",
              "انیمیشن و 3D",
              "فرانت اند",
              "بک اند",
              "IOT",
            ].map((text, idx) => (
              <button
                key={idx}
                onClick={() => handleNext(idx)}
                className={`lg:text-[16px] min-w-fit md:min-w-0 px-[18px] md:px-[24px] font-bold md:text-[16px] pb-3 border-b-[3px] border-transparent hover:text-[#2b2b2b] hover:border-b-[#4CA773] transition-all duration-300 cursor-pointer text-[#98A2B3] ${
                  index === idx
                    ? "text-[#2b2b2b] border-b-[#4CA773]"
                    : "text-[#98A2B3]"
                }`}
              >
                <p className="text-[12px]">{text}</p>
              </button>
            ))}
          </div>

          <div className="w-full overflow  flex   pt-[32px]  gap-3">
            {videos?.map((item, idx) => {
              return (
                <>
                  {idx === index && (
                    <Video item={item} idx={idx} key={item.id} />
                  )}
                </>
              );
            })}
          </div>
        </div>
        <Link
          to={"/Events"}
          className="text-[14px] rounded-3xl border-[#4CA773] mt-10 border-2 text-[#4CA773] lg:w-[164px] lg:h-[56px] lg:py-[16px] py-[12px] px-[24px] lg:px-[32px]"
        >
          دوره‌های بیشتر
        </Link>
      </div>
    </>
  );
};

export default Videos;

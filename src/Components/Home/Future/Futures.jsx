import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Futures = () => {
  const [futures, setFutures] = useState([]);
  const clickHandler = () => {
    setMore(!more);
  };
  const fetchFuture = async () => {
    let res = await axios.get("http://localhost:3001/Future");
    setFutures(res.data);
  };
  useEffect(() => {
    fetchFuture();
  }, []);
  return (
    <>
      <div className="w-full    bg-[#F2F4F7] min-[1440px]:justify-center flex flex-col  pt-20  ">
        <div className="topfull flex w-full justify-center ">
          <div className="top flex-row flex items-center justify-between    w-[88.8%] h-[52px]">
            <h1 className="lg:text-[34px] text-[24px] text-[#252525]">
              رویدادهای آینده
            </h1>
            <div className="w-fit flex flex-row items-center gap-2   cursor-pointer">
              <Link
                to={"/Events"}
                className="text-[#32BCA3] md:hidden lg:flex   test font-bold text-[12px]  lg:text-[16px]"
              >
                رویدادهای بیشتر
              </Link>
              <p className="text-[#32BCA3] lg:hidden font-bold text-[12px]  lg:text-[16px]">
                رویدادهای بیشتر
              </p>
              <i className="fa fa-arrow-left text-[#32BCA3] font-bold text-[10px] lg:text-[13px]"></i>
            </div>
          </div>
        </div>
        <div className=" flex justify-center">
          <div className="w-[88%]  md:overflow-x-auto  overflow flex flex-row justify-center gap-3 lg:pb-5 pb-5 pt-10">
            {futures?.map((item) => {
              return (
                <div
                  key={item.id}
                  className="min-w-[296px]  relative  border-gray-300 border-2 cursor-pointer h-[431px]  bg-[#FFFFFF] rounded-2xl   "
                >
                  <img
                    className="h-[50%] object-center w-full rounded-t-2xl  bg-cover bg-center object-cover"
                    src={item.image1}
                    alt=""
                  />
                  <h1 className="lg:text-[18px] text-[16px] text-[#252525] px-10 pt-5">
                    {item.title}
                  </h1>
                  <div className="flex flex-col w-fit absolute left-6 bottom-36">
                    <span className="text-[24px] numfont text-[#667085] line-through">
                      {item.discount}
                    </span>
                    <span className="text-[10px] text-[#667085] line-through">
                      {item.unit}
                    </span>
                  </div>
                  <div className="flex w-full px-5 pt-2 h-[54px] flex-row justify-between items-center ">
                    <p className="text-[#667085] font-bold text-[16px] pr-5 pt-5">
                      {item.name}
                    </p>
                    <div className="flex flex-col w-fit justify-center pt-5 items-center">
                      <span className="text-[34px] numfont text-[#101828]">
                        {item.price}
                      </span>
                      <span className="text-[14px] text-[#101828]">
                        {item.unit2}
                      </span>
                    </div>
                  </div>

                  <hr className="hrcolor mt-10 mr-10 w-[80%]" />
                  <div className="flex  w-full justify-between  h-[27px] pt-5 px-10 ">
                    <div className="flex flex-row gap-1 h-10px items-center  w-fit">
                      <i className="fa fa-calendar"></i>
                      <p className="text-[14px] text-[#667085]">{item.time}</p>
                    </div>
                    <div className="flex flex-row gap-1 h-10px items-center w-fit">
                      <i className="fa fa-book"></i>
                      <p className="text-[14px] text-[#667085]">21 درس</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Futures;

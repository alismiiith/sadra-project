import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="   md:py-3   flex lg:flex-row flex-col w-[375px] md:w-full   bg-[#1C1C1C] ">
        <div className="right w-full  mobilewidth flex flex-col">
          <div className="top  flex flex-row">
            <div className="flex   deswidth  flex-row 2xl:pr-20 h-[56px]  md:w-full md:px-10 items-center md:justify-between mobileflex   ">
              <div className="flex items-center gap-3 pt-1">
                <img
                  className="w-[50px] "
                  src="/src/assets/Images/Group 1.svg"
                  alt=""
                />
                <p className="text-[25px]  text-[#FFFFFF] font-bold ">صدرا</p>
              </div>
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex-col lg:hidden z-999   relative w-fit flex gap-y-[2px] labeltest    h-[56px] pt-6   desktop:hidden  "
              >
                <div className="w-[20px] rounded-l-sm rounded-r-sm h-[2px] bg-[#FFFFFF] "></div>
                <div className="w-[20px] rounded-l-sm rounded-r-sm  h-[2px] bg-[#FFFFFF] "></div>
                <div className="w-[20px] rounded-l-sm rounded-r-sm  h-[2px] bg-[#FFFFFF] "></div>
              </div>
              <div
                dir="ltr"
                className={` w-[200px] h-full lg:hidden z-[500] bg-[#2b2b2b]  fixed  left-0 top-0  ${
                  isOpen ? "translate-x-[0%]" : "translate-x-[-100%] "
                } transition-transform duration-500 ease-in-out `}
              >
                <div className="  w-[100%] h-full md:justify-start md:pt-20 flex pr-5 justify-center flex-col gap-16">
                  <Link to={"/"} className="text-[16px]  text-[#FFFFFF] opacity-60 ">
                    صفحه اصلی
                  </Link>
                  <Link to={"/Learning"} className="text-[16px] opacity-60 text-[#FFFFFF] ">
                    کلاس ها{" "}
                  </Link>
                  <Link to={"/Events"} className="text-[16px] opacity-60  text-[#FFFFFF] ">
                    رویدادها
                  </Link>
                  <Link  className="text-[18px]  text-[#FFFFFF] font-bold ">
                    تماس با ما
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex absolute   md:hidden test lg:w-[80%] lg:justify-center    h-[56px] items-center justify-center gap-16">
            <Link to={"/"} className="text-[20px] text-[#FFFFFF] opacity-60 ">
              صفحه اصلی
            </Link>
            <Link to={"/Learning"} className="text-[20px] opacity-60 text-[#FFFFFF] ">
              کلاس ها{" "}
            </Link>
            <Link to={"/Events"} className="text-[20px] opacity-60  text-[#FFFFFF] ">
              رویدادها
            </Link>
            <Link  className="text-[22px] text-[#FFFFFF] font-bold  ">
              تماس با ما
            </Link>
          </div>
             <Link to={"/Login"} className="text-[18px] lg:absolute  lg:left-[8%] lg:flex md:hidden  test   rounded-4xl cursor-pointer text-[#FFFFFF] w-[160px] justify-center   py-[16px] bg-[#4CA773]">
          ثبت نام و ورود
        </Link>
        </div>
      </div>
    </>
  );
};

export default HeaderContact;

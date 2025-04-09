import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderEmploy = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className=" karim  md:h-[332px]  lg:h-[724px]  flex lg:flex-row flex-col w-[375px] md:w-full   bg-[#1C1C1C] ">
        <div className="right w-full  mobilewidth flex flex-col">
          <div className="top  flex flex-row">
            <div className="flex   deswidth  flex-row lg:pr-20 h-[56px]  md:w-full md:px-10 items-center md:justify-between mobileflex   ">
                <div className="flex items-center gap-3 pt-1">
                <img className="w-[50px] " src="/src/assets/Images/Group 1.svg" alt="" />
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
                  <Link className="text-[18px] text-[#FFFFFF] font-bold ">
                    صفحه اصلی
                  </Link>
                  <Link className="text-[16px] opacity-60 text-[#FFFFFF] ">
                    کلاس ها{" "}
                  </Link>
                  <Link className="text-[16px] opacity-60  text-[#FFFFFF] ">
                    رویدادها
                  </Link>
                  <Link className="text-[16px] opacity-60 text-[#FFFFFF] ">
                    تماس با ما
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:flex md:hidden test lg:w-[80%] lg:justify-start   h-[56px] items-center justify-center gap-16">
              <Link className="text-[22px] text-[#FFFFFF] font-bold ">
                صفحه اصلی
              </Link>
              <Link className="text-[20px] opacity-60 text-[#FFFFFF] ">
                کلاس ها{" "}
              </Link>
              <Link className="text-[20px] opacity-60  text-[#FFFFFF] ">
                رویدادها
              </Link>
              <Link className="text-[20px] opacity-60 text-[#FFFFFF] ">
                تماس با ما
              </Link>
            </div>
          </div>
          <div className="button  h-[90%] items-center flex-col flex justify-center w-full ">
            <div className="flex w-full  md:h-[220px]  lg:pt-0 pt-10 justify-center gap-3 items-center flex-col">
              <h1 className="text-[20px] md:text-[34px] lg:text-[35px] text-[#FFFFFF] ">
                همکاری با صدرا
              </h1>
              <span className="lg:text-[18px] md:text-[16px] text-[12px] md:text-center  text-center lg:px-30 px-10    text-[#D0D5DD]">
                صدرا، بستری قدرتمند از جنس خلق و تحول است و به افرادی که به
                فراتر از خود متعهدند، فرصت می‌دهد که «حرفه‌ای‌ترین و
                تاثیرگذارترین» نسخه خود را خلق کنند و آن را کار و زندگی کنند..{" "}
              </span>
            </div>
          </div>
        </div>

        <button className="text-[18px] lg:absolute lg:top-2 lg:left-20 lg:flex md:hidden  test h-[50px]   rounded-3xl cursor-pointer text-[#FFFFFF] font-semibold px-5 py-3 bg-green-400">
          ثبت نام و ورود
        </button>
      </div>
    </>
  );
};
export default HeaderEmploy;

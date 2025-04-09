import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="lg:w-full karim lg:h-[724px]  flex lg:flex-row flex-col w-[375px] md:w-full    bg-[#2b2b2b] ">
        <div className="right lg:w-[65%] lg:pr-[200px] lg:pt-[20px] mobilewidth flex flex-col">
          <div className="top   flex flex-row">
            <div className="flex   deswidth  flex-row  h-[56px]  md:w-full md:px-10 lg:px-0 items-center md:justify-between mobileflex   ">
            <div className="flex items-center gap-3 ">
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
                <div className="  w-[100%] h-full md:justify-start md:pt-20 flex  justify-center flex-col gap-16">
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
            <div className="lg:flex md:hidden test lg:w-[80%]   h-[56px] items-center justify-center gap-16">
              <Link className="text-[22px] text-[#FFFFFF] font-bold ">
                صفحه اصلی
              </Link>
              <Link className="text-[20px] opacity-60 text-[#FFFFFF] ">
                کلاس ها{" "}
              </Link>
              <Link
                to={`/Events`}
                className="text-[20px] opacity-60  text-[#FFFFFF] "
              >
                رویدادها
              </Link>
              <Link className="text-[20px] opacity-60 text-[#FFFFFF] ">
                تماس با ما
              </Link>
            </div>
          </div>
          <div className="button  h-[90%] items-center flex-col flex justify-center w-full ">
            <div className="flex  lg:pt-0 pt-30 justify-center gap-3 items-center flex-col">
              <h1 className="text-[35px] test text-[#FFFFFF] font-bold">
                موسسه آموزشی پژوهشی صدرا
              </h1>
              <span className="lg:text-[25px] md:text-[20px] text-[14px]   opacity-80 text-[#FFFFFF]">
                دوره مورد علاقت رو شرکت کن، گارانتی پیدا کردن کار با ما
              </span>
              <span className="lg:text-[18px] md:text-[16px] text-[12px] md:text-center  text-justify  px-10 opacity-60   text-[#FFFFFF]">
                با شرکت در دوره‌های آموزشی صدرا، از صفر شروع کن و در مسیر
                یادگیری با بهترین متد‌های آموزشی ما همراه شو، تا ما پلی باشیم
                برای ورود تضمینی به بازار کار
              </span>
              <form className="flex relative flex-row w-[80%] ">
                <input
                  autoComplete="off"
                  className="lg:w-[100%] md:w-[680px] md:py-5 w-[314px] lg:text-[16px] md:text-[16px] text-[12px] font-bold h-[50px]   lg:h-[72px] bg-[#FFFFFF] rounded-3xl pr-5 "
                  type="search"
                  name="search"
                  id="search"
                  placeholder="جستجو دوره ها و مربیان ورخدادها"
                />
                <span className="w-[1px] h-[25px] lg:h-[40px] bg-gray-400 absolute left-20 top-3 lg:top-4"></span>
                <label
                  className="flex  cursor-pointer lg:w-[20px] w-[10px] absolute lg:top-6 top-4 left-10 h-[20px]  items-center color "
                  htmlFor="search"
                >
                  <i className="fa-solid  fa-magnifying-glass bg-green-400 lg:p-4 p-3  rounded-3xl color"></i>
                </label>
              </form>
              <span className="text-[10px] md:text-[16px] lg:text-[14px] text-[#98A2B3]">
                محبوب‌ها: UI Design, UX Design, Front-end
              </span>
            </div>
          </div>
        </div>
        <div className="lg:back backimagetablet left justify-end   mt-10 lg:mt-0 w-full h-[254px] backimage md:h-[441px]  lg:h-full lg:w-[35%] lg:flex ">
          <Link to={"/login"} className="text-[18px] lg:flex md:hidden  test h-[50px] mt-5 mr-5 lg:ml-[200px]   rounded-3xl cursor-pointer text-[#FFFFFF] font-semibold px-5 py-3 bg-green-400">
            ثبت نام و ورود
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;

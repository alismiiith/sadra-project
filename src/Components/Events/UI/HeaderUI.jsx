import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeaderUI = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const countdownDate = new Date("june 1, 2025 15:37:35").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const timerElement = document.getElementById("demo");
      if (timerElement) {
        if (distance < 0) {
          clearInterval(interval);
          timerElement.innerHTML = "EXPIRED";
        } else {
          // Update the timer dynamically
          document.getElementById("seconds").innerText = seconds;
          document.getElementById("minutes").innerText = minutes;
          document.getElementById("hours").innerText = hours;
          document.getElementById("days").innerText = days;

          timerElement.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="lg:w-full lg:h-[724px] flex lg:flex-row flex-col w-[375px] md:w-full bg-[#2b2b2b]">
        <div className="right lg:w-[70%] lg:px-[8.6%] lg:pt-[20px] w-full mobilewidth flex flex-col">
          <div className="top flex flex-row">
            <div className="flex deswidth flex-row h-[56px] md:w-full md:px-10 lg:px-0 items-center md:justify-between mobileflex">
              <div className="flex items-center gap-3">
                <img className="w-[50px]" src="/src/assets/Images/Group 1.svg" alt="" />
                <Link to={"/"} className="2xl:text-[25px] text-[20px] text-[#FFFFFF] font-bold">
                  صدرا
                </Link>
              </div>
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex-col lg:hidden z-999 relative w-fit flex gap-y-[2px] labeltest h-[56px] pt-6 desktop:hidden"
              >
                <div className="w-[20px] rounded-l-sm rounded-r-sm h-[2px] bg-[#FFFFFF]"></div>
                <div className="w-[20px] rounded-l-sm rounded-r-sm h-[2px] bg-[#FFFFFF]"></div>
                <div className="w-[20px] rounded-l-sm rounded-r-sm h-[2px] bg-[#FFFFFF]"></div>
              </div>
              <div
                dir="ltr"
                className={`w-[200px] h-full lg:hidden z-[500] bg-[#2b2b2b] fixed left-0 top-0 ${isOpen ? "translate-x-[0%]" : "translate-x-[-100%]"} transition-transform duration-500 ease-in-out`}
              >
                <div className="w-[100%] h-full md:justify-start md:pt-20 flex justify-center flex-col gap-16">
                  <Link className="text-[18px] text-[#FFFFFF] font-bold">
                    صفحه اصلی
                  </Link>
                  <Link className="text-[16px] opacity-60 text-[#F9F9F9]">
                    کلاس ها
                  </Link>
                  <Link className="text-[16px] opacity-60 text-[#F9F9F9]">
                    رویدادها
                  </Link>
                  <Link className="text-[16px] opacity-60 text-[#F9F9F9]">
                    تماس با ما
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:flex md:hidden test lg:w-[80%] h-[56px] items-center justify-center gap-[7%]">
              <Link className="2xl:text-[22px] text-[#F9F9F9] font-bold">
                صفحه اصلی
              </Link>
              <Link to={`/Blog`} className="2xl:text-[20px] opacity-60 text-[#F9F9F9]">
                بلاگ ها
              </Link>
              <Link to={`/Events`} className="2xl:text-[20px] opacity-60 text-[#F9F9F9]">
                رویدادها
              </Link>
              <Link to={`/Contacts`} className="2xl:text-[20px] opacity-60 text-[#F9F9F9]">
                تماس با ما
              </Link>
            </div>
          </div>
          <div className="button h-[90%] items-center flex-col flex justify-center w-full">
            <div className="flex w-full lg:pt-0 pt-10 justify-center gap-3 items-center lg:items-start flex-col">
              <div className="flex w-fit">
                <p className="text-[12px] md:text-[14px] items-center lg:text-[16px] text-[#98A2B3]">
                  رویدادها
                </p>
                <div className="cursor-pointer flex items-center gap-2 mx-1 font-bold text-[#FFFFFF]">
                  <i className="fa fa-chevron-left text-[12px]"></i>
                  <span className="text-[12px] md:text-[14px] lg:text-[16px]">
                    طراحی UI/UX
                  </span>
                </div>
              </div>
              <h1 className="text-[20px] md:text-[34px] lg:text-[35px] text-[#FFFFFF]">
                اصول اساسی طراحی User Exprience
              </h1>
              <span className="lg:text-[18px] w-[] md:text-[16px] text-[12px] md:text-center lg:text-start text-justify lg:px-0 px-10 text-[#D0D5DD]">
                برای محصولات امروزی User Experience تاثیرگذاری در دنیای دیجیتال طراحی کنید.
                نمونه کارهایی را بسازید که توانایی شما را در مسیر کشف مشکل کاربر و رسیدن به بهترین راه‌حل را نشان دهد.
              </span>
              <div className="w-full flex flex-col justify-center items-center lg:items-start bg-[#2b2b2b]">
                <span className="hidden" id="demo"></span>
                <div className="w-fit flex flex-row gap-x-6 justify-center">
                  <div className="flex flex-col items-center">
                    <span className="text-[32px] font-bold numfont  text-[#FFFFFF]" id="seconds">
                      {/* Seconds */}
                    </span>
                    <span className="text-[#E0E0E0] lg:text-[18px] md:text-[16px] text-[12px]">ثانیه</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[32px] font-bold numfont  text-[#FFFFFF]" id="minutes">
                      {/* Minutes */}
                    </span>
                    <span className="text-[#E0E0E0] lg:text-[18px] md:text-[16px] text-[12px]">دقیقه</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[32px] font-bold numfont  text-[#FFFFFF]" id="hours">
                      {/* Hours */}
                    </span>
                    <span className="text-[#E0E0E0] lg:text-[18px] md:text-[16px] text-[12px]">ساعت</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[32px] font-bold numfont  text-[#FFFFFF]" id="days">
                      {/* Days */}
                    </span>
                    <span className="text-[#E0E0E0] lg:text-[18px] md:text-[16px] text-[12px]">روز</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link to={"/Login"} className="text-[18px] lg:absolute lg:top-[20px] lg:left-[8%] lg:flex md:hidden test rounded-4xl cursor-pointer text-[#FFFFFF] w-[160px] justify-center py-[16px] bg-[#4CA773]">
          ثبت نام و ورود
        </Link>
      </div>
    </>
  );
};

export default HeaderUI;

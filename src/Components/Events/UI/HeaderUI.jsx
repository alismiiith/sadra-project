import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeaderUI = () => {
     const [isOpen , setIsOpen] = useState(false);
     useEffect(() => {
        const countdownDate = new Date("december 14, 2025 15:37:35").getTime();
    
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
              timerElement.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
            }
          }
        }, 1000);
    
    
        return () => clearInterval(interval);
      }, []);
    return ( 
        <>
        <div className="lg:w-full lg:h-[724px] flex lg:flex-row flex-col w-[375px] md:w-full    bg-[#2b2b2b] ">
                    <div className="right lg:w-[60%] w-full  mobilewidth flex flex-col">
                      <div className="top  flex flex-row">
                      <div className="flex   deswidth  flex-row lg:pr-20 h-[56px]  md:w-full md:px-10 items-center md:justify-between mobileflex   ">
                        <p className="text-[25px]  text-[#FFFFFF] font-bold ">صدرا</p>
                        <div onClick={()=> setIsOpen(!isOpen)}   className="flex-col lg:hidden z-999   relative w-fit flex gap-y-[2px] labeltest    h-[56px] pt-6   desktop:hidden  ">
                            <div className="w-[20px] rounded-l-sm rounded-r-sm h-[2px] bg-[#FFFFFF] "></div>
                            <div className="w-[20px] rounded-l-sm rounded-r-sm  h-[2px] bg-[#FFFFFF] "></div>
                            <div className="w-[20px] rounded-l-sm rounded-r-sm  h-[2px] bg-[#FFFFFF] "></div>
                           
                            
                        </div>
                        <div dir="ltr" className={` w-[200px] h-full lg:hidden z-[500] bg-[#2b2b2b]  fixed  left-0 top-0  ${isOpen ? "translate-x-[0%]" : "translate-x-[-100%] "} transition-transform duration-500 ease-in-out `}>
                        <div className="  w-[100%] h-full md:justify-start md:pt-20 flex pr-5 justify-center flex-col gap-16">
                            <Link className="text-[18px] text-[#FFFFFF] font-bold ">صفحه اصلی</Link>
                            <Link className="text-[16px] opacity-60 text-[#FFFFFF] ">کلاس ها </Link>
                            <Link className="text-[16px] opacity-60  text-[#FFFFFF] ">رویدادها</Link>
                            <Link className="text-[16px] opacity-60 text-[#FFFFFF] ">تماس با ما</Link>
                        </div>
                        </div>
                       </div>
                       <div className="lg:flex md:hidden test lg:w-[80%] lg:justify-start   h-[56px] items-center justify-center gap-16">
                            <Link className="text-[22px] text-[#FFFFFF] font-bold ">صفحه اصلی</Link>
                            <Link className="text-[20px] opacity-60 text-[#FFFFFF] ">کلاس ها </Link>
                            <Link className="text-[20px] opacity-60  text-[#FFFFFF] ">رویدادها</Link>
                            <Link className="text-[20px] opacity-60 text-[#FFFFFF] ">تماس با ما</Link>
                        </div>
                      </div>
                      <div className="button  h-[90%] items-center flex-col flex justify-center w-full ">
                        
                      <div className="flex w-full   lg:pt-0 pt-10 justify-center gap-3 items-center lg:items-start lg:pr-10 flex-col">
                            <div className="flex w-fit ">
                                <p className="text-[12px] md:text-[14px] items-center  lg:text-[16px] text-[#98A2B3]">رویدادها</p>
                                <div className="cursor-pointer flex items-center gap-2 mx-1 font-bold text-[#FFFFFF]">
                                    <i className="fa fa-chevron-left  text-[12px]"></i>
                                    <span className="text-[12px] md:text-[14px] lg:text-[16px]">طراحی UI/UX</span>
                                </div>
                            </div>
                            <h1 className="text-[20px] md:text-[34px] lg:text-[35px] text-[#FFFFFF] ">اصول اساسی طراحی User Exprience</h1>
                            <span className="lg:text-[18px] md:text-[16px] text-[12px]  md:text-center lg:text-start  text-justify lg:px-0  px-10    text-[#D0D5DD]">برای محصولات امروزی User Experience تاثیرگذاری در دنیای دیجیتال طراحی کنید. نمونه کارهایی را بسازید که توانایی شما را در مسیر کشف مشکل کاربر و رسیدن به بهترین راه‌حل را نشان دهد. </span>
                            <div className="w-full flex flex-col justify-center items-center lg:items-start     bg-[#2b2b2b]">
                                <span className="text-[32px] font-bold tracking-widest  text-[#FFFFFF]" id="demo"></span>
                                <div className="w-fit gap-x-6 flex flex-row     md:gap-x-4">
                                <span className="text-[#E0E0E0] lg:text-[18px] md:text-[16px] text-[12px]" >ثانیه</span>
                                <span className="text-[#E0E0E0] lg:text-[18px] md:text-[16px] text-[12px]">دقیقه</span>
                                <span className="text-[#E0E0E0] lg:text-[18px] md:text-[16px] text-[12px]">ساعت</span>
                                <span className="text-[#E0E0E0] lg:text-[18px] md:text-[16px] text-[12px]">روز</span>
                                </div>
                            </div>
        
                            
                        </div>
                      </div>
                    </div>
                   
                        <button className="text-[18px] lg:absolute lg:top-2 lg:left-20 lg:flex md:hidden  test h-[50px]   rounded-3xl cursor-pointer text-[#FFFFFF] font-semibold px-5 py-3 bg-green-400">ثبت نام و ورود</button>
                   
                </div>
        </>
     );
}
 
export default HeaderUI;
import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderEvent = () => {
    const [isOpen , setIsOpen] = useState(false);
    return ( 
        <>
        <div className="lg:w-full  lg:h-[724px] flex lg:flex-row flex-col w-[375px] md:w-full    bg-[#2b2b2b] ">
            <div className="right w-full  mobilewidth flex flex-col lg:px-[8.6%] lg:pt-[25px]">
              <div className="top  flex flex-row">
              <div className="flex   deswidth  flex-row  h-[56px]  md:w-full md:px-10 items-center md:justify-between mobileflex   ">
              <div className="flex items-center gap-3 mt-[20px]">
                <img className="w-[50px] " src="/src/assets/Images/Group 1.svg" alt="" />
                <Link to={"/"} className="xl:text-[25px] text-[20px]   text-[#FFFFFF] font-bold ">صدرا</Link>
                </div>
                <div onClick={()=> setIsOpen(!isOpen)}   className="flex-col lg:hidden z-999   relative w-fit flex gap-y-[2px] labeltest    h-[56px] pt-6   desktop:hidden  ">
                    <div className="w-[20px] rounded-l-sm rounded-r-sm h-[2px] bg-[#FFFFFF] "></div>
                    <div className="w-[20px] rounded-l-sm rounded-r-sm  h-[2px] bg-[#FFFFFF] "></div>
                    <div className="w-[20px] rounded-l-sm rounded-r-sm  h-[2px] bg-[#FFFFFF] "></div>
                   
                    
                </div>
                <div dir="ltr" className={` w-[200px] h-full lg:hidden z-[500] bg-[#2b2b2b]  fixed  left-0 top-0  ${isOpen ? "translate-x-[0%]" : "translate-x-[-100%] "} transition-transform duration-500 ease-in-out `}>
                <div className="  w-[100%] h-full md:justify-start md:pt-20 flex pr-5 justify-center flex-col gap-16">
                    <Link className="text-[16px] text-[#FFFFFF]  ">صفحه اصلی</Link>
                    <Link className="text-[16px] opacity-60 text-[#FFFFFF] ">کلاس ها </Link>
                    <Link className="text-[18px] opacity-60 font-bold  text-[#FFFFFF] ">رویدادها</Link>
                    <Link className="text-[16px] opacity-60 text-[#FFFFFF] ">تماس با ما</Link>
                </div>
                </div>
               </div>
               <div className="lg:flex pt-[20px] md:hidden test lg:w-[80%] lg:justify-start    items-center justify-center gap-16">
                    <Link to={"/"} className="text-[20px] opacity-60 text-[#FFFFFF]  ">صفحه اصلی</Link>
                    <Link to={"/Learning"} className="text-[20px] opacity-60 text-[#FFFFFF] ">کلاس ها </Link>
                    <Link to={"/Events/UIUX"} className="text-[22px]  font-bold  text-[#FFFFFF] ">UI/UX</Link>
                    <Link to={"/Contacts"} className="text-[20px] opacity-60 text-[#FFFFFF] ">تماس با ما</Link>
                </div>
              </div>
              <div className="button  h-[90%] items-center flex-col flex justify-center w-full ">
                
              <div className="flex w-full   lg:pt-0 pt-10 justify-center gap-3 items-center flex-col">
                    <h1 className="text-[20px] lg:text-[35px] text-[#FFFFFF] font-bold">رویدادهای صدرا</h1>
                    <span className="lg:text-[25px] md:hidden test md:text-[20px] text-[14px]   opacity-80 text-[#FFFFFF]">دوره مورد علاقت رو شرکت کن، گارانتی پیدا کردن کار با ما</span>
                    <span className="lg:text-[18px] md:text-[16px] text-[12px] md:text-center  text-justify lg:px-30 px-10    text-[#D0D5DD]">صدرا با فراهم کردن شرایطی ایده‌آل، سالانه رویدادهای زیادی در حوزه‌ی تکنولوژی در شهرهای بزرگی مثل تهران، اصفهان، مشهد و شیراز برگزار می‌کند که مدرسان این رویدادها از بهترین‌ مدرسان کشور بوده و آماده‌ی انتقال دانش خود به دانشجویان می‌باشند. </span>
                    <form className="flex relative flex-row w-fit">
                    
                    <input autoComplete="off" className="lg:w-[82vw] lg:rounded-4xl md:w-[680px] md:py-5 w-[314px] lg:text-[16px] md:text-[16px] text-[12px] font-bold h-[50px]   lg:h-[72px] bg-[#FFFFFF] rounded-3xl pr-5 " type="search" name="search" id="search" placeholder="جستجو دوره ها و مربیان ورخدادها" />
                    <span className="w-[1px] h-[25px] lg:h-[40px] bg-gray-400 absolute left-20 top-3 lg:top-4" ></span>
                    <label className='flex  cursor-pointer lg:w-[20px] w-[10px] absolute lg:top-6 top-4 left-10 h-[20px]  items-center color ' htmlFor="search">
                    <i className="fa-solid  fa-magnifying-glass bg-green-400 lg:p-4 p-3  rounded-3xl color"></i> 
                </label>
                    </form>
                    <span className="text-[10px] md:text-[16px] lg:text-[14px] text-[#98A2B3]">محبوب‌ها: UI Design, UX Design, Front-end</span>

                    
                </div>
              </div>
            </div>
           
             <Link to={"/Login"} className="text-[18px] lg:absolute lg:top-[20px] lg:left-[8%] lg:flex md:hidden  test   rounded-4xl cursor-pointer text-[#FFFFFF] w-[160px] justify-center   py-[16px] bg-[#4CA773]">
          ثبت نام و ورود
        </Link>
           
        </div>
        </>
     );
}
 
export default HeaderEvent;
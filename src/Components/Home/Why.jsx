const Why = () => {
    return ( <>
       <div className="w-full  lg:h-[528px] h-[668px] mt-20 2xl:px-[200px] lg:px-[124px]">
        <div className="top  md:flex  md:w-full md:flex-col   md:items-center justify-center  lg:block mobileflexjustify     ">
             <div className="flex  gap-2 mobileflexjustify ">
                <span className="text-green-400">__</span>
                <span className="text-green-400 text-[14px] lg:text-[18px] pt-2">چرا ما</span>
             </div>
             <h1 className="lg:text-[40px] md:text-[34px] text-[24px] text-center lg:text-start ">شرکت در دوره‌ها مساوی با ورود قطعی به بازار کار</h1>
             <span className="lg:text-[18px]  md:text-[16px]  text-[14px] md:mx-10 lg:mx-0  text-center opacity-50 lg:text-justify">صدرا، از متدهایی استفاده می‌کنه که مسیر یادگیری برای شما هموارتر می‌کنه و نیروی کاری تربیت می‌کنه که صدرا با افتخار به شرکت‌های موفق معرفی می‌کنه و اشتغال به کار شما رو، بعد از دوره تضمین می‌کنه.</span>
        </div>
        <div className="down w-full flex lg:flex-row items-center flex-col justify-center lg:gap-10 gap-5 pt-20 ">
            <div className="right karim  md:w-[679px] lg:w-[50%] w-[343px] px-5 pb-10 lg:h-[228px] h-[172px]  bg-[#0f2b22] pr-5 rounded-lg cursor-pointer">
                <i className="fa fa-calendar w-[40px] h-[40px] color opacity-50  pt-5"></i>
                <h1 className="lg:text-[34px] md:text-[24px] text-[#FFFFFF] lg:mt-10 mt-5 text-[16px]  ">دوره های آفلاین</h1>
                <span className="lg:text-[16px] md:text-[16px]  text-[#F2F4F7] text-[14px]   opacity-70 ">اگر امکان شرکت در دوره‌های حضوری یا آنلاین را ندارید، امکان استفاده از ویدیوهای ضبط شده برای شما دوره‌ها وجود دارد.</span>
            </div>
            <div className="left karim md:w-[679px] lg:w-[50%] w-[343px] px-5  lg:h-[228px] h-[172px]  bg-[#0f2b22] rounded-lg pr-5 cursor-pointer">
            <i className="fa fa-message w-[40px] h-[40px] color opacity-50  pt-5"></i>
            <h1 className="lg:text-[34px] md:text-[24px] text-[#FFFFFF] mt-10 text-[16px]  ">پشتیبانی بعد از اتمام دوره</h1>
            <span className="lg:text-[16px] md:text-[16px]  text-[#F2F4F7] text-[14px]  opacity-70 ">اگر در طول دوره‌ یا بعد از اتمام آن مشکل دارید، امکان گفت و گو و رفع مشکل برای شما وجود دارد..</span>
            </div>
        </div>
        </div> 
       
    </>
     );
}
 
export default Why ;
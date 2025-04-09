const Graduated = () => {
    return ( 
        <>
        <div className="w-full lg:mt-0 mt-20  lg:h-[302px] bg-[#FFFFFF] lg:flex flex-col justify-center">
            <div className="top flex justify-center  ">
                <span className="lg:text-[20px] text-[14px] px-10 md:text-[18px]    text-[#344054] ">فارغ التحصیلان دوره‌های ما، در . بهترین شرکت‌های کشور مشغول به کارند</span>
            </div>
            <div className="down flex justify-center   gap-5 mt-10 flex-row w-full">
                
                <img className="lg:w-[355px] object-contain md-w-[130px] lg:h-[48px] w-[85px]  h-[19px] " src="/src/assets/Images/Group.png" alt="" />
                <img className="lg:w-[355px]  md:w-[130px] lg:h-[48px]  w-[105px] h-[19px]" src="/src/assets/Images/tap30.png" alt="" />
                <img className="lg:w-[355px]  md:w-[130px] lg:h-[48px] object-cover w-[85px] h-[19px]" src="/src/assets/Images/Hamrah.png" alt="" />
            </div>
        </div>
        </>
     );
}
 
export default Graduated;
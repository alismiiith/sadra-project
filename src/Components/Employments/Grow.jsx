const Grow = () => {
  return (
    <>
      <div className="w-full  justify-center md:justify-start flex flex-col items-center md:h-[440px] h-[526px]   mt-10">
        <div className="top  md:flex md:w-full  md:justify-center items-center  flex flex-col gap-5     ">
          <div className="flex justify-start lg:w-full lg:pr-[200px] ">
            <span className="text-[#4CA773]">__</span>
            <span className="text-[#4CA773] pt-2 md:text-[16px]">ارزش‌های ما</span>
          </div>
          <h1 className="2xl:text-[40px] md:text-[34px] lg:text-start text-center lg:self-start lg:pr-[200px] text-[24px] font-extrabold ">
            جایی که هم باعث رشد خودت میشی، هم دیگران{" "}
          </h1>

          <div className="w-full justify-center lg:px-[200px] px-3 md:px-5 lg:text-start text-center">
            <span className=" md:text-[16px]  text-[14px] opacity-50  text-center  ">
              صدرا، محیطی رو فراهم کرده تا از توانایی‌ها و ویژگی‌هایی که شما رو
              نسبت به مدرسان دیگه، برتر میکنه به بهترین شکل مورد استفاده قرار
              بگیره تا شما هم به بهترین شکل ممکن این توانایی‌ها رو در اختیار
              دیگران قرار بدید و مسیر پیشرفت‌شون رو هموار کنی و میتونی
              توانایی‌هات رو بهبود بدی و بهترین نسخه خودت باشی.اینجا همون سرزمین
              فرصت‌هاست!
            </span>
          </div>
          <div className="w-full flex justify-between md:my-5 lg:px-[200px] ">
            <div className="flex flex-row   w-full justify-center gap-16     ">
              <div className="flex flex-col md:pr-5  md:w-[50%] md:justify-center md:gap-x-30 2xl:gap-x-72 md:flex-row gap-y-5  items-center ">
                <div className="flex gap-y-2   flex-col items-center ">
                <img  src="/src/assets/Images/calendar.svg" className="md:w-[36px] "></img>
                <p className="font-bold text-[#4CA773] text-[14px] md:text-[16px]">
                  نتیجه گرایی
                </p>
                </div>
                <div className="flex flex-col gap-y-2 items-center">
                <img className="md:w-[36px]" src="/src/assets/Images/Frame.svg"></img>
                <p className="font-bold text-[#98A2B3] text-[14px] md:text-[16px]">
                  قدرت‌ بخشی
                </p>
              </div>
              </div>
              
              <div className="flex md:flex-row flex-col md:pl-5  md:w-[50%] md:justify-center 2xl:gap-x-72  md:gap-x-30 gap-y-5 items-center   ">
                <div className="flex flex-col gap-y-2 items-center">
                <img src="/src/assets/Images/increase.png" className=" md:w-[36px]"></img>
                <p className="font-bold text-[#98A2B3] text-[14px] md:text-[16px]">
                پیشرفت مداوم
                </p>
                </div>
                <div className="flex flex-col gap-y-2 items-center">
                <img className="md:w-[36px]" src="/src/assets/Images/Heart.png"></img>
                <p className="font-bold text-[#98A2B3] text-[14px] md:text-[16px]">
                احترام همیشگی
                </p>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grow;

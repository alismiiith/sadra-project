const Student = ({ item, idx, index }) => {
  return (
    <>
      <div className="slider  justify-center   flex flex-col items-center  ">
        <h1 className="text-center text-[14px] lg:text-[20px] lg:mx-[56px] mt-10 text-[#D0D5DD]  px-5">
          “یادگیری در صدرا دو عنصر مهم رو برای من فراهم کرد: فرصتی برای دستیابی
          به دانش بیشتر از اون چیزی که قبلاً به صورت خودآموز می‌تونستم یاد بگیرم
          و استخدام در شرکتی که دوست داشتم.”
        </h1>
        <div className="flex-col   flex h-[332px] items-center  justify-center ">
          <div className="flex gap-y-[8px] items-center flex-col lg:pt-[40px]">
            <img
              className="w-[48px] h-[48px] rounded-[50%] mt-20 lg:mt-0  "
              src={item.image}
              alt=""
            />
            <span className="text-[#FFFFFF] text-[16px]">{item.Name}</span>
            <span className="text-[#98A2B3] text-[12px] font-bold">
              {item.Proffesion}
            </span>
          </div>
          <div className="down flex justify-center  gap-5 lg:mb-[100px] mt-[80px]   flex-row w-full">
            <img
              className="lg:w-[355px] object-contain md-w-[130px] lg:h-[48px] w-[85px]  h-[19px] "
              src="/src/assets/Images/Group.png"
              alt=""
            />
            <img
              className="lg:w-fit  md:w-[130px] lg:h-[48px]  w-[105px] h-[19px]"
              src="/src/assets/Images/tap30.png"
              alt=""
            />
            <img
              className="lg:w-fit  md:w-[130px] lg:h-[48px] object-cover w-[85px] h-[19px]"
              src="/src/assets/Images/Hamrah.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;

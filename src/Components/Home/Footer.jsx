import { Link } from "react-router-dom";

const Footer = () => {
  const ScrollHandler = () => {
    window.scrollTo({
      top: 3500,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="w-full  lg:flex flex-col bg-[#1C1C1C] pt-[100px] items-center">
        <div className="lg:w-[66%]  w-full justify-center items-center  px-5 flex gap-5 flex-col ">
          <h1 className="text-[#FFFFFF]   font-bold text-[20px] lg:text-[40px] text-center lg:mx-[13%] mx-6 mb-10">
            در دوره‌هایی که علاقه داری شرکت کن و رشد شغلی خودت رو ببین
          </h1>
          <span className="text-[#D0D5DD] text-center block text-[14px] md:text-[16px]  ">
            مربیان ما همه چیز را به راحتی به شما آموزش می دهند. امروز با ثبت نام
            در دوره های عالی با قیمت های مقرون به صرفه، مسیر شغلی خود را بهبود
            ببخشید.
          </span>
          <button
            onClick={ScrollHandler}
            className="lg:w-[236px] w-[164px] h-[44px] lg:h-[68px] rounded-4xl mt-[68px] cursor-pointer  bg-[#4CA773]  py-2 px-1"
          >
            <p className="text-[#FFFFFF] lg:text-[18px] text-[14px] font-semibold">
              همین حالا شروع کن
            </p>
          </button>
        </div>
        <div className="w-full flex-wrap  justify-center gap-x-2   flex flex-row  mt-10 ">
          <div className="w-[82%]  flex flex-row gap-5  ">
            <img
              className="lg:min-w-[15%] w-[100px] h-[25px] lg:h-[50px] object-contain "
              src="https://soendergaard.com/wp-content/uploads/2024/06/logoipsum-logo-29-1.png"
              alt=""
            />
            <img
              className="lg:min-w-[15%] w-[100px] h-[25px] lg:h-[50px] object-contain"
              src="https://soendergaard.com/wp-content/uploads/2024/06/logoipsum-logo-29-1.png"
              alt=""
            />
            <img
              className="lg:min-w-[15%] w-[100px] h-[25px] lg:h-[50px] object-contain"
              src="https://soendergaard.com/wp-content/uploads/2024/06/logoipsum-logo-29-1.png"
              alt=""
            />
            <img
              className="lg:min-w-[15%] w-[100px] h-[25px] lg:h-[50px] object-contain"
              src="https://soendergaard.com/wp-content/uploads/2024/06/logoipsum-logo-29-1.png"
              alt=""
            />
            <img
              className="lg:min-w-[15%] w-[100px] h-[25px] lg:h-[50px] object-contain"
              src="https://soendergaard.com/wp-content/uploads/2024/06/logoipsum-logo-29-1.png"
              alt=""
            />
            <img
              className="lg:min-w-[15%] test w-[100px] h-[25px] lg:h-[50px] object-contain"
              src="https://soendergaard.com/wp-content/uploads/2024/06/logoipsum-logo-29-1.png"
              alt=""
            />
          </div>
        </div>
        <div className=" flex w-full mt-10  justify-center items-center flex-row">
          <div className="w-[80%]    flex flex-col lg:flex-row gap-10 lg:gap-0    lg:justify-between">
            <div className="w-fit lg:w-[30%] lg:items-start   md:w-full md:items-center flex flex-col gap-3 ">
              <div className="flex items-center gap-3 ">
                <img className="w-[50px] " src="/src/assets/Images/Group 1.svg" alt="" />
                <p className="2xl:text-[25px] text-[20px]   text-[#FFFFFF] font-bold ">صدرا</p>
                </div>
              <span className="text-[#D0D5DD] w-[311px] lg:w-fit text-[14px] lg:text-[16px]">
                صدرا یک پلتفرم یادگیری آنلاین ملی است که به هر کسی و در هر کجا
                دسترسی به دوره های آنلاین را ارائه می دهد.
              </span>
            </div>
            <hr className="hrsilver  lg:hidden" />
            <div className="w-fit  gap-8 md:self-center flex flex-col">
              <h1 className="lg:text-[22px] text-[16px] text-[#FFFFFF] font-bold">
                صفحات
              </h1>
              <Link className="text-[#D0D5DD] text-[14px] lg:text-[18px]">
                صفحه نخست
              </Link>
              <Link className="text-[#D0D5DD] text-[14px] lg:text-[18px]">
                دوره‌ها
              </Link>
              <Link className="text-[#D0D5DD] text-[14px] lg:text-[18px]">
                رویدادها
              </Link>
              <Link className="text-[#D0D5DD] text-[14px] lg:text-[18px]">
                اساتید
              </Link>
              <Link className="text-[#D0D5DD] text-[14px] lg:text-[18px]">
                درباره ما
              </Link>
              <Link className="text-[#D0D5DD] text-[14px] lg:text-[18px]">
                آموزش در صدرا
              </Link>
            </div>
            <div className="w-fit gap-8 lg:self-start flex md:self-center flex-col">
              <h1 className="lg:text-[22px] text-[16px] text-[#FFFFFF] font-bold">
                شرکت
              </h1>
              <Link className="text-[#D0D5DD] text-[14px] lg:text-[18px]">
                شرایط و قوانین
              </Link>
              <Link className="text-[#D0D5DD] text-[14px] lg:text-[18px]">
                سیاست حفظ حریم خصوصی
              </Link>
              <Link className="text-[#D0D5DD] text-[14px] lg:text-[18px]">
                کوکی‌ها
              </Link>
            </div>
            <div className="w-fit gap-8 lg:self-start flex md:self-center flex-col">
              <h1 className="lg:text-[22px] text-[16px] text-[#FFFFFF] font-bold">
                انجمن‌ها
              </h1>
              <Link className="text-[#D0D5DD] text-[14px] lg:text-[18px]">
                دانشنامه
              </Link>
              <Link className="text-[#D0D5DD] text-[14px] lg:text-[18px]">
                سوالات پرتکرار
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

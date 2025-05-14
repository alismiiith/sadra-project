import { Link } from "react-router-dom";

const Master = () => {
  return (
    <>
      <div className="w-full lg:bg-[#FFFFFF] lg:border-gray-300 lg:border-2 lg:rounded-2xl  lg:w-[405px] lg:h-[875px] lg:absolute lg:top-20 lg:left-[5.5%] z-999 flex-col items-center flex my-10">
        <img
          className="w-[343px] lg:w-[356px] lg:mt-5 lg:h-[202px] md:w-[680px] md:object-cover h-[307px] rounded-xl"
          src="https://simpleprogrammer.com/wp-content/uploads/2018/02/Stressful-Programmer-Life.jpg"
          alt=""
        />
        <div className="flex flex-row w-full  justify-between h-[100px] px-3 md:px-10 items-center ">
          <h1 className="text-[#667085] lg:text-[16px] text-[24px]  ">
            مدرس استاد علی بابایی
          </h1>
          <div className="flex flex-col w-fit">
            <span className="text-[28px] numfont pr-[10%]  text-[#252525]">
              128
            </span>
            <span className="text-[12px] text-[#252525]">هزارتومان</span>
          </div>
        </div>
        <Link
          to={"/Login"}
          className="w-[343px] justify-center items-center flex lg:w-[357px] md:w-[680px] md:h-[60px] md:text-[18px] h-[44px] cursor-pointer bg-[#4CA773]  text-[#FFFFFF] text-[14px] rounded-3xl"
        >
          همین حالا ثبت نام کن
        </Link>
        <hr className="hrsilver lg:w-[357px] md:w-[680px] w-[300px] my-5" />
        <div className="block px-3 md:px-10">
          <h1 className="text-[16px] md:text-[20px] text-[#344054] mb-2">
            توضیحات رویداد
          </h1>
          <p className="text-[12px] md:text-[16px] text-[475467] text-justify opacity-50 font-bold">
            شما یاد خواهید گرفت که چگونه یک تجربه کاربری دیجیتال ایجاد کنید که
            برای توسعه آماده است. شما با ایجاد آشنایی و تسلط به اصول تحقیقات
            طراحی برای شناسایی کاربر و راه حل های مورد نیاز آنها شروع خواهید
            کرد. سپس تحقیقات خود را ترکیب می‌کنید و از اسپرینت‌های طراحی برای
            انتقال یک ایده از مفهومی به نمونه اولیه با وفاداری پایین استفاده
            می‌کنید. در نهایت، یاد خواهید گرفت که چگونه نمونه اولیه خود را با
            وفاداری پایین به یک طرح با وفاداری بالا تبدیل کنید و عملکرد آن را بر
            اساس داده ها بهبود بخشید.
          </p>
        </div>
        <div className="block self-start pr-3 md:pr-10 my-3 md:my-6">
          <h1 className="text-[16px] md:text-[20px] text-[#344054] mb-2 font-bold">
            جزئیات رویداد
          </h1>
          <div className="flex flex-row gap-2 items-center">
            <i className="fa fa-calendar"></i>
            <p className="text-[14px] md:text-[20px] text-[#667085]">
              ۲۳ آذر ۱۴۰۲{" "}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center my-3">
            <i className="fa fa-clock"></i>
            <p className="text-[14px] md:text-[20px] text-[#667085]">
              ۹:۰۰ - ۱۲:۰۰
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Master;

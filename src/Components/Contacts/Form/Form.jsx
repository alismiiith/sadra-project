import Image from "../Image";
import FormHtml from "./FormHtml";

const Form = () => {
  return (
    <>
      <div className="bg-[#F9FAFB] lg:w-[50%] px-5 w-full lg:py-0 lg:mt-0 py-10 mt-10  ">
        <h1 className="text-[20px] font-extrabold     text-[#000000] ">
          تماس با ما
        </h1>
        <span className="text-[#475467] text-[12px] md:text-[14px]">
          در صورت داشتن هر سوال و یا مشاوره ای میتوانید از مسیر ها زیر با ما در
          ارتباط باشید
        </span>
        <div className="flex gap-x-1 items-center my-3   ">
          <i className="fa fa-house text-[10px] text-[#2b2b2b] "></i>
          <span className="text-[#475467] text-[10px] md:text-[12px] font-semibold">
            آدرس:
          </span>
          <span className="text-[#475467] text-[10px] md:text-[12px] ">
            تهران٬ خیابان نواب٬ جنب بانک شهر٬ پلاک۶ ٬ طبقه دوم
          </span>
        </div>
        <div className="flex gap-x-1 items-center my-3   ">
          <i className="fa fa-phone text-[10px] md:text-[12px] text-[#2b2b2b] "></i>
          <span className="text-[#475467] text-[10px] md:text-[12px] font-semibold">
            تماس:
          </span>
          <span className="text-[#475467] text-[10px] md:text-[12px] ">
            ۴۴۶۷۲۲۳۷ - ۰۲۱
          </span>
        </div>
        <div className="flex gap-x-1 items-center my-3   ">
          <i className="fa fa-message text-[10px] md:text-[12px] text-[#2b2b2b] "></i>
          <span className="text-[#475467] text-[10px] md:text-[12px] font-semibold">
            ایمیل:
          </span>
          <span className="text-[#475467] text-[10px] md:text-[12px] ">
            info@sadra.com
          </span>
        </div>
        <hr className="hrsilver w-[90%] mx-auto my-5 lg:w-[95%]" />
        <h1 className="text-[24px] font-extrabold ">با ما همکاری کن</h1>
        <span className="text-[12px] text-[#6B7280] font-semibold">
          اگر دوست داری با تیم صدرا همکاری کنی حتما به ما پیام بده تا در اولین
          فرصت همکاران ما با شما تماس بگیرن.
        </span>
        <FormHtml />
      </div>
    </>
  );
};

export default Form;

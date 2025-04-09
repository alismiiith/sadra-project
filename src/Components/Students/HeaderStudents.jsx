import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderStudents = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:w-full lg:h-[616px] flex lg:flex-row flex-col w-full md:w-full    bg-[#2b2b2b] ">
      <div className="right w-full lg:w-[60%]  mobilewidth flex flex-col">
        <div className="top  flex flex-row">
          <div className="flex   deswidth  flex-row lg:pr-20 h-[56px]  md:w-full md:px-10 items-center md:justify-between mobileflex   ">
            <p className="text-[25px]  text-[#FFFFFF] font-bold ">صدرا</p>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="flex-col lg:hidden z-999   relative w-fit flex gap-y-[2px] labeltest    h-[56px] pt-6   desktop:hidden  "
            >
              <div className="w-[20px] rounded-l-sm rounded-r-sm h-[2px] bg-[#FFFFFF] "></div>
              <div className="w-[20px] rounded-l-sm rounded-r-sm  h-[2px] bg-[#FFFFFF] "></div>
              <div className="w-[20px] rounded-l-sm rounded-r-sm  h-[2px] bg-[#FFFFFF] "></div>
            </div>
            <div
              dir="ltr"
              className={` w-[200px] h-full lg:hidden z-[500] bg-[#2b2b2b]  fixed  left-0 top-0  ${
                isOpen ? "translate-x-[0%]" : "translate-x-[-100%] "
              } transition-transform duration-500 ease-in-out `}
            >
              <div className="  w-[100%] h-full md:justify-start md:pt-20 flex pr-5 justify-center flex-col gap-16">
                <Link className="text-[18px] text-[#FFFFFF] font-bold ">
                  صفحه اصلی
                </Link>
                <Link className="text-[16px] opacity-60 text-[#FFFFFF] ">
                  کلاس ها{" "}
                </Link>
                <Link className="text-[16px] opacity-60  text-[#FFFFFF] ">
                  رویدادها
                </Link>
                <Link className="text-[16px] opacity-60 text-[#FFFFFF] ">
                  تماس با ما
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:flex md:hidden test lg:w-[80%] lg:justify-start   h-[56px] items-center justify-center gap-16">
            <Link className="text-[22px] text-[#FFFFFF] font-bold ">
              صفحه اصلی
            </Link>
            <Link className="text-[20px] opacity-60 text-[#FFFFFF] ">
              کلاس ها{" "}
            </Link>
            <Link className="text-[20px] opacity-60  text-[#FFFFFF] ">
              رویدادها
            </Link>
            <Link className="text-[20px] opacity-60 text-[#FFFFFF] ">
              تماس با ما
            </Link>
          </div>
        </div>
        <div className="button bg-[#FFFFFF]   h-[90%] items-center flex-col flex justify-center w-full ">
          <div className="flex w-full   lg:pt-0 pt-10 justify-center gap-3 items-center flex-col">
            <h1 className="text-[20px] text-[#1D2939] font-bold">
              محمد علی نجفی
            </h1>
            <h1 className="text-[14px] py-2 px-5 bg-[#295E43] rounded-xl    md:text-[34px] lg:text-[35px] text-[#FFFFFF] ">
              دوره طراحی رابط کاربری و تجربه کاربری
            </h1>
            <div className="block">
              <div className="flex items-center gap-2">
                <p className="text-[#214D39] text-[12px]">قبل از صدرا:</p>
                <span className="text-[#000000] text-[10px]">
                  کارمند دفتر خدماتی
                </span>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-[#214D39] text-[12px]">بعد از صدرا::</p>
                <span className="text-[#000000] text-[10px]">
                  طراح رابط کاربری در شرکت یواکس دیزاینیون
                </span>
              </div>
            </div>
            <span className="lg:text-[18px] text-ellipsis border-r-4  border-[#347654] md:text-[18px] text-[12px] md:text-center  text-justify lg:px-30 mx-10 pr-2    text-[#475467]">
              “برای من که رشته تحصیلیم غیر مرتبط بود و پیش زمینه‌ای رو نداشتم
              غیرقابل باور بود که بعد از یک دوره شش ماهه سریعا وارد بازار کار
              بشم و مشغول به کار در رشته مورد علاقم بشم واقعا از این اتفاق و
              انتخاب صدرا برای یادگیری خوشحالم.”
            </span>
            <div className="w-full my-10   border-2 border-gray-400 rounded-2xl  bg-[#FFFFFF] py-3 justify-center flex   lg:hidden md:h-[390px]">
              <img
                className="object-cover rounded-xl  w-[343px] h-[318px]  md:h-[390px] "
                src="https://s3-alpha-sig.figma.com/img/2eeb/0a21/3674062ccbe306ba8867deb375fa98f0?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r5e6ztM~poYzExjqqZEnKS~BTl2I2uNYT-qr8cZI3yhaNJkQ~DhEqP6ZxCPZ31Kiz5OzFJGmtYgY9IcDq8fpu7mUOuLSRZ2GWGuk60dG~VlfHeZgKt~qv9hlWczXm8rbShSxFYQ2nGtcc2IQqqUjIsdZ7tdfSyrK5WASKhARw9sROUjuLRK1V~sVUo5y2WL5z3zyEVC4m8xzeW11UsYIUDAJhXwIRJZrDulKQWck-UO85I~tkRKzc9E-ElmNqPfc5cZkR0a9-u0fEERssoUdtn8~NHfTOehV53VkF~LqdXgRU6jecB-P8Sxu30jmI93bjoSe90~1sekoi~s5T5-Bqw__"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[40%] md:hidden lg:flex test  h-[616px] md:h-[390px]">
        <img
          className="object-cover lg:h-[616px] w-full md:h-[390px] h-[282px]"
          src="https://s3-alpha-sig.figma.com/img/2cce/a563/a7cd06782d54cc5dd625e5ff9bf0d569?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hAZCPq~NoRaLV0ESurur-V8ViHlSgzwCWa6BGsqoo2O~oVXWa5KTvr2EP-mhNjZbHnByYkJ4IDdexR0aK-p-uwKQeSCQnmOLRkv~ZCkMlP05V7vP7An9j0FOHNIa72-UuufBykHRyZ5u4CTf8roleFuh2V5wIDWuhSh79XkFrG~nW2vS9m6kpr2s0X-8AIv0k5qupSBxHpHgxFiG~jZiVwXEHA7raSrvkcUuTIwK8C0~NzXQGrmJp6QYPITquLEahd~x6JsgZg2PDTF-I11aEEDXnWSvxIjpMg8rhvSANWR271YEW7odjfTCyq1nPn54PsgHuYPvcEgF0N3iyUIBnA__"
          alt=""
        />
        <button className="text-[18px] lg:absolute lg:top-2 lg:left-20 lg:flex md:hidden  test h-[50px]   rounded-3xl cursor-pointer text-[#FFFFFF] font-semibold px-5 py-3 bg-green-400">
          ثبت نام و ورود
        </button>
      </div>
    </div>
  );
};

export default HeaderStudents;

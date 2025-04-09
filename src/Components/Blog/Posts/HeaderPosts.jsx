import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderPosts = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
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
          <div className="button   h-[90%] items-center flex-col flex justify-center w-full ">
            <div className="flex w-full   lg:pt-0 pt-10 justify-center gap-3 items-center flex-col">
              <div className="w-full  flex flex-row justify-center gap-3">
                <button className="text-[#252525] text-[10px] bg-[#FFFFFF99]  px-3 py-1 rounded-lg ">
                  #تکنولوژی
                </button>
                <button className="text-[#252525] text-[10px] bg-[#FFFFFF99]  px-3 py-1 rounded-lg ">
                  #رابط_کاربری
                </button>
              </div>
              <h1 className="text-[20px] md:text-[34px] lg:text-[35px] text-[#FFFFFF] font-bold">
                آناتومی یک صفحه وب و عناصر اساسی آن
              </h1>
              <span className="lg:text-[25px] md:hidden test md:text-[20px] text-[14px]   opacity-80 text-[#FFFFFF]">
                دوره مورد علاقت رو شرکت کن، گارانتی پیدا کردن کار با ما
              </span>
              <span className="lg:text-[18px] md:text-[18px] text-[12px] md:text-center  text-justify lg:px-30 px-10    text-[#D0D5DD]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه.{" "}
              </span>
              <span className="text-[12px] font-bold md:text-[16px] lg:text-[14px] text-[#EAECF0]">
                نوشته شده توسط احسان جلیل زاده
              </span>
              <div className="w-full  bg-red-500  h-[282px] lg:hidden md:h-[390px]">
                <img
                  className="object-cover w-full  md:h-[390px] h-[282px]"
                  src="https://s3-alpha-sig.figma.com/img/2cce/a563/a7cd06782d54cc5dd625e5ff9bf0d569?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hAZCPq~NoRaLV0ESurur-V8ViHlSgzwCWa6BGsqoo2O~oVXWa5KTvr2EP-mhNjZbHnByYkJ4IDdexR0aK-p-uwKQeSCQnmOLRkv~ZCkMlP05V7vP7An9j0FOHNIa72-UuufBykHRyZ5u4CTf8roleFuh2V5wIDWuhSh79XkFrG~nW2vS9m6kpr2s0X-8AIv0k5qupSBxHpHgxFiG~jZiVwXEHA7raSrvkcUuTIwK8C0~NzXQGrmJp6QYPITquLEahd~x6JsgZg2PDTF-I11aEEDXnWSvxIjpMg8rhvSANWR271YEW7odjfTCyq1nPn54PsgHuYPvcEgF0N3iyUIBnA__"
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
          <button className="text-[18px] lg:absolute lg:top-2 lg:left-20 lg:flex md:hidden  test h-[50px]   rounded-3xl cursor-pointer text-[#FFFFFF] font-semibold px-5 py-3 bg-green-400">ثبت نام و ورود</button>
        </div>
      </div>
    </>
  );
};

export default HeaderPosts;

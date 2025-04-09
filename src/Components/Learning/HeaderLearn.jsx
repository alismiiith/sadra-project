import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeaderLearn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttom, setButtom] = useState([]);
  const FetchButtom = async () => {
    try {
      const res = await axios.get("http://localhost:3001/Buttom");
      setButtom(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    FetchButtom();
  }, []);
  return (
    <>
      <div className="lg:w-full lg:h-[724px] flex lg:flex-row flex-col w-[375px] md:w-full  pb-10   bg-[#2b2b2b] ">
        <div className="right lg:w-[100%] w-full  mobilewidth flex flex-col">
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
          <div className="button  h-[90%] lg:px-22  flex-col flex justify-center w-full ">
            <div className="flex w-full   lg:pt-0 pt-10 justify-center gap-3 items-center lg:items-start lg:pr-10 flex-col">
              <div className="flex w-fit ">
                <p className="text-[12px] md:text-[14px] items-center  lg:text-[16px] text-[#98A2B3]">
                  رویدادها
                </p>
                <div className="cursor-pointer flex items-center gap-2 mx-1 font-bold text-[#FFFFFF]">
                  <i className="fa fa-chevron-left  text-[12px]"></i>
                  <span className="text-[12px] md:text-[14px] lg:text-[16px]">
                    طراحی UI/UX
                  </span>
                </div>
              </div>
              <h1 className="text-[20px] md:text-[34px] lg:text-[35px] text-[#FFFFFF] ">
                بلاگ‌های صدرا
              </h1>
              <span className="lg:text-[18px] lg:block mx-2 lg:w-[100%]  md:text-[16px] text-[12px]  md:text-center lg:text-start  text-justify lg:px-0  px-10    text-[#D0D5DD]">
                صدرا با فراهم کردن شرایطی ایده‌آل، سالانه رویدادهای زیادی در
                حوزه‌ی تکنولوژی در شهرهای بزرگی مثل تهران، اصفهان، مشهد و شیراز
                برگزار می‌کند که مدرسان این رویدادها از بهترین‌ مدرسان کشور بوده
                و آماده‌ی انتقال دانش خود به دانشجویان می‌باشند.
              </span>

              <form className="flex relative lg:self-center test flex-row w-fit">
                <input
                  autoComplete="off"
                  className="lg:w-[85vw] lg:rounded-4xl md:w-[680px] md:py-5 w-[314px] lg:text-[16px] md:text-[16px] text-[12px] font-bold h-[50px]   lg:h-[72px] bg-[#FFFFFF] rounded-3xl pr-5 "
                  type="search"
                  name="search"
                  id="search"
                  placeholder="جستجو دوره ها و مربیان ورخدادها"
                />
                <span className="w-[1px] h-[25px] lg:h-[40px] bg-gray-400 absolute left-20 top-3 lg:top-4"></span>
                <label
                  className="flex  cursor-pointer lg:w-[20px] w-[10px] absolute lg:top-6 top-4 left-10 h-[20px]  items-center color "
                  htmlFor="search"
                >
                  <i className="fa-solid  fa-magnifying-glass bg-green-400 lg:p-4 p-3  rounded-3xl color"></i>
                </label>
              </form>
              <div className="w-full flex flex-col  md:mt-5 ">
                <h1 className="text-[20px] lg:text-start md:mb-5  lg:text-[34px] text-[#F9F9F9] text-center font-bold ">
                  دسته بندی
                </h1>
                <div
                  className="w-[80%] flex  gap-3 lg:gap-5 self-center justify-center my-3 flex-wrap 
                "
                >
                  {buttom?.map((item) => {
                    return (
                      <>
                        <button className=" w-[120px] lg:w-[20%] py-3 md:py-5 bg-[#252525] gap-1 rounded-md flex flex-row justify-center items-center ">
                          <span className="text-[#F9F9F9] font-semibold mt-1 text-[12px] md:text-[12px] lg:text-[16px]">
                            {item.title}
                          </span>
                          <img
                            className="text-[#F9F9F9] w-[20px]"
                            src={item.svg}
                            alt=""
                          />
                        </button>{" "}
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="text-[18px] lg:absolute lg:top-2 lg:left-20 lg:flex md:hidden  test h-[50px]   rounded-3xl cursor-pointer text-[#FFFFFF] font-semibold px-5 py-3 bg-green-400">
          ثبت نام و ورود
        </button>
      </div>
    </>
  );
};

export default HeaderLearn;

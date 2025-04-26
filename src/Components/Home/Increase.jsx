import { useState } from "react";

const Increase = () => {
  const data = [
    {
      id: "1",
      des: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می ",
    },
  ];
  const [more, setMore] = useState(false);
  const moreHandler = () => {
    setMore(!more);
  };

  return (
    <>
      <div className="increase   w-full flex   justify-center my-20 items-center ">
        <div className="flex  w-full flex-col lg:flex-row lg:w-[82.7%] justify-center items-center   ">
          <div className="increase__right w-full   items-start  lg:w-[50%] flex flex-col gap-2">
            <div className="flex w-full lg:pr-10 gap-2 lg:justify-start justify-center">
              <span className="text-[#4CA773] ">___</span>
              <span className="text-[#4CA773] text-[16px] pt-2">درباره ما</span>
            </div>
            <h1 className="lg:text-[40px] 2xl:text-[52px] font-bold md:text-[34px] md:text-center  text-[24px]  text-[#101828] lg:w-[70%] 2xl:w-[55 %]  mx-8 lg:mx-0 pt-1">
              افزایش رشد فردی و تقویت استعداد شما
            </h1>
            <span className="lg:text-[18px] md:text-[16px] md:px-20 lg:pr-9 lg:pl-[64px] md:text-center lg:text-justify  text-[14px] text-[#667085] px-7">
              با بیش از یک دهه فعالیت زیرا همیشه می خواهیم خدمات آموزشی ارائه
              دهیم که در مدارس آموزش داده نمی شود.
            </span>
            {data.map((item) => (
              <p
                className="lg:text-[18px] text-[14px] text-justify text-[#667085] px-7  "
                key={item.id}
              >
                {more ? item.des : item.des.substring(0, 0)}
              </p>
            ))}
            <button
              onClick={moreHandler}
              className="text-[#32BCA3] md:hidden lg:flex test justify-center items-center lg:mr-8 mt-10 cursor-pointer w-[111px] lg:w-[148px] rounded-4xl h-[44px] lg:h-[56px] px-3 py-1 border-2 border-green-300"
            >
              <p className="lg:text-[16px] text-[12px]">بیشتر بدانیم</p>
            </button>
            <div className="w-full md:flex justify-center items-center">
              <button
                onClick={moreHandler}
                className="text-[#4CA773]  lg:hidden textalign lg:mr-10 mt-10 md:w-[138px md:h-[52px] cursor-pointer w-[111px] lg:w-[148px] rounded-3xl h-[44px] lg:h-[56px] px-3 py-1 border-2 border-green-300"
              >
                <p className="lg:text-[16px] md:text-[14p] text-[12px]">
                  بیشتر بدانیم
                </p>
              </button>
            </div>
          </div>
          <div className="increase__left  lg:w-[50%]     w-[100%]      relative items-center  flex flex-col lg:flex-row ">
            <img
              className="lg:w-[50%]  object-cover lg:h-[334px]   w-[312px] h-[256px]  rounded-2xl"
              src="https://thumbs.dreamstime.com/z/vector-laptop-coding-concept-web-developer-design-programming-screen-code-illustration-196187792.jpg"
              alt=""
            />
            <div className="w-[210px]     justify-center items-center h-[334px] flex flex-col lg:gap-1 gap-3 lg:absolute left-0 ">
              <p className="lg:text-[34px] numfont text-[24px] text-[#101828]">
                54M
              </p>
              <span className="lg:text-[16px] text-[14px] text-[#667085]">
                دانش‌آموز در حال استفاده از این سامانه
              </span>
              <p className="lg:text-[34px] numfont text-[24px]  text-[#101828]">
                +3.2K
              </p>
              <span className="lg:text-[16px] text-[14px] text-[#667085]">
                دوره موجود در دسته‌بندی‌های مختلف
              </span>
              <p className="lg:text-[34px] numfont  text-[24px] text-[#101828]">
                600
              </p>
              <span className="lg:text-[16px] text-[14px] text-[#667085]">
                مربی مجرب که به شما آموزش می‌دهند
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Increase;

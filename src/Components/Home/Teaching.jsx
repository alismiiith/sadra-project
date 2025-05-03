import { useRef, useState } from "react";

const Teaching = () => {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);

  const playHandler = () => {
    if (play) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlay(!play);
  };
  return (
    <>
      <div className="w-full md:h-[696px] h-[526px]  lg:h-[916px]  mt-[64px]">
        <div className="top  md:flex md:w-full lg:items-start lg:px-[8.6%] md:justify-center  md:items-center  flex flex-col gap-5 px-[16px]    ">
          <div className="flex  ">
            <span className="text-[#4CA773]">__</span>
            <span className="text-[#4CA773] pt-2">آموزش ما</span>
          </div>
          <h1 className="lg:text-[40px] md:text-[34px]  text-[24px] font-bold ">
            استفاده از متدهای جدید آموزشی
          </h1>
          <span className="lg:text-[18px] md:hidden lg:flex test text-[14px] opacity-50   text-justify">
            صدرا، از استانداردها و چارچوب‌های سفارشی جدید آموزشی استفاده می‌کنه
            ترکیبی از ترکیبی از CSTA ،ISTE ،PBLو ADIF است که در حال حاضر در
            آمریکا و کانادا در حال اجراست و باعث سهولت در یادگیری دانشجویان و
            دانش‌آموزان شده و پیشرفت آن‌ها به وضوح، قابل رویت است.
          </span>
          <div className="w-full lg:hidden justify-center  ">
            <span className=" md:text-[16px]  text-[14px] opacity-50    ">
              صدرا، از استانداردها و چارچوب‌های سفارشی جدید آموزشی استفاده
              می‌کنه ترکیبی از ترکیبی از CSTA ،ISTE ،PBLو ADIF است که در حال
              حاضر در آمریکا و کانادا در حال اجراست و باعث سهولت در یادگیری
              دانشجویان و دانش‌آموزان شده و پیشرفت آن‌ها به وضوح، قابل رویت است.
            </span>
          </div>
        </div>
        <div className="down  flex justify-center relative ">
          <video
            ref={videoRef}
            className="lg:w-[82%] w-[80%] md:h-[324px]  object-cover  lg:h-[568px] h-[230px] mt-10 rounded-xl lg:rounded-3xl"
            src="https://videocdn.cdnpk.net/videos/e5a722a7-e4f5-454d-9c6f-88423f06626a/horizontal/previews/videvo_watermarked/large.mp4"
            alt=""
          />
          <i
            onClick={playHandler}
            className={`fa ${
              play ? "fa-pause text-[#FFFFFF]" : "fa-play text-[#FFFFFF]"
            } absolute top-32 right-40 lg:top-70 lg:right-[47%] lg:text-[25px] lg:p-8 border-[#FFFFFF] border-2 cursor-pointer p-5 bg-[#4CA773] rounded-[50%]`}
          ></i>
        </div>
      </div>
    </>
  );
};

export default Teaching;

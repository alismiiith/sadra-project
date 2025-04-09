import { useState, useRef } from "react";

const Article = () => {
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
      <div className="block pr-3">
        <h1 className="text-[#1D2939] text-[14px] font-bold my-3">
          چی باعث شد دوره خودتون رو در صدرا بگذرونید ؟
        </h1>
        <p className="text-[#667085] mb-3 text-[12px] text-justify ml-10 ">
          بهترین محصولات بر اساس تحقیقات و بازخورد کاربران دورهای تکرار را پشت
          سر گذاشته اند. فرآیند یک سرعت طراحی را بیاموزید و چگونه یافته‌های
          تحقیق را به یک نمونه اولیه که می‌تواند با کاربران آزمایش شود، ترجمه
          کنید. درک چگونگی تقویت همکاری تیمی و استفاده از تفکر واگرا و همگرا
          برای ایجاد سریع نمونه های آزمایشی. اصول رابط کاربری را در طراحی یک
          نمونه اولیه قابل کلیک اعمال کنید و یک تست قابلیت استفاده را برای به
          دست آوردن بازخورد ارزشمند از کاربران که می تواند در تکرارهای طراحی
          استفاده شود، انجام دهید..
        </p>
        <div className="block relative my-10">
          <video
            ref={videoRef}
            className="w-[343px] h-[319px] rounded-xl object-cover"
            src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/MPaEbz-/videoblocks-row-of-multi-ethnic-high-school-students-working-on-laptops-with-hands-in-selective-focus-in-equipped-computer-class_bjejyctow__b9096ffd96a53476b12ac8e1e3a5abfd__P360.mp4"
            alt=""
          />
          <i
            onClick={playHandler}
            className={`fa ${
              play ? "fa-pause text-[#FFFFFF]" : "fa-play text-[#FFFFFF]"
            } absolute top-32 right-36 border-[#FFFFFF] border-2 cursor-pointer p-5 bg-[#4CA773] rounded-[50%]`}
          ></i>
        </div>
        <h1 className="text-[#1D2939] text-[14px] font-bold my-3">
        نظرت در باره بوت کمپ طراحی رابط کاربری صدرا به ما می‌گی؟
        </h1>
        <p className="text-[#667085] mb-3 text-[12px] text-justify ml-10 ">
          بطراحان UX مهارت های خود را با نمایش طرح ها و فرآیندهای خود در یک نمونه کار نشان می دهند. درک آنچه باید و نباید در یک نمونه کارها گنجانده شود، و همچنین اجزای کلیدی که برای مخاطبان هدف جذاب هستند. یاد بگیرید که چگونه کار قبلی را سازماندهی کنید و با آن به صورت آنلاین ارتباط برقرار کنید و مخاطبان و اهداف شغلی خود را در نظر داشته باشید. چارچوب های داستان سرایی و برندسازی را برای ایجاد یک نمایه شخصی که ارزش پیشنهادی منحصر به فردی را منتقل می کند، اعمال کنید. همچنین بهترین روش‌ها را برای حفظ و به‌روزرسانی پورتفولیوی UX یاد خواهید گرفت.
        </p>
      </div>
    </>
  );
};

export default Article;

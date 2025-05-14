import { useState, useEffect } from "react";

const Lecture = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    const progress = (scrollTop / scrollHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative ">
        {/* پروگرس بار عمودی */}
          <div className="flex test gap-3 absolute right-[3.9%] ">
            <span className="text-[#667085] text-[12px] ">۱۴۰۲/۰۸/۲۴</span>
            <span className="text-[#667085] text-[12px] ">__</span>
            <span className="text-[#667085] text-[12px] ">۴ دقیقه</span>
          </div>
        <div className="absolute test bg-[gray] top-10 right-[8.6%] h-full w-1 rounded-4xl z-50">
          <div
            className="w-full  bg-green-500 "
            style={{
              height: `${scrollProgress}%`,
              transition: "height 0.25s ease-out",
            }}
          />
        </div>
        {/* محتوای اصلی صفحه */}
        <div className="flex flex-col w-full items-center my-20 lg:px-[8.6%]">
          <p className="text-[14px] text-[#475467] text-justify px-5 md:px-8 my-10">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
            صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
            روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
            تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
            می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت
            فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
            برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
            فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
            موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
            نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
            موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با
            تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
            برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال
            و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها
            شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و
            فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت
            که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان
            رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>

          {/* تصاویر گوشی موبایل */}
          <img
            className="w-[343px] bg-amber-400 md:hidden my-2 h-[220px] rounded-lg"
            src="https://4kwallpapers.com/images/walls/thumbs_3t/22432.jpg"
            alt=""
          />
          <img
            className="w-[343px] md:hidden my-3 h-[220px] rounded-lg"
            src="https://wallpapercave.com/wp/wp12753810.jpg"
            alt=""
          />

          {/* تصاویر گالری */}
          <div className="test md:flex justify-center gap-5 w-full">
            <img
              className="w-[41%] my-2 h-[300px] rounded-lg object-cover"
              src="https://4kwallpapers.com/images/walls/thumbs_3t/22432.jpg"
              alt=""
            />
            <img
              className="w-[41%] my-2 h-[300px] rounded-lg"
              src="https://wallpapercave.com/wp/wp12753810.jpg"
              alt=""
            />
          </div>

          <p className="text-[14px] text-[#475467] text-justify px-5 md:px-15 mt-10">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>

          <h1 className="text-[24px] md:text-[34px] text-[#4CA773] font-bold my-3 px-5 ">
            “آناتومی یک صفحه وب و عناصر اساسی آن”
          </h1>

          <p className="text-[14px] text-[#475467] text-justify px-5 md:px-8 ">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>

          <div className="w-full flex flex-row gap-3 my-10 pr-3 md:px-8 ">
            <button className="text-[#FFFFFF] text-[10px] bg-[#000000A6]  px-3 py-1 rounded-lg ">
              #تکنولوژی
            </button>
            <button className="text-[#FFFFFF] text-[10px] bg-[#000000A6]  px-3 py-1 rounded-lg ">
              #رابط_کاربری
            </button>
          </div>

          <hr className="hrsilver w-[90%] self-center" />

          <div className="w-[90%] parent flex pt-3 justify-between">
            <div className="flex w-fit flex-row gap-3 ">
              <img
                className="w-[50px] h-[50px] rounded-[50%] object-fill"
                src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg"
                alt=""
              />
              <div className="flex flex-col self-center">
                <p className="text-[#475467] text-[10px]">احسان جلیل زاده</p>
                <span className="text-[10px] text-[#98A2B3]">
                  طراح رابط کاربری و تجربه کاربر
                </span>
              </div>
            </div>

            {/* آیکون‌ها */}
            <div className="icon flex ">
              <img
                className="w-[18px] h-[18px] mx-2"
                src="https://s3-alpha-sig.figma.com/img/7486/2ae3/d5396e8c6d15a93baf3ec4268509b944?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QMjPldpWI49XwO4XYOxx9Vuqu0ggoxJdQe2TIqlwAi36zHYnpIsAqz5CB7d~JJ5PR5tV7FhOl79j5y6el-Bs~d9w9dQT1bzqxJbGDCwrs0dZk6Vrkx4J8ps3SH~Gg4vGe~F28CO3p~EXtVGHK9v0T~f2sKfbz28BfNqNThAxgH~pFNR4_~szL~rsoiA43F0yoy-7sGTG0EvJ4nTDiV3Jl7EN5~vOpy3sujcYJ2nNRgf8-RdjsROtO1zay2iv~L1YPBhQllhtQ4zmfVKvb-qwtXyVbSZYIm0lxgD7dXJ3C0zzKhO9wvhfrMl0YmLIhSzdYW~bfWrtOTBdAwFntQ__"
                alt=""
              />
              <img
                className="w-[18px] h-[18px] mx-2"
                src="https://s3-alpha-sig.figma.com/img/0f47/cb30/34ff3a5985281101b0da58d918f8f8b0?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=wdT~60KmfnXft~g-Jyaob9hOtn93w10CgmqY~HYgKYxa4ScdvcmyyG3rbWhgqFvGfgpsRmZXooR~Vdpxz8gObtd0xwv1j7HFM5Zz0Fwuw3vckZrGO18vnxl08FvT2FghQwzYzIqxZX4axhKxHZr1OtiudLOIBzGZsajBpd-tn82t~lLP-QgJ~RpNVJavfIT7ffB7wJxyhfnmvaT0F~NE0~Cm0iwI0pQOStybVpIfuVbUySmXwHTUowOr3JYH~8Ut68mIB0yfCuwCSZyk9gEwD1csizFOxcy~uKbDh2w1Fw~5zO7fyIkC~Le37Q68m4~kPQzx5sAqr3wpTklVmUl1hQ__"
                alt=""
              />
              <img
                className="w-[18px] h-[18px] mx-2"
                src="https://s3-alpha-sig.figma.com/img/8c80/a735/013afdb145ceaf0101e96b8b08d28d53?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=m8vXzVXnWA4p9S0x~YcE3l-Lduz4X5pa~TpQwtVJ8iTw0-fXbICyQ54lZ-Mg5xD7yzG3ghO9WzzBHZmCT8BESuXjtG~OerFc68Fy~WsxttQ1QAX7QYtwFadLZFSJfcfJipSRNR1mUDG1gz5g0kD7bo8ME5adnYo4CBYjRLRsfBEXux39odfiFv3w6r~9FgkAWmXciq5nyYrOg7lWI30hw79hx47ptK8Tt4bo2uClHpU8AMo~A9OJG2d76L7pzPyQfiqs9J7~gGgmJ5Odoyn59y2VqzpOdYjp9uVhX0i7EYwvzmrXmK7k~f52fiZL7hZXbszmoi~CTfuQ__"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lecture;

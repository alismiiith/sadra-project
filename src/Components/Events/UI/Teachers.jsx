const Teachers = () => {
  return (
    <>
      <div className="flex w-full flex-col gap-8 my-20 lg:pr-[5%] ">
        <h1 className="text-[20px] lg:pr-[5%] md:text-[28px] font-bold text-[#252525] text-center md:text-start  ">
          مدرسان دوره
        </h1>
        <div className="flex lg:justify-around overflow-x-auto py-10 w-full  gap-5">
          <div className="h-[266px] min-w-[200px] border-gray-300 flex-col items-center justify-between border-2  py-5  rounded-xl flex">
            <img
              className="w-[176px] h-[150px] rounded-xl object-cover "
              src="https://images.stockcake.com/public/2/5/b/25b212d6-d108-450a-b6d1-d497cbe9d1e2_large/handsome-man-portrait-stockcake.jpg"
              alt=""
            />
            <div className="flex flex-col w-full items-center">
              <p className="text-[16px] text-[#1D2939]">احسان جلیل زاده</p>
              <span className="text-[#667085] text-[14px]">
                مدیر محصول - بلوبانک
              </span>
            </div>
          </div>
          <div className="h-[266px] min-w-[200px] border-gray-300 flex-col items-center justify-between border-2  py-5  rounded-xl  flex">
            <img
              className="w-[176px] h-[150px] rounded-xl object-cover "
              src="https://img.freepik.com/free-photo/muslim-woman-front-golden-wall_23-2147796860.jpg?semt=ais_hybrid&w=740"
              alt=""
            />
            <div className="flex flex-col w-full items-center">
              <p className="text-[16px] text-[#1D2939]">زهرا فراهانی</p>
              <span className="text-[#667085] text-[14px]">
                طراح محصول - تپسی
              </span>
            </div>
          </div>
          <div className="h-[266px] min-w-[200px] border-gray-300 flex-col items-center justify-between border-2  py-5  rounded-xl flex">
            <img
              className="w-[176px] h-[150px] rounded-xl object-cover "
              src="https://preview.redd.it/lts2d6l5ujj51.jpg?auto=webp&s=bab96cdd1dc7af14178ce65d7492e86a963bb987"
              alt=""
            />
            <div className="flex flex-col w-full items-center">
              <p className="text-[16px] text-[#1D2939]">ستایش احمدی</p>
              <span className="text-[#667085] text-[14px]">
                مدیر محصول - بلوبانک
              </span>
            </div>
          </div>
          <div className="h-[266px] min-w-[200px] border-gray-300 flex-col items-center justify-between border-2  py-5  rounded-xl flex">
            <img
              className="w-[176px] h-[150px] rounded-xl object-cover "
              src="https://img.freepik.com/free-photo/emotions-people-concept-headshot-serious-looking-handsome-man-with-beard-looking-confident-determined_1258-26730.jpg"
              alt=""
            />
            <div className="flex flex-col w-full items-center">
              <p className="text-[16px] text-[#1D2939]">آرش قوی دل</p>
              <span className="text-[#667085] text-[14px]">طراح بک اند</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teachers;

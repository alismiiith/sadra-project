const FormHtml = () => {
  return (
    <form className="w-full flex flex-wrap gap-y-3 py-10 mt-10" action="post">
      <div className="w-[50%] flex flex-col   ">
        <label className="text-[#374151] font-semibold " htmlFor="name">نام</label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-[90%] mt-[5px] h-[38px] bg-[#FFFFFF] rounded-md   border-2 border-[#D1D5DB]"
        />
      </div>
      <div className="w-[50%] flex flex-col   ">
        <label className="text-[#374151] font-semibold "  htmlFor="lastname">نام خانوادگی</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          className="w-[90%] mt-[5px] h-[38px] bg-[#FFFFFF] rounded-md   border-2 border-[#D1D5DB]"
        />
      </div>
      <div className="w-[100%] flex flex-col   ">
        <label className="text-[#374151] font-semibold " htmlFor="email">ایمیل</label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-[95%] mt-[5px] h-[38px] bg-[#FFFFFF] rounded-md   border-2 border-[#D1D5DB]"
        />
      </div>
      <div className="w-[100%] flex flex-col my-3">
        <label className="text-[#374151] font-semibold " htmlFor="number">تلفن</label>
        <input
          type="number"
          id="number"
          name="number"
          className="w-[95%] mt-[5px] h-[38px] bg-[#FFFFFF] rounded-md   border-2 border-[#D1D5DB]"
        />
      </div>

      <div className="w-[100%] flex  flex-col my-3   ">
        <label className="text-[#374151] font-semibold " for="w3review">توضیحات</label>

        <textarea
          className="bg-[#FFFFFF] mt-[5px] h-[100px]  w-[95%] resize-none  rounded-md   border-2 border-[#D1D5DB]"
          id="w3review"
          name="w3review"
        ></textarea>
      </div>
      <button className="w-[82px]  h-[38px] bg-[#4CA773] text-[#FFFFFF] rounded-sm">
        submit
      </button>
    </form>
  );
};

export default FormHtml;

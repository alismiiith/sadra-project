const FormHtml = () => {
  return (
    <form className="w-full flex flex-wrap gap-y-3 py-10 mt-10" action="post">
      <div className="w-[50%] flex flex-col   ">
        <label htmlFor="name">نام:</label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-[90%] h-[30px] bg-[#FFFFFF] rounded-sm  border-2 border-gray-400"
        />
      </div>
      <div className="w-[50%] flex flex-col   ">
        <label htmlFor="lastname">نام خانوادگی:</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          className="w-[90%] h-[30px] bg-[#FFFFFF] rounded-sm  border-2 border-gray-400"
        />
      </div>
      <div className="w-[100%] flex flex-col   ">
        <label htmlFor="email">ایمیل:</label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-[95%] h-[30px] bg-[#FFFFFF] rounded-sm  border-2 border-gray-400"
        />
      </div>
      <div className="w-[100%] flex flex-col my-3">
        <label htmlFor="number">تلفن:</label>
        <input
          type="number"
          id="number"
          name="number"
          className="w-[95%] h-[30px] bg-[#FFFFFF] rounded-sm  border-2 border-gray-400"
        />
      </div>

      <div className="w-[100%] flex  flex-col my-3   ">
        <label for="w3review">توضیحات:</label>

        <textarea
          className="bg-[#FFFFFF] h-[100px]  w-[95%] resize-none border-2 border-gray-400 rounded-sm"
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

const Commenttwo = ({ item }) => {
  return (
    <div
      key={item.id}
      class=" relative  bg-[#FFFFFF]  w-[292px] h-[202px]  lg:w-[500px] lg:h-[184px] border-2 px-[24px]  pt-[24px]   border-[#1D2939] rounded-3xl mx-4"
    >
      <div className="flex gap-4">
        <img
          className="w-[48px] h-[48px] rounded-4xl"
          src={item.image2}
          alt=""
        />
        <div className="flex-col flex w-[127px] h-[44px] ">
          <span className="text-[#101828] lg:text-[16px] text-[14px]  pt-2">
            {item.name2}
          </span>
          <span className="text-[#475467] lg:text-[14px] text-[12px] ">
            {item.title2}
          </span>
        </div>
      </div>
      <img
        src="/src/assets/Images/Quote.png"
        className=" absolute bottom-30  left-5 text-[100px]"
      />
      <div className="w-[500px] pl-10 text-justify h-[100px] flex flex-wrap">
        <span className="lg:text-[16px] text-[12px] lg:w-fit w-[250px] mt-2  text-[#475467]">
          {item.des2}
        </span>
      </div>
    </div>
  );
};

export default Commenttwo;

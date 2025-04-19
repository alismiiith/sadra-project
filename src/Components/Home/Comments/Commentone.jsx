const Commentone = ({ item }) => {
  return (
    <>
      <div
        key={item.id}
        class=" relative flex-wrap  bg-[#FFFFFF] w-[292px] h-[202px]  lg:w-[500px] lg:h-[184px] border-2 px-[24px]  pt-[24px]    border-[#1D2939] rounded-3xl mx-4"
      >
        <div className="flex gap-4">
          <img
            className="w-[48px] h-[48px] rounded-4xl"
            src={item.image}
            alt=""
          />
          <div className="flex-col  flex   ">
            <span className="text-[#101828] lg:text-[16px] text-[14px] pt-2">
              {item.name}
            </span>
            <span className="text-[#475467] lg:text-[14px]  text-[12px] ">
              {item.title}
            </span>
          </div>
        </div>
        <img
          src="/src/assets/Images/Quote.png"
          className=" absolute bottom-30  left-5 text-[100px]"
        />
        <div className="w-[500px] pl-10 text-justify h-[100px] flex flex-wrap">
          <span className="lg:text-[16px] lg:w-fit w-[250px] text-[12px] mt-2 white   text-[#475467]">
            {item.des}
          </span>
        </div>
      </div>
    </>
  );
};

export default Commentone;

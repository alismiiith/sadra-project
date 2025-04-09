const Commenttwo = ({item}) => {
    return(
        <div key={item.id} class=" relative  bg-[#FFFFFF]  w-[292px] h-[202px]  lg:w-[500px] lg:h-[184px] border-2 pt-5 pr-5  border-black rounded-3xl mx-4">
    <div className="flex gap-4">
        <img className="w-[48px] h-[48px] rounded-4xl" src={item.image2} alt="" />
        <div className="flex-col flex w-[127px] h-[44px] ">
            <span className="text-[#101828] lg:text-[16px] text-[14px]  pt-2">{item.name2}</span>
            <span className="text-[#475467] lg:text-[14px] text-[12px] ">{item.title2}</span>
        </div>
    </div>
    <p className="text-[#2b2b2b] absolute bottom-24  left-5 text-[100px]">,,</p>
    <div className="w-[500px] pl-10 text-justify h-[100px] flex flex-wrap">
        <span className="lg:text-[16px] text-[12px] lg:w-fit w-[250px] mt-5  text-[#475467]">{item.des2}</span>
    </div>
</div>
    )
}
 
export default Commenttwo;
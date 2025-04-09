const Event = ({item}) => {
    return(
        <div   className="lg:max-w-[296px] w-[340px] md:w-[324px] md:h-[413px]   relative  border-gray-300 border-2 cursor-pointer h-[431px]  bg-[#FFFFFF] rounded-2xl   ">
<img className="h-[50%] object-center w-full rounded-t-2xl  bg-cover bg-center object-cover" src={item.image1} alt="" />
<h1 className="lg:text-[20px] text-[16px] text-[#252525] px-10 pt-5">{item.title}</h1>
<div className="flex flex-col w-fit absolute left-8 bottom-30">
        <span className="text-[24px] text-[#667085] line-through">{item.discount}</span>
        <span className="text-[10px] text-[#667085] line-through">{item.unit}</span>
    </div>
<div className="flex w-full px-5 pt-2 h-[54px] flex-row justify-between items-center ">
    <p className="text-[#667085] font-bold text-[16px] pr-5 pt-5">{item.name}</p>
    <div className="flex flex-col w-fit justify-center pt-5 items-center">
        <span className="text-[34px] text-[#101828]">{item.price}</span>
        <span className="text-[14px] text-[#101828]">{item.unit2}</span>
    </div>
</div>

    <hr className="hrcolor mt-10 mr-10 w-[80%]" />
<div className="flex  w-full justify-between  h-[27px] pt-5 px-10 ">
    <div className="flex flex-row gap-1 h-10px items-center  w-fit">
        <i className="fa fa-calendar"></i>
        <p className="text-[14px] text-[#667085]">{item.time}</p>
    </div>
    <div className="flex flex-row gap-1 h-10px items-center w-fit">
        <i className="fa fa-book"></i>
        <p className="text-[14px] text-[#667085]">21 درس</p>
    </div>
</div>

</div>
    )
}
 
export default Event;
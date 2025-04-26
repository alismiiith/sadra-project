const Video = ({item,idx}) => {
    return ( <>
         <div  className="w-full   flex flex-row gap-3 2xl:gap-7   px-10">
                          <div  className="lg:w-[33.3%] max-md:min-w-[299px] 2xl:h-[431px] h-[380px]  shadow-black border-gray-300 border-2 cursor-pointer  bg-[#FFFFFF] rounded-2xl   ">
                        <img className="h-[50%] object-center w-full rounded-t-2xl  bg-cover bg-center object-cover" src={item.image1} alt="" />
                        <h1 className="2xl:text-[20px] text-[16px] 2xl:px-12  text-[#252525] pr-5 pt-5">{item.title}</h1>
                        <div className="flex 2xl:px-12  relative w-full px-5 pt-2 h-[54px] flex-row justify-between items-center ">
                            <p className="text-[#667085] 2xl:text-[16px] text-[14px] ">{item.name}</p>
                            <div className="flex flex-row positionmobile w-fit items-center  ">
                                <i className="fa fa-star star    "></i>
                                <span className="text-[16px] numfont text-[#667085]">{item.rating}</span>
                            </div>
                            <div className="flex 2xl:pt-6 pt-6 flex-col w-fit justify-center items-center">
                                <span className="text-[34px]  text-[#101828] numfont">{item.price}</span>
                                <span className="text-[14px] text-[#101828]">هزار تومان</span>
                            </div>
                        </div>
                        
                            <hr className="hrcolor mt-10  mx-auto w-[80%]" />
                        <div className="flex  w-full 2xl:gap-7 gap-4    h-[27px] pt-5 justify-center ">
                            <div className="flex flex-row gap-1 h-10px items-center  w-fit">
                                <i className="fa fa-clock"></i>
                                <p className="2xl:text-[14px] text-[12px] text-[#667085]">{item.time}</p>
                            </div>
                            <div className="flex flex-row gap-1 h-10px items-center w-fit">
                                <i className="fa fa-book"></i>
                                <p className="2xl:text-[14px] text-[12px] text-[#667085]">21 درس</p>
                            </div>
                            <div className="flex flex-row gap-1 h-10px items-center w-fit">
                                <i className="fa fa-pencil "></i>
                                <p className="2xl:text-[14px] text-[12px]  text-[#667085]">سطح مبتدی</p>
                            </div>
                        </div>
                    </div>
                    <div  className="lg:w-[33.3%] max-md:min-w-[299px]  h-[380px]  2xl:h-[431px] shadow-black border-gray-300 border-2 cursor-pointer  bg-[#FFFFFF] rounded-2xl   ">
                        <img className="h-[50%] w-full rounded-t-2xl  bg-cover bg-center object-cover" src={item.image2} alt="" />
                        <h1 className="2xl:text-[20px] 2xl:px-12 text-[16px] text-[#252525] pr-5 pt-5">{item.title}</h1>
                        <div className="flex w-full relative px-5 2xl:px-12  pt-2 h-[54px] flex-row justify-between items-center ">
                            <p className="text-[#667085] text-[16px]">{item.name}</p>
                            <div className="flex flex-row w-fit items-center positionmobile  ">
                                <i className="fa fa-star star    "></i>
                                <span className="text-[16px] numfont text-[#667085]">{item.rating}</span>
                            </div>
                            <div className="flex  flex-col pt-6 w-fit justify-center items-center">
                                <span className="text-[34px]  text-[#101828] numfont">{item.price}</span>
                                <span className="text-[14px] text-[#101828]">هزار تومان</span>
                            </div>
                        </div>
                        
                            <hr className="hrcolor mt-10 mx-auto w-[80%]" />
                            <div className="flex  w-full 2xl:gap-7 gap-4    h-[27px] pt-5 justify-center ">
                            <div className="flex flex-row gap-1 h-10px items-center  w-fit">
                                <i className="fa fa-clock"></i>
                                <p className="2xl:text-[14px] text-[12px] text-[#667085]">{item.time}</p>
                            </div>
                            <div className="flex flex-row gap-1 h-10px items-center w-fit">
                                <i className="fa fa-book"></i>
                                <p className="2xl:text-[14px] text-[12px] text-[#667085]">21 درس</p>
                            </div>
                            <div className="flex flex-row gap-1 h-10px items-center w-fit">
                                <i className="fa fa-pencil "></i>
                                <p className="2xl:text-[14px] text-[12px]  text-[#667085]">سطح مبتدی</p>
                            </div>
                        </div>
                    </div>
                    <div  className="lg:w-[33.3%] max-md:min-w-[299px] h-[380px]  2xl:h-[431px] shadow-black border-gray-300 border-2 cursor-pointer  bg-[#FFFFFF] rounded-2xl   ">
                        <img className="h-[50%] object-center w-full rounded-t-2xl  bg-contain bg-center object-cover" src={item.image3} alt="" />
                        <h1 className="2xl:text-[20px] 2xl:px-12  text-[16px] text-[#252525] pr-5 pt-5">{item.title}</h1>
                        <div className="flex relative 2xl:px-12  w-full px-5 pt-2 h-[54px] flex-row justify-between items-center ">
                            <p className="text-[#667085] 2xl:text-[16px] text-[14px]">{item.name}</p>
                            <div className="flex flex-row w-fit positionmobile items-center  ">
                                <i className="fa fa-star star    "></i>
                                <span className="text-[16px] numfont text-[#667085]">{item.rating}</span>
                            </div>
                            <div className="flex 2xl:pt-6 flex-col pt-6 w-fit justify-center items-center">
                                <span className="text-[34px]  text-[#101828] numfont">{item.price}</span>
                                <span className="text-[14px] text-[#101828]">هزار تومان</span>
                            </div>
                        </div>
                        
                            <hr className="hrcolor mt-10 mx-auto w-[80%]" />
                            <div className="flex  w-full 2xl:gap-7 gap-4    h-[27px] pt-5 justify-evenly px-3">
                            <div className="flex flex-row gap-1 h-10px items-center  w-fit">
                                <i className="fa fa-clock"></i>
                                <p className="2xl:text-[14px] text-[12px] text-[#667085]">{item.time}</p>
                            </div>
                            <div className="flex flex-row gap-1 h-10px items-center w-fit">
                                <i className="fa fa-book"></i>
                                <p className="2xl:text-[14px] text-[12px] text-[#667085]">21 درس</p>
                            </div>
                            <div className="flex flex-row gap-1 h-10px items-center w-fit">
                                <i className="fa fa-pencil "></i>
                                <p className="2xl:text-[14px] text-[12px]  text-[#667085]">سطح مبتدی</p>
                            </div>
                        </div>
                    </div>
                          </div>
    </> );
}
 
export default Video;
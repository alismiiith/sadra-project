import axios from "axios";
import { useEffect, useState } from "react";
import Video from "./Video";

const Videos = () => {
    const [videos, setVideos] = useState([]);
    const [index , setIndex] = useState(0);
    const fetchVideo = async()=>{
        let res = await axios.get("http://localhost:3001/videos");
        setVideos(res.data);
    }
    const handleNext = (idx) => {
        setIndex(idx);
        
        }
        
        useEffect(()=>{
            fetchVideo();   
        },[])

    return ( 
        <>
        <div className="w-full flex     h-[840px]  lg:h-[815px] mt-10 mb-50  lg:flex justify-center items-center flex-col ">
            <div className="lg:w-[80%] my-10 lg:my-0 gap-5 lg:gap-0 w-full item-center  lg:justify-between  items-center flex lg:flex-row flex-col relative h-[30%] ">
            <div className="flex w-full justify-center lg:justify-start   lg:absolute lg:top-0 lg:right-0   ">
                <span className="text-[#4CA773]">__</span>
                <span className="text-[#4CA773] text-[16px] pt-2">دوره‌های محبوب</span>
             </div>
             <h1 className="lg:text-[40px] text-[#101828] text-[24px] text-justify lg:w-[40%] w-[80%] pt-1">بیش از 100 دوره‌ی فعال برای پیشرفت شما </h1>
             <span className="text-[18px] text-[#667085] lg:pr-10 w-[100%]  text-justify lg:w-[40%]">ما طیف وسیعی از دسته‌ها را برای کمک به شما در انتخاب دوره‌هایی که متناسب با تخصص شما هستند ارائه می‌کنیم. بیش از 100 دوره شما را از پایه راهنمایی می کند.</span>
            </div>
            <div className="lg:w-[80%]  w-full md:justify-center md:flex md:flex-col  overflow-hidden   ">
                <div className="w-[200%] lg:pt-3 md:w-[100%] md:justify-center  lg:justify-start md:gap-10   lg:w-[100%] overflow   flex flex-row  gap-7  mr-[16px] ">
                {["طراح UI/UX", "طراح گرافیک", "انیمیشن و 3D", "فرانت اند", "بک اند", "IOT"].map((text, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleNext(idx)}
                                className="lg:text-[16px] hover:text-[#2b2b2b] font-bold md:text-[16px] text-[12px]  hover:border-b-2 hover:transition-all hover:duration-100 hover:border-b-green-400 cursor-pointer text-[#98A2B3]"
                            >
                                {text}
                            </button>
                        ))}
                </div>
                <hr className="hrsilver lg:h-[100px]  lg:w-[100%] md:w-[90%] mr-[16px] md:mr-10 lg:mr-0     w-[250%] "/>
                <div className="  w-full lg:h-[500px] overflow flex pt-10  gap-3  lg:mt-5   ">
                    {videos?.map((item , idx)=>{
                        return(
                            <>
                            {idx === index &&(
                              <>
                              <Video item={item} idx={idx} key={item.id}/>
                              </>  
                            )}
                            </>
                        )
                    })}
                    
                </div>
            </div>
                <button className="text-[14px] rounded-2xl border-[#4CA773] mt-10 border-2 text-[#4CA773]  w-[152px] h-[48px]">دوره‌های بیشتر</button>
        </div>
        </>
     );
}
 
export default Videos;



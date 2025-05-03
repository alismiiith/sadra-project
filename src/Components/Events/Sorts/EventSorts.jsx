import axios from "axios";
import { useEffect, useState } from "react";
import Sort from "./Sort";
import Event from "./Event";
import Display from "./Display";
import SideBar from "./SideBar";
const EventsSorts = () => {
    const [sort, setSort] = useState([]);
    const [event , setEvent]= useState([]);
    const [display , setDisplay]= useState()
    const Data = [
        {
            id:"1",
            image1:"https://s3-alpha-sig.figma.com/img/c85f/7575/5c79c4541c0413225dfbe0fa0c3be7cf?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q7IC7Q0CGAsWQ0tNhiAX6HBnAy5vAR-xAs4RIc5tRKI8YKF7sS9J8iw8EJXvH0drgQG36vPuPMa6sKpksWHTl-XMIC54JAK-sv2ly-Q0vINgP19JOT55TTGjRVP5DJcSxQSUamWRqsj3yUYi443woOsoeisUvrY-A08LHNjwZErI0XMP9dsMOzDeZviaiFz2rstpoGyxB5U~9Srq3Ue~zkJYnUv0GqytZndeG3hQ7wVy-1KwSp2gpcn9xbGb9HfSAHde6dCcHHDL60AODa7WpHuxwmahRj4pCjnaGsrAxqndRqH9JFnU8dhtNf2m-gtv-hJO3sgejgKugsCfKREipw__",
            image2:"https://cdn1.vectorstock.com/i/1000x1000/57/15/work-coding-and-programming-on-a-laptop-vector-31045715.jpg",
            image3:"https://png.pngtree.com/thumb_back/fh260/background/20240610/pngtree-computer-of-a-programmer-with-lines-code-of-software-image_15746003.jpg",
            title:"نحوه طراحی دستی ایده‌ها",
            sort:"محبوب ترین ها",
            name:"استاد علی بابایی",
            rating:"(122)4.8",
            price:"128",
            time:"40 دقیقه"
        },
        {
            id:"2",
            image1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRInwp3KwXrDSLlYu5VB6A5wwEG-yblJD_EOw&s",
            image2:"https://cdn.mos.cms.futurecdn.net/x8oyLJtDJBPmL59WUoa36C.jpg",
            image3:"https://static.vecteezy.com/system/resources/thumbnails/051/261/577/small_2x/person-coding-on-a-laptop-with-vibrant-programming-code-on-the-screen-photo.jpeg",
            title:"نحوه طراحی دستی ایده‌ها",
            name:"استاد علی بابایی",
            sort:"جدیدترین ها",
            rating:"(122)4.8",
            price:"128",
            time:"40 دقیقه"
        },
        {
            id:"3",
            image1:"https://s3-alpha-sig.figma.com/img/93ff/f7fc/f322764cc233def66efe574dc0d4cd47?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WdK5PIQQZU0oKnggbJofGmrWTCCGgeEGbhtyLhLPcoj9MSUwaPXTzjfm2H3u2-KoAuGff6cl6P7v10k7POTBawCVCmXAzVG79-p5I0gqGLOh927ucGxcxkJ7Otjoy6c15N2HP~3Pd97bDSVNqOMkMQ7QuhJJrpUIPVDpu1rWyOZbXEg-dCW7jGgOB2jRKmP9mj9xmYnZ0yCElixGazAwtMUyo2sGqGde9DoZpwJZgL0OOSVw3RGpwECCK6j-XwxGQkkKu4in7o3UUAoVDqYepsIfi7i6F05EhX66BMw6ZTi--~OUtVp2k1GwZ6WBk0skoQzYt6DCuwVduosnrMqB5g__",
            image2:"https://s3-alpha-sig.figma.com/img/bb54/0c87/5a0170b1d006549ac00c9a181006ae66?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Di-4VaaG1ary6T1nMoerk5l84uc3oKgf21QWLQiZEpIvzkC1bdKE1FG4o4uV34oCXAo0HfVfQB4zGi-a3WUOk0jan8o7aAhbWkP~gGtt8~Gq-9jeTBz2k4kXIyRewb0Icb6PdlBtIafWgZmXV2W1mgMvj3jQtJuO7mUX2NMyldP4465iG0RCmB3n4Ol9nbfOrSwB~qmaUl6Glt8bV1zJ~Yo-UWj7wZAT1q6Z-SgfcCeP3ybHQUlkOgU8KuXsMzgTg6Dbfswk2-bRw5x0-bXi~eSU4ePl2YXg9H-AzJs5RsUGrrb349n2iqBalYbDlrd-evuNQyOiUkqLMIFiC3eUdw__",
            title:"طراحی رابط کاربری در شرکت‌های بزرگ",
            name:"استاد منا عزیزی",
             sort:"رویداد تازه",
            rating:"(122)4.8",
            price:"128",
            unit2:"هزارتومان",
            time:"25 آبان 1402"
        },
        {
            id:"4",
            image1:"https://s3-alpha-sig.figma.com/img/c611/abb4/8be2f041c11f66f82672c3a523e52b38?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IVoE7i0SXp7c6WF4DVaCrvLtI0q0ZzrXXohSK1WKL92lSCPE7-uN2Ppu~nwVexZAlALV9DNwe7SYtm~zx56sQIRe9925s57~3wxSRB9QdSrHb2ie4QWIvZtqMX9n942piBIEcsF-aKk3bMHGAmLI8LgamRj7z-uAFtvUFau8qEqRpDeu2QmFs~m8pKEGjZNAVY8G9QWasp28wR3hIiyqTDbgjrshgf0ablw~H-YQI7mpIYF4G49UjrsGdIlWBJen8aX49ejpVLyVVqtP6lT-OQxL9VHTHwPdtDCPDXqScDXw-ChiyLGY7~NMmJQT8zr6Rnz1GAzxlhxaeODJwbilcA__",
            image2:"https://s3-alpha-sig.figma.com/img/0d82/d465/7ddc6aaeef53eb4a268829a6d7c22dda?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oEvtCMX7eY0LSkdTqzFZsLT3kEe6vBVHbpa8C4-JRw-myEimu~-SYRBmMAPJELiNarNEmM4OLQC6Mmui0VGpRm2EI6A2YkQGk4Bc6oaEcEcPfAAvnEviCQ7GmpYozE3gFvZBaytJKKU-iVOnyfWxkECwmo9nfl1zROFuBL4G7gP3wrVKmSf7lJitOoKAPrYi8RXpG86jH0r2drKj1qHOXI58TODKuCV82shhUYTutmQPvb~5ZmyDL0tj1Pa5IdQcxGPs55WVqtTZM99dN-pruXim7iNhyDgvT07UnUsku8AfOjIGDW54lUJh14zISHdAg6O2usCHjBE8ifMZsgfVow__",
            title:"طراحی رابط کاربری در شرکت‌های بزرگ ",
            name:"استاد مرتضی اویسی",
            sort:"گرانترین",
            rating:"(182)3.8",
            price:"240",
            unit2:"هزارتومان",
            time:"25 آبان 1402"
        }
    ]
    const HandleEvent = ()=>{
        const Eventfetch = async() =>{
            try {
                let response = await axios.get("http://localhost:3001/Future");
                setEvent(response.data)
                setSort(null)
                setDisplay(null)
            } catch (error) {
                console.log(error.message);
            }
        }
        Eventfetch()
        
    }
   
    const handleNext = () => {
        const fetchVideo = async()=>{
            try {
                let res = await axios.get("http://localhost:3001/EventSort");
            setSort(res.data);
            setDisplay(null)
;
            setEvent(null)
            } catch (error) {
                console.log(error.message);
            }
        }  
        fetchVideo()  
        
        }
        const onchangeCombo = (e)=>{
            const selectedId = e.target.value;
            const selectedDisplay = Data.filter((d)=>d.id == selectedId)[0]
            setDisplay(selectedDisplay)
            setSort(null)
            setEvent(null)
        }
        useEffect(()=>{
            setDisplay(Data[1])
        },[])
        
       

    return ( 
        <>
        <div className="w-full flex  lg:items-start px-[5%]    lg:flex-row     mt-10 mb-50  lg:flex justify-center items-center flex-col ">
            <div className="lg:w-[20%] lg:h-full  lg:items-end    my-10 lg:my-0 gap-5 lg:gap-0 w-full   lg:justify-start   items-center flex lg:flex-row flex-col relative h-[30%] ">
            <div className="flex w-full lg:hidden justify-center   lg:absolute lg:top-0 lg:right-0   ">
                <span className="text-[#4CA773]">__</span>
                <span className="text-[#4CA773] text-[16px] pt-2">دوره‌های محبوب</span>
             </div>
             <h1 className="lg:text-[40px] lg:hidden text-[#101828] text-[24px] text-justify lg:w-[40%] w-[80%] pt-1">بیش از 100 دوره‌ی فعال برای پیشرفت شما </h1>
             <span className="text-[18px] lg:hidden text-[#667085] lg:*:pr-10 w-[80%] text-justify lg:w-[40%]">ما طیف وسیعی از دسته‌ها را برای کمک به شما در انتخاب دوره‌هایی که متناسب با تخصص شما هستند ارائه می‌کنیم. بیش از 100 دوره شما را از پایه راهنمایی می کند.</span>
             <div className="lg:flex md:hidden gap-5   h-[600px]    test  w-full flex-col">
               <SideBar/>
             </div>
            </div>
            
            <div className="lg:w-[80%]   w-full md:justify-center md:flex    md:flex-col  overflow-hidden h-[60%]  ">
                <div className="w-full  md:w-[100%] md:justify-start md:gap-10 md:pr-10   lg:w-[100%]  h-[40px]   flex flex-row  gap-7  pr-1 ">
                
                            <button
                                onClick={handleNext}
                                className="lg:text-[16px] md:text-[16px] text-[12px]  hover:border-b-2 hover:transition-all hover:duration-100 hover:border-b-green-400 cursor-pointer font-bold text-[#98A2B3]"
                            >
                               دوره ها(6)
                            </button>
                            <button
                                onClick={HandleEvent}
                                className="lg:text-[16px] md:text-[16px] text-[12px]  hover:border-b-2 hover:transition-all hover:duration-100 hover:border-b-green-400 cursor-pointer font-bold text-[#98A2B3]"
                            >
                               رویدادها
                            </button>
                            <button
                                
                                className="lg:text-[16px] md:text-[16px] text-[12px]  hover:border-b-2 hover:transition-all hover:duration-100 hover:border-b-green-400 cursor-pointer font-bold text-[#98A2B3]"
                            >
                               
                            </button>
                                </div>
                <hr className="hrsilver lg:w-[100%] md:w-[90%] md:mr-10 mb-10    "/>
                <div className="w-full justify-between flex mb-10 px-4 lg:px-10   ">
                    <div className="right flex items-center ">
                        <span className="text-[14px] md:text-[16px] lg:text-[18px] font-bold text-[#252525]">چند نتیجه یافت شد</span>
                    </div>
                    <div className="left flex flex-row items-center">
                    <label className="text-[10px] font-semibold text-[#7C7C7C] md:text-[12px] lg:text-[14px]" for="event">مرتب‌سازی براساس:</label>

                    <select value={display?.id} onChange={(e)=>onchangeCombo(e)} className="text-[12px] font-bold text-[#252525]" name="event" id="event">
                   {Data.map((item)=>(
                    <option key={item.id} value={item.id}>{item.sort}</option>
                   ))}
  
                    </select>

                    </div>
                </div>
                
                <div className="  w-full md:flex-row md:justify-center lg:justify-start  flex-col items-center flex-wrap   flex pt-1 gap-3 lg:px-10   ">
                {display ? ( 
                    <Display display={display} key={display.id} />
                ):null}
                    {sort?.map((item)=>{
                        return(
                            <>
                              <Sort item={item}  key={item.id}/>
                            </>
                        )
                    })}
                    {event?.map((item)=>{
                           return(
                            <Event item={item} key={item.id}/>
                           )
                          })}

                    
                    
                </div>
            </div>
               
        </div>
        </>
     );
}
 
export default EventsSorts;



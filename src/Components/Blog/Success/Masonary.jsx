import { useEffect } from "react";
import { useState } from "react";

const Masonary = () => {
  const [masonry, setMasonary] = useState([]);
  const fetchMasonary = async () => {
    try {
      const response = await fetch("http://localhost:3001/Masonary");
      const data = await response.json();
      setMasonary(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchMasonary();
  }, []);
  return (
    <>
      <div className="Masonary  px-5 lg:p-[50px]">
        <div className="masonry-layout ">
          {masonry?.map((item) => {
            return (
              <div
                style={{ height: `${item.height}px` }}
                className="masonry-item w-[343px] mt-3 md:mt-0 lg:mt-0 mb-10 md:w-[332px] lg:w-[376px]  "
                key={item.id}
              >
                {item.image ? (
                  <>
                  <div className="flex w-full pr-5 pt-5">
                       <img className="rounded-[50%] w-[50px] h-[50px]" src={item.profile} alt="" />
                       <div className="flex flex-col w-fit justify-center px-3 gap-x-3">
                        <p className="text-[12px] text-[#475467]">{item.name}</p>
                        <span className="text-[10px] text-[#98A2B3]">{item.profession}</span>
                       </div>
                       
                  </div>
                  <div className="w-full flex flex-col items-center justify-center  mt-5">
                    <img className="lg:w-[328px] w-[295px] h-[296px]  lg:h-[350px] rounded-lg object-cover " src={item.image} alt="" />
                    <p className="text-[12px] text-[#475467] my-3 mx-5 text-center">{item.des}</p>
                  </div>
                  <hr className="hrsilver w-[90%] mx-auto" />
                  <div className="w-full pl-5 h-[50px] items-center flex justify-end">
                    <p className="text-[#475467] font-bold text-[14px]">{item.date}</p>
                  </div>
                  </>
                ) :null}
                {
                  item.video ? (
                       <>
                       <video controls className="relative  w-full h-full object-cover rounded-xl "  src={item.video}></video>
                       </>
                  ):null

                }
                {
                  item.deslong? (
                    <>
                    <div className="flex w-full pr-5 pt-5">
                       <img className="rounded-[50%] w-[50px] h-[50px]" src={item.profile} alt="" />
                       <div className="flex flex-col w-fit justify-center px-3 gap-x-3">
                        <p className="text-[12px] text-[#475467]">{item.name}</p>
                        <span className="text-[10px] text-[#98A2B3]">{item.profession}</span>
                       </div>
                       
                  </div>
                  <div className="block px-4 my-4 ">
                    <p className="text-[12px] text-[#475467] text-center ">{item.deslong}</p>
                  </div>
                  <hr className="hrsilver w-[90%] mx-auto" />
                  <div className="w-full pl-5 h-[50px] items-center flex justify-end">
                    <p className="text-[#475467] font-bold text-[14px]">{item.date}</p>
                  </div>  
                    </>
                  ):null
                }
              </div>
            );
          })}

          {/* {
            item.image ?//image :
            item.video ? //video : 
            item.txt ? //txt : "error"
          } */}
        </div>
      </div>
    </>
  );
};

export default Masonary;

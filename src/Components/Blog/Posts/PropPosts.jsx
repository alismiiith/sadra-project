import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PropPosts = () => {
  const [Anatomy, setAnatomy] = useState([]);
  const fetchAnatomy = async () => {
    try {
      const data = await fetch("http://localhost:3001/Posts");
      const res = await data.json();
      setAnatomy(res)
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchAnatomy();
  }, []);
  return (
    <>
      <div className="w-full flex flex-col md:flex-row flex-wrap items-center ">
      {Anatomy?.map((anatomy) => {
        return (
            <Link to={"/Blog"} key={anatomy.id} className="w-[343px]  relative md:min-w-[324px] md:h-[492px] lg:w-[376px] lg:h-[522px] gap-5  h-[480px] border-2  border-gray-300 rounded-lg flex-col flex mx-auto my-3 ">
            <button className="text-[10px] absolute top-5 bg-[#000000A6] opacity-65 right-2 text-[#FFFFFF]  px-3 py-1 border-white border-2 rounded-3xl ">{anatomy.Hashtag1}</button>
            <button className="text-[10px] bg-[#000000A6] opacity-65 absolute top-5 right-20 text-[#FFFFFF] mx-5 px-4 py-1 border-white border-2 rounded-3xl ">{anatomy.Hashtag2}</button>
            <img
              className="w-full h-[280px] object-cover rounded-t-lg"
              src={anatomy.background}
              alt=""
            />
            <p className="text-[14px] md:mx-3 md:text-[16px] lg:text-[18px] text-[#101828] pr-3 font-bold ">
              {anatomy.title}
            </p>
            <span className="text-justify md:mx-3 text-[#667085] px-3 text-[12px] md:text-[14px] lg:text-[16px]">
              {anatomy.des}
            </span>
            <hr className="hrsilver w-[80%] self-center" />
            <div className="flex w-[100%] items-center gap-x-3 pb-5 pr-5  h-[50px]">
              <img
                className="w-[50px] h-[50px] rounded-[50%] object-cover"
                src={anatomy.image1}
                alt=""
              />
              <div className="flex flex-col w-fit ">
                <h3 className="text-[10px] font-bold text-[#475467]">
                  {anatomy.name}
                </h3>
                <span className="text-[#98A2B3] text-[8px]">
                  {anatomy.profession}
                </span>
              </div>
            </div>
          </Link>
        );
      })}
      </div>
    </>
  );
};

export default PropPosts;

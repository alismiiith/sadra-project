import axios from "axios";
import { useEffect, useState } from "react";
import Student from "./Student";

const Students = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const goToNextPicture = () => {
    if (index === data.length - 1) {
      setIndex(0);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  const gotoPrevPicture = () => {
    if (index === 0) {
      setIndex(data.length - 1);
    } else {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };
  const fetchStudent = async () => {
    let res = await axios.get("http://localhost:3001/Student");
    setData(res.data);
  };

  useEffect(() => {
    fetchStudent();
  }, []);
  return (
    <>
      <div className="w-full   h-[740px] justify-center flex flex-col karim items-center bg-[#1C1C1C]">
        <div className="flex w-full justify-center gap-3 lg:pt-30  ">
          <span className="text-[#4CA773]">__</span>
          <span className="text-[#4CA773] text-[16px] pt-2">
            داستان های موفقیت
          </span>
        </div>
        <h1 className="text-center numfont text-[20px] lg:text-[40px] text-[#FFFFFF] font-bold pt-5 ">
          بیش از 500 دانش‌آموخته <br />
          از مسیر خود راضی بودند
        </h1>
        <div className="slider w-[80%]   h-[332px]  mt-10 ">
          <div className="slides">
            {data?.map((item, idx) => {
              return (
                <>
                  {idx === index && (
                    <Student
                      item={item}
                      index={index}
                      idx={idx}
                      key={item.id}
                    />
                  )}
                </>
              );
            })}
          </div>
          <div onClick={goToNextPicture} className="next ">
            <i className="fa fa-arrow-left scale-150 color   absolute rounded-4xl cursor-pointer left-3 lg:top-20 top-40"></i>
          </div>
          <div onClick={gotoPrevPicture} className="prev ">
            <i className="fa fa-arrow-right color scale-150   right-3 absolute cursor-pointer rounded-4xl lg:top-20 top-40"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Students;

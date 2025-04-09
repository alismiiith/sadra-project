import { useEffect, useRef, useState } from "react";

const Sight = () => {
  const [sight, setSight] = useState([]);
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  const playHandler = (idx) => {
    const currentVideo = videoRefs.current[idx];
    if (playingIndex === idx) {
      currentVideo.pause();
      setPlayingIndex(null);
    } else {
      if (playingIndex !== null) {
        videoRefs.current[playingIndex].pause();
      }
      currentVideo.play();
      setPlayingIndex(idx);
    }
  };

  const handleVideo = async () => {
    try {
      const response = await fetch("http://localhost:3001/Sight");
      const data = await response.json();
      setSight(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    handleVideo();
  }, []);

  const isLargeScreen = window.innerWidth >= 1024; // Check if screen size is 'lg' and above

  return (
    <>
      <div className="block lg:flex lg:flex-col w-full   my-14">
        <div className="flex md:justify-center lg:justify-start  w-full  gap-2 items-center lg:pr-[200px] ">
          <span className="text-[#4CA773] mb-3 leading-[30px]">__</span>
          <p className="text-[#4CA773] text-[14px] md:text-[16px]">چرا ما</p>
        </div>
        <h1 className="text-[#252525] text-[24px]  md:text-[34px] lg:pr-[200px] lg:text-[40px] md:text-center  lg:text-start  font-bold">
          صدرا از نگاه همکاران
        </h1>
        <div className="flex w-full  lg:w-[80%] lg:px-0 lg:self-center  px-10 overflow-auto gap-x-5 my-5">
          {sight
            ?.filter((_, idx) => !isLargeScreen || idx !== sight.length - 1) // Remove the last item if screen size is 'lg'
            .map((item, idx) => (
              <div key={item.id} className="w-fit h-fit relative">
                <video
                  ref={(el) => (videoRefs.current[idx] = el)}
                  className="min-w-[247px] min-h-[160px] md:min-w-[324px] 2xl:min-w-[386.67px] 2xl:h-[251px]  md:h-[210px] rounded-xl object-cover"
                  src={item.video}
                  alt=""
                />
                <p className="text-[12px] md:text-[14px] absolute bottom-8 md:bottom-10 right-2 font-bold text-[#F9FAFB] z-999">
                  {item.title}
                </p>
                <span className="text-[10px] md:text-[12px] absolute bottom-4 right-2 font-bold text-[#F9FAFB] z-999">
                  {item.sub}
                </span>
                <i
                  onClick={() => playHandler(idx)}
                  className={`fa ${
                    playingIndex === idx
                      ? "fa-pause text-[#FFFFFF]"
                      : "fa-play text-[#FFFFFF]"
                  } absolute left-5 bottom-5 md:bottom-7 text-[30px] cursor-pointer rounded-[50%]`}
                ></i>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Sight;

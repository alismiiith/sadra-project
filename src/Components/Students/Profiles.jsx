const Profiles = () => {
    return ( 
        <>
        <div className="flex w-full flex-col gap-8 my-20 ">
            <h1 className="text-[20px] md:text-[28px] font-bold text-[#252525] text-center md:text-start lg:pr-10 md:pr-5">با دانشجویان دیگر ما هم آشنا بشید</h1>
            <div className="flex lg:justify-around overflow-x-auto py-10 w-full px-20 md:px-10 gap-5">
                <div className="h-[266px] min-w-[200px] border-gray-300 flex-col items-center justify-between border-2  py-5  rounded-xl flex">
                   <img className="w-[176px] h-[150px] rounded-xl " src="https://s3-alpha-sig.figma.com/img/ab41/a74a/ead9e7cb47a87ad793df9b09ed9d1ea5?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pdUsMmmYQUL0~zolmxxiCOaDml~uGUXe~6u2lAta7i3syxLMHgH~H4orCDmqBJq-8VoYqp53B~PfmLq1IbfeZDokP46S6zVRZtfT~sNqPGP5EpLhVweRT1eKTom5UzEGRgjEeD1fDDLOzWtH6Vd6Q-sBLp1AUUVgTKXwEUZttjM0LjquhlmXUdKJJ3lIIgDDckjnNoiadzJr~3-baJ5eBAIPX3IVZhjUfGNj-4NnRFtvk9ha47j2aL5W7H2qc2x~Mm9X-u6Z9hLmibsbZ4f2ZJbVnnJGs7-EqdLVNLQuCyY6YaOPKy2TjxbfcLVajkCo-jMmPuN1jPnJ3d69b3d3qw__" alt="" />
                   <div className="flex flex-col w-full items-center">
                   <p className="text-[16px] text-[#1D2939]">احسان جلیل زاده</p>
                   <span className="text-[#667085] text-[14px]">مدیر محصول - بلوبانک</span>
                   </div>
                </div>
                <div className="h-[266px] min-w-[200px] border-gray-300 flex-col items-center justify-between border-2  py-5  rounded-xl  flex">
                   <img className="w-[176px] h-[150px] rounded-xl " src="https://s3-alpha-sig.figma.com/img/1e65/df21/602018c71a018d78702cd0b61812ace1?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TG~Hg8bVn06KD7NHWy0HOn99-jcdmec4jo9RYcuXFpNZvYGAur680f3TkFWGM5p8lSlGDci7cSjDJEqh8qO7h8bV88T3YXCeSKMy-PSkOuLUQM4KRb4WMyDBmbCXSk11vg4rHWHxOcR3Yzi~DC6b~fAtj3RECW1lKA1hb4euPyBcc87LAaLIwVVAkjMzKsFBebOmeUC7BG~QHfbzqGF-797PcV5JX9E7DEmu8ae538Nle0YKGeo9BXEn2cvfJoPM3tHUxTCkZk2tiLBC1N5tl35E789w1NtAz5lt1YrHrzTtAHnEWNUMTWu6q~oq3oREzX5ipVcvHcGzTcW56ktuUA__" alt="" />
                   <div className="flex flex-col w-full items-center">
                   <p className="text-[16px] text-[#1D2939]">زهرا فراهانی</p>
                   <span className="text-[#667085] text-[14px]">طراح محصول - تپسی</span>
                   </div>
                </div>
                <div className="h-[266px] min-w-[200px] border-gray-300 flex-col items-center justify-between border-2  py-5  rounded-xl flex">
                   <img className="w-[176px] h-[150px] rounded-xl " src="https://s3-alpha-sig.figma.com/img/e43c/588f/502755e8f59060d98927ab6e9871038c?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MAbV3Wa1u18Kh~e8yhJk5SiMLdLEB9xtzlvInM-JGQfyFL1-rwF9HcZIu-Z4i5dK1wyem4j5aT2hVnKrBiqUaobumE02ntZJA0B36bTitdgAJxrhL6ehAkko8BFmDkSKwieMK8DGN3Q6XK4iqRgxW3fNXlab8ybn18yeG4pQ8ay8rarkhgHVk0KiruveLDFtlKoqQMAlLtzADcTbT6snbRH3AN5R3n3kzf~CEN8Abal2O8yMMrCDl2xH3oUC8wOCbJdOYX88lk3NOevDKE2HUv8gcplIPM2puXBPUCPJrx-mIXZuVK9myzUtOaz4ZDWpqxTybSeDO5slMxPojTj-gg__" alt="" />
                   <div className="flex flex-col w-full items-center">
                   <p className="text-[16px] text-[#1D2939]">ستایش احمدی</p>
                   <span className="text-[#667085] text-[14px]">مدیر محصول - بلوبانک</span>
                   </div>
                </div>
                <div className="h-[266px] min-w-[200px] border-gray-300 flex-col items-center justify-between border-2  py-5  rounded-xl flex">
                   <img className="w-[176px] h-[150px] rounded-xl object-cover " src="https://img.freepik.com/free-photo/emotions-people-concept-headshot-serious-looking-handsome-man-with-beard-looking-confident-determined_1258-26730.jpg" alt="" />
                   <div className="flex flex-col w-full items-center">
                   <p className="text-[16px] text-[#1D2939]">آرش قوی دل</p>
                   <span className="text-[#667085] text-[14px]">طراح بک اند</span>
                   </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Profiles;
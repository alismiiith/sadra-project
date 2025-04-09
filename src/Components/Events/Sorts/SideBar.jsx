const SideBar = () => {
    return ( 
        <>
         <div className="w-full flex justify-between  items-center flex-row px-3">
                    <span className="text-[#252525] mt-3 text-[16px] font-bold">دسته‌بندی‌ها</span>
                    <span className="">__</span>
                </div>
                <div className="w-fit items-center flex flex-row h-auto gap-x-3 pr-2 ">
                        <input type="checkbox" id="checked1" className="scale-y-200 scale-x-200 " placeholder="" />
                    <label className="" htmlFor="checked1">
                        <span className="text-[16px] text-[#667085] ">(۱۶۰) UI/UX طراحی</span>
                    </label>
                </div>
                <div className="w-fit items-center flex flex-row h-auto gap-x-3 pr-2 ">
                        <input type="checkbox" id="checked2" className="scale-y-200 scale-x-200 " placeholder="" />
                    <label className="" htmlFor="checked2">
                        <span className="text-[16px] text-[#667085] ">(۹۰) Graphic طراحی</span>
                    </label>
                </div>
                <div className="w-fit items-center flex flex-row h-auto gap-x-3 pr-2 ">
                        <input type="checkbox" id="checked3" className="scale-y-200 scale-x-200 " placeholder="" />
                    <label className="" htmlFor="checked3">
                        <span className="text-[16px] text-[#667085] ">(۲۴) Front-End</span>
                    </label>
                </div>
                {/* سری دوم */}
                <div className="w-full flex justify-between  items-center flex-row px-3">
                    <span className="text-[#252525] mt-3 text-[16px] font-bold">قیمت ها</span>
                    <span className="">__</span>
                </div>
                <div className="w-fit items-center flex flex-row h-auto gap-x-3 pr-2 ">
                        <input type="checkbox" id="checked1" className="scale-y-200 scale-x-200 " placeholder="" />
                    <label className="" htmlFor="checked1">
                        <span className="text-[16px] text-[#667085] ">رایگان (۱۸)</span>
                    </label>
                </div>
                <div className="w-fit items-center flex flex-row h-auto gap-x-3 pr-2 ">
                        <input type="checkbox" id="checked2" className="scale-y-200 scale-x-200 " placeholder="" />
                    <label className="" htmlFor="checked2">
                        <span className="text-[16px] text-[#667085] ">تخفیف‌دارها (۱۸)</span>
                    </label>
                </div>
                {/* سری سوم */}
                <div className="w-full flex justify-between  items-center flex-row px-3">
                    <span className="text-[#252525] mt-3 text-[16px] font-bold">زمان</span>
                    <span className="">__</span>
                </div>
                <div className="w-fit items-center flex flex-row h-auto gap-x-3 pr-2 ">
                        <input type="checkbox" id="checked1" className="scale-y-200 scale-x-200 " placeholder="" />
                    <label className="" htmlFor="checked1">
                        <span className="text-[16px] text-[#667085] ">رویدادهای آینده (۱۸)</span>
                    </label>
                </div>
                <div className="w-fit items-center flex flex-row h-auto gap-x-3 pr-2 ">
                        <input type="checkbox" id="checked2" className="scale-y-200 scale-x-200 " placeholder="" />
                    <label className="" htmlFor="checked2">
                        <span className="text-[16px] text-[#667085] ">رویدادهای گذشته (۱۸)</span>
                    </label>
                </div>
        </>
     );
}
 
export default SideBar

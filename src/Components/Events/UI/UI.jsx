import HeaderUI from "./HeaderUI";
import History from "./History";
import Learn from "./Learn";
import Master from "./Master";
import Teachers from "./Teachers";

const UI = () => {
    return ( 
        <>
        <div className="w-full bg-[#F9F9F9]">
        <HeaderUI/>
        <Master/>
        <Learn/>
        <History/>
        <Teachers/>
        </div>
        </>
     );
}
 
export default UI;
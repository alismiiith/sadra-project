import Image from "../Image";
import Form from "./Form";

const Pc = () => {
    return ( 
        <>
        <div className="w-full  lg:py-[50px] flex flex-col lg:flex-row">
           <Form/>
           <Image/> 
        </div>
        </>
     );
}
 
export default Pc;
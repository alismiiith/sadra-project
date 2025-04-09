import axios from "axios";
import { useEffect, useState } from "react";
import Commentone from "./Commentone";
import Commenttwo from "./Commenttwo";

const Comments = () => {
    const [comments , setComments] = useState([]);
    const fetchComments = async()=>{
        let res = await axios.get("http://localhost:3001/Comments");
        setComments(res.data);
    }
    useEffect(()=>{
        fetchComments();
    },[])
    return ( 
        <>
         <div class="overflow-hidden  lg:block lg:h-[758px] w-full mt-10 lg:pt-10 ">
         <div className="flex w-full justify-center ">
                            <span className="text-green-400">__</span>
                            <span className="text-green-400 text-[16px] pt-2">نظرات ما</span>
                        </div>
            <h1 className="lg:text-[52px] text-[24px] text-[#101828] text-center">نظرات همراهان قبلی صدرا</h1>
        <div className="scrolling-text   flex  font-semibold  mt-20   ">
            {comments?.map((item)=>{
                return(
                    <Commentone item={item} key={item.id}/>
                )
            })}
            
        </div>
        <div className="scrolling-prev   font-semibold flex mt-3 lg:mt-20   ">
            {comments?.map((item)=>{
                return(
                    <Commenttwo item={item} key={item.id}/>
                )
            })}
            
        </div>
        
        
    </div>
        </>
     );
}
 
export default Comments;
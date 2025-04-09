
import HeaderPosts from "./HeaderPosts";
import Lecture from "./lecture";
import PropPosts from "./PropPosts";

const Posts = () => {
    
    return ( 
        <>
        <HeaderPosts/>
        <Lecture/>
        <h1 className="text-[18px] font-bold text-[#1D2939] pr-5">پست های مرتبط </h1>
        <PropPosts/>
        </>
     );
}
 
export default Posts;

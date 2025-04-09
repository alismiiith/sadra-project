import { Route, Routes } from "react-router-dom";
import Blog from "./Blog";
import Posts from "./Posts/Posts";
import Success from "./Success/Success";

const RouterBlog = () => {
    return ( 
        <>
        <Routes>
            <Route path="/" element={<Blog/>}/>
            <Route path="/Posts" element={<Posts/>}/>
            <Route path="/Success" element={<Success/>}/>
        </Routes>
        </>
     );
}
 
export default RouterBlog;
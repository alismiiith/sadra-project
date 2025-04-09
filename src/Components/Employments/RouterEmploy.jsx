import { Route, Routes } from "react-router-dom";
import Employments from "./Employments";

const RouterEmploy = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Employments />} />
        </Routes>
     );
}
 
export default RouterEmploy;
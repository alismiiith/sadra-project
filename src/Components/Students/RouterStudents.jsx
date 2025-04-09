import { Route, Routes } from "react-router-dom";
import Students from "./Students";

const RouterStudents = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Students />} />
        </Routes>
     );
}
 
export default RouterStudents;
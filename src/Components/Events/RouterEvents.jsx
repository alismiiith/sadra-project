import { Route, Routes } from "react-router-dom";
import Events from "./Events";
import UI from "./UI/UI";

const RouterEvents = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Events/>}/>
            <Route path="/UIUX" element={<UI/>}/>
        </Routes>
     );
}
 
export default RouterEvents;
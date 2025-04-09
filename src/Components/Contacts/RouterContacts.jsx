import { Route, Routes } from "react-router-dom";
import Contacts from "./Contacts";

const RouterContacts = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Contacts />} />
        </Routes>
     );
}
 
export default RouterContacts;
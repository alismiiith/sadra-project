import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import RouterEvents from "../Events/RouterEvents";
import Footer from "../Home/Footer";
import RouterBlog from "../Blog/RouterBlog";
import RouterStudents from "../Students/RouterStudents";
import RouterEmploy from "../Employments/RouterEmploy";
import RouterContacts from "../Contacts/RouterContacts";
import Learning from "../Learning/Learning";
import Login from "../Login/Login";

const App = () => {
  return (
    <>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Events/*" element={<RouterEvents />} />
          <Route path="/Blog/*" element={<RouterBlog />} />
          <Route path="/Students/*" element={<RouterStudents />} />
          <Route path="/Employments/*" element={<RouterEmploy />} />
          <Route path="/Contacts/*" element={<RouterContacts />} />
          <Route path="/Learning" element={<Learning />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

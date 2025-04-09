
import Comments from "./Comments/Comments";
import Footer from "./Footer";
import Futures from "./Future/Futures";
import Graduated from "./Graduated";
import Header from "./Header";
import Increase from "./Increase";
import Students from "./Student/Students";
import Teaching from "./Teaching";
import Videos from "./Videos/Videos";
import Why from "./Why";

const Home = () => {
    return ( 
        <>
        <Header/>
        <Graduated/>
        <Why/>
        <Teaching/>
        <Students/>
        <Videos/>
        <Increase/>
        <Futures/>
        <Comments/>
        </>
     );
}
 
export default Home;
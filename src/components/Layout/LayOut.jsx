import { Outlet } from "react-router-dom";
import NavBar from "../Shared/Navbar/NavBar";
import Footer from "../Shared/Footer/Footer";

const LayOut = () => {
    return (
        <div>
            <div className="sticky top-0 z-10 bg-black text-white bg-opacity-40">
                <NavBar></NavBar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LayOut;
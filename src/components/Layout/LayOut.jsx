import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Shared/Navbar/NavBar";
import Footer from "../Shared/Footer/Footer";

const LayOut = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp');
    return (
        <div>
            {
                <div className="sticky top-0 z-10 bg-black text-white bg-opacity-40">
                    <NavBar></NavBar>
                </div>
            }
            <Outlet></Outlet>
            {
                noHeaderFooter ||
                <Footer></Footer>
            }
        </div>
    );
};

export default LayOut;
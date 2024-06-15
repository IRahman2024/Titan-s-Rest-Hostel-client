import { NavLink, Outlet } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FaBook, FaHome, FaShoppingBag, FaUser, FaUsers } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaRankingStar } from "react-icons/fa6";
import { CiMenuBurger, CiViewList } from "react-icons/ci";
import { MdContactPhone, MdMenuBook } from "react-icons/md";
// import useCarts from "../../hooks/useCarts";
import { PiForkKnifeFill } from "react-icons/pi";
import { IoFastFood, IoPersonCircleSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
// import useAdmin from "../../hooks/useAdmin";

const DashBoard = () => {
    // const [cart] = useCarts();

    // const [isAdmin] = useAdmin();
    const isAdmin = !false;

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-600">
                <ul className="menu text-white">
                    {/*  */}
                    {
                        isAdmin ? <>
                            {/* // admin panel */}
                            <li className="p-2">
                                <NavLink to='/'>
                                    <FaHome />
                                    Home</NavLink>
                            </li>
                            <li className="p-2">
                                <NavLink to='/dashboard/adminProfile'>
                                    <CgProfile />
                                    Admin Profile</NavLink>
                            </li>
                            <li className="p-2">
                                <NavLink to='/dashboard/manageUsers'>
                                    <FaUsers />
                                    Manage Users</NavLink>
                            </li>
                            <li className="p-2">
                                <NavLink to='/dashBoard/addMeal'>
                                    <IoFastFood />
                                    Add Meal</NavLink>
                            </li>
                            <li className="p-2">
                                <NavLink to='/dashBoard/allMeals'>
                                    <IoFastFood />
                                    All Meals</NavLink>
                            </li>
                            <li className="p-2">
                                <NavLink to='/dashBoard/allReviews'>
                                    <CiViewList />
                                    All Reviews</NavLink>
                            </li>
                            <li className="p-2">
                                <NavLink to='/dashBoard/serve'>
                                    <IoFastFood />
                                    Serve Meals</NavLink>
                            </li>
                            <li className="p-2">
                                <NavLink to='/dashboard/upComing'>
                                    <CiViewList />
                                    Up Coming Meals</NavLink>
                            </li>
                        </> : <>
                            {/* // user */}
                            <li className="p-2">
                                <NavLink to='/'>
                                    <FaHome />
                                    User Home</NavLink>
                            </li>
                            {/* <li className="p-2">
                                <NavLink to='/dashboard/cart'>
                                    <FiShoppingCart />
                                    My Cart({cart.length})</NavLink>
                            </li> */}
                            <li className="p-2">
                                <NavLink to='/dashboard/userProfile'>
                                    <IoPersonCircleSharp />
                                    User Profile</NavLink>
                            </li>
                            <li className="p-2">
                                <NavLink to='/dashboard/MyReview'>
                                    <FaRankingStar />
                                    My Review</NavLink>
                            </li>
                            <li className="p-2">
                                <NavLink to='/dashboard/paymentHistory'>
                                    <CiViewList />
                                    Payment History</NavLink>
                            </li>
                            <li className="p-2">
                                <NavLink to='/dashboard/myRequest'>
                                    <IoFastFood />
                                    My Request</NavLink>
                            </li>

                        </>
                    }

                    {/* <li className="divider"></li>

                    common side-bar
                    <li className="p-2">
                        <NavLink to='/'>
                            <FaHome />
                            Home</NavLink>
                    </li>
                    <li className="p-2">
                        <NavLink to='/'>
                            <MdMenuBook />
                            Menu</NavLink>
                    </li>
                    <li className="p-2">
                        <NavLink to='/'>
                            <FaShoppingBag></FaShoppingBag>
                            Shop</NavLink>
                    </li>
                    <li className="p-2">
                        <NavLink to='/'>
                            <MdContactPhone></MdContactPhone>
                            Contact</NavLink>
                    </li> */}
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;
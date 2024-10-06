import { createBrowserRouter } from "react-router-dom";
import LayOut from "../Layout/LayOut";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home/Home";
import AddMeals from "../pages/AddMeals/AddMeals";
import MealDetails from "../pages/Home/MealsSection/MealDetails";
import Meals from "../pages/Meals/Meals";
import DashBoard from "../pages/DashBoard/DashBoard";
import UserProfile from "../pages/DashBoard/User/UserProfile/UserProfile";
import SignUp from "../pages/SignUp/SignUp";
import Payment from "../pages/Payment/Payment";
import PaymentHistory from "../pages/Payment/PaymentHistory";
import MyReview from "../pages/DashBoard/User/MyReview/MyReview";
import MyRequest from "../pages/DashBoard/User/My Request/MyRequest";
import ManageUsers from "../pages/DashBoard/Admin/Mange Users/ManageUsers";
import AllMeals from "../pages/DashBoard/Admin/AllMeals/AllMeals";
import AllReviews from "../pages/DashBoard/Admin/AllReviews/AllReviews";
import UpdateItem from "../pages/DashBoard/Admin/UpdateItem/UpdateItem";
import AdminProfile from "../pages/DashBoard/Admin/Admin Profile/AdminProfile";
import Serve from "../pages/DashBoard/Admin/Serve/Serve";
import UpcomingMeals from "../pages/DashBoard/Admin/Upcoming Meals/UpcomingMeals";
import UpcomingMealNav from "../pages/UpcomingMeal Navbar/UpcomingMealNav";
import AdminRoutes from "./AdminRoutes";
import ErrorPage2 from "../../ErrorPage2";
import PrivateRoutes from "./PrivateRoutes";
import AddComplain from "../pages/AddComplain/AddComplain";
import MyComplaines from "../pages/MyComplains/MyComplains";
import AllComplains from "../pages/DashBoard/Admin/AllComplains/AllComplains";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut></LayOut>,
        errorElement: <ErrorPage2></ErrorPage2>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/addMeals',
                element: <AddMeals></AddMeals>
            },
            {
                path: '/meals',
                element: <Meals></Meals>
            },
            {
                path: '/meals/:id',
                element: <MealDetails></MealDetails>
            },
            {
                path: '/UpcomingMeals',
                element: <UpcomingMealNav></UpcomingMealNav>
            },
            {
                path: '/upMeals/:id',
                element: <MealDetails></MealDetails>
            },
        ]
    },
    {
        path: 'dashBoard',
        element: <PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
        children:  [
            //normal user
            {
                path:'/dashBoard/userProfile',
                element: <UserProfile></UserProfile>
            },
            {
                path:'checkout/:package',
                element: <PrivateRoutes><Payment></Payment></PrivateRoutes>
            },
            {
                path:'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path:'myReview',
                element: <MyReview></MyReview>
            },
            {
                path:'myRequest',
                element: <MyRequest></MyRequest>
            },
            {
                path:'addComplain',
                element: <AddComplain></AddComplain>
            },
            {
                path:'myComplains',
                element: <MyComplaines></MyComplaines>
            },
            //admin only user
            {
                path: 'adminProfile',
                element: <AdminRoutes><AdminProfile></AdminProfile></AdminRoutes>
            },
            {
                path: 'manageUsers',
                element: <AdminRoutes><ManageUsers></ManageUsers></AdminRoutes>
            },
            {
                path: 'allMeals',
                element: <AdminRoutes><AllMeals></AllMeals></AdminRoutes>
            },
            {
                path: 'allReviews',
                element: <AdminRoutes><AllReviews></AllReviews></AdminRoutes>
            },
            {
                path: 'serve',
                element: <AdminRoutes><Serve></Serve></AdminRoutes>
            },
            {
                path: 'upComing',
                element: <AdminRoutes><UpcomingMeals></UpcomingMeals></AdminRoutes>
            },
            {
                path: 'updateItem/:id',
                element: <AdminRoutes><UpdateItem></UpdateItem></AdminRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/meals/${params.id}`)
                // loader: ({params}) => fetch(`https://server-rosy-nine.vercel.app/meals/${params.id}`)
            },
            {
                path: 'addMeal',
                element: <AdminRoutes><AddMeals></AddMeals></AdminRoutes>
            },
            {
                path: 'allComplains',
                element: <AdminRoutes><AllComplains></AllComplains></AdminRoutes>
            },
        ]

    }
])
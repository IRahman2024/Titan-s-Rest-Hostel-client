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

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut></LayOut>,
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
        ]
    },
    {
        path: 'dashBoard',
        element: <DashBoard></DashBoard>,
        children:  [
            {
                path:'/dashBoard/userProfile',
                element: <UserProfile></UserProfile>
            },
            {
                path:'checkout/:package',
                element: <Payment></Payment>
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
        ]

    }
])
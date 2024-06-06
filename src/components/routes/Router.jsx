import { createBrowserRouter } from "react-router-dom";
import LayOut from "../Layout/LayOut";
import Login from "../pages/Login/Login";
import SignUp from "../SignUp/SignUp";
import Home from "../pages/Home/Home/Home";
import AddMeals from "../pages/AddMeals/AddMeals";

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
        ]
    }
])
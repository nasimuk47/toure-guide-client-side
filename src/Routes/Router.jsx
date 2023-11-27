import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../page/Login";
import SignUp from "../page/SignUp/SignUp";
import Home from "../page/Home/Home";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import UserHome from "../page/Dashboard/UserHome";
import GuiderProfileDetails from "../page/TourismTab/GuiderProfileDetails";
import TypebasedPakage from "../page/TourismTab/TourType/TypebasedPakage";
import PakageDetails from "../page/TourismTab/TourType/PakageDetails";
import Mybookings from "../page/Dashboard/Mybookings";
import WishList from "../page/Dashboard/WishList";
import StoryDetails from "../page/Home/TuristStory/StoryDetails";
import About from "../page/About/About";
import Contact from "../page/About/Contact/Contact";
import AllUsers from "../page/Dashboard/AdminHome/AllUser/AllUser";
import AdminHome from "../page/Dashboard/AdminHome/AdminHome";
import AddPakage from "../page/Dashboard/AdminHome/AddPakage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "About",
                element: <About></About>,
            },
            {
                path: "Contact",
                element: <Contact></Contact>,
            },
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "signup",
                element: <SignUp></SignUp>,
            },

            // guider datils page
            {
                path: "/details/:id",
                element: <GuiderProfileDetails></GuiderProfileDetails>,
            },
            {
                path: "login",
                element: <Login></Login>,
            },
            {
                path: "/packages/:type",
                element: <TypebasedPakage></TypebasedPakage>,
            },
            {
                path: "/Pakagedetails/:id",
                element: <PakageDetails></PakageDetails>,
            },
            {
                path: "/StoryDetails/:id",
                element: <StoryDetails></StoryDetails>,
            },
        ],
    },
    {
        path: "dashboard",
        element: (
            <PrivateRoute>
                <Dashboard></Dashboard>
            </PrivateRoute>
        ),
        children: [
            {
                path: "UserHome",
                element: <UserHome></UserHome>,
            },
            {
                path: "bookings",
                element: <Mybookings></Mybookings>,
            },
            {
                path: "WishList",
                element: <WishList></WishList>,
            },

            // {
            //     path: "payment",
            //     element: <Payment></Payment>,
            // },

            // // admin only routes
            // {
            //     path: "addItems",
            //     element: (
            //         <AdminRoute>
            //             <AddItems></AddItems>
            //         </AdminRoute>
            //     ),
            // },
            // {
            //     path: "manageItems",
            //     element: <ManageItems></ManageItems>,
            // },

            // // admin routes

            {
                path: "adminHome",
                element: <AdminHome></AdminHome>,
            },
            {
                path: "addPakage",
                element: <AddPakage></AddPakage>,
            },
            {
                path: "users",
                element: <AllUsers></AllUsers>,
            },
        ],
    },
]);

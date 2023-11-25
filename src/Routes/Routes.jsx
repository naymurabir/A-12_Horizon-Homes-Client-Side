import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import AllProperties from "../Pages/AllProperties/AllProperties";
import Dashboard from "../Layouts/Dashboard";
import Login from "../Pages/Shared/Login/Login";
import Register from "../Pages/Shared/Register/Register";
import AdminProfile from "../Pages/Dashboard/AdminPanel/AdminProfile/AdminProfile";
import ManageProperties from "../Pages/Dashboard/AdminPanel/ManageProperties/ManageProperties";
import ManageReviews from "../Pages/Dashboard/AdminPanel/ManageReviews/ManageReviews";
import ManageUsers from "../Pages/Dashboard/AdminPanel/ManageUsers/ManageUsers";
import AgentProfile from "../Pages/Dashboard/AgentPanel/AgentProfile/AgentProfile";
import MyAddedProperties from "../Pages/Dashboard/AgentPanel/MyAddedProperties/MyAddedProperties";
import MySoldProperties from "../Pages/Dashboard/AgentPanel/MySoldProperties/MySoldProperties";
import RequestedProperties from "../Pages/Dashboard/AgentPanel/RequestedProperties/RequestedProperties";
import MyProfile from "../Pages/Dashboard/UserPanel/MyProfile/MyProfile";
import Wishlist from "../Pages/Dashboard/UserPanel/Wishlist/Wishlist";
import PropertyBought from "../Pages/Dashboard/UserPanel/PropertyBought/PropertyBought";
import MyReview from "../Pages/Dashboard/UserPanel/MyReview/MyReview";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allProperties',
                element: <AllProperties></AllProperties>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            //Admin routes
            {
                path: '/dashboard/adminProfile',
                element: <AdminProfile></AdminProfile>
            },
            {
                path: '/dashboard/manageProperties',
                element: <ManageProperties></ManageProperties>
            },
            {
                path: '/dashboard/manageReviews',
                element: <ManageReviews></ManageReviews>
            },
            {
                path: '/dashboard/manageUsers',
                element: <ManageUsers></ManageUsers>
            },
            //Agents Routes
            {
                path: '/dashboard/agentProfile',
                element: <AgentProfile></AgentProfile>
            },
            {
                path: '/dashboard/myAddedProperties',
                element: <MyAddedProperties></MyAddedProperties>
            },
            {
                path: '/dashboard/mySoldProperties',
                element: <MySoldProperties></MySoldProperties>
            },
            {
                path: '/dashboard/requestedProperties',
                element: <RequestedProperties></RequestedProperties>
            },
            //Users Routes
            {
                path: '/dashboard/myProfile',
                element: <MyProfile></MyProfile>
            },
            {
                path: '/dashboard/wishlist',
                element: <Wishlist></Wishlist>
            },
            {
                path: '/dashboard/propertyBought',
                element: <PropertyBought></PropertyBought>
            },
            {
                path: '/dashboard/myReview',
                element: <MyReview></MyReview>
            }
        ]
    }
])

export default router
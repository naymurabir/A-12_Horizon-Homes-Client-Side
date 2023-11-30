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
import AddProperty from "../Pages/Dashboard/AgentPanel/AddProperty/AddProperty";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";
import UpdateProperty from "../Pages/Dashboard/AgentPanel/UpdateProperty/UpdateProperty";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import LatestUserReviews from "../Pages/LatestUserReviews/LatestUserReviews";
import AdminRoute from "../PrivateRoutes/AdminRoute";
import AgentRoute from "../PrivateRoutes/AgentRoute";
import MakeOfferPage from "../Pages/Dashboard/UserPanel/MakeOfferPage/MakeOfferPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MakePayment from "../Pages/Dashboard/UserPanel/MakePayment/MakePayment";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allProperties',
                element: <PrivateRoutes> <AllProperties></AllProperties> </PrivateRoutes>
            },
            {
                path: '/propertyDetails/:id',
                element: <PrivateRoutes> <PropertyDetails></PropertyDetails> </PrivateRoutes>,
                loader: ({ params }) => fetch(`https://horizon-homes-react-server.vercel.app/propertyDetails/${params.id}`)
            },
            {
                path: '/latestReviews',
                element: <LatestUserReviews></LatestUserReviews>
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
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            //Admin routes
            {
                path: '/dashboard/adminProfile',
                element: <AdminRoute><AdminProfile></AdminProfile> </AdminRoute>
            },
            {
                path: '/dashboard/manageProperties',
                element: <AdminRoute><ManageProperties></ManageProperties> </AdminRoute>
            },
            {
                path: '/dashboard/manageReviews',
                element: <AdminRoute><ManageReviews></ManageReviews> </AdminRoute>
            },
            {
                path: '/dashboard/manageUsers',
                element: <AdminRoute><ManageUsers></ManageUsers> </AdminRoute>
            },
            //Agents Routes
            {
                path: '/dashboard/agentProfile',
                element: <AgentRoute><AgentProfile></AgentProfile></AgentRoute>
            },
            {
                path: '/dashboard/addProperty',
                element: <AgentRoute><AddProperty></AddProperty> </AgentRoute>
            },
            {
                path: '/dashboard/myAddedProperties',
                element: <AgentRoute><MyAddedProperties></MyAddedProperties></AgentRoute>
            },
            {
                path: '/dashboard/updateProperty/:id',
                element: <AgentRoute><UpdateProperty></UpdateProperty></AgentRoute>,
                loader: ({ params }) => fetch(`https://horizon-homes-react-server.vercel.app/updateProperty/${params.id}`)
            },
            {
                path: '/dashboard/mySoldProperties',
                element: <AgentRoute><MySoldProperties></MySoldProperties></AgentRoute>
            },
            {
                path: '/dashboard/requestedProperties',
                element: <AgentRoute><RequestedProperties></RequestedProperties></AgentRoute>
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
            },
            {
                path: '/dashboard/wishlist/makeOffer/:id',
                element: <MakeOfferPage></MakeOfferPage>,
                loader: ({ params }) => fetch(`https://horizon-homes-react-server.vercel.app/makeOffer/${params.id}`)
            },
            // Payments
            {
                path: '/dashboard/makePayment/:id',
                element: <MakePayment></MakePayment>
            }
        ]
    }
])

export default router
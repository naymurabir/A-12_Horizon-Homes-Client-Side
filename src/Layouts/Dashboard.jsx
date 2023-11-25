import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaSearch } from 'react-icons/fa';
import { MdManageAccounts, MdOutlineRateReview, MdOutlineAddHomeWork, MdOutlineMapsHomeWork, MdDoneOutline, MdOutlineRequestPage, MdOutlineAttachMoney, MdShoppingCart, MdOutlineStarHalf, MdAddHomeWork } from 'react-icons/md';
import useAdmin from "../Hooks/useAdmin";
import useAgent from "../Hooks/useAgent";

const Dashboard = () => {

    const { isAdmin } = useAdmin()
    const { isAgent } = useAgent()

    return (
        <div className="max-w-screen-xl mx-auto px-2 md:px-10 lg:px-20 ">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="lg:w-[20%] min-h-screen text-white font-semibold bg-[#4F79AC]">
                    <ul className="menu px-4 py-2">

                        {
                            isAdmin || isAgent ? <>
                                {
                                    isAdmin ?
                                        <>
                                            {/* Admin Routes */}
                                            <li className="font-bold"> <NavLink to="/dashboard/adminProfile"> <FaHome></FaHome> Admin Profile</NavLink>
                                            </li>

                                            <li className="font-bold"> <NavLink to="/dashboard/manageProperties"> <MdOutlineAddHomeWork className="text-lg"></MdOutlineAddHomeWork > Manage Properties</NavLink>
                                            </li>

                                            <li className="font-bold"> <NavLink to="/dashboard/manageReviews"> <MdOutlineRateReview className="text-lg"></MdOutlineRateReview > Manage Reviews</NavLink>
                                            </li>

                                            <li className="font-bold"> <NavLink to="/dashboard/manageUsers"> <MdManageAccounts className="text-lg"></MdManageAccounts> Manage Users</NavLink>
                                            </li>
                                        </>
                                        :
                                        <>
                                            {/* Agent Routes */}
                                            <li className="font-bold"> <NavLink to="/dashboard/agentProfile"> <FaHome></FaHome> Agent Profile</NavLink>
                                            </li>

                                            <li className="font-bold"> <NavLink to="/dashboard/addProperty"> <MdAddHomeWork className="text-lg"></MdAddHomeWork  > Add Property</NavLink>
                                            </li>

                                            <li className="font-bold"> <NavLink to="/dashboard/myAddedProperties"> <MdOutlineMapsHomeWork className="text-lg"></MdOutlineMapsHomeWork > My Added Properties</NavLink>
                                            </li>

                                            <li className="font-bold"> <NavLink to="/dashboard/mySoldProperties"> <MdDoneOutline className="text-lg"></MdDoneOutline> My Sold Properties</NavLink>
                                            </li>

                                            <li className="font-bold"> <NavLink to="/dashboard/requestedProperties"> <MdOutlineRequestPage className="text-lg"></MdOutlineRequestPage> Requested Properties</NavLink>
                                            </li>
                                        </>
                                }
                            </>
                                :
                                <>
                                    {/* Users Routes */}
                                    <li className="font-bold"> <NavLink to="/dashboard/myProfile"> <FaHome></FaHome> My Profile</NavLink> </li>

                                    <li className="font-bold"> <NavLink to="/dashboard/wishlist"> < MdShoppingCart className="text-lg"></ MdShoppingCart> Wishlist</NavLink> </li>

                                    <li className="font-bold"> <NavLink to="/dashboard/propertyBought"> <MdOutlineAttachMoney className="text-lg"></MdOutlineAttachMoney> Property Bought</NavLink> </li>

                                    <li className="font-bold"> <NavLink to="/dashboard/myReview"> <MdOutlineStarHalf className="text-lg"></MdOutlineStarHalf> My Riview</NavLink> </li>

                                </>
                        }
                        {/* Shared NavLinks */}
                        <div className="divider"></div>

                        <li className="font-bold"> <NavLink to="/"> <FaHome className="text-lg"></FaHome>Home</NavLink> </li>

                        <li> <NavLink to="/allProperties"> <FaSearch className="text-lg"></FaSearch>All Properties</NavLink> </li>

                    </ul>

                    {/* <li className="font-bold"> <NavLink to="/dashboard/manageUsers"> <FaHome></FaHome> Manage Users</NavLink>
                    </li> */}
                </div>
                <div className="lg:w-[80%]">
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
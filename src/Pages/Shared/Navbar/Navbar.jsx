import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import swal from "sweetalert";
import 'cooltipz-css'
import logo from '../../../assets/logo/logo.png'
import useAuth from "../../../Hooks/useAuth";

const Navbar = () => {

    const { user, logOut } = useAuth()

    const navLinks = <>
        <NavLink to="/" className="text-base mr-2 font-semibold"> Home</NavLink>

        <NavLink to="/allProperties" className="text-base mr-2 font-semibold"> All Properties</NavLink>

        <NavLink to="/" className="text-base mr-2 font-semibold"> Dashboard</NavLink>
    </>

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Logout Successful',
                    showConfirmButton: false,
                    background: '#343436',
                    heightAuto: '100px',
                    color: 'white',
                    timer: 2000
                })
            })
            .catch(error => {
                console.log();
                swal(error.message)
            })
    }

    return (
        <nav className="">
            <div className="navbar fixed z-10 max-w-screen-2xl bg-opacity-40 bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box text-black w-40">
                            {navLinks}
                        </ul>
                    </div>

                    <div className="flex justify-center items-center">
                        <img className="w-24" src={logo} alt="" />
                        <a className="btn btn-ghost normal-case text-base  md:text-2xl hidden lg:block">Horizon Homes</a>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">


                    <div className="flex items-center gap-2">

                        {
                            user ? <div className="flex gap-2">
                                <div aria-label={user?.displayName} data-cooltipz-dir="bottom" className="flex items-center gap-2">
                                    <img className="w-10 h-10 rounded-full hidden md:block" src={user?.photoURL} alt="" referrerPolicy="no-referrer" /> </div>

                                <div className="flex items-center gap-1">
                                    <button onClick={handleLogOut} className="bg-transparent text-white border border-white rounded font-semibold px-3 py-2 hover:bg-[#B4B307] ">Log Out</button>
                                </div>
                            </div>
                                :
                                <div className="flex items-center gap-2">
                                    <Link to="/login">
                                        <button className="bg-transparent text-white border border-white rounded font-semibold px-3 py-2 hover:bg-[#B4B307] ">Log In</button>
                                    </Link>
                                </div>

                        }

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
import {
    FaEnvelope,
    FaHome,
    FaList,
    FaShoppingCart,
    FaUtensils,
    FaUsers,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
    const [isAdmin, isAdminLoading] = useAdmin();
    if (isAdminLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-blue-400">
                <ul className="menu p-4">
                    {isAdmin ? (
                        <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addPakage">
                                    <FaUtensils></FaUtensils>
                                    Add New Pakage
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    All Users
                                </NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <NavLink to="/dashboard/userHome">
                                    <FaHome></FaHome>
                                    User Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings">
                                    <FaShoppingCart></FaShoppingCart>
                                    My Bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/wishList">
                                    <FaList></FaList>
                                    My Wishlist
                                </NavLink>
                            </li>
                        </>
                    )}
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact">
                            <FaEnvelope></FaEnvelope>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-4">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;

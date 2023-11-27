/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const AdminHome = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="w-[50%]">
                <h2 className="text-center text-3xl font-semibold">
                    Admin Profile
                </h2>
                <div className="hero-content text-center h-[700px]">
                    <div className="card w-[500px] h-[500px] bg-blue-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src={user.photoURL}
                                alt="Profile"
                                className="rounded-full w-[200px] h-[200px]"
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="text-4xl ">{user.displayName}</h2>
                            <p className="text-lg">Email:~ {user.email}</p>
                            <div className="flex gap-3">
                                <Link to="https://web.facebook.com/profile.php?id=100065618652112">
                                    {" "}
                                    <FaFacebook className="text-3xl text-blue-500"></FaFacebook>
                                </Link>
                                <Link to="https://www.instagram.com">
                                    {" "}
                                    <FaInstagram className="text-3xl text-red-500"></FaInstagram>
                                </Link>
                                <Link to=" https://twitter.com/?lang=en">
                                    {" "}
                                    <FaTwitter className="text-3xl text-blue-500"></FaTwitter>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;

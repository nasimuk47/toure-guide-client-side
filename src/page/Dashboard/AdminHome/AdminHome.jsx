/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaUsers } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const AdminHome = () => {
    const axiosPublic = useAxiosPublic();
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosPublic.get("/users");
            return res.data;
        },
    });
    const { user } = useContext(AuthContext);
    return (
        <div>
            <SectionTitle
                subHeading="Hey I'm Admin"
                heading={"Admin Profile"}></SectionTitle>
            <div className="flex">
                <div className="w-[50%]">
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
                                <h2 className="text-4xl ">
                                    {user.displayName}
                                </h2>
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

                <div className="w-[50%] ml-24 mt-28">
                    <Link to="/dashboard/users">
                        <div className="stat w-[40%] h-[30%]">
                            <div className="stat-figure text-secondary">
                                <FaUsers className="text-5xl"></FaUsers>
                            </div>
                            <div className="stat-title font-bold text-xl">
                                Users
                            </div>
                            <div className="stat-value">{users.length}</div>
                            <div className="stat-desc">↗︎ 400 (22%)</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;

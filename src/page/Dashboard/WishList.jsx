/* eslint-disable no-unused-vars */
import React from "react";
import useWishList from "../../hooks/useWishList";
import { Link } from "react-router-dom";

import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const WishList = () => {
    const [wishList, refetch] = useWishList();
    const axiosPublic = useAxiosPublic(); // Get the Axios instance

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/WishList/${id}`).then((res) => {
                    // Use the Axios instance directly
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                        });
                    }
                });
            }
        });
    };

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>PakageId</th>
                            <th>Price</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {wishList.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img
                                                    src={item.PakagePhoto}
                                                    alt="Avatar"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.packageId}</td>
                                <td>{item.price}</td>
                                <td>
                                    <Link
                                        to={`/Pakagedetails/${item.packageId}`}>
                                        {" "}
                                        <button className="btn btn-sm">
                                            Details
                                        </button>
                                    </Link>

                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WishList;

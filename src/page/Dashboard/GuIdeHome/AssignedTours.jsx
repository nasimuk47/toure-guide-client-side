/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FaArrowDown } from "react-icons/fa";

const MySwal = withReactContent(Swal);

const AssignedTours = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch("https://tour-guide-server-flame.vercel.app/AllBookings")
            .then((response) => response.json())
            .then((data) => {
                const filteredBookings = data.filter(
                    (booking) => booking.guideName === user.displayName
                );

                setBookings(filteredBookings);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [user.displayName]);

    const handleStatusChange = (bookingId, newStatus) => {
        MySwal.fire({
            title: "Are you sure?",
            text: `Do you want to ${newStatus.toLowerCase()} this booking?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.isConfirmed) {
                // Update the status in the state
                const updatedBookings = bookings.map((booking) =>
                    booking._id === bookingId
                        ? { ...booking, status: newStatus }
                        : booking
                );
                setBookings(updatedBookings);

                // Update the status on the server
                fetch(
                    `https://tour-guide-server-flame.vercel.app/updateBookingStatus/${bookingId}`,
                    {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ status: newStatus }),
                    }
                )
                    .then((response) => response.json())
                    .then((data) => {
                        console.log("Status updated successfully:", data);
                    })
                    .catch((error) =>
                        console.error("Error updating status:", error)
                    );

                MySwal.fire(
                    "Success!",
                    `Booking ${newStatus.toLowerCase()} successfully.`,
                    "success"
                );
            }
        });
    };

    return (
        <div className="">
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>PakageName</th>
                                <th>TouristName</th>
                                <th>tourDate</th>
                                <th>tourPrice</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="h-[200px]">
                            {bookings.map((booking, index) => (
                                <tr key={index}>
                                    <th></th>
                                    <td>{booking.pakageName}</td>
                                    <td>{booking.name}</td>
                                    <td>{booking.tourDate}</td>
                                    <td>{booking.price}</td>
                                    <td className="relative">
                                        <div className="dropdown dropdown-left">
                                            <button
                                                tabIndex={0}
                                                role="button"
                                                className="btn btn-secondary m-1">
                                                {booking.status}
                                                <FaArrowDown></FaArrowDown>
                                            </button>
                                            <ul className="dropdown-content z-30 menu p-2 shadow bg-base-100 rounded-box w-52">
                                                <li className="btn btn-sm">
                                                    <button
                                                        onClick={() =>
                                                            handleStatusChange(
                                                                booking._id,
                                                                "Accepted"
                                                            )
                                                        }>
                                                        Accept
                                                    </button>
                                                </li>
                                                <li className="btn btn-sm mt-1">
                                                    <button
                                                        onClick={() =>
                                                            handleStatusChange(
                                                                booking._id,
                                                                "Rejected"
                                                            )
                                                        }>
                                                        Reject
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AssignedTours;

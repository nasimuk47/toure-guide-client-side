/* eslint-disable no-unused-vars */
import React from "react";
import useBookings from "../../hooks/usebookings";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import Swal from "sweetalert2";

const Mybookings = () => {
    const [bookings, refetch] = useBookings();
    const totalPrice = bookings.reduce((total, item) => total + item.price, 0);

    const handleCancelBooking = async (bookingId) => {
        try {
            // Show SweetAlert confirmation dialog
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, cancel it!",
            });

            // If the user confirms, proceed with cancellation
            if (result.isConfirmed) {
                await fetch(`http://localhost:5000/AllBookings/${bookingId}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                // Optional: You can show another SweetAlert to inform the user about the successful cancellation
                Swal.fire(
                    "Cancelled!",
                    "Your booking has been cancelled.",
                    "success"
                );

                // Optional: You can also refetch the bookings after cancellation
                refetch();
            }
        } catch (error) {
            console.error("Error cancelling booking:", error);
        }
    };

    return (
        <div>
            <div className="flex justify-evenly mb-8">
                <h2 className="text-3xl">Items: {bookings.length}</h2>
                <h2 className="text-3xl">Total Price: {totalPrice}</h2>
                {bookings.length ? (
                    <Link to="/dashboard/payment">
                        <button className="btn btn-primary">Pay</button>
                    </Link>
                ) : (
                    <button disabled className="btn btn-primary">
                        Pay now
                    </button>
                )}
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Guide Name</th>
                            <th>Tour Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {bookings.map((booking, index) => (
                            <tr key={booking._id}>
                                <th>{index + 1}</th>
                                <td>{booking.pakageName}</td>
                                <td>{booking.guideName}</td>
                                <td>
                                    {new Date(
                                        booking.tourDate
                                    ).toLocaleDateString()}
                                </td>
                                <td>{booking.price}</td>
                                <td>
                                    <button className="btn btn-accent">
                                        {booking.status}
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-error"
                                        onClick={() =>
                                            handleCancelBooking(booking._id)
                                        }>
                                        Cancel
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

export default Mybookings;

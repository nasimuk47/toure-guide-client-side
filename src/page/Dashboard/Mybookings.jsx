import React from "react";
import useBookings from "../../hooks/usebookings";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";

const Mybookings = () => {
    const [bookings, refetch] = useBookings();
    const totalPrice = bookings.reduce((total, item) => total + item.price, 0);

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
                                        <FaCaretDown></FaCaretDown>
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

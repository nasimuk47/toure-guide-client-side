/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TourGuider = () => {
    const GuiderList = () => {
        const [guiderData, setGuiderData] = useState([]);

        useEffect(() => {
            fetch("http://localhost:5000/GuiderList")
                .then((response) => response.json())
                .then((data) => setGuiderData(data))
                .catch((error) => console.error("Error fetching data:", error));
        }, []);

        return (
            <div>
                <h1 className="text-3xl font-bold text-black-400 flex justify-center mt-5 mb-5">
                    Contact Our Tour Guides
                </h1>

                <div className="flex flex-wrap justify-center">
                    {guiderData.map((guider) => (
                        <div key={guider._id} className="m-4">
                            <div className="card w-40 sm:w-80 bg-base-100 shadow-xl">
                                <figure className="p-4">
                                    <img
                                        src={guider.profilePicture}
                                        alt={guider.name}
                                        className="rounded-xl w-[200px] h-auto"
                                    />
                                </figure>
                                <div className="card-body items-center text-center p-4">
                                    <h2 className="card-title text-xl font-bold">
                                        {guider.name}
                                    </h2>
                                    <p className="text-base font-serif">
                                        {guider.contactDetails.email}
                                    </p>
                                    <div className="card-actions mt-2">
                                        {/* Use Link to navigate to details page */}
                                        <Link
                                            to={`/details/${guider._id}`}
                                            className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">
                                            DETAILS
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return <GuiderList />;
};

export default TourGuider;

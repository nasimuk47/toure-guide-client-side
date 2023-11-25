/* eslint-disable no-unused-vars */
// TourType.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCarAlt, FaFootballBall, FaHiking } from "react-icons/fa";
import { MdLocalAirport } from "react-icons/md";

const TourType = () => {
    const [selectedType, setSelectedType] = useState(null);

    return (
        <div>
            <div
                className="hero mt-8 h-[400px]"
                style={{
                    backgroundImage:
                        "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-neutral-content">
                    <div>
                        <h1 className="mb-2 text-5xl font-bold">Hello there</h1>
                        <h1 className="text-2xl font-bold flex justify-center ">
                            Select TourType{" "}
                        </h1>
                    </div>
                    <div className="flex gap-4 mt-5">
                        <Link
                            to="/packages/AirRides"
                            className={`tour-type border-2 h-[150px] w-[150px] bg-sky-500 rounded-full flex justify-center items-center ${
                                selectedType === "AirRides" && "selected"
                            }`}
                            onClick={() => setSelectedType("AirRides")}>
                            <MdLocalAirport className="text-5xl mr-2" />
                            AirRides
                        </Link>

                        <Link
                            to="/packages/ATV"
                            className={`tour-type border-2 h-[150px] w-[150px] bg-yellow-500 rounded-full flex justify-center items-center ${
                                selectedType === "ATV" && "selected"
                            }`}
                            onClick={() => setSelectedType("ATV")}>
                            <FaCarAlt className="text-5xl mr-2" />
                            ATV
                        </Link>
                        <Link
                            to="/packages/Hiking"
                            className={`tour-type border-2 h-[150px] w-[150px] bg-gray-500 rounded-full flex justify-center items-center ${
                                selectedType === "Hiking" && "selected"
                            }`}
                            onClick={() => setSelectedType("Hiking")}>
                            <FaHiking className="text-5xl mr-2" />
                            Hiking
                        </Link>
                        <Link
                            to="/packages/Sports"
                            className={`tour-type border-2 h-[150px] w-[150px] bg-teal-500 rounded-full flex justify-center items-center ${
                                selectedType === "Sports" && "selected"
                            }`}
                            onClick={() => setSelectedType("Sports")}>
                            <FaFootballBall className="text-5xl mr-2" />
                            Sports
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourType;

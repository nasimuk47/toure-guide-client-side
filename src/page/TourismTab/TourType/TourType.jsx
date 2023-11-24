/* eslint-disable no-unused-vars */
import React from "react";
import { FaCarAlt, FaFootballBall, FaHiking } from "react-icons/fa";
import { MdLocalAirport } from "react-icons/md";

const TourType = () => {
    return (
        <div>
            <div
                className="hero mt-8 h-[400px]"
                style={{
                    backgroundImage:
                        "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className=" text-neutral-content">
                    <div className="">
                        <h1 className="mb-2 text-5xl font-bold">Hello there</h1>
                        <h1 className="text-2xl font-bold flex justify-center ">
                            Select TourType{" "}
                        </h1>
                    </div>
                    <div className="flex gap-4 mt-5">
                        <div className=" border-2 h-[150px] w-[150px] bg-sky-500 rounded-full flex justify-center items-center">
                            <p>
                                {" "}
                                <MdLocalAirport className="text-5xl mr-2"></MdLocalAirport>
                            </p>
                            AirRides
                        </div>

                        <div className=" border-2 h-[150px] w-[150px] bg-gray-500 rounded-full flex justify-center items-center">
                            <p>
                                {" "}
                                <FaHiking className="text-5xl mr-2"></FaHiking>
                            </p>
                            Hiking
                        </div>

                        <div className=" border-2 h-[150px] w-[150px] bg-teal-500 rounded-full flex justify-center items-center">
                            <p>
                                <FaFootballBall className="text-5xl mr-2"></FaFootballBall>
                            </p>
                            Sports
                        </div>
                        <div className=" border-2 h-[150px] w-[150px] bg-yellow-500 rounded-full flex justify-center items-center">
                            <p>
                                {" "}
                                <FaCarAlt className="text-5xl mr-2"></FaCarAlt>
                            </p>
                            ATV
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourType;

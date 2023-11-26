/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import banner from "../../../assets/banner/singlebanner1.jpg";

const Banner = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="relative h-[650px] overflow-hidden mb-5">
            <img className="w-full h-full object-cover" src={banner} alt="" />

            <div
                className="absolute inset-0 mt-28 flex items-center justify-center flex-col text-center"
                data-aos="fade-up" // Add the AOS attribute for animation
            >
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                    E X P L O R E THE W O R L D
                </h3>
                <h1 className="text-6xl font-bold text-blue-500 max-w-[50%]">
                    A MORE REWARDING WAY TO TRAVEL
                </h1>
            </div>
        </div>
    );
};

export default Banner;

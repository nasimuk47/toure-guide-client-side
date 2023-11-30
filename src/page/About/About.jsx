/* eslint-disable no-unused-vars */
import React from "react";
import AboutBanner from "../../../src/assets/banner/banner2.webp";
import Memories from "./Memories";
import OurTeem from "./OurTeem";
import Footer from "../Home/Footer/Footer";

const About = () => {
    return (
        <div>
            <div>
                <img
                    className="h-[500px] w-full relative"
                    src={AboutBanner}
                    alt=""
                />

                <h2 className="absolute bottom-36 ml-9 text-5xl font-bold text-white"></h2>
            </div>
            <Memories></Memories>
            <OurTeem></OurTeem>

            <Footer></Footer>
        </div>
    );
};

export default About;

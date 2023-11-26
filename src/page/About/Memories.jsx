/* eslint-disable no-unused-vars */
import React from "react";
import { FaHeadset } from "react-icons/fa";
import { LuBadgeCheck } from "react-icons/lu";

import Guiderimgphoto from "../../../src/assets/banner/aboutGuide.jpg";

const Memories = () => {
    return (
        <div className="flex mt-5 p-6">
            <div className="w-[50%]">
                <h1 className="text-4xl font-bold">
                    Memories Made Together Last a Lifetime
                </h1>

                <h2 className="text-xl font-bold">
                    Growing community by inspiring healthy is our commitment
                    with farmers, the abundant living on the field.
                </h2>
                <p className="mt-2 font-serif">
                    Your satisfaction with your experience that your
                    recommendation. Sed ut perspiciatis unde omnis iste natus
                    error sit voluptatem accusantium doloremque laudantium.
                </p>

                <div className="flex gap-5 mt-5 items-center">
                    <div>
                        <LuBadgeCheck className="text-6xl"></LuBadgeCheck>
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold">
                            Satisfaction Guarantee
                        </h1>
                        <h2>
                            Despite the variety of fish you could catch, no fish
                            is more desirable than the bluefin tuna.
                        </h2>
                    </div>
                </div>
                <div className="flex gap-5 mt-5 items-center">
                    <div>
                        <FaHeadset className="text-6xl"></FaHeadset>
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold">Online Support</h1>
                        <h2>
                            Some anglers have even battled to reel in bluefin
                            tuna weighing trips travel a maximum.
                        </h2>
                    </div>
                </div>
            </div>

            <div className="w-50% ml-16">
                <img
                    className=" w-[400px] h-[100%] "
                    src={Guiderimgphoto}
                    alt=""
                />
            </div>
        </div>
    );
};

export default Memories;

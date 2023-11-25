/* eslint-disable no-unused-vars */

import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Colaaps = () => {
    return (
        <div>
            <div
                tabIndex={0}
                className="collapse collapse-arrow border border-base-300 bg-base-200">
                <div className="collapse-title text-xl font-medium flex items-center gap-2">
                    Day 1
                    <p>
                        <FaLocationDot className="text-green-500"></FaLocationDot>
                    </p>
                    <span> Embark on a thrilling mountain expedition</span>
                </div>
                <div className="collapse-content mt-2">
                    <p>
                        Join Boundless Boat Charters for a family-friendly
                        fishing excursion. Limited to four passengers, there's
                        plenty of space for everyone to comfortably reel in
                        their catch. Enjoy morning and afternoon trips, perfect
                        for first-timers or young anglers, as well as nine-hour
                        trips offshore
                    </p>
                </div>
            </div>

            <div
                tabIndex={0}
                className="collapse collapse-arrow border border-base-300 bg-base-200">
                <div className="collapse-title text-xl font-medium flex gap-2 items-center">
                    Day 2
                    <p>
                        <FaLocationDot className="text-green-500"></FaLocationDot>
                    </p>
                    <span>Family-Friendly Fishing Excursion</span>
                </div>
                <div className="collapse-content">
                    <p>
                        Take a trip to a tropical paradise with golden beaches,
                        crystal-clear waters, and mesmerizing sunsets. Our
                        AirRides experience offers a breathtaking aerial view of
                        the stunning landscapes
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Colaaps;

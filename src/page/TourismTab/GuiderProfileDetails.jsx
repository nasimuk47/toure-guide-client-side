// GuiderProfileDetails.js

import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const GuiderProfileDetails = () => {
    const { id } = useParams();

    const [guiderData, setGuiderData] = useState([]);

    useEffect(() => {
        // Fetch all guide data
        fetch("http://localhost:5000/users")
            .then((response) => response.json())
            .then((data) => setGuiderData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const selectedGuide = guiderData.find((guider) => guider._id === id);

    return (
        <div>
            {selectedGuide ? (
                <div>
                    <div className="hero-content text-center bg-slate-400 h-[800px]">
                        <div className="card w-[420px] h-[500px] bg-base-100 shadow-xl mt-24">
                            <figure className="px-10 pt-10">
                                <img
                                    src={selectedGuide.photo}
                                    alt="Shoes"
                                    className="rounded-full w-[200px]"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="text-4xl ">
                                    {selectedGuide.name}
                                </h2>
                                <p className="text-lg">
                                    Email:~ {selectedGuide.email}
                                </p>
                                <div className="flex gap-3">
                                    <Link to="https://web.facebook.com/profile.php?id=100065618652112">
                                        {" "}
                                        <FaFacebook className="text-3xl text-blue-500"></FaFacebook>
                                    </Link>
                                    <Link to="https://www.instagram.com">
                                        {" "}
                                        <FaInstagram className="text-3xl text-red-500"></FaInstagram>
                                    </Link>
                                    <Link to=" https://twitter.com/?lang=en">
                                        {" "}
                                        <FaTwitter className="text-3xl text-blue-500"></FaTwitter>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default GuiderProfileDetails;

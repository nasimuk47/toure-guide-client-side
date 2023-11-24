// GuiderProfileDetails.js

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const GuiderProfileDetails = () => {
    const { id } = useParams(); // Destructure id and name from useParams

    const [guiderData, setGuiderData] = useState([]);

    useEffect(() => {
        // Fetch all guide data
        fetch("http://localhost:5000/GuiderList")
            .then((response) => response.json())
            .then((data) => setGuiderData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    // Filter the guide data based on the selected id
    const selectedGuide = guiderData.find((guider) => guider._id === id);

    return (
        <div>
            {selectedGuide ? (
                <div>
                    <div className="hero-content text-center bg-slate-400 h-[800px]">
                        <div className="card w-[500px] h-[600px] bg-base-100 shadow-xl mt-24">
                            <figure className="px-10 pt-10">
                                <img
                                    src={selectedGuide.profilePicture}
                                    alt="Shoes"
                                    className="rounded-full w-[200px]"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="text-4xl ">
                                    {selectedGuide.name}
                                </h2>
                                <p className="text-lg">
                                    Email:~ {selectedGuide.contactDetails.email}
                                </p>
                                <p className="text-lg">
                                    PhoneNo:~{" "}
                                    {selectedGuide.contactDetails.phone}
                                </p>
                                <p className="text-lg font-semibold mt-3">
                                    My education level:~
                                    {selectedGuide.education}
                                </p>
                                <p className="text-lg font-semibold mt-3">
                                    Skills:~ {selectedGuide.skills}
                                </p>
                                <p className="text-xl text-red-600 mt-5">
                                    WorkExperience:{" "}
                                    {selectedGuide.workExperience}
                                </p>
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

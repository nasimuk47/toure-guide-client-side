import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const UserHome = () => {
    const { user } = useAuth();
    const [tourStory, setTourStory] = useState({
        name: user?.displayName || "",
        rating: "",
        details: "",
        spotpicture: "",
        description: "",
    });

    const handleInputChange = (field, value) => {
        setTourStory({
            ...tourStory,
            [field]: value,
        });
    };

    const handleStorAddeNow = async () => {
        try {
            const response = await fetch(
                "https://tour-guide-server-flame.vercel.app/reviews",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: tourStory.name,
                        details: tourStory.details,
                        spotpicture: tourStory.spotpicture,
                        rating: parseFloat(tourStory.rating),
                        description: tourStory.description,
                    }),
                }
            );

            if (!response.ok) {
                console.error(
                    `Failed to add tour story. Status: ${response.status}`
                );
                return;
            }

            // Show success message using SweetAlert
            Swal.fire({
                icon: "success",
                title: "Success",
                text: "Story added successfully!",
            });

            // Reset input field values
            setTourStory({
                name: user?.displayName || "",
                rating: "",
                details: "",
                spotpicture: "",
                description: "",
            });
        } catch (error) {
            console.error("Error adding tour story:", error);
        }
    };

    return (
        <div className="flex justify-between">
            <div className="hero-content w-[50%] text-center h-[600px]">
                <div className="card w-[500px] h-[500px] bg-blue-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={user.photoURL}
                            alt="Profile"
                            className="rounded-full w-[200px] h-[200px]"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-4xl ">{user.displayName}</h2>
                        <p className="text-lg">Email:~ {user.email}</p>
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

            <div className="w-[50%] mt-11">
                <div className="bg-blue-200 p-6 rounded-lg mt-2">
                    <h1 className="text-xl ml-2 font-bold mt-8">
                        Adding Your Tour Story
                    </h1>

                    <div className="flex">
                        <div className="flex w-[50%] mt-5 gap-3 p-2">
                            <input
                                type="text"
                                placeholder="Name here"
                                value={tourStory.name}
                                className="input input-bordered input-md w-full"
                                onChange={(e) =>
                                    handleInputChange("name", e.target.value)
                                }
                            />
                        </div>
                        <div className="flex w-[50%] mt-5 gap-3 p-2">
                            <input
                                type="text"
                                placeholder="Rating here"
                                value={tourStory.rating}
                                onChange={(e) =>
                                    handleInputChange("rating", e.target.value)
                                }
                                className="input input-bordered input-md w-full"
                            />
                        </div>
                    </div>
                    <div className="flex mt-3 gap-3 p-2">
                        <input
                            type="text"
                            placeholder="Your Story details here"
                            value={tourStory.details}
                            onChange={(e) =>
                                handleInputChange("details", e.target.value)
                            }
                            className="input input-bordered input-md w-full"
                        />
                    </div>
                    <div className="flex mt-3 gap-3 p-2">
                        <input
                            type="text"
                            placeholder="Input spotpicture URL"
                            value={tourStory.spotpicture}
                            onChange={(e) =>
                                handleInputChange("spotpicture", e.target.value)
                            }
                            className="input input-bordered input-md w-full"
                        />
                    </div>
                    <div className="flex mt-3 gap-3 p-2">
                        <input
                            type="text"
                            placeholder="Description here"
                            value={tourStory.description}
                            onChange={(e) =>
                                handleInputChange("description", e.target.value)
                            }
                            className="input input-bordered input-md w-full"
                        />
                    </div>

                    <button
                        className="btn btn-info w-[80%] ml-8 mt-5 mb-5"
                        onClick={handleStorAddeNow}>
                        Add Story
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserHome;

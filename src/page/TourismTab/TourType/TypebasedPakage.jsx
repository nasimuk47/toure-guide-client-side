/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import axios from "axios";

const TypebasedPakage = () => {
    const { type } = useParams();
    const [allTourPackages, setAllTourPackages] = useState([]);
    const [filteredTourPackages, setFilteredTourPackages] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        // Fetch all packages
        const fetchAllPackages = async () => {
            try {
                const response = await fetch(
                    "http://localhost:5000/Tourpakage"
                );
                const data = await response.json();
                console.log("Fetched all packages:", data);
                setAllTourPackages(data);
            } catch (error) {
                console.error("Error fetching all packages:", error);
            }
        };

        fetchAllPackages();
    }, []);

    useEffect(() => {
        // Filter packages based on the selected tour type
        const filteredPackages = allTourPackages.filter(
            (tourPackage) =>
                tourPackage.Type && tourPackage.Type.trim() === type.trim()
        );
        setFilteredTourPackages(filteredPackages);
    }, [type, allTourPackages]);

    console.log("Rendering PackagesByType for type:", type);

    // wishlist related

    const handleAddToWishlist = (tourPackage) => {
        if (!wishlist.includes(tourPackage._id)) {
            setWishlist([...wishlist, tourPackage._id]);

            axios
                .post("http://localhost:5000/AddToWishlist", {
                    email: user.email,
                    packageId: tourPackage._id,
                    PakagePhoto: tourPackage.spotPhoto,
                    price: tourPackage.price,
                })
                .then((response) =>
                    console.log("Package added to wishlist:", response.data)
                )
                .catch((error) =>
                    console.error("Error adding to wishlist:", error)
                );
        }
    };

    return (
        <div>
            <h1 className="text-3xl flex justify-center mt-5 mb-5">
                Packages for {type}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {allTourPackages.length === 0 && <p>Loading...</p>}

                {filteredTourPackages.length === 0 ? (
                    <p className="text-3xl">No available packages for {type}</p>
                ) : (
                    filteredTourPackages.map((tourPackage) => (
                        <div key={tourPackage._id} className="relative">
                            <div className="card bg-base-100 shadow-xl">
                                <figure>
                                    <img
                                        className="w-full h-[650px] object-cover"
                                        src={tourPackage.spotPhoto}
                                        alt="Package Image"
                                    />
                                </figure>
                                <p className="absolute left-0 top-0 m-4 px-4 bg-slate-900 text-white">
                                    ${tourPackage.price}
                                </p>
                                <p className="absolute right-0 top-0 m-4 px-4 text-white">
                                    {wishlist.includes(tourPackage._id) ? (
                                        <FaHeart
                                            className="text-3xl text-red-500"
                                            onClick={() =>
                                                handleAddToWishlist(tourPackage)
                                            }
                                        />
                                    ) : (
                                        <FaRegHeart
                                            className="text-3xl text-black"
                                            onClick={() =>
                                                handleAddToWishlist(tourPackage)
                                            }
                                        />
                                    )}
                                </p>

                                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-base-200 w-[350px] ">
                                    <div className="card-body flex flex-col items-center">
                                        <p className="text-2xl font-bold">
                                            {tourPackage.Type}
                                        </p>
                                        <p className="font-serif text-lg">
                                            {tourPackage.tripTitle}
                                        </p>

                                        <div className="rating">
                                            <input
                                                type="radio"
                                                name="rating-2"
                                                className="mask mask-star-2 bg-orange-400"
                                            />
                                            <input
                                                type="radio"
                                                name="rating-2"
                                                className="mask mask-star-2 bg-orange-400"
                                                checked
                                            />
                                            <input
                                                type="radio"
                                                name="rating-2"
                                                className="mask mask-star-2 bg-orange-400"
                                            />
                                            <input
                                                type="radio"
                                                name="rating-2"
                                                className="mask mask-star-2 bg-orange-400"
                                            />
                                            <input
                                                type="radio"
                                                name="rating-2"
                                                className="mask mask-star-2 bg-orange-400"
                                            />
                                        </div>

                                        <div className="card-actions justify-end">
                                            <Link
                                                to={`/Pakagedetails/${tourPackage._id}`}>
                                                <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-black-400 mt-4">
                                                    View Package
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default TypebasedPakage;

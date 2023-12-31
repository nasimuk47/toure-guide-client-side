import { useState, useEffect, useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import AllPakageBanner from "../../assets/banner/tourPakages.webp";
import Swal from "sweetalert2";

const AllPakages = () => {
    const { user } = useContext(AuthContext);
    const [packages, setPackages] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        axios
            .get("https://tour-guide-server-flame.vercel.app/Tourpakage")
            .then((response) => setPackages(response.data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const handleAddToWishlist = (pkg) => {
        const { _id, spotPhoto, price } = pkg;

        if (!wishlist.includes(_id)) {
            setWishlist([...wishlist, _id]);

            axios
                .post(
                    "https://tour-guide-server-flame.vercel.app/AddToWishlist",
                    {
                        email: user.email,
                        packageId: _id,
                        PakagePhoto: spotPhoto,
                        price: price,
                    }
                )
                .then((response) => {
                    console.log("Package added to wishlist:", response.data);

                    // Show SweetAlert2 confirmation
                    Swal.fire({
                        icon: "success",
                        title: "Package added to wishlist!",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                })
                .catch((error) => {
                    console.error("Error adding to wishlist:", error);
                });
        }
    };

    return (
        <div>
            <img
                className="h-[300px] mb-5 w-full relative"
                src={AllPakageBanner}
                alt=""
            />
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {packages.map((pkg) => (
                        <div key={pkg._id} className="relative">
                            <div className="card bg-base-100 shadow-xl">
                                <figure>
                                    <img
                                        className="w-full h-[650px] object-cover"
                                        src={pkg.spotPhoto}
                                        alt="Package Image"
                                    />
                                </figure>
                                <p className="absolute left-0 top-0 m-4 px-4 bg-slate-900 text-white">
                                    ${pkg.price}
                                </p>
                                <p className="absolute right-0 top-0 m-4 px-4 cursor-pointer text-white">
                                    {wishlist.includes(pkg._id) ? (
                                        <FaHeart
                                            className="text-3xl text-red-500"
                                            onClick={() =>
                                                handleAddToWishlist(pkg)
                                            }
                                        />
                                    ) : (
                                        <FaRegHeart
                                            className="text-3xl text-black"
                                            onClick={() =>
                                                handleAddToWishlist(pkg)
                                            }
                                        />
                                    )}
                                </p>

                                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-base-200 w-[350px] ">
                                    <div className="card-body flex flex-col items-center">
                                        <p className="text-2xl font-bold">
                                            {pkg.tourType}
                                        </p>
                                        <p className="font-serif">
                                            {pkg.tripTitle}
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
                                                to={`/Pakagedetails/${pkg._id}`}>
                                                <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-black-400 mt-4">
                                                    View Package
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllPakages;

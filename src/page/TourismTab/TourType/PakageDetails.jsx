// PakageDetails.jsx
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TourGuider from "../TourGuider";
import Colaaps from "./Colaaps";
import { AuthContext } from "../../../provider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { useQuery } from "@tanstack/react-query";

const PakageDetails = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [pakageData, setPakageData] = useState(null);
    const { user } = useContext(AuthContext);
    const [selectedOption, setSelectedOption] = useState(null);
    const [tourDate, setTourDate] = useState(null);
    const [acknowledged, setAcknowledged] = useState(false);

    const { data: allUsers } = useQuery({
        queryKey: ["allUsers"],
        queryFn: async () => {
            const response = await fetch("http://localhost:5000/users");
            return response.json();
        },
    });

    const guideOptions = allUsers
        ? allUsers
              .filter((user) => user.role === "guide")
              .map((guide) => ({
                  value: guide.name,
                  label: guide.name,
              }))
        : [];

    useEffect(() => {
        fetch(`http://localhost:5000/Tourpakage/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setPakageData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, [id]);

    const selectedPakage = pakageData?.find((pakage) => pakage._id === id);

    const handleBookNow = async () => {
        try {
            const touristPhotoUrl = document.getElementById(
                "touristPhotoUrlInput"
            ).value;

            if (touristPhotoUrl) {
                const response = await fetch(
                    "http://localhost:5000/BookPackage",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            pakageName: selectedPakage?.tripTitle,
                            name: user?.displayName,
                            email: user?.email,
                            touristPhoto: touristPhotoUrl,
                            price: selectedPakage?.price,
                            tourDate: tourDate,
                            guideName: selectedOption?.value,
                            packageId: selectedPakage?._id,
                            status: "InReview",
                        }),
                    }
                );

                const result = await response.json();

                // Handle the result as needed
                console.log(result);

                // Set acknowledgment to true to trigger modal opening
                setAcknowledged(true);
            } else {
                console.error("Tourist Photo URL is empty");
            }
        } catch (error) {
            console.error("Error booking package:", error);
        }
    };

    return (
        <div>
            {loading ? (
                <p className="flex justify-center">
                    <span className="loading loading-infinity loading-lg"></span>
                </p>
            ) : (
                <div>
                    <div>
                        <figure className="px-10 pt-10">
                            <img
                                src={selectedPakage?.detailsPhoto}
                                alt="Package"
                                className="w-full h-[400px]"
                            />
                        </figure>
                    </div>

                    <div>
                        <p className="text-xl font-bold mt-5">
                            {selectedPakage?.tripTitle}
                        </p>

                        <p className="mt-4">
                            {selectedPakage?.detailsDescription}
                        </p>
                    </div>

                    <div className="flex">
                        <div className="mt-5 w-[45%]">
                            <Colaaps></Colaaps>
                            <div className="bg-blue-200 p-6 rounded-lg mt-2">
                                <h1 className="text-xl ml-2 font-bold mt-8">
                                    Book Your Trip Now
                                </h1>

                                <div>
                                    <div className="flex mt-5 gap-3 p-2">
                                        <input
                                            type="text"
                                            placeholder="Name here"
                                            defaultValue={user?.displayName}
                                            className="input input-bordered input-md w-[50%] max-w-xs"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Email here"
                                            defaultValue={user?.email}
                                            className="input input-bordered input-md w-[50%] max-w-xs"
                                        />
                                    </div>
                                    <div className="flex gap-3 p-2">
                                        <input
                                            type="text"
                                            id="touristPhotoUrlInput"
                                            placeholder="Tourist Photo URL here"
                                            className="input input-bordered input-md w-[70%] max-w-xs"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Price"
                                            defaultValue={selectedPakage?.price}
                                            className="input input-bordered input-md w-[30%] max-w-xs"
                                        />
                                    </div>

                                    <div className="flex gap-3 p-2">
                                        <DatePicker
                                            selected={tourDate}
                                            onChange={(date) =>
                                                setTourDate(date)
                                            }
                                            dateFormat="dd/MM/yyyy"
                                            minDate={new Date()}
                                            isClearable
                                            placeholderText="Tour Date Use datepicker"
                                            className="input input-bordered input-md w-full max-w-xs"
                                        />
                                    </div>

                                    <div className="flex gap-3 p-2">
                                        <Select
                                            value={selectedOption}
                                            onChange={(option) =>
                                                setSelectedOption(option)
                                            }
                                            options={guideOptions}
                                            placeholder="Select Guide Name"
                                        />
                                    </div>

                                    {user ? (
                                        <button
                                            className="btn btn-info w-[80%] ml-8 mt-5 mb-5"
                                            onClick={handleBookNow}
                                            disabled={!user}>
                                            Book Now
                                        </button>
                                    ) : (
                                        <Link to="/login">
                                            <button className="btn btn-info w-[80%] ml-8 mt-5 mb-5">
                                                Book Now
                                            </button>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="w-[60%] mt-5">
                            <TourGuider></TourGuider>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal Trigger */}
            {acknowledged && (
                <input
                    type="checkbox"
                    id="my_modal_7"
                    className="modal-toggle"
                    defaultChecked
                />
            )}

            {/* Confirmation Modal */}
            <div className={acknowledged ? "modal" : "hidden"} role="dialog">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">Booking Successful!</h3>
                    <Link
                        to="/dashboard/bookings"
                        className="link link-primary mt-2">
                        See Your Bookings
                    </Link>
                    {/* You can add additional information or actions here */}
                    <label
                        className="modal-backdrop"
                        htmlFor="my_modal_7"
                        onClick={() => setAcknowledged(false)}>
                        Close
                    </label>
                </div>
            </div>
        </div>
    );
};

export default PakageDetails;

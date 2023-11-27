/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Select from "react-select";
import Swal from "sweetalert2";

const AddPackage = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [pakageData, setPakageData] = useState({
        PakageUrlInput: "",
        selectedType: null,
        tripTitle: "",
        price: "",
        detailsUrlInput: "",
        detailsDescription: "",
    });

    const options = [
        { value: "ATV", label: "ATV" },
        { value: "AirRides", label: "AirRides" },
        { value: "Hiking", label: "Hiking" },
        { value: "Sports", label: "Sports" },
    ];

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setPakageData({
            ...pakageData,
            [id]: value,
        });
    };

    const handlePakageAddNow = () => {
        const {
            PakageUrlInput,
            selectedType,
            tripTitle,
            price,
            detailsUrlInput,
            detailsDescription,
        } = pakageData;

        if (
            !selectedType ||
            !tripTitle ||
            !price ||
            !detailsUrlInput ||
            !detailsDescription
        ) {
            console.error("Please fill in all required fields.");
            return;
        }

        const postData = {
            spotPhoto: PakageUrlInput,
            Type: selectedType.value,
            tripTitle: tripTitle,
            price: parseFloat(price),
            detailsPhoto: detailsUrlInput,
            detailsDescription: detailsDescription,
        };

        fetch("http://localhost:5000/TourPakage", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Package added successfully:", data);

                // Show SweetAlert on success
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "Package added successfully",
                });
            })
            .catch((error) => {
                console.error("Error adding package:", error);

                // Log the server response
                error.response.json().then((data) => {
                    console.log("Server response:", data);
                });

                // Show SweetAlert on error
                Swal.fire({
                    icon: "error",
                    title: "Error!",
                    text: "Failed to add package",
                });
            });
    };

    return (
        <div className="container mx-auto my-8 p-4 sm:p-0 bg-violet-300 rounded-lg h-[700px]">
            <h2 className="text-5xl font-bold text-center p-12 mb-5">
                Add Your New Package
            </h2>

            <div className="max-w-md mx-auto p-6 rounded-lg">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="text"
                            id="PakageUrlInput"
                            placeholder="PakagePhoto URL here"
                            className="input input-bordered flex-1 mb-4 sm:mb-0"
                            value={pakageData.PakageUrlInput}
                            onChange={handleInputChange}
                        />
                        <Select
                            value={selectedOption}
                            onChange={(option) => {
                                setSelectedOption(option);
                                setPakageData({
                                    ...pakageData,
                                    selectedType: option,
                                });
                            }}
                            options={options}
                            placeholder="Select Type"
                            className="w-full sm:w-1/2"
                        />
                    </div>

                    <input
                        type="text"
                        id="tripTitle"
                        placeholder="tripTitle here"
                        className="input input-bordered mb-0"
                        value={pakageData.tripTitle}
                        onChange={handleInputChange}
                    />

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">price</span>
                        </label>
                        <input
                            type="text"
                            id="price"
                            placeholder="package price here"
                            className="input input-bordered "
                            value={pakageData.price}
                            onChange={handleInputChange}
                        />
                    </div>

                    <input
                        type="text"
                        id="detailsUrlInput"
                        placeholder="Details SpotPhoto URL here"
                        className="input input-bordered mb-4"
                        value={pakageData.detailsUrlInput}
                        onChange={handleInputChange}
                    />

                    <textarea
                        id="detailsDescription"
                        placeholder="detailsDescription here"
                        className="textarea textarea-bordered h-24 mb-4"
                        value={pakageData.detailsDescription}
                        onChange={handleInputChange}></textarea>

                    <button
                        className="btn btn-info w-full"
                        onClick={handlePakageAddNow}>
                        Add Now Pakage
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddPackage;

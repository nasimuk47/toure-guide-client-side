/* eslint-disable no-unused-vars */
// Import necessary dependencies
import React from "react";
import { Link } from "react-router-dom";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";

// Create a new QueryClient
const queryClient = new QueryClient();

// TourGuider component
const TourGuider = () => {
    // Use QueryClientProvider to wrap the component
    return (
        <QueryClientProvider client={queryClient}>
            <TourGuiderContent />
        </QueryClientProvider>
    );
};

// TourGuiderContent component
const TourGuiderContent = () => {
    // UseQuery hook
    const { data: allUsers } = useQuery({
        queryKey: ["allUsers"],
        queryFn: async () => {
            const response = await fetch("http://localhost:5000/users");
            return response.json();
        },
    });

    // GuiderList component
    const GuiderList = () => {
        return (
            <div>
                <h1 className="text-3xl font-bold text-black-400 flex justify-center mt-5 mb-5">
                    Contact Our Tour Guides
                </h1>

                <div className="flex flex-wrap justify-center">
                    {allUsers
                        ?.filter((user) => user.role === "guide")
                        .map((guider) => (
                            <div key={guider._id} className="m-4">
                                <div className="card w-40 sm:w-80 bg-base-100 shadow-xl">
                                    <figure className="p-4">
                                        <img
                                            src={guider.photo}
                                            alt={guider.name}
                                            className="rounded-xl w-[200px] h-[200px]"
                                        />
                                    </figure>
                                    <div className="card-body items-center text-center p-4">
                                        <h2 className="card-title text-xl font-bold">
                                            {guider.name}
                                        </h2>
                                        <h2 className="card-title">
                                            {guider.email}
                                        </h2>
                                        <div className="card-actions mt-2">
                                            {/* Use Link to navigate to details page */}
                                            <Link
                                                to={`/details/${guider._id}`}
                                                className="btn btn-outline bg-slate-100 border-0 border-b-4 border-black mt-4">
                                                DETAILS
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        );
    };

    return <GuiderList />;
};

export default TourGuider;

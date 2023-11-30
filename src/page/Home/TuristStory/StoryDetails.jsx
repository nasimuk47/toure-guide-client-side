/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { FacebookShareButton } from "react-share";

const StoryDetails = () => {
    const { id } = useParams();
    const [storyDetails, setStoryDetails] = useState(null);

    useEffect(() => {
        // Fetch story details based on the id
        fetch(`https://tour-guide-server-flame.vercel.app/reviews/${id}`)
            .then((res) => res.json())
            .then((data) => setStoryDetails(data))
            .catch((error) =>
                console.error("Error fetching story details:", error)
            );
    }, [id]);

    if (!storyDetails) {
        return (
            <p>
                <span className="loading loading-infinity loading-lg"></span>
            </p>
        );
    }

    const { name, spotpicture, description } = storyDetails;

    return (
        <div>
            <div className="">
                <figure className="px-10 pt-10">
                    <img
                        src={spotpicture}
                        alt="Package"
                        className="w-full h-[400px]"
                    />
                </figure>
            </div>

            <div className="text-xl font-bold">
                <p className="mt-4">{name}</p>
            </div>
            <div>
                <p className="mt-4">
                    {description}{" "}
                    <span>
                        <Link to="/AllStory">
                            <button className="btn btn-xs btn-primary ">
                                All stories
                                <FaArrowRight></FaArrowRight>
                            </button>
                        </Link>
                    </span>
                </p>
            </div>

            <div className="mt-3 flex justify-end">
                {" "}
                <div className="btn btn-accent">
                    <FaSquareFacebook className="text-xl"></FaSquareFacebook>
                    <FacebookShareButton
                        url={`https://web.facebook.com/story-details/${id}`}
                        quote={description}
                        hashtag="#TravelStories">
                        Share on Facebook
                    </FacebookShareButton>
                </div>
            </div>
        </div>
    );
};

export default StoryDetails;

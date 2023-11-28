import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const TourisStory = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch("http://localhost:5000/reviews");
                if (!response.ok) {
                    throw new Error("Failed to fetch reviews");
                }
                const data = await response.json();
                setReviews(data);
            } catch (error) {
                console.error("Error fetching reviews:", error.message);
            }
        };

        fetchReviews();
    }, []);

    return (
        <section className="my-20">
            <SectionTitle
                subHeading="Slide Now and see all Tour Stories"
                heading={"All Story"}></SectionTitle>

            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper">
                {reviews.map((review) => (
                    <SwiperSlide key={review._id}>
                        <Link to={`/StoryDetails/${review._id}`}>
                            <div className="flex flex-col items-center mx-24 my-16">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className="py-8">{review.details}</p>
                                <h3 className="text-3xl text-orange-400">
                                    {review.name}
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default TourisStory;

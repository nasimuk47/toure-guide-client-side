import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../../assets/banner/banner11.jpg";
import img2 from "../../../assets/banner/banner12.jpg";
import img3 from "../../../assets/banner/banner17.jpg";

const Banner = () => {
    const textStyle = {
        position: "absolute",
        top: "70%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        color: "white", // Set the text color
    };

    return (
        <Carousel>
            <div>
                <img className="relative" src={img1} />
                <div style={textStyle}>
                    <p className="text-5xl font-bold">COLLECTING MEMORIES</p>
                    <p className="text-6xl font-bold mt-5">EVERY TIME</p>
                </div>
            </div>

            <div>
                <img src={img2} />
                <div style={textStyle}>
                    <p className="text-5xl font-bold">THE REAL ADVENTURE</p>
                    <p className="text-6xl font-bold mt-5">IS OUT THERE</p>
                </div>
            </div>

            <div>
                <img src={img3} />
                <div style={textStyle}>
                    <p className="text-5xl font-bold">THE REAL ADVENTURE</p>
                    <p className="text-6xl font-bold mt-5">IS OUT THERE</p>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;

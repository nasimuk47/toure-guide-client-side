import Banner from "./Banner/banner";
import TourismTab from "../../page/TourismTab/TourismTab";
import TourType from "../TourismTab/TourType/TourType";
import TourisStory from "./TuristStory/TouristStory";
import Footer from "./Footer/Footer";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TourismTab></TourismTab>
            <TourType></TourType>
            <TourisStory></TourisStory>
            <Footer></Footer>
        </div>
    );
};

export default Home;

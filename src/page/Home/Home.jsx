import Banner from "./Banner/banner";
import TourismTab from "../../page/TourismTab/TourismTab";
import TourType from "../TourismTab/TourType/TourType";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TourismTab></TourismTab>
            <TourType></TourType>
        </div>
    );
};

export default Home;

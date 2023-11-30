// useAxiosPublic.js
import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://tour-guide-server-flame.vercel.app",
});

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;

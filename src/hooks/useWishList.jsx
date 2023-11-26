// useWishList.js
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useWishList = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const { refetch, data: wishList = [] } = useQuery({
        queryKey: ["WishList", user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/WishList?email=${user.email}`);
            return res.data;
        },
    });

    return [wishList, refetch];
};

export default useWishList;

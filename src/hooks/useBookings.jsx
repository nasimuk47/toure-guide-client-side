// usebookings.js
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useBookings = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const { refetch, data: booking = [] } = useQuery({
        queryKey: ["booking", user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/Bookings?email=${user.email}`);
            return res.data;
        },
    });

    return [booking, refetch];
};

export default useBookings;

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useGuide = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const { data: guide, isPending: isGuideLoading } = useQuery({
        queryKey: [user?.email, "isGuide"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/guide/${user.email}`);
            console.log(res.data);
            return res.data; // Return the whole object
        },
    });
    return [guide, isGuideLoading];
};

export default useGuide;

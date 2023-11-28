// useGuideName.jsx
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useGuideName = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const { data: guideData, isPending: isGuideLoading } = useQuery({
        queryKey: ["guideData"],
        queryFn: async () => {
            const res = await axiosPublic.get("/users?role=guide"); // Modify the endpoint to filter users with role 'guide'
            return res.data; // Return the whole object
        },
    });

    const guide = guideData?.find(
        (guide) => guide.email === user?.email && guide.role === "guide"
    );

    return [guide, isGuideLoading];
};

export default useGuideName;

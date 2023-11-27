import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useReviews = () => {
    const axiosPublic = useAxiosPublic()

    const { user } = useAuth()

    const { data: reviews, isPending, refetch } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/reviews?email=${user?.email}`)
            return data
        }
    })


    return { reviews, isPending, refetch }
};

export default useReviews;
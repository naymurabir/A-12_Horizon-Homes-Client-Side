import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useReviewsBasedTitle = () => {
    const axiosSecure = useAxiosSecure()

    const { data: reviews = [], isPending, refetch } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/reviews/title')
            return data
        }
    })
    return { reviews, isPending, refetch }
};

export default useReviewsBasedTitle;
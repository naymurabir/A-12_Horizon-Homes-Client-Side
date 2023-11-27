import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useReviewsTotal = () => {
    const axiosSecure = useAxiosSecure()

    const { data: reviewsAll = [], isPending, refetch } = useQuery({
        queryKey: ['reviewsAll'],
        queryFn: async () => {
            const res = await axiosSecure.get('/reviewsAll')
            console.log(res);
            return await res.data
        }
    })
    return { reviewsAll, isPending, refetch }
};

export default useReviewsTotal;
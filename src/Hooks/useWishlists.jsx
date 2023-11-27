import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useWishlists = () => {
    const axiosPublic = useAxiosPublic()

    const { data: wishlists = [], isPending, refetch } = useQuery({
        queryKey: ['wishlists'],
        queryFn: async () => {
            const res = await axiosPublic.get('/wishlists')
            return await res.data
        }
    })
    return { wishlists, isPending, refetch }
};

export default useWishlists;
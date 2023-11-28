import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useWishlists = () => {
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()

    const { data: wishlists = [], isPending, refetch } = useQuery({
        queryKey: ['wishlists', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/wishlists?email=${user?.email}`)
            return await res.data

        }
    })
    return { wishlists, isPending, refetch }
};

export default useWishlists;
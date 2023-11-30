import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useMySoldProperties = () => {
    const axiosPublic = useAxiosPublic()

    const { user } = useAuth()

    const { data: soldProperties, isPending, refetch } = useQuery({
        queryKey: ['soldProperties', user?.email],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/soldProperties?email=${user?.email}`)
            console.log(data);
            return data
        }
    })


    return { soldProperties, isPending, refetch }
};

export default useMySoldProperties;
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useMyAddedProperties = () => {
    const axiosPublic = useAxiosPublic()

    const { user } = useAuth()

    const { data: myAddedProperties, isPending, refetch } = useQuery({
        queryKey: ['myAddedProperties'],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/myAddedProperties?email=${user?.email}`)
            return data
        }
    })


    return { myAddedProperties, isPending, refetch }
};

export default useMyAddedProperties;
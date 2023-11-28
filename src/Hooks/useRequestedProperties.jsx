import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useRequestedProperties = () => {
    const axiosPublic = useAxiosPublic()

    const { user } = useAuth()

    const { data: requestedProperties, isPending, refetch } = useQuery({
        queryKey: ['requestedProperties', user?.email],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/requestedProperties?email=${user?.email}`)
            console.log(data);
            return data
        }
    })


    return { requestedProperties, isPending, refetch }
};

export default useRequestedProperties;
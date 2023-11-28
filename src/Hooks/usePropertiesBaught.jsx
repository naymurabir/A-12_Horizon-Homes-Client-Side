import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const usePropertiesBaught = () => {
    const axiosPublic = useAxiosPublic()

    const { user } = useAuth()

    const { data: propertiesBaught, isPending, refetch } = useQuery({
        queryKey: ['propertiesBaught', user?.email],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/propertiesBaught?email=${user?.email}`)
            // console.log(data);
            return data
        }
    })


    return { propertiesBaught, isPending, refetch }
};

export default usePropertiesBaught;
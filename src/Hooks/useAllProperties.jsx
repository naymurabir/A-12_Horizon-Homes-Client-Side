import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllProperties = () => {
    const axiosSecure = useAxiosSecure()

    const { data: allProperties = [], isPending, refetch } = useQuery({
        queryKey: ['allProperties'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allProperties')
            console.log(res);
            return await res.data
        }
    })
    return { allProperties, isPending, refetch }
};

export default useAllProperties;
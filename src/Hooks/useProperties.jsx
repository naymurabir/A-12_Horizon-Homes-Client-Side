import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useProperties = () => {
    const axiosSecure = useAxiosSecure()

    const { data: properties = [], isPending, refetch } = useQuery({
        queryKey: ['properties'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/properties')
            return data
        }
    })
    return { properties, isPending, refetch }
};

export default useProperties;
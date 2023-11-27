import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {

    const axiosSecure = useAxiosSecure()

    const { data: users = [], isPending, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return await res.data
        }
    })
    return { users, isPending, refetch }
};

export default useUsers;
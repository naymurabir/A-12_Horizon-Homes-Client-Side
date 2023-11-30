import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://horizon-homes-react-server.vercel.app',
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;
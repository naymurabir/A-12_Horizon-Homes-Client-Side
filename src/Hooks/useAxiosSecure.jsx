import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logOut } = useAuth() || {}
    const navigate = useNavigate()

    useEffect(() => {
        axiosSecure.interceptors.request.use(function (config) {
            return config;
        }, function (error) {
            return Promise.reject(error);
        });

        axiosSecure.interceptors.response.use(function (response) {
            return response;
        }, async function (error) {
            if (error.response.status === 401 || error.response.status === 403) {
                await logOut()
                console.log('log out')
                navigate('/login')
            }
            return Promise.reject(error);
        });
    }, [logOut, navigate])

    return axiosSecure;
};

export default useAxiosSecure;
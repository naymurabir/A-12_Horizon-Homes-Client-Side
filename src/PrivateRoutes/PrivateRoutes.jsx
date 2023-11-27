import { ThreeDots } from "react-loader-spinner";
import useAuth from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth()

    if (loading) {
        return <div className="text-center flex justify-center items-center py-20">
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="red"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    }

    if (user) {
        return children;
    }


    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoutes;
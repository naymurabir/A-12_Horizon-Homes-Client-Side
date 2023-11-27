import { ThreeDots } from "react-loader-spinner";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth()

    const { isAdmin, isAdminLoading } = useAdmin()

    if (loading || isAdminLoading) {
        return <div className="text-center flex justify-center items-center">
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

    if (user && isAdmin) {
        return children;
    }


    return <Navigate state={location.pathname} to="/"></Navigate>
};

export default AdminRoute;
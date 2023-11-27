import { ThreeDots } from "react-loader-spinner";
import useAgent from "../Hooks/useAgent";
import useAuth from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";

const AgentRoute = ({ children }) => {
    const { user, loading } = useAuth()

    const { isAgent, isAgentLoading } = useAgent()

    if (loading || isAgentLoading) {
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

    if (user && isAgent) {
        return children;
    }


    return <Navigate state={location.pathname} to="/"></Navigate>
};

export default AgentRoute;
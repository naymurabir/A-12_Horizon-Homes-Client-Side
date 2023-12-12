import useAuth from "../../../../Hooks/useAuth";
import useUsers from "../../../../Hooks/useUsers";
import { Helmet } from 'react-helmet-async';

const AgentProfile = () => {
    const { user } = useAuth()

    const { users } = useUsers()

    const userRole = users.find(user1 => user1.email === user?.email)
    console.log(userRole);

    return (
        <div className="max-w-screen-xl mx-auto px-2 md:px-10 lg:px-20">
            <Helmet>
                <title>
                    Agent Profile
                </title>
            </Helmet>
            <div>
                <div className="p-12 mt-10 justify-center items-center sm:flex sm:space-x-6 bg-[#0060efb7] shadow-xl transform transition-transform hover:scale-105 rounded-md text-white">
                    <div className="flex w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                        <img src={user?.photoURL} alt="" className="object-cover w-full h-full rounded-full" />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <div className="flex gap-2 items-center">
                                <h1 className="text-xl font-semibold">Name:</h1>
                                <h2 className="text-xl font-semibold">{user?.displayName}</h2>
                            </div>
                            <div className="flex gap-2 items-center">
                                <h1 className="text-xl font-semibold">Email:</h1>
                                <span className="text-xl">{user?.email}</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <h1 className="text-xl font-semibold">Role:</h1>
                                <p className="font-semibold">{userRole?.role ? userRole.role : ""}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentProfile;
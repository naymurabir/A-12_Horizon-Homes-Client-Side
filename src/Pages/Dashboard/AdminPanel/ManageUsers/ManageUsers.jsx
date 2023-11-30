import { ThreeDots } from "react-loader-spinner";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useUsers from "../../../../Hooks/useUsers";
import swal from "sweetalert";
import ManageUser from "./ManageUser";

const ManageUsers = () => {

    const axiosSecure = useAxiosSecure()

    const { users, isPending, refetch } = useUsers()

    if (isPending) {
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

    const handleMakeAdmin = (user) => {
        swal({
            title: "Are you sure?",
            text: "Do you want to make admin?",
            icon: "success",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axiosSecure.patch(`/users/admin/${user._id}`)
                        .then(res => {
                            refetch()
                            if (res.data.modifiedCount > 0)
                                swal("The user has been made to admin successfully.", {
                                    icon: "success",
                                });
                        })

                } else {
                    swal("Not modified!");
                }
            });
    }

    const handleMakeAgent = (user) => {
        swal({
            title: "Are you sure?",
            text: "Do you want to make agent?",
            icon: "success",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axiosSecure.patch(`/users/agent/${user._id}`)
                        .then(res => {
                            refetch()
                            if (res.data.modifiedCount > 0)
                                swal("The user has been made to agent successfully.", {
                                    icon: "success",
                                });
                        })

                } else {
                    swal("Not modified!");
                }
            });
    }

    const handleMakeFraud = (user) => {
        console.log("Frauddddd");
        swal({
            title: "Are you sure?",
            text: "Do you want to make agent to fraud?",
            icon: "success",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axiosSecure.patch(`/users/fraud/${user._id}`)
                        .then(res => {
                            refetch()
                            if (res.data.modifiedCount > 0)
                                swal("The agent has been made to fraud successfully.", {
                                    icon: "success",
                                });
                        })

                } else {
                    swal("Not modified!");
                }
            });
    }

    const handleDeleteUser = (user) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axiosSecure.delete(`/users/${user._id}`)
                        .then(data => {
                            refetch()
                            if (data.data.deletedCount > 0)
                                swal("The user has been deleted successfully.", {
                                    icon: "success",
                                });
                        })

                } else {
                    swal("The user is safe!");
                }
            });

    }

    return (
        <div>
            <div>
                <div className="bg-white lg:px-2 lg:py-2">
                    <div>
                        <div className="overflow-x-auto mt-5">
                            <table className="table w-full">
                                <thead className="text-sm font-bold bg-[#4F79AC] text-white">
                                    <tr>
                                        <th>
                                            SL
                                        </th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Make Admin</th>
                                        <th>Make Agent</th>
                                        <th>Mark as Fraud</th>
                                        <th>Delete User</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user, index) => <ManageUser key={user._id} user={user} index={index} handleDeleteUser={handleDeleteUser} handleMakeAdmin={handleMakeAdmin} handleMakeAgent={handleMakeAgent} handleMakeFraud={handleMakeFraud}></ManageUser>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;
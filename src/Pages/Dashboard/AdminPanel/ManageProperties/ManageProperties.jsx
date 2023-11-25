import { ThreeDots } from "react-loader-spinner";
import useProperties from "../../../../Hooks/useProperties";
import ManageProperty from "./ManageProperty";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageProperties = () => {

    const axiosSecure = useAxiosSecure()

    const { properties, isPending, refetch } = useProperties()

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

    const handleVerifyProperty = id => {
        axiosSecure.put(`/properties?id=${id}`)
            .then(res => {

                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: "This Property has been verified!",
                        showConfirmButton: false,
                        background: '#343436',
                        heightAuto: '100px',
                        color: 'white',
                        timer: 2000
                    })
                }
            })
    }

    const handleRejectProperty = id => {
        axiosSecure.put(`/properties/reject?id=${id}`)
            .then(res => {

                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: "This Property has been rejected!",
                        showConfirmButton: false,
                        background: '#343436',
                        heightAuto: '100px',
                        color: 'white',
                        timer: 2000
                    })
                }
            })
    }


    return (
        <div>
            <div>
                <div className="bg-white lg:px-2 lg:py-2">
                    <div>
                        <div className="overflow-x-auto mt-5">
                            <table className="table w-full">
                                <thead className="text-xs font-bold bg-[#4F79AC] text-white">
                                    <tr>
                                        <th>
                                            SL
                                        </th>
                                        <th>Title</th>
                                        <th>Location</th>
                                        <th>Agent Name</th>
                                        <th>Agent Email</th>
                                        <th>Price Range</th>
                                        <th>Verify Button</th>
                                        <th>Reject Button</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        properties.map((property, index) => <ManageProperty key={property._id} property={property} index={index} handleVerifyProperty={handleVerifyProperty} handleRejectProperty={handleRejectProperty}></ManageProperty>)
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

export default ManageProperties;
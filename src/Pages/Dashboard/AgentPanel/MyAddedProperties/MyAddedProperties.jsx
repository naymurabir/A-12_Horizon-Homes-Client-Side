import swal from "sweetalert";
import useMyAddedProperties from "../../../../Hooks/useMyAddedProperties";
import MyAddedProperty from "./MyAddedProperty";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { ThreeDots } from "react-loader-spinner";

const MyAddedProperties = () => {

    const axiosPublic = useAxiosPublic()

    const { myAddedProperties, isPending, refetch } = useMyAddedProperties()

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

    const handleDeleteProperty = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axiosPublic.delete(`/myAddedProperties/${id}`)
                        .then(data => {
                            refetch()
                            if (data.data.deletedCount > 0)
                                swal("The property has been deleted successfully.", {
                                    icon: "success",
                                });
                        })

                } else {
                    swal("The property is safe!");
                }
            });

    }

    return (
        <div>
            <div className="pt-5 text-center lg:w-3/4 mx-auto">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800">My Added Properties</h1>
                <hr className="my-3" />

                <p>These are the properties which are added by the specific agents.</p>

                <div className="">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                </div>
            </div>

            <div className="w-full px-2 md:px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    myAddedProperties.map(myProperty => <MyAddedProperty key={myProperty._id} myProperty={myProperty} handleDeleteProperty={handleDeleteProperty} ></MyAddedProperty>)
                }
            </div>
        </div>
    );
};

export default MyAddedProperties;
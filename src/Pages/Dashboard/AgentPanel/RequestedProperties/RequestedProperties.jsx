import { ThreeDots } from "react-loader-spinner";
import useRequestedProperties from "../../../../Hooks/useRequestedProperties"
import RequestedProperty from "./RequestedProperty";

const RequestedProperties = () => {

    const { requestedProperties, isPending } = useRequestedProperties()

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
                                        <th>Buyer Email</th>
                                        <th>Buyer Name</th>
                                        <th>Offered Price</th>
                                        <th>Status</th>
                                        <th>Accept Button</th>
                                        <th>Reject Button</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        requestedProperties.map((requestedProperty, index) => <RequestedProperty key={requestedProperty._id} requestedProperty={requestedProperty} index={index}></RequestedProperty>)
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

export default RequestedProperties;
import { ThreeDots } from "react-loader-spinner";
import useMySoldProperties from "../../../../Hooks/useMySoldProperties";
import MySoldProperty from "./MySoldProperty";


const MySoldProperties = () => {

    const { soldProperties, isPending, } = useMySoldProperties()

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
                <h2 className="text-2xl font-bold text-[#4F79AC] text-center md:mt-5">My Sold Properties</h2>
            </div>

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
                                            <th>Sold Price</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            soldProperties?.map((soldProperty, index) => <MySoldProperty key={soldProperty._id} soldProperty={soldProperty} index={index}></MySoldProperty>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySoldProperties;
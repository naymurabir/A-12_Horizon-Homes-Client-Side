import { ThreeDots } from "react-loader-spinner";
import usePropertiesBaught from "../../../../Hooks/usePropertiesBaught";
import SinglePropertyBought from "./SinglePropertyBought";

const PropertyBought = () => {

    const { propertiesBaught, isPending } = usePropertiesBaught()
    console.log(propertiesBaught);

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

            <div className="pt-5 text-center lg:w-3/4 mx-auto">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800">Bought Properties</h1>
                <hr className="my-3" />

                <p>These are the properties which are bought by the clients.</p>

                <div className="">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                </div>
            </div>

            <div className="w-full px-2 md:px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    propertiesBaught?.map(propertyBought => <SinglePropertyBought key={propertyBought._id} propertyBought={propertyBought} ></SinglePropertyBought>)
                }
            </div>

        </div>
    );
};

export default PropertyBought;
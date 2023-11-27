import useAllProperties from "../../Hooks/useAllProperties";
import Advertisement from "./Advertisement";

const Advertisements = () => {

    const { allProperties } = useAllProperties()


    return (
        <div className="max-w-screen-xl mx-auto px-2 md:px-10 lg:px-24">
            <div className="text-center lg:w-3/4 mx-auto my-5">
                <h2 className="text-xl font-bold text-[#0b3261]">Properties</h2>
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800">Our Properties</h1>
                <hr className="my-3" />

                <p>Elevate your lifestyle with this luxurious, contemporary haven. Breathtaking views, premium amenities, and exquisite design await in this prestigious property.</p>

                <div className="mt-2">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    allProperties.slice(0, 5).map(property => <Advertisement key={property._id} property={property} ></Advertisement>)
                }
            </div>
        </div>
    );
};

export default Advertisements;
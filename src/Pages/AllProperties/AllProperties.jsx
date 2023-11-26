import useAllProperties from "../../Hooks/useAllProperties";
import AllProperty from "./AllProperty";


const AllProperties = () => {

    const { allProperties } = useAllProperties()

    return (
        <div>
            <div className="pt-20">
                <div className="text-center lg:w-3/4 mx-auto">
                    <h2 className="text-xl font-bold text-[#4F79AC]">Properties</h2>
                    <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800">Our Properties</h1>
                    <hr className="my-3" />

                    <p> At Horizon Homes, we believe in elevating your real estate experience. Whether you are a first-time home buyer, an investor, or looking to sell, our platform is designed to meet your unique needs. Trust us to be your guide in the exciting journey of finding or selling your property!</p>

                    <div className="mt-2">
                        <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                    </div>
                </div>

                <div className="w-full md:w-10/12 lg:w-9/12 mx-auto px-2 md:px-2  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        allProperties.map(property => <AllProperty key={property._id} property={property}></AllProperty>)
                    }
                </div>


            </div>
        </div>
    );
};

export default AllProperties;
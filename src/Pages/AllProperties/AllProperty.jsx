import { Link } from "react-router-dom";

const AllProperty = ({ property }) => {

    const { _id, image, title, location, agent_name, agent_image, price_range, status } = property

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl mt-10">
                <img className="h-[200px] w-full rounded" src={image} alt="Shoes" />
                <div className="card-body">
                    <h2 title={title} className='text-xl font-bold truncate  text-center text-[#1e66be]'> {title} </h2>
                    <hr />
                    <h2 className="font-bold text-center">Agent Information.</h2>
                    <div className="flex items-center justify-between">
                        <img className="h-14 w-14 rounded-full" src={agent_image} alt="" />
                        <div>
                            <h2 className='text-base font-semibold text-[#1e66be]'> Agent Name:</h2>
                            <p className="font-bold">{agent_name}</p>
                        </div>
                    </div>

                    <div className='flex justify-between'>
                        <div>
                            <h3 className='text-base font-semibold text-[#1e66be]'>Location:</h3>
                            <p className="font-bold">{location}</p>
                        </div>
                        <div>
                            <h3 className='text-base text-[#1e66be] font-semibold'> Status:</h3>
                            <p className="font-bold">{status}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <h3 className='text-base text-[#1e66be] font-semibold'> Price Range:</h3>
                        <p className="font-bold">${price_range.min}-{price_range.max}</p>
                    </div>
                    <Link to={`/propertyDetails/${_id}`}>
                        <button className="bg-[#1e66be] text-white px-2 py-1 rounded font-semibold w-full">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllProperty;
import { Link } from "react-router-dom";

const Advertisement = ({ property }) => {

    const { _id, image, title, location, price_range, status } = property

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl mt-10">
                <img className="h-[200px] w-full rounded" src={image} alt="Shoes" />
                <div className="card-body">
                    <h2 title={title} className='text-xl font-bold truncate  text-center text-[#1e66be]'> {title} </h2>
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

export default Advertisement;
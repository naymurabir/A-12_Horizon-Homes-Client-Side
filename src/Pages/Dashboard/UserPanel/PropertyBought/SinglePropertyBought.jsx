import { Link } from "react-router-dom";

const SinglePropertyBought = ({ propertyBought }) => {


    const { _id, image, location, title, agent_name, offered_amount, status } = propertyBought

    return (
        <div>
            <div className=" card card-compact bg-base-100 shadow-xl mt-10">
                <div className="relative">
                    <img className="h-[200px] w-full rounded" src={image} alt="Shoes" />
                </div>
                <div className="card-body">
                    <h2 title={title} className='text-xl font-bold truncate  text-center text-[#1e66be]'> {title} </h2>
                    <hr />
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className='text-base font-semibold text-[#1e66be]'> Offered Amount:</h2>
                            <p className="font-bold">${offered_amount}</p>
                        </div>

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

                    <div>
                        {
                            status === "accepted" ?
                                <Link to={`/dashboard/makePayment/${_id}`}>
                                    <button className='absolute top-1.5 right-0 text-white bg-[#350cca] px-5 py-1 rounded'> <span>Pay</span> </button>
                                </Link> : ''
                        }
                    </div>


                </div>
            </div>
        </div>
    );
};

export default SinglePropertyBought;
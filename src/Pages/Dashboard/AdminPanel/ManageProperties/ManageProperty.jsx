
const ManageProperty = ({ property, index, handleVerifyProperty, handleRejectProperty }) => {

    const { _id, title, location, agent_name, agent_email, price_range, status } = property;

    return (
        <>
            <tr>
                <td className="text-sm font-semibold">
                    {index}
                </td>
                <td>
                    <div className='text-sm'>{title}
                    </div>
                </td>
                <td>
                    <h1 className='text-sm'>{location}</h1>
                </td>
                <td>
                    <h1 className='text-sm'>{agent_name}</h1>
                </td>

                <td>
                    <h2 className='text-sm '>{agent_email}</h2>
                </td>

                <td>
                    <h2 className='text-sm'>{price_range}</h2>
                </td>

                {
                    status === 'verified' || status === 'rejected' ? <>
                        {status === 'verified' ?
                            <td>
                                <h2 className='text-white text-center bg-green-500 text-xs px-1 py-1 rounded-sm font-semibold'> Verified</h2>
                            </td>
                            :

                            <>
                                <td>

                                </td>
                                <td className="w-full text-right">
                                    <h2 className=' text-white text-center bg-[#e71515] text-xs px-1 py-1 rounded-sm font-semibold'> Rejected</h2>
                                </td>
                            </>}
                    </>
                        : <>
                            <td>
                                <button onClick={() => handleVerifyProperty(_id)} className=' text-white  bg-[#4F79AC] text-xs px-5 py-1 rounded-sm font-semibold'> Verify</button>
                            </td>
                            <td>
                                <button onClick={() => handleRejectProperty(_id)} className=' text-white  bg-[#e71515] text-xs px-5 py-1 rounded-sm font-semibold'> Reject</button>
                            </td>
                        </>
                }

                {/* {
                    status === 'verified' ?
                        <td>
                            <h2 className=' text-white text-center bg-green-500 text-xs px-1 py-1 rounded-sm font-semibold'> Verified</h2>
                        </td>
                        :
                        <>
                            <td>
                                <button onClick={() => handleVerifyProperty(_id)} className=' text-white  bg-[#4F79AC] text-xs px-5 py-1 rounded-sm font-semibold'> Verify</button>
                            </td>
                            <td>
                                <button onClick={() => handleRejectProperty(_id)} className=' text-white  bg-[#e71515] text-xs px-5 py-1 rounded-sm font-semibold'> Reject</button>
                            </td>
                        </>
                } */}

            </tr>
        </>
    );
};

export default ManageProperty;
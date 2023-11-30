
const RequestedProperty = ({ requestedProperty, index, handleMakeAccept, handleMakeReject }) => {

    const { _id, title, location, buyer_email, buyer_name, offered_amount, status } = requestedProperty

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
                    <h2 className='text-sm '>{buyer_email}</h2>
                </td>

                <td>
                    <h1 className='text-sm'>{buyer_name}</h1>
                </td>

                <td>
                    <h2 className='text-sm'>${offered_amount}</h2>
                </td>

                <td>
                    <h2 className='text-sm font-semibold'>{status}</h2>
                </td>

                {
                    status === 'accepted' || status === 'rejected' ? <>
                        {status === 'accepted' ?
                            <td>
                                <h2 className='text-white text-center bg-green-500 text-xs px-1 py-1 rounded-sm font-semibold'> Accepted</h2>
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
                        :
                        <>
                            <td>
                                <button onClick={() => handleMakeAccept(_id)} className=' text-white  bg-[#4F79AC] text-xs px-5 py-1 rounded-sm font-semibold'> Accept</button>
                            </td>
                            <td>
                                <button onClick={() => handleMakeReject(_id)} className=' text-white  bg-[#e71515] text-xs px-5 py-1 rounded-sm font-semibold'> Reject</button>
                            </td>
                        </>
                }

            </tr>
        </>
    );
};

export default RequestedProperty;
import { AiOutlineDelete } from "react-icons/ai";

const MySingleReview = ({ review, index, handleDeleteReview }) => {

    const { _id, title, agent_name, review_date, review_description } = review

    return (
        <>
            <tr>
                <td className="text-sm font-semibold">
                    {index}
                </td>
                <td>
                    <div>
                        <div className="text-sm ">{title}</div>
                    </div>
                </td>
                <td>
                    <h1 className='text-sm'>{agent_name} </h1>
                </td>

                <td>
                    <h1 className='text-sm'>{review_date}</h1>
                </td>

                <td>
                    <h1 className='text-sm'>{review_description}</h1>
                </td>

                <td>
                    <button onClick={() => handleDeleteReview(_id)} className=' text-white py-1 px-2 bg-red-500 text-xl rounded-sm font-semibold'> <AiOutlineDelete></AiOutlineDelete> </button>
                </td>
            </tr>
        </>
    );
};

export default MySingleReview;
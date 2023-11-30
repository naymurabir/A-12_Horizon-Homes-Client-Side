import { AiOutlineDelete } from "react-icons/ai";


const ManageUser = ({ user, index, handleDeleteUser, handleMakeAdmin, handleMakeAgent }) => {

    const { name, email, role } = user

    console.log(role);

    return (
        <>
            <tr>
                <td className="text-sm font-semibold">
                    {index}
                </td>
                <td>
                    <div>
                        <div className="text-sm ">{name}</div>
                    </div>
                </td>
                <td>
                    <h1 className='text-sm'>{email} </h1>
                </td>

                <td>
                    {
                        user.role === 'admin' ? <button className="bg-green-500 text-white text-xs px-6 py-1 rounded"> Admin </button> : <button onClick={() => handleMakeAdmin(user)} className=' text-white  bg-[#4F79AC] text-xs px-1 py-1 rounded-sm font-semibold'> Make Admin</button>
                    }
                </td>

                <td>
                    {
                        user.role === 'agent' ? <button className="bg-orange-500 text-xs text-white px-6 py-1 rounded"> Agent </button> : <button onClick={() => handleMakeAgent(user)} className=' text-white  bg-[#4F79AC] text-xs px-1 py-1 rounded-sm font-semibold'> Make Agent </button>
                    }
                </td>
                {
                    user.role === "agent" ? <td>
                        {
                            user.role === 'fraud' ? <button className="bg-red-500 text-xs text-white px-6 py-1 rounded"> Fraud </button> : <button className=' text-white  bg-[#4F79AC] text-xs px-1 py-1 rounded-sm font-semibold'> Mark as Fraud </button>
                        }
                    </td> : <td></td>
                }

                <td>
                    <button onClick={() => handleDeleteUser(user)} className=' text-white py-1 px-2 bg-red-500 text-xl rounded-sm font-semibold'> <AiOutlineDelete></AiOutlineDelete> </button>
                </td>
            </tr>
        </>
    );
};

export default ManageUser;
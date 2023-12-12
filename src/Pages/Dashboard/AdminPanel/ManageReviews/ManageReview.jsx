import { Helmet } from 'react-helmet-async';

const ManageReview = ({ review, handleDeleteReview }) => {

    const { _id, reviewer_image, email, reviewer_name, review_date, review_description } = review

    return (
        <div>
            <Helmet>
                <title>
                    Manage Reviews
                </title>
            </Helmet>
            <div className="card card-compact bg-base-100 shadow-xl mt-10">
                <img className="h-[150px] w-full rounded object-cover" src={reviewer_image} alt="Reviews" />
                <div className="card-body">
                    <h2 className='text-xl font-bold  text-center text-[#1e66be]'> { } </h2>

                    <div>
                        <h3 className='text-base font-semibold text-[#1e66be]'>Email:</h3>
                        <p className="font-bold">{email}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <h3 className='text-base text-[#1e66be] font-semibold'> Date:</h3>
                        <p className="font-bold">{review_date}</p>
                    </div>

                    <div>
                        <h3 className='text-base text-[#1e66be] font-semibold'> Reviewer Name:</h3>
                        <p className="font-bold">{reviewer_name}</p>
                    </div>

                    <div >
                        <h3 className='text-base text-[#1e66be] font-semibold'> Review:</h3>
                        <p className="font-bold">{review_description.slice(0, 100)
                        }</p>
                    </div>

                    <button onClick={() => handleDeleteReview(_id)} className="bg-[#1e66be] text-white px-2 py-1 rounded font-semibold w-full">Delete Review</button>

                </div>
            </div>
        </div>
    );
};

export default ManageReview;
import { ThreeDots } from "react-loader-spinner";
import useReviews from "../../../../Hooks/useReviews";
import MySingleReview from "./MySingleReview";
import swal from "sweetalert";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { Helmet } from 'react-helmet-async';

const MyReview = () => {
    const axiosPublic = useAxiosPublic()
    const { reviews, isPending, refetch } = useReviews()

    if (isPending) {
        return <div className="text-center flex justify-center items-center">
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="red"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    }

    const handleDeleteReview = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axiosPublic.delete(`/reviews/${id}`)
                        .then(data => {
                            refetch()
                            if (data.data.deletedCount > 0)
                                swal("The review has been deleted successfully.", {
                                    icon: "success",
                                });
                        })

                } else {
                    swal("The review is safe!");
                }
            });

    }

    return (
        <div>

            <Helmet>
                <title>
                    My Review
                </title>
            </Helmet>

            <div className="pt-5 px-2 md:px-2">

                <div className="text-center lg:w-3/4 mx-auto">
                    <h2 className="text-xl font-bold text-[#4F79AC]">Reviews</h2>
                    <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800">My Reviews</h1>
                    <hr className="my-3" />

                    <p> These are the reviews which are added by the users for specific Property.</p>

                    <div className="mt-2">
                        <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                    </div>
                </div>

                <div>
                    <div>
                        <div className="bg-white lg:px-2 lg:py-2">
                            <div>
                                <div className="overflow-x-auto mt-5">
                                    <table className="table w-full">
                                        <thead className="text-sm font-bold bg-[#4F79AC] text-white">
                                            <tr>
                                                <th>
                                                    SL
                                                </th>
                                                <th>Title</th>
                                                <th>Agent Name</th>
                                                <th>Review Date</th>
                                                <th>Review</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                reviews.map((review, index) => <MySingleReview key={review._id} review={review} index={index} handleDeleteReview={handleDeleteReview} ></MySingleReview>)
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyReview;
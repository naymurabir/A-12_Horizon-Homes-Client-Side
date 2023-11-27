import { ThreeDots } from "react-loader-spinner";
import useReviewsTotal from "../../../../Hooks/useReviewsTotal";
import ManageReview from "./ManageReview";
import swal from "sweetalert";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const ManageReviews = () => {
    const axiosSecure = useAxiosSecure()
    const { reviewsAll, isPending, refetch } = useReviewsTotal()

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
                    axiosSecure.delete(`/reviewsAll/${id}`)
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
            <div className="pt-5">

                <div className="text-center lg:w-3/4 mx-auto">
                    <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800">Manage Reviews</h1>
                    <hr className="my-3" />

                    <p> Here is the details information of the Property! If you like the property then book as soon as possible.</p>

                    <div className="mt-2">
                        <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                    </div>
                </div>

                <div className="w-full md:w-10/12 lg:w-11/12 mx-auto px-2 md:px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        reviewsAll.map(review => <ManageReview key={review._id} review={review} handleDeleteReview={handleDeleteReview}></ManageReview>)
                    }
                </div>

            </div>
        </div>
    );
};

export default ManageReviews;
import swal from "sweetalert";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useWishlists from "../../../../Hooks/useWishlists";
import SingleWishlist from "./SingleWishlist";
import { ThreeDots } from "react-loader-spinner";

const Wishlist = () => {
    const axiosPublic = useAxiosPublic()
    const { wishlists, isPending, refetch } = useWishlists()

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

    const handleDeleteProperty = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axiosPublic.delete(`/wishlists/${id}`)
                        .then(data => {
                            refetch()
                            if (data.data.deletedCount > 0)
                                swal("The wishlist has been deleted successfully.", {
                                    icon: "success",
                                });
                        })

                } else {
                    swal("The wishlist is safe!");
                }
            });

    }

    return (
        <div>
            <div className="py-5 text-center lg:w-3/4 mx-auto">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800">Wishlist Properties
                </h1>
                <hr className="my-3" />

                <p> Here is the wishlists properties has been displayed! If you like the property then book as soon as possible.</p>

                <div>
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    wishlists.map(wishlist => <SingleWishlist key={wishlist._id} wishlist={wishlist} handleDeleteProperty={handleDeleteProperty} ></SingleWishlist>)
                }
            </div>
        </div>
    );
};

export default Wishlist;
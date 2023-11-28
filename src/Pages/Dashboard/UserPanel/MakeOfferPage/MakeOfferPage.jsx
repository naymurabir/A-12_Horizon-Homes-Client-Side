import { useLoaderData } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
// import { useParams } from "react-router-dom";


const MakeOfferPage = () => {

    const axiosPublic = useAxiosPublic()

    const loadedWishList = useLoaderData()
    const { user } = useAuth()

    const handleMakeOffer = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const location = e.target.location.value;
        const image = loadedWishList.image;
        const agent_name = e.target.agent_name.value;
        const agent_email = e.target.agent_email.value;
        const buyer_email = user?.email;
        const buyer_name = user?.displayName;
        const buying_date = e.target.buying_date.value;
        const offered_amount = parseFloat(e.target.offered_amount.value);
        const status = "pending"

        const newOffer = { title, location, image, agent_name, agent_email, buyer_email, buyer_name, buying_date, offered_amount, status }

        if (offered_amount >= loadedWishList.price_range.min && offered_amount <= loadedWishList.price_range.max) {
            axiosPublic.post('/offeredProperties', newOffer)
                .then(res => {
                    if (res.data.insertedId) {
                        // reset()
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Offer a price for this property is successful!",
                            showConfirmButton: false,
                            timer: 2000
                        });
                    }
                })
        } else {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Please offer a price between price range!",
                showConfirmButton: false,
                timer: 2000
            });
        }
    };


    return (
        <div className="max-w-screen-xl mx-auto px-2 md:px-10 lg:px-20">
            <h2 className="text-2xl font-bold text-center mb-4 text-[#4F79AC]">Make an Offer</h2>

            <div className="bg-white border border-[#4F79AC] p-2 md:p-5 lg:p-10">
                <form onSubmit={handleMakeOffer}>

                    <div className="flex flex-col md:flex-row gap-5 mt-3">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold ">Property Title</span>
                            </label>
                            <input defaultValue={loadedWishList.title} readOnly name="title" type="text" placeholder="Property title.." className="input input-bordered input-md w-full max-w-2xl focus:outline-0" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold ">Property Location</span>
                            </label>
                            <input defaultValue={loadedWishList.location} readOnly type="text" name="location" placeholder="Property location..." className="input input-bordered w-full text-sm max-w-xs focus:outline-0" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5 mt-3">

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold ">Agent Name</span>
                            </label>
                            <input defaultValue={loadedWishList.agent_name} readOnly type="text" name="agent_name" placeholder="Agent Name..." className="input input-bordered w-full text-sm max-w-xs focus:outline-0" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold ">Agent Email</span>
                            </label>
                            <input defaultValue={loadedWishList.agent_email} readOnly type="text" name="agent_email" placeholder="Agent email..." className="input input-bordered w-full text-sm max-w-xs focus:outline-0" />
                        </div>

                    </div>

                    <div className="flex justify-center items-center flex-col md:flex-row gap-5 mt-3">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold ">Buyer Email</span>
                            </label>
                            <input defaultValue={user?.email} readOnly type="text" name="buyer_email" placeholder="Buyer email..." className="input input-bordered w-full text-sm max-w-xs focus:outline-0" />
                        </div>

                        <div className="form-control w-full my-3">
                            <label className="label">
                                <span className="label-text font-semibold ">Buyer Name</span>
                            </label>
                            <input defaultValue={user?.displayName} readOnly type="text" name="buyer_name" placeholder="Buyer name..." className="input input-bordered w-full text-sm max-w-xs focus:outline-0" />

                        </div>
                    </div>

                    <div className="flex justify-center items-center flex-col md:flex-row gap-5 mt-3">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold ">Buying Date</span>
                            </label>
                            <input type="date" name="buying_date" placeholder="Buying Date..." className="input input-bordered w-full text-sm max-w-xs focus:outline-0" />
                        </div>

                        <div className="form-control w-full my-3">
                            <label className="label">
                                <span className="label-text font-semibold ">Offered Amount</span>
                            </label>
                            <input type="number" name="offered_amount" placeholder="Offered Amount..." className="input input-bordered w-full text-sm max-w-xs focus:outline-0" />

                        </div>
                    </div>

                    <button className="px-8 py-2 leading-5  mt-2 text-white transition-colors duration-300 transform bg-[#175197] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 font-semibold">Offer</button>

                </form>
            </div>

        </div >
    );
};

export default MakeOfferPage;
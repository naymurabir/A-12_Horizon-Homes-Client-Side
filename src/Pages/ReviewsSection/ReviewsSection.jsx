import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import useAuth from '../../Hooks/useAuth';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';



const ReviewsSection = ({ property, review }) => {

    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()

    const handleSubmitReview = e => {
        e.preventDefault()
        const reviewer_image = e.target.reviewer_image.value
        const email = e.target.reviewer_email.value
        const reviewer_name = e.target.reviewer_name.value
        const title = e.target.property_title.value
        const agent_name = e.target.agent_name.value
        const agent_email = property.agent_email
        const review_date = e.target.review_date.value
        const review_description = e.target.review_description.value

        const newReview = { reviewer_image, email, reviewer_name, title, agent_name, agent_email, review_date, review_description }

        console.log(property.title);

        axiosPublic.post('/reviews', newReview)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your Review has been submitted successfully",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    const modal = document.getElementById('my_modal_4');
                    if (modal) {
                        modal.close();
                    }
                    e.target.reset()
                }
            })
    }

    return (
        <section className="max-w-screen-xl mx-auto px-2 md:px-10 lg:px-20">
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <div >
                        {
                            review?.map((review) => <SwiperSlide key={review._id}>

                                <div className="px-10 md:px-16 lg:px-20 flex flex-col items-center my-8 lg:my-4">
                                    <p className="text-black text-center text-base lg:py-3 font-bold">{review.review_description}</p>
                                    <h2 className="text-[#0e3361] font-bold text-lg">{review.title}</h2>
                                    <h2 className='font-bold'>{review.agent_name}</h2>
                                    <p className='font-bold'>{review.review_date}</p>
                                </div>
                            </SwiperSlide>)
                        }
                    </div>

                </Swiper>
            </div>

            <div className='flex justify-center mb-5'>
                <button onClick={() => document.getElementById('my_modal_4').showModal()} className='text-white bg-[#0e3361] px-5 py-1 rounded mt-2'> <label htmlFor="my_modal_6" className="font-semibold">Add a Review</label></button>
                <dialog id="my_modal_4" className="modal">
                    <div className="modal-box lg:w-6/12">
                        <div>
                            <form onSubmit={handleSubmitReview} method="dialog">

                                <label className="label">
                                    <span className="label-text font-semibold ">Reviewer Image</span>
                                </label>
                                <input defaultValue={user?.photoURL} name="reviewer_image" type="text" placeholder="User Image..." className="input input-bordered input-2xl w-full max-w-2xl focus:outline-0" readOnly />

                                <label className="label">
                                    <span className="label-text font-semibold ">Reviewer Email</span>
                                </label>
                                <input defaultValue={user?.email} name="reviewer_email" type="text" placeholder="User Email..." className="input input-bordered input-2xl w-full max-w-2xl focus:outline-0" readOnly />

                                <label className="label">
                                    <span className="label-text font-semibold ">Reviewer Name</span>
                                </label>
                                <input defaultValue={user?.displayName} name="reviewer_name" type="text" placeholder="User Name..." className="input input-bordered input-2xl w-full max-w-2xl focus:outline-0" readOnly />

                                <label className="label">
                                    <span className="label-text font-semibold ">Property Title</span>
                                </label>
                                <input defaultValue={property.title} name="property_title" type="text" placeholder="Property Title..." className="input input-bordered input-2xl w-full max-w-2xl focus:outline-0" readOnly />

                                <label className="label">
                                    <span className="label-text font-semibold ">Agent Name</span>
                                </label>
                                <input defaultValue={property.agent_name} name="agent_name" type="text" placeholder="Agent Name..." className="input input-bordered input-2xl w-full max-w-2xl focus:outline-0" readOnly />

                                <label className="label">
                                    <span className="label-text font-semibold ">Review Date</span>
                                </label>
                                <input name="review_date" type="date" placeholder="Review Time..." className="input input-bordered input-2xl w-full max-w-2xl focus:outline-0" />

                                <label className="label">
                                    <span className="label-text font-semibold ">Review Description</span>
                                </label>
                                <textarea className="input input-bordered input-2xl w-full max-w-2xl focus:outline-0" name="review_description" id="" cols="30" rows="30 " placeholder="Review Description..."></textarea>

                                <div className='flex justify-center'>
                                    <button className='text-white bg-[#0e3361] px-5 py-1 rounded'>Submit</button>
                                </div>
                            </form>
                            <form className='flex justify-end' method="dialog">
                                <button className='text-white bg-[#0e3361] px-5 py-1 rounded'>Close</button>
                            </form>

                        </div>

                    </div>
                </dialog>


            </div>
        </section>
    );

};

export default ReviewsSection;
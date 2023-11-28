import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import ReviewsSection from "../ReviewsSection/ReviewsSection";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";


const PropertyDetails = () => {

    const property = useLoaderData()
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()

    const [review, setReview] = useState([])

    const { image, title, location, details, agent_name, email, agent_image, price_range, status } = property

    useEffect(() => {
        if (title) {
            (async () => {
                const { data } = await axiosPublic.get(`/reviews/${title}`)
                setReview(data)
            })()
        }
    }, [title, axiosPublic])


    const wishlistProperty = {
        image: property.image,
        title: property.title,
        location: property.location,
        details: property.details,
        agent_name: property.agent_name,
        agent_email: property.email,
        email: user?.email,
        agent_image: property.agent_image,
        price_range: property.price_range,
        status: property.status
    }


    const handleAddToWishlist = () => {
        axiosPublic.post('/wishlists', wishlistProperty)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Property has been added to your Wishlists",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }

    return (
        <div>
            <div className="pt-20 w-full md:w-10/12 lg:w-10/12 mx-auto px-2 md:px-2">

                <div className="text-center lg:w-3/4 mx-auto">
                    <h2 className="text-xl font-bold text-[#4F79AC]">Details</h2>
                    <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800">Property Details</h1>
                    <hr className="my-3" />

                    <p> Here is the details information of the Property! If you like the property then book as soon as possible.</p>

                    <div className="mt-2">
                        <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-5 md:gap-10 my-5 lg:my-10">

                    <div className="lg:w-[60%]">
                        <img className="w-full h-[200px] md:h-[350px] lg:h-[380px] rounded " src={image} alt="" />
                    </div>

                    <div className="lg:w-[40%]">

                        <div className="flex flex-col justify-center items-center mb-5">
                            <div>
                                <img className="w-24 h-24 rounded-full" src={agent_image} alt="" />
                            </div>
                            <div className="text-center">
                                <h2 className="text-xl font-bold ">{agent_name}</h2>
                                <h3 className="text-sm font-semibold ">{email}</h3>
                            </div>
                        </div>
                        <h2 className="className='text-2xl md:text-3xl lg:text-4xl font-bold text-[#0e3361]">{title}</h2>
                        <hr className="my-3" />
                        <p className="text-sm text-gray-900 mt-3 text-justify font-semibold"> {details} </p>

                        <div className="flex gap-3 items-center">
                            <h2 className="text-xl text-[#0e3361] font-bold">Property Location:</h2>
                            <p className="font-semibold">{location} </p>
                        </div>

                        <div className="flex gap-3 items-center">
                            <h3 className='text-xl text-[#0e3361]  font-bold'> Price Range:</h3>
                            <p className="font-semibold"> ${price_range.min}-{price_range.max}</p>
                        </div>

                        <div className="flex gap-3 items-center">
                            <h3 className='text-xl text-[#0e3361]  font-bold'> Status:</h3>
                            <p className="font-semibold">{status}</p>
                        </div>

                        <div>
                            <button onClick={() => handleAddToWishlist(property)} className='text-white bg-[#0e3361] px-5 py-1 rounded mt-2 w-full'> <label htmlFor="my_modal_6" className="font-semibold">Add to Wishlist</label></button>
                        </div>

                    </div>

                </div>

                <div className="text-center lg:w-3/4 mx-auto">
                    <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800">Property Reviews</h1>
                    <hr className="my-3" />

                    <p> Reviews of all of our satisfied clients. Make your dream fulfill with us.</p>

                    <div className="mt-2">
                        <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                    </div>
                </div>

            </div>
            <ReviewsSection review={review} property={property}></ReviewsSection>
        </div>
    );
};

export default PropertyDetails;
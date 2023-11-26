import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../../Hooks/useAuth";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const AddProperty = () => {

    const { user } = useAuth()

    const [propertyItemLoading, setPropertyItemLoading] = useState(false)

    const axiosPublic = useAxiosPublic()
    // const axiosInstance = useInterceptors()

    const {
        reset,
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = async (data) => {
        setPropertyItemLoading(true)
        const imageFile = { image: data.image[0] }
        const res = await axios.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            }
        })
        if (res?.data?.data?.display_url) {
            setPropertyItemLoading(false)
            const propertyItem = {
                title: data.title,
                location: data.location,
                image: res?.data?.data?.display_url,
                agent_name: data.agent_name,
                agent_email: data.agent_email,
                agent_image: user?.photoURL,
                price_range: parseFloat(data?.price_range),
                details: data.details,
                status: 'pending'

            }
            console.log(propertyItem);

            axiosPublic.post('/properties', propertyItem)
                .then(res => {
                    if (res.data.insertedId) {
                        reset()
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Your Property has been added successfully",
                            showConfirmButton: false,
                            timer: 2000
                        });
                    }
                })
        }
    }

    return (
        <div className='max-w-screen-xl mx-auto px-2 md:px-10 lg:px-20 mt-10'>

            <h2 className="text-2xl font-bold text-center mb-4 text-[#4F79AC]">Add A Property</h2>

            <div className="bg-white border-2 border-[#4F79AC] p-2 md:p-5 lg:p-10">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="flex flex-col md:flex-row gap-5 mt-3">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold ">Property Title</span>
                            </label>
                            <input {...register("title")} name="title" type="text" placeholder="Property title.." className="input input-bordered input-md w-full max-w-2xl focus:outline-0" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold ">Property Location</span>
                            </label>
                            <input {...register("location")} type="text" name="location" placeholder="Property location..." className="input input-bordered w-full text-sm max-w-xs focus:outline-0" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5 mt-3">

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold ">Agent Name</span>
                            </label>
                            <input defaultValue={user?.displayName} readOnly {...register("agent_name")} type="text" name="agent_name" placeholder="Agent Name..." className="input input-bordered w-full text-sm max-w-xs focus:outline-0" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold ">Agent Email</span>
                            </label>
                            <input defaultValue={user?.email} readOnly {...register("agent_email")} type="text" name="agent_email" placeholder="Agent Email..." className="input input-bordered w-full text-sm max-w-xs focus:outline-0" />
                        </div>

                    </div>

                    <div className="flex justify-center items-center flex-col md:flex-row gap-5 mt-3">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold ">Price Range</span>
                            </label>
                            <input {...register("price_range")} type="number" name="price_range" placeholder="Price..." className="input input-bordered w-full text-sm max-w-xs focus:outline-0" />
                        </div>

                        <div className="form-control w-full my-3">
                            <label className="label">
                                <span className="label-text font-semibold ">Image</span>
                            </label>
                            <input {...register("image")} name="image" type="file" className="file-input file-input-bordered w-full max-w-xs" />
                        </div>
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-semibold ">Property Details</span>
                        </label>
                        <textarea {...register("details")} name="details" id="" cols="20" rows="5" placeholder="Property Details..." className="input focus:outline-0 input-bordered w-full text-sm h-[100px]" ></textarea>
                    </div>

                    {
                        propertyItemLoading ?

                            <button disabled className="px-8 py-2.5 mt-2 flex items-center gap-1 leading-5 text-white transition-colors duration-300 transform bg-[#4F79AC] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"><span className="loading w-[15px] loading-spinner text-error"></span>Waiting....</button>
                            :
                            <button className="px-8 py-2.5 leading-5  mt-2 text-white transition-colors duration-300 transform bg-[#4F79AC] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 font-semibold">Add Property</button>}

                </form>
            </div>

        </div>
    );
};

export default AddProperty;
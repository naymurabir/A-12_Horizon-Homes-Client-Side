import { useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../../Hooks/useAuth";

const UpdateProperty = () => {

    const { user } = useAuth()
    const navigate = useNavigate()
    const loadedProperty = useLoaderData()
    const { id } = useParams()

    const [propertyItemLoading, setPropertyItemLoading] = useState(false)

    const axiosPublic = useAxiosPublic()

    const {
        reset,
        register,
        handleSubmit,
    } = useForm()


    const onSubmit = async (data) => {
        setPropertyItemLoading(true)

        axiosPublic.put(`/updateProperty/${id}`, data)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    reset()
                    setPropertyItemLoading(false)
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Property Updated successfully!!!",
                        showConfirmButton: false,
                        timer: 2000
                    })
                    navigate('/dashboard/myAddedProperties')
                }
            })
    }

    return (
        <div>
            <h2 className="text-2xl font-bold text-center mb-4 text-[#4F79AC]">Update A Property</h2>

            <div className="bg-white border-2 border-[#4F79AC] p-2 md:p-5 lg:p-10">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="flex flex-col md:flex-row gap-5 mt-3">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold ">Property Title</span>
                            </label>
                            <input defaultValue={loadedProperty.title} {...register("title")} name="title" type="text" placeholder="Property title.." className="input input-bordered input-md w-full max-w-2xl focus:outline-0" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold ">Property Location</span>
                            </label>
                            <input defaultValue={loadedProperty.location} {...register("location")} type="text" name="location" placeholder="Property location..." className="input input-bordered w-full text-sm max-w-xs focus:outline-0" />
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
                            <input defaultValue={user?.email} readOnly {...register("email")} type="text" name="agent_email" placeholder="Agent Email..." className="input input-bordered w-full text-sm max-w-xs focus:outline-0" />
                        </div>

                    </div>

                    <div className="flex justify-center items-center flex-col md:flex-row gap-5 mt-3">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold ">Price Range</span>
                            </label>
                            <input defaultValue={loadedProperty.price_range} {...register("price_range")} type="number" name="price_range" placeholder="Price..." className="input input-bordered w-full text-sm max-w-xs focus:outline-0" />
                        </div>

                        <div className="form-control w-full my-3">
                            <label className="label">
                                <span className="label-text font-semibold ">Image</span>
                            </label>
                            <input defaultValue={loadedProperty.image} {...register("image")} type="text" name="image" placeholder="Price..." className="input input-bordered w-full text-sm max-w-xs focus:outline-0" />

                        </div>
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-semibold ">Property Details</span>
                        </label>
                        <textarea defaultValue={loadedProperty.details} {...register("details")} name="details" id="" cols="20" rows="5" placeholder="Property Details..." className="input focus:outline-0 input-bordered w-full text-sm h-[100px]" ></textarea>
                    </div>

                    {
                        propertyItemLoading ?

                            <button disabled className="px-8 py-2.5 mt-2 flex items-center gap-1 leading-5 text-white transition-colors duration-300 transform bg-[#4F79AC] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"><span className="loading w-[15px] loading-spinner text-error"></span>Waiting....</button>
                            :
                            <button className="px-8 py-2.5 leading-5  mt-2 text-white transition-colors duration-300 transform bg-[#4F79AC] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 font-semibold">Update Property</button>}

                </form>
            </div>

        </div >
    );
};

export default UpdateProperty;
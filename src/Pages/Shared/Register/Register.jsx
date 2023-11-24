import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import Swal from "sweetalert2";
import swal from "sweetalert";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import SocialLogin from "../SocialLogin/SocialLogin";


const Register = () => {

    const axiosPublic = useAxiosPublic()

    const { createUser, updateUserProfile } = useAuth()

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const navigate = useNavigate()


    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: "User has been registered successfully.",
                    showConfirmButton: false,
                    background: '#343436',
                    heightAuto: '100px',
                    color: 'white',
                    timer: 2000
                })
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        console.log("Profile updated.");

                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }

                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: "Users data has been added into database.",
                                        showConfirmButton: false,
                                        background: '#343436',
                                        heightAuto: '100px',
                                        color: 'white',
                                        timer: 2000
                                    })
                                    navigate('/login')
                                    reset()
                                }
                            })

                    })
                    .catch(error => {
                        console.log("Error:", error.message);
                        swal(error.message)
                    })
            })
            .catch(error => {
                console.log("Error:", error.message);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: "Your email / password is invalid.",
                    showConfirmButton: false,
                    background: '#343436',
                    heightAuto: '100px',
                    color: 'white',
                    timer: 2000
                })
            })
    }

    return (
        <div className='max-w-screen-xl mx-auto px-2 md:px-12 lg:px-20'>
            <div className="hero min-h-screen">
                <div className="card flex-shrink-0  max-w-sm  border border-gray-500 lg:w-[50%] mt-20">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className='text-2xl font-semibold text-center mt-5'>Sign Up</h2>
                        <div className="px-10 py-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <input {...register("name", { required: true })}
                                    name='name'
                                    type="text"
                                    placeholder="Name..." className="input input-bordered focus:outline-0" />
                                {errors.name && <span className="font-semibold">This name field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Photo url</span>
                                </label>
                                <input
                                    {...register("photo", { required: true })}
                                    name='photo'
                                    type="text"
                                    placeholder="Photo url..." className="input input-bordered focus:outline-0" />
                                {errors.photo && <span className="font-semibold">This photo field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input
                                    {...register("email", { required: true })}
                                    name='email'
                                    type="email"
                                    placeholder="Email..." className="input input-bordered focus:outline-0" required />
                                {errors.email && <span className=" font-semibold">This email field is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input
                                    {...register("password",
                                        {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 12,
                                            pattern: /^(?=.*[A-Z])(?=.*[@#$%^&+=!]).*$/,

                                        })}
                                    name='password'
                                    type="password" placeholder="password" className="input input-bordered focus:outline-0" required />
                                {errors.password?.type === "minLength" && <span className="font-semibold">Password must be 6 characters.</span>}

                                {errors.password?.type === "maxLength" && <span className="font-semibold">Password must be less than 12 characters.</span>}

                                {errors.password?.type === "pattern" && <span className="font-semibold">Password must have a special character and one Capital Letter. [hints: /^(?=.*[A-Z])(?=.*[@#$%^&+=!]).*$/]</span>}
                            </div>

                            <div className='flex gap-2 items-center  font-semibold'>
                                <input
                                    type="checkbox"
                                    name="terms"
                                    id="" />
                                <label className='text-xs text-purple-900'>Accept terms and conditions</label>
                            </div>

                            <div className="form-control">
                                <button className='btn btn-success mt-2'>Sign Up</button>
                            </div>
                            <div>
                                <h3 className='text-xs text-center font-semibold'>Or sign in with</h3>
                                <div className='flex justify-center items-center gap-4 mt-3'>
                                    <SocialLogin></SocialLogin>
                                </div>
                            </div>

                            <div className='text-center mt-2'>
                                <h2 className='text-sm'>Already have an account? <Link className='text-[#f3411d] font-semibold' to="/login">Login</Link> </h2>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Register;
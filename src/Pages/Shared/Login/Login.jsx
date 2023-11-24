import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {

    const { signInUser } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()


    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        // Call signInUser and pass email and password 
        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                navigate(location?.state ? location?.state : '/')
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User logged in successfully.',
                    showConfirmButton: false,
                    background: '#343436',
                    heightAuto: '100px',
                    color: 'white',
                    timer: 2000
                })
                e.target.reset()
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
                    <form onSubmit={handleLogin}>
                        <h2 className='text-2xl font-semibold text-center mt-5'>Log In</h2>
                        <div className="px-10 py-3">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input
                                    name='email'
                                    type="email"
                                    placeholder="Email..." className="input input-bordered focus:outline-0" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input
                                    name='password'
                                    type="password" placeholder="password" className="input input-bordered focus:outline-0" required />
                            </div>

                            <div className="form-control">
                                <button className='btn btn-success mt-2'>Login</button>
                            </div>

                            <div className='flex justify-center'>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div>
                                <h3 className='text-xs text-center font-semibold'>Or sign in with</h3>
                                <div className='flex justify-center items-center gap-4 mt-3'>
                                    <SocialLogin></SocialLogin>
                                </div>
                            </div>

                            <div className='text-center'>
                                <h2 className='text-sm'>Do not have an account? <Link className='text-[#f3411d] font-semibold' to="/register">Sign Up</Link> </h2>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;
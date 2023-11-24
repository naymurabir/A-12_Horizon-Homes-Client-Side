import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import googleImg from '../../../assets/Login_Register/google 1.png'
import fbImg from '../../../assets/Login_Register/fb.png'
import Swal from "sweetalert2";

const SocialLogin = () => {

    const { googleLogin } = useAuth()

    const axiosPublic = useAxiosPublic()

    const location = useLocation()
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);

                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
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
                    })

            })
    }

    return (
        <div className="flex justify-center items-center gap-2">
            <button><img src={fbImg} alt="" /></button>

            <button onClick={handleGoogleLogin}>  <img src={googleImg} alt="" /></button>
        </div>
    );
};

export default SocialLogin;
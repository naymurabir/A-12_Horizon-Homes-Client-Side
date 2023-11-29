import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="footer p-8 text-white bg-gray-800 mt-10">

            <nav>
                <header className="font-bold text-indigo-500 ">OUR SERVICES</header>
                <a className="link link-hover">Single-Family Homes</a>
                <a className="link link-hover">Apartments</a>
                <a className="link link-hover">Office Spaces</a>
                <a className="link link-hover">Industrial Properties</a>
                <a className="link link-hover">Retail Spaces</a>
            </nav>
            <nav>
                <header className="font-bold text-indigo-500">COMPANY</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact us</a>
                <a className="link link-hover">Support</a>
                <a className="link link-hover">Career</a>
            </nav>
            <nav>
                <header className="font-bold text-indigo-500">FOLLOW US</header>
                <div className="grid grid-flow-col gap-4">
                    <a> <FaFacebook className='text-2xl'></FaFacebook> </a>
                    <a> <FaLinkedin className='text-2xl'></FaLinkedin> </a>
                    <a> <FaTwitter className='text-2xl'></FaTwitter> </a>
                </div>
            </nav>
        </footer >
    );
};

export default Footer;
import img1 from '../../assets/Why_Choose_Us/icon1.svg'
import img2 from '../../assets/Why_Choose_Us/icon2.svg'
import img3 from '../../assets/Why_Choose_Us/icon3.svg'

const WhyChooseUs = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-2 md:px-10 lg:px-20">

            <div className="lg:w-1/2 mx-auto text-center my-10">
                <h2 className="text-2xl md:text-3xl font-bold">Why Choose Us?</h2>
                <p className="text-black mt-2">We provide full service at every step.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {/* Card-1 */}
                <div className="card card-compact bg-base-100 shadow-xl ">
                    <div className='flex justify-center px-6 py-5 bg-[#00AEEF] rounded-md'>
                        <img className='w-24' src={img1} alt="Properties" />
                    </div>
                    <div className="card-body text-center">

                        <h2 className='text-xl font-bold'>Wide Range Of Properties</h2>
                        <p>We have got a bunch of different types of homes and places for you to check out! From cool city apartments to comfy suburban houses, and even some fancy big homes, we have got something for everyone.</p>

                    </div>
                </div>

                {/* Card-2 */}
                <div className="card card-compact bg-base-100 shadow-xl ">
                    <div className='flex justify-center px-6 py-5 bg-[#00AEEF] rounded-md'>
                        <img className='w-24' src={img2} alt="Properties" />
                    </div>
                    <div className="card-body text-center">

                        <h2 className='text-xl font-bold'>Trusted by thousands.</h2>
                        <p>We are proud to be the choice of thousands of people who have placed their trust in us. This trust is the result of our commitment to providing a reliable and satisfying experience. Whether you are buying, selling, or renting, our community of users has found value in the services we offer.</p>

                    </div>
                </div>

                {/* Card-3 */}
                <div className="card card-compact bg-base-100 shadow-xl ">
                    <div className='flex justify-center px-6 py-5 bg-[#00AEEF] rounded-md'>
                        <img className='w-24' src={img3} alt="Properties" />
                    </div>
                    <div className="card-body text-center">

                        <h2 className='text-xl font-bold'>Financing made easy.</h2>
                        <p>Experience the ease of financing with us! We have simplified the process to make your financial journey smoother and more accessible. Our user-friendly financing options are designed to accommodate various needs and preferences. Whether you are a first-time buyer or a seasoned investor.</p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default WhyChooseUs;
import { FcBusinessman, FcFactory, FcTodoList, FcServices, FcPositiveDynamic, FcBriefcase } from 'react-icons/fc';


const OurServices = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-2 md:px-10 lg:px-20">

            <div className="lg:w-1/2 mx-auto text-center my-10">
                <h2 className="text-2xl md:text-3xl font-bold">Our Services</h2>
                <p className="text-black mt-2">Whether you are looking to buy your dream home or sell a property, our experienced team is here to guide you through every step of the process. From market analysis to negotiations, we ensure a seamless and profitable transaction.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

                <div className='flex gap-2'>
                    <div>
                        <FcBusinessman className='text-6xl'></FcBusinessman>
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold text-[#00afef]'>Home Buying Assistance</h2>
                        <p className='text-sm mt-2'>Our team of experts is dedicated to helping you find your dream home. From identifying suitable properties to negotiating the best deals, we guide you through the entire home buying process.</p>
                    </div>
                </div>

                <div className='flex gap-2'>
                    <div>
                        <FcFactory className='text-6xl'></FcFactory >
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold text-[#00afef]'>Property Consultation</h2>
                        <p className='text-sm mt-2'>Looking to sell your property? Benefit from our extensive market knowledge and strategic approach. We will assist you in setting the right price, marketing your property effectively, and securing the best deal.</p>
                    </div>
                </div>

                <div className='flex gap-2'>
                    <div>
                        <FcTodoList className='text-6xl'></FcTodoList  >
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold text-[#00afef]'>Investment Planning</h2>
                        <p className='text-sm mt-2'>Explore the potential of real estate investments with our tailored planning services. Our advisors analyze market trends, assess risk, and develop personalized strategies to maximize your investment returns.</p>
                    </div>
                </div>

                <div className='flex gap-2'>
                    <div>
                        <FcServices className='text-6xl'></FcServices   >
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold text-[#00afef]'>Property Management</h2>
                        <p className='text-sm mt-2'>Let us handle the complexities of property management. From tenant screening and rent collection to maintenance coordination, we ensure your property is well-maintained and your investment is hassle-free.</p>
                    </div>
                </div>

                <div className='flex gap-2'>
                    <div>
                        <FcPositiveDynamic className='text-6xl'></FcPositiveDynamic    >
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold text-[#00afef]'>Market Analysis</h2>
                        <p className='text-sm mt-2'>Stay informed with our in-depth market analysis and property valuation services. Whether you are buying or selling, our data-driven insights provide a clear understanding of market trends and property values.</p>
                    </div>
                </div>

                <div className='flex gap-2'>
                    <div>
                        <FcBriefcase className='text-6xl'></FcBriefcase     >
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold text-[#00afef]'>Real Estate Marketing</h2>
                        <p className='text-sm mt-2'>Elevate your property visibility with our strategic marketing solutions. Our team employs modern marketing techniques, including professional photography and targeted campaigns, to attract the right buyers or tenants.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurServices;
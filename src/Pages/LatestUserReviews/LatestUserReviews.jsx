import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";

const LatestUserReviews = () => {

    const axiosSecure = useAxiosSecure()
    const [latestReviews, setLatestReviews] = useState([])

    useEffect(() => {
        (async () => {
            const { data } = await axiosSecure.get('/latestReviews')
            setLatestReviews(data)
        })()
    }, [axiosSecure])
    console.log(latestReviews);
    return (

        <div className="max-w-screen-xl mx-auto px-2 md:px-10 lg:px-20">

            <div className="text-center lg:w-3/4 mx-auto my-10">
                <h2 className="text-xl font-bold text-[#0b3261]">Reviews</h2>
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800">Latest Reviews</h1>
                <hr className="my-3" />

                <p>See whats our satisfied clients say! We save sold properties to them. We always serve our best to fullfil our clients dream. Contact us as soon as possible. Or visit our site to see our properties.</p>

                <div className="mt-2">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                </div>
            </div>

            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <div >
                        {
                            latestReviews?.map((review) => <SwiperSlide key={review._id}>

                                <div className="px-10 md:px-16 lg:px-20 flex flex-col items-center my-8 lg:my-4">
                                    <p className="text-black text-center text-base lg:py-3 font-bold">{review.review_description}</p>
                                    <h2 className="text-[#0e3361] font-bold text-lg">{review.title}</h2>
                                    <img className='w-20 h-20 rounded-full' src={review.reviewer_image} alt="" />
                                    <h2 className='font-bold'>{review.agent_name}</h2>
                                    <p className='font-bold'>{review.review_date}</p>
                                </div>
                            </SwiperSlide>)
                        }
                    </div>

                </Swiper>
            </div>

        </div>
    );
};

export default LatestUserReviews;
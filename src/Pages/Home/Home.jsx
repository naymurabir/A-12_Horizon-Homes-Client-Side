import Advertisements from "../Advertisements/Advertisements";
import Banner from "../Banner/Banner";
import { Helmet } from 'react-helmet-async';
import LatestUserReviews from "../LatestUserReviews/LatestUserReviews";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Home
                </title>
            </Helmet>
            <Banner></Banner>
            <Advertisements></Advertisements>
            <LatestUserReviews></LatestUserReviews>
        </div>
    );
};

export default Home;
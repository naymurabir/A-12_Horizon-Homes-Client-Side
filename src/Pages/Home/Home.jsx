import Advertisements from "../Advertisements/Advertisements";
import Banner from "../Banner/Banner";
import { Helmet } from 'react-helmet-async';
import LatestUserReviews from "../LatestUserReviews/LatestUserReviews";
import MeetOurAgents from "../MeetOurAgents/MeetOurAgents";
import OurServices from "../OurServices/OurServices";


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
            <MeetOurAgents></MeetOurAgents>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;
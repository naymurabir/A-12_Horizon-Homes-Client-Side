import Advertisements from "../Advertisements/Advertisements";
import Banner from "../Banner/Banner";
import { Helmet } from 'react-helmet-async';


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
        </div>
    );
};

export default Home;
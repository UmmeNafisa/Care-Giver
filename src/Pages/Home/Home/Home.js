import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Feedback from '../Feedback/Feedback'
import CareGivers from '../careGivers/CareGivers';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <CareGivers></CareGivers>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;
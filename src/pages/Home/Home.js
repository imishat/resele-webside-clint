import React from 'react';

import MemuName from './Manu/MemuName';
import Banner from './Banner/Banner';
import Services from './Sevices/Services';
import Review from './Review/Review';

const Home = () => {
    return (
        <div>
           
           <Banner></Banner>
           <MemuName></MemuName>
           <Services></Services>
           <Review></Review>
            
        </div>
    );
};

export default Home;
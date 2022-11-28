import React from 'react';

import MemuName from './Manu/MemuName';
import Banner from './Banner/Banner';
import Services from './Sevices/Services';

const Home = () => {
    return (
        <div>
           
           <Banner></Banner>
           <MemuName></MemuName>
           <Services></Services>
            
        </div>
    );
};

export default Home;
import React from 'react';
import SupportBanner from '../SupportBanner/SupportBanner';
import Search from '../Search/Search';
import { Helmet } from 'react-helmet';
import Navber3 from '../../Components/Shared/NavBer/SupportNav';

const SopportHome = () => {
    return (
        <div>
            <Helmet>
            <title>Flashfood Help Center</title>
      </Helmet>
    <Navber3></Navber3>
            <div className='relative mb-20'>
            <div>
            <SupportBanner></SupportBanner>
            </div>
            <div >
            <Search></Search>
            </div>
            </div>
        </div>
    );
};

export default SopportHome;
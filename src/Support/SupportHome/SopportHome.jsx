import React from 'react';
import SupportBanner from '../SupportBanner/SupportBanner';
import Search from '../Search/Search';

const SopportHome = () => {
    return (
        <div>
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
import React from 'react';
import './LocationBanner.css'
const LocationBanner = () => {
    return (
        <>
        <div className=' location-bg'>
        <div className='grid grid-cols-2 px-4 mx-auto  text-white max-w-6xl'>
            <div className='my-auto'>
                <h2 className='text-6xl font-bold' >Reduce</h2>
                <h4 className='text-4xl font-semibold mt-3 mb-5'>store shrink.</h4>
                <h2  className='text-6xl font-bold'>Attract</h2>
                <h4 className='text-4xl font-semibold mt-3 mb-5'>more customers.</h4>
                <h2  className='text-6xl font-bold'>Surpass</h2>
                <h4 className='text-4xl font-semibold mt-3 mb-5'>your sustainability goals.</h4>
            </div>
            <div className='-mt-16 -me-48'>
                <img src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/60b6dfc38a42db593f5a9e56_partner-hero-image.png" alt="" />
            </div>
        </div>
        
        </div>
        <div>
            <img className='w-full' src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/60a41db988bdb564ebdf304e_forrest-wave.svg" alt="" />
        </div>
        </>
    );
};

export default LocationBanner;
import React from 'react';

const Achivement = () => {
    return (
        <div >
            <div className='grid gap-4 grid-cols-3 mt-10 max-w-7xl justify-center text-center'>
                <div className='w-60 bg-black'>
                    <img src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/607dfe7a55a23dd048199b2e_download-illo.png" alt="" />
                    <h2 className='text-5xl font-bold primary-color mt-5 mb-6' >1000+</h2>
                    <p className='primary-color'>locations across the US and Canada</p>
                </div>
                <div className='w-60' >
                    <img src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/607dfe8ba1855cef55f238d8_browse-illo.png" alt="" />
                    <h2 className='text-5xl font-bold primary-color mt-5 mb-6'>3-5%</h2>
                    <p className='primary-color'>EBIT improvement</p>
                </div>
                <div className='w-60' >
                    <img src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/607dfea75dab6b796fba365f_pickup-illo.png" alt="" />
                    <h2 className='text-5xl font-bold primary-color mt-5 mb-6'> 40 million</h2>
                    <p className='primary-color'>pounds of food diverted from landfills</p>
                </div>
            </div>
        </div>
    );
};

export default Achivement;
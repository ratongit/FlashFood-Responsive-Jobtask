import React from 'react';

const StopShop = () => {
    return (
        <div className='max-w-6xl mb-96 mx-auto'>
            <div className='grid  lg:grid-cols-3 '>
            <div className='w-80'>
                <img className='rounded-b-3xl h-[220px]' src="https://assets-global.website-files.com/5e596dafce8eb6216f68e410/6462a320b94e232588f2f503_(1200x600)ImpactReport_EmailBanner.png" alt="" />
                <div className='text-4xl font-bold px-4 mt-8 text-gray-700'>Flashfood Releases its 2022 Impact Report: The State of Food Waste</div>
            </div>
            <div  className='w-80'>
                <img className='rounded-3xl h-[220px] w-3' src="https://assets-global.website-files.com/5e596dafce8eb6216f68e410/6446a2ae325978362cf7d134_Stop%20%26%20Shop_1.png" alt="" />
                <div className='text-4xl font-bold px-4 mt-8 text-gray-700'>Stop & Shop Expands Flashfood Across New Jersey</div>
            </div>
            <div  className='w-80'>
                <img className='w-full h-[220px]' src="https://assets-global.website-files.com/5e596dafce8eb6216f68e410/642ac18b1d903f3b7c86f889_Screenshot%202023-04-03%20at%208.06.30%20AM.png" alt="" />
                <div className='text-4xl font-bold px-4 mt-8 text-gray-700'>Stop & Shop Expands Flashfood Across New York</div>
            </div>
        </div>
        </div>
    );
};

export default StopShop;
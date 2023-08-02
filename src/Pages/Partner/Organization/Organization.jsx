import React from 'react';
import './Organization.css'
const Organization = () => {
    return (
        <div className=' my-48 md:flex md:flex-col justify-center organization-img items-center sm:w-full'>
            <img className='sm:w-full  w-60 md:hidden' src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/62eabd66ff95eb3ea2c867da_SOCII_Badge.png" alt="" />
           <div className='lg:w-[650px] lg:ps-72 '>
           <h4 className='lg:text-5xl  font-bold'>SOC2 Type II</h4>
            <p>We are proud to announce our successful completion of the audit to obtain the System and Organization Controls (SOC) 2 Type II certification.</p>
           </div>
        </div>
    );
};

export default Organization;
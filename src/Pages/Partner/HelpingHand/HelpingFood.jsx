import React from 'react';
import './HelpingFood.css'
const HelpingFood = () => {
    return (
        <div className='my-52'>
             <div className='grid my-auto lg:grid-cols-2 max-w-7xl mx-auto   '>
         <div className='flex flex-col items-center justify-center lg:ps-10 lg:pt-56 px-10 '>
            <h3 className='text-5xl font-bold'>Helping you take a bite out of food waste
</h3>
<p className='text-gray-700 my-6'>To date, our grocery partners have diverted over 30 million pounds of food across 1,000+ locations throughout the United states and Canada.</p>
         </div>
        <div className='relative md:w-[550px] lg:w-full'>
        <div className='partner-small-walpaper  grid place-items-center float-right'>
          <img src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/60b6e6bcf67dab396f59d54a_quote-forrest.svg" alt="" />
          <p>Partnering with Flashfood is a win for our shoppers and a win for the environment.</p>
          <img src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/60b6e91c7afe97c70c72ad2c_tops-monochrome.svg" alt="" />
         </div>
       
            <div className='absolute ps-7 z-10 mt-32'>
            <img className='w-full h-96 lg:w-[550px] lg:h-[400px] lg:pt-16' src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/60a5c09c307fda7efb08d108_hands-grab-food-p-800.png" alt="" />
            </div>
        </div>
        </div>
        
        </div>
    );
};

export default HelpingFood;
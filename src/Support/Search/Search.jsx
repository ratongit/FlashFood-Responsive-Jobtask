import React from 'react';
import './Search.css';
import { FaSistrix } from "react-icons/fa";


const Search = () => {
    return (
        <div className='search text-center -mt-20 '>
        <div className='w-full flex justify-center items-center '>
<div className=' flex flex-col md:w-10/12  w-11/12 text-2xl bg-base-300 relative rounded-3xl'>
<div className=' flex   relative '>

            <FaSistrix className='  mt-7 left-14 absolute' style={{ fontSize: '30px' }}></FaSistrix>
            <input type="text" placeholder="          Start typing your search  ..." className="input text-center h-20  w-full text-2xl rounded-input" />
</div>
<div className='bg-base-300 rounded-2xl '>
<div className='flex my-5 mb-14 justify-between'>
<div className='h-60  rounded-2xl ms-10 w-40 border-2 bg-white border-gray-500'>
  
</div>
<div className='h-60 rounded-2xl ms-2 w-40 border-2 bg-white border-gray-500'>
  
</div>
<div className='h-60 rounded-2xl me-10 w-40 border-2 bg-white border-gray-500'>
  
</div>


</div>
</div>
        </div>
</div>

    </div>
    );
};

export default Search;
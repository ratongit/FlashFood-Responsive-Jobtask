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
<div className='flex flex-wrap   my-5 mb-14 justify-between'>

<div className='h-60  rounded-2xl m-5   w-40 max-sm:w-full  border-2 bg-white border-gray-500 flex flex-col  align-middle justify-center'>
    <div className='text-center mx-auto'>
  <img className='w-20 mx-auto' src="https://theme.zdassets.com/theme_assets/1284041/7cb1aee9e0e807e00a19821246d70c4965dc2e9a.png" alt=""  />
  <h2 className='font-bold'>Get Started</h2>
    </div>
</div>


<div className='h-60 m-5  rounded-2xl   w-40 max-sm:w-full    border-2 bg-white border-gray-500 flex flex-col align-middle justify-center'>
    <div className='text-center mx-auto'>
  <img className='w-20 mx-auto' src="https://theme.zdassets.com/theme_assets/1284041/c40fe9b7cc29982e4648d87e9e3df7549b76248b.png" alt=""  />
  <h2 className='font-bold'>Comunity</h2>
    </div>
</div>


<div className='h-60  m-5 rounded-2xl   w-40 max-sm:w-full  border-2 bg-white border-gray-500 flex flex-col align-middle justify-center'>
    <div className='text-center mx-auto'>
  <img className='w-20 mx-auto'   src="https://theme.zdassets.com/theme_assets/1284041/64e151bba918dd0249aebe58803f0508e2e29a43.png" alt=""  />
  <h2 className='font-bold'>FAQ</h2>
    </div>
</div>



</div>
</div>
        </div>
</div>

    </div>
    );
};

export default Search;
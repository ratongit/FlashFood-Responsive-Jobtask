import { Link } from 'react-router-dom';
import './Banner.css'
import { FaAngleRight } from 'react-icons/fa';

const Banner = () => {
    return (

      <>


    <div className='overflow-hidden'>
      
<div className="z-30 max-sm:pt-28 sm:p-10  p-5  md:bg-[url('https://assets-global.website-files.com/5e4482baa13a1926b23e2187/6227e532329aa42351839eb0_Home%20-%20hero%20qr%20code.png')]  md:bg-cover md:bg-center md:bg-no-repeat bg-indigo-70  flex items-center  md:pt-10 h-[400px]  md:h-[500px]">
  <div className="md:w-[550px] ps-16 text-white" >
   <h2 className='lg:text-6xl text-4xl  font-bold '>Save money and fight against food waste</h2>
   <p className='my-6'>Get massive savings on fresh food items like meat and produce that are nearing their best before date at grocery stores across Canada and the U.S.</p>
   <div className="flex gap-3">
    <img className='be ' src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/5e4dd1e309d48fb5d5f2be24_Apple%201.svg" alt="" />
    <img src="" alt="" />
    <img src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/5e4dd1dd09d48f7b3cf2bdf4_Google%201.svg" alt="" />
    <Link to='/about' className='text-2xl ms-3'>How its works 
    <FaAngleRight className='inline'></FaAngleRight>

     </Link>
   </div>
  </div>
</div>

<img src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/6227e532329aa42351839eb0_Home%20-%20hero%20qr%20code.png" className=" w-full md:hidden  -mt-20 max-sm:-mt-6 h-[400px] overflow-hidden " />

</div>



{/* <div className="heroImg  flex items-center   bg-base-200">
  <div className="md:w-[550px] ps-16 text-white" >
   <h2 className='lg:text-6xl text-4xl  font-bold '>Save money and fight against food waste</h2>
   <p className='my-6'>Get massive savings on fresh food items like meat and produce that are nearing their best before date at grocery stores across Canada and the U.S.</p>
   <div className="flex gap-3">
    <img className='be ' src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/5e4dd1e309d48fb5d5f2be24_Apple%201.svg" alt="" />
    <img src="" alt="" />
    <img src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/5e4dd1dd09d48f7b3cf2bdf4_Google%201.svg" alt="" />
    <Link to='/about' className='text-2xl ms-3'>How its works 
    <FaAngleRight className='inline'></FaAngleRight>

     </Link>
   </div>
  </div>
</div> 
 */}

</>

);
};

export default Banner;
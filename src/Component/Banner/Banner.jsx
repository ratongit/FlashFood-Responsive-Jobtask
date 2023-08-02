import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
      
<div className="heroImg  flex items-center   bg-base-200">
  <div className="md:w-[550px] ps-16 text-white" >
   <h2 className='lg:text-6xl text-4xl  font-bold '>Save money and fight against food waste</h2>
   <p className='my-6'>Get massive savings on fresh food items like meat and produce that are nearing their best before date at grocery stores across Canada and the U.S.</p>
   <div className="flex">
    <img className='be' src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/5e4dd1e309d48fb5d5f2be24_Apple%201.svg" alt="" />
    <img src="" alt="" />
    <img src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/5e4dd1dd09d48f7b3cf2bdf4_Google%201.svg" alt="" />
    <Link to='/about'>How its works</Link>
   </div>
  </div>
</div>   

);
};

export default Banner;
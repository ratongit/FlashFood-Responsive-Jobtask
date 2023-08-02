import logo from '../../../assets/logoIngeo.png'
import { FaBars } from "react-icons/fa";
import './Navber.css'

const Navber2 = () => {

  const nabitem = <>

    <li><a href='/' className='hover:text-white text-white   font-semibold text-md'>How it works</a></li>
    <li><a href='/Location' className='hover:text-white text-white   font-semibold text-md'> locations</a></li>
    <li tabIndex={0}>
      <details>
        <summary className='hover:text-white text-white   font-semibold text-md' >About</summary>
        <ul className="bg-indigo-700 hover:text-white text-white  sm:w-48 w-42 lg:w-56 font-semibold flex flex-col gap-5">
          <li><a className='hover:text-white text-white   font-semibold text-md'> Our story</a></li>
          <li><a className='hover:text-white text-white   font-semibold text-md'> Food waste</a></li>
          <li><a className='hover:text-white text-white   font-semibold text-md'> The team</a></li>
          <li><a className='hover:text-white text-white   font-semibold text-md'> press room</a></li>
          <li><a className='hover:text-white text-white   font-semibold text-md'> Impact report</a></li>
        </ul>
      </details>
    </li>
    <li><a href='/support' className='hover:text-white text-white   font-semibold text-md'> Support</a></li>
    <li><a href='/PartnerHome' className='hover:text-white text-white   font-semibold text-md'> Partner</a></li>

  </>
  return (
    <div className="sticky z-50 bg-opacity-1 top-0 navbar bg-indigo-7000">
      <div className="navbar-start">
        <div className=' w-60 rounded-2xl'>
          <img className='w-60 rounded-2xl' src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu uppercase menu-horizontal px-1 ">
          {nabitem}
        </ul>
      </div>
      <div className="navbar-end  ">
        <a className="btn
         bg-blue-200
         font-bold p-5 py-1
          md:me-10 md:-mt-2 
        btnDownload  
        hover:md:translate-x-2 hover:md:translate-y-2  
        
        ">Download</a>
      </div>
      
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost hover:text-white text-white  text-2xl lg:hidden ">

          <FaBars />
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 right-2 top-14 absolute  shadow  hover:text-white text-white  text-2xl font-bold rounded-box  bg-indigo-700 sm:w-72 w-52">

          <div className='text-2xl uppercase text-w flex flex-col gap-6  py-3'>

            {nabitem}
          </div>

        </ul>
      </div>

    </div>
  );
};

export default Navber2;
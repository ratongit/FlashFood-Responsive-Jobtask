import logo from '../../../assets/logo.png'
import { FaBars } from "react-icons/fa";
import './Navber.css'

const Navber3 = () => {

  const nabitem = <>

    <li><a href='/' className='hover:text-white text-white   font-semibold text-md underline'>Feedback</a></li>
    <li tabIndex={0}>
      <details>
        <summary className='hover:text-white text-white   font-semibold text-md underline' >English (US)</summary>
        <ul className="lg:bg-white  text-black   sm:w-40 w-42 lg:w-56 font-semibold flex flex-col gap-5">
          <li><a className='md:hover:text-white lg:hover:text-black  max-lg:text-white  font-semibold text-md'> Espanol</a></li>
          <li><a className='md:hover:text-white lg:hover:text-black  max-lg:text-white  font-semibold text-md'> Francais (Canada)</a></li>
          
        </ul>
      </details>
    </li>
    <div className='md:hidden' >
        <a className="btn
         bg-indigo-70
         font-bold p-5 py-1
          md:me-10 md:-mt-2 
          text-white
          
        
        ">Submit a request </a>
      </div>

  </>
  return (
    <div className="sticky z-50 bg-opacity-1 top-0 navbar bg-indigo-70">
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
      <div className='max-md:invisible'>
        <a className="btn
         bg-indigo-70
         font-bold p-5 py-1
          md:me-10 md:-mt-2 
          text-white
          hover:bg-indigo-700
          hover:opacity-60
        ">Submit a request </a>
      </div>

      
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost text-white  text-2xl lg:hidden  ">

          <FaBars />
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 right-2 top-14 absolute    hover:text-white text-white  text-2xl font-bold rounded-box  bg-indigo-700 sm:w-72 w-52">

          <div className='text-2xl uppercase text-w flex flex-col gap-6  py-3'>

            {nabitem}
          </div>

        </ul>
      </div>

    </div>
  );
};

export default Navber3;
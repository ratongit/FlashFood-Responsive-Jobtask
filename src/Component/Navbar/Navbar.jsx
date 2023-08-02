import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className=' z-50 flex items-center sticky top-0 primary-bg justify-between h-36 px-10'>
<img className=' grayscale' src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/5e597aef7560e23df783f86f_Flashfood%20Logo.svg" alt="" />

           <div className="navbar text-white font-semibold">
           <Link to='/'>How IT WORKS</Link>
            <Link to='/location'>LOCATIONS</Link>
            <Link to='/about'>ABOUT</Link>
            <Link to='/support'>SUPPORT</Link>
            <Link to='/partner'>PARTNER</Link>
           </div>
           <button className='btn-primary hover:bg-white secondary-color primary-color hover:translate-x-2 hover:translate-y-2  '>DOWNLOAD</button>
        </nav>
    );
};

export default Navbar;
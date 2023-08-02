import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HowItWork = () => {
    return (
        <div className="px-10">
            <h1 className="text-6xl text-center  font-bold my-40">How it works</h1>
            
            <div className="hero min-h-screen rounded-3xl bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">

  <img className="max-w-sm max-lg:hidden rounded-lg shadow-2xl z-50" src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/636bdc73528dc750114b5323_ebt_homepagepic.png"></img>
  <img className="max-w-sm  z-50 lg:hidden" src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/61fb155d422b521236149f54_Hero%20img-p-1600.png"></img>


    <div>
      <h1 className="lg:text-4xl xl:w-9/12 sm:p-5 rounded-2xl lg:w-10/12 text-3xl font-bold max-sm:pe-20">First, use the free app to quickly and easily find discounted food from wherever you are.</h1>
     
     <nav>
     <ul style={{ listStyleType: 'circle' }} className="list-disc md:ms-8 lg:my-10 my-5 sm:ps-6 ps-3 flex flex-col md:gap-5 text-lg font-serif text-gray-600 max-sm:pe-40">
  <li>Browse deals of up to 50% off at a grocery store location near you. <Link className="text-blue-500 font-semibold">See Locations <FaArrowAltCircleRight className="inline"></FaArrowAltCircleRight> </Link></li>
  <li> Choose your discounted food items.</li>
  <li>Pay right in the app using any major credit card, VISA debit card, or SNAP EBT card.</li>
</ul>
     </nav>
    </div>
  </div>
</div>



<div className="hero my-28 lg:ps-20 rounded-3xl  bg-base-200">
  <div className="hero-content flex-col lg:flex-row">

  <img className="max-w-sm   z-50" src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/5e509efa670c445fe96f8065_illo.png"></img>


    <div>
      <h1 className="text-4xl  text-gray-900 lg:px-20 px-5 md:px-10 pt-5 font-semibold">Then, pick up your Flashfood order at the grocery store.</h1>
     
     <p className="text-md text-gray-600  lg:px-20 px-5 md:px-10 pt-5 max-lg:pb-10 font-semibold">Head to the store, grab your food items from the Flashfood zone, and quickly confirm your order with the customer service desk.</p>
    </div>
  </div>
</div>
 
  
  
  
        </div>
    );
};

export default HowItWork;
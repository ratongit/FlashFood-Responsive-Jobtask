import './Footer.css'
const Footer = () => {
    return (
        <div className='footer-bg text-white'>
            
           <div className='py-12 max-w-6xl text-white  mx-auto'> 
           <h4 className='mb-3'>FOLLOW @FLASHFOOD</h4>
           <div className=' grid grid-cols-5 gap-3 '>
              <img className='z-10' src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/6079b4bf46b89d3095d43c44_%40buffalofooood.jpg" alt="" />
              <img src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/6079b4cc2af973049f73bfe1_%40detroitfather.jpg" alt="" />
              <img src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/6079b4dd83b02737a2ce6ea9_%40shoshana.jpg" alt="" />
              <img src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/6079b4e8f8596474f6a68911_%40thefunemployedfamily.jpg" alt="" />
              <img src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/6079b50f16c3352a86643dba_%40undeniableannie.jpg" alt="" />
            </div>
           </div>
           <div className="flex pb-24 text-white  max-w-6xl mx-auto gap-20 md:flex-wrap">
            {/* <div className='footer-img flex px-12 justify-center  flex-col'> 
           <img className='w-16' src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/6079a3e353127e9a9a60b0e2_flashfood-app-icon.svg" alt="" />
           <h3 className='text-3xl text-white font-bold'>Find Flashfood near you</h3>
            </div> */}


<div className="text-white text-xl ">
    <div className="relative z-20">
    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
          </div>
  <div className="relative">
<div className="absolute -bottom-52 z-10">
    <img src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/6079e923d03463f1d7c7a1c8_footer-blob.svg" alt="" />
  </div>
</div>

    </div>



            <div>
                <h2>THE TEAM</h2>
                <h3>LOCATIONS</h3>
                <h3>OUR STROY</h3>
                <h3>FOOD WASTE</h3>
            </div>
            <div>
                <h2>NEWS</h2>
                <h2>BLOG</h2>
                <h2>REFER FRIEND</h2>
            </div>
            <div>
            <h2>PARTNER</h2>
            <h2>CAREERS</h2>
            <h2>SUPPORT</h2>
            <h2>CONTACT US</h2>
            </div>
            <div>
            <h2>TERMS OF USE</h2>
            <h2>PRIVACY POLICY</h2>
            <h2>SUPPLIER DIVERSITY</h2>
            <h2>POLICY</h2>
            <h2>RESPONSIBLE DISCLOSURE</h2>
            </div>
           </div>
        </div>
    );
};

export default Footer;
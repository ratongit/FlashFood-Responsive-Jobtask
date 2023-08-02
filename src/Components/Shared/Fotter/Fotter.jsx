import { FaLongArrowAltRight, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Fotter = () => {
  return (
    <div className="bg-indigo-7 relative">
<div className=" ">
  <img src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/6079f749733e292a82fae3ae_footer-dark-wave-p-1600.png" alt="" className="absolute max-sm:hidden sm:-mt-[46px] md:-mt-[64px]  lg:-mt-[97px] xl:-mt-[118px] z-40" />
</div>
      <div className='py-12 text-white max-w-7xl  mx-auto'>
        <div className="my-5">
          <small className="opacity-0">.</small>
        <h4 className=' float-right  me-20 text-xl font-semibold'>FOLLOW @FLASHFOOD</h4>
        </div>
        <div className='max-md:grid-cols-3 max-lg:grid-cols-4  grid max-sm:grid-cols-2  grid-cols-5 gap-3 '>
          <img className='z-10 max-md:p-10 p-5' src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/6079b4bf46b89d3095d43c44_%40buffalofooood.jpg" alt="" />
          <img className='z-10 max-md:p-10 p-5' src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/6079b4cc2af973049f73bfe1_%40detroitfather.jpg" alt="" />
          <img className='z-10 max-md:p-10 p-5' src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/6079b4dd83b02737a2ce6ea9_%40shoshana.jpg" alt="" />
          <img className='z-10 max-md:p-10 p-5' src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/6079b4e8f8596474f6a68911_%40thefunemployedfamily.jpg" alt="" />
          <img className='z-10 max-md:p-10 p-5' src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/6079b50f16c3352a86643dba_%40undeniableannie.jpg" alt="" />
        </div>
      </div>

      <footer className=" pb-32 p-10 bg-indigo-7 md:text-xl text-lg grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10  text-white relative">

      <div className="flex flex-col gap-2">
            <div className=" z-40 relative ms-10">
            <img className='w-16' src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/6079a3e353127e9a9a60b0e2_flashfood-app-icon.svg" alt="" />
            <h3 className='text-3xl  text-white font-bold mt-2'>Find Flashfood near you
            <FaLongArrowAltRight className="text-12 inline" style={{ fontSize: '35px' }}></FaLongArrowAltRight>
            </h3>


            <div className="flex gap-10 mt-4 ">
              <div className="">
              <FaInstagram className="text-12" style={{ fontSize: '35px' }} />
              </div>
              <div> <FaFacebook className="text-12" style={{ fontSize: '35px' }}></FaFacebook></div>
              <div>
                <FaTwitter className="text-12" style={{ fontSize: '35px' }}></FaTwitter>
              </div>

            </div>


            </div>
              <div className="absolute -top-14  z-10">
                <img src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/6079e923d03463f1d7c7a1c8_footer-blob.svg" alt="" />
            </div>
        </div>

        <div className="flex flex-col gap-2">
          <a className="link  z-20  link-hover">Branding</a>
          <a className="link  z-20  link-hover">Design</a>
          <a className="link  z-20  link-hover">Marketing</a>
          <a className="link  z-20  link-hover">Advertisement</a>
        </div>

        <div className="flex flex-col gap-2">
          <a className="link  z-20  link-hover">About us</a>
          <a className="link  z-20  link-hover">Contact</a>
          <a className="link  z-20  link-hover">Jobs</a>
          <a className="link  z-20  link-hover">Press kit</a>
        </div>

        <div className="flex flex-col gap-2">
          <a className="link  z-20  link-hover">Branding</a>
          <a className="link  z-20  link-hover">Design</a>
          <a className="link  z-20  link-hover">Marketing</a>
          <a className="link  z-20  link-hover">Advertisement</a>
        </div>
        <div className="flex flex-col gap-2">
          <a className="link  z-20  link-hover">About us</a>
          <a className="link  z-20  link-hover">Contact</a>
          <a className="link  z-20  link-hover">Jobs</a>
          <a className="link  z-20  link-hover">Press kit</a>
        </div>





      </footer>
      <p className="text-white text-right me-40 pb-10">
        © Flashfood Inc. 2023. All rights reserved.
      </p>
    </div>
  );
};

export default Fotter;
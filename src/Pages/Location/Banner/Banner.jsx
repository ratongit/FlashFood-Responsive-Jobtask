import { FaSistrix } from "react-icons/fa";
import React from "react";
import GoogleMapReact from 'google-map-react';
import './Banner.css'

const AnyReactComponent = ({ text }) => <div>{text}</div>;


const Banner = () => {

    const defaultProps = {
      center: {
        lat: 25.00835602,
        lng: 89.600502627
      },
      zoom: 8
    }
    
    return (
        <>
        <div className=" bg-banner">

            <div className=" z-30 ">
                <h1 className="text-white  m md:text-6xl pt-36 pe-20 ps-36 max-md:hidden 
                lg:px-44 xl:px-56
                font-bold overflow-hidden overflow-x-hidden">Find Flashfood at a grocery store near you</h1>
            </div>





            

            <div className="hero rounded-none min-h-screen   ">
  <div className="hero-content flex-col lg:flex-row-reverse align-middle rounded-none">

  <div className="mx-auto md:w-[600px] sm:w-[500px] w-[350px]  rounded-none" style={{ height: '550px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={50.155413}
          lng={30.137844}
          text="My Shope"
        />
      </GoogleMapReact>
    </div>

    <div style={{ height: '550px'}} className="card md:-me-4 flex-shrink-0 rounded-none max-md:-mt-4 shadow-xl bg-base-100   md:w-[320px] sm:w-[500px] w-[350px]">
      <div className="card-body">
      <div className="flex justify-between align-middle">
        <input type="text" placeholder="Enter address or zipcode.."></input>
        <>
        <FaSistrix className="inline mt-1"></FaSistrix>
        <span className="text-blue-500 inline">Fiilter</span>
        </>
        </div>
<hr />
        <h1 className=" my-2">No results found.</h1>
        <h1 className="font-semibold mb-3">Get notified about new locations near you!</h1>
        <div className="form-control">
          <input type="text" placeholder="Your name" className="input input-bordered bg-base-200 border-none rounded-2xl " />
        </div>
        <div className="form-control">
          <input type="text" placeholder="Your email" className="input input-bordered bg-base-200 border-none rounded-2xl " />
        </div>
        <div className="form-control">
          <input type="text" placeholder="Your Address" className="input input-bordered bg-base-200 border-none rounded-2xl " />
        </div>
        <div className="form-control mt-6">
          <button className="btn w-32 p-[1px] rounded-3xl btn-primary mb-5">Notify me !</button>
          <button className="btn w-48 p-[1px] rounded-3xl btn-primary mb-5">Show all Locations</button>
        </div>
      </div>
    </div>
  </div>
            </div>
        </div>
















        </>
    );
};

export default Banner;
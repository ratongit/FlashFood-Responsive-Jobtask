import React, { useEffect, useState } from 'react';
// import HowItWork from './How-it-work';
// import FeedBack from '../FeedBack/FeedBack';
// import Download from '../Download/Download';

const ClientCompany = () => {
  const [companys, setCompanys] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch('companyImg.json')
      .then((res) => res.json())
      .then((data) => setCompanys(data));
  }, []);

  const handleLoadMore = () => {
    setShowAll((prevState) => !prevState);
  };

  return (
    <>
      <div className='grid grid-cols-5 gap-4 mt-10'>
        {companys.map((company, index) => (
          <img className='w-48' key={index} src={company.img} alt={`Company ${index}`} />
        )).slice(0, showAll ? companys.length : 10)}
      </div>

      <div className="text-center mt-10">
        <button
          className="btn p-4 rounded-2xl border-[1px] py-[6px] hover:bg-gray-100  border-gray-400"
          onClick={handleLoadMore}
        >
          {showAll ? 'Show Less' : 'LERN MORE'}
        </button>
      </div>

    
      {/* <HowItWork />
      <FeedBack></FeedBack>
      <Download></Download> */}
    </>
  );
};

export default ClientCompany;

import React, { useEffect, useState } from 'react';

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
      <div className='grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-4 mt-10'>
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

      <section className='mx-auto max-sm:mx-10 flex justify-center h-20'>
        <div className='md:flex shadow-sm shadow-black items-center p-5 h-36 md:p-10 rounded-xl mt-8'>
          <h3 className='me-8'>Are you a grocery chain that wants to work with Flashfood?</h3>
          <div className='max-md:text-center max-md:pt-4 '>

          <button className='btn
          
          bg-blue-200
          font-bold p-5 py-1
          md:me-10 md:-mt-2 
          btnDownload  
          hover:md:translate-x-2 hover:md:translate-y-2 '>LEARN MORE</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientCompany;

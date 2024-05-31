import React from 'react';
import Logo from "./../assets/Logo.png"
import GithubPRList from "./GithubPrList";

function Table({ activeCollection }) {
  console.log(activeCollection)

  return (
    <div className='flex flex-col py-20 px-14'>
      <div className="w-full bg-[#f0eeeb] py-4 px-6 flex items-center justify-between fixed top-0 left-0 z-10">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" width={40} />
          <h1 className="text-lg font-bold text-gray-800 ml-2">Cloud Content PR Tracker</h1>
        </div></div>
      <div className='h-[90-vh] border rounded flex flex-col  p-4 mt-5 text-gray-600'>
      <GithubPRList fetchForCollection={activeCollection}/>
      </div>
    </div>
  );
}

export default Table;
'use client'; 

import React from 'react';

export default function NewTab({html}:{html:string}){


  const openNewTabWithHtml = () => {

    const blob = new Blob([html], { type: 'text/html' });
    
    const url = URL.createObjectURL(blob);
    
    window.open(url, '_blank');
  };

  return (
    <div>
      <button className="text-white font-bold w-fit align-middle  bg-gray-800 p-2 rounded-md opacity-65 hover:opacity-100 duration-200"  onClick={openNewTabWithHtml}>Open In New Tab</button>
    </div>
  );
};


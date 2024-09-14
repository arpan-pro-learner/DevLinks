

import React from 'react';

export default function MobilePreview() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm h-full flex items-center justify-center">
      <div className="w-64 h-4/6 border-4 border-black rounded-3xl p-4 bg-gray-100 relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-5 bg-black rounded-b-xl"></div>
        {/* Mobile content will go here */}
       
      </div>
    </div>
  )
}
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import MobilePreview from './MobilePreview'; // Ensure this import path is correct
// import ProfileDetails from './ProfileDetails'; // Import ProfileDetails

// export default function Header() {
//   const [showPreview, setShowPreview] = useState(false);
//   const [savedProfiles, setSavedProfiles] = useState([]);
//   const [showProfileDetails, setShowProfileDetails] = useState(false);

//   useEffect(() => {
//     // Load saved profiles from local storage
//     const profiles = JSON.parse(localStorage.getItem('savedProfiles') || '[]');
//     setSavedProfiles(profiles);
//   }, []);

//   const togglePreview = () => {
//     setShowPreview(!showPreview);
//   };

//   const toggleProfileDetails = () => {
//     setShowProfileDetails(!showProfileDetails);
//   };

//   return (
//     <>
//       <header className="bg-white p-4 flex items-center justify-between shadow-sm">
//         <div className="flex items-center">
//           <Image src="/images/logo-devlinks-small.svg" alt="devlinks logo" width={32} height={32} />
//           <span className="ml-2 font-bold text-lg">devlinks</span>
//         </div>

//         <nav className="flex space-x-2 md:space-x-4"> {/* Improved spacing for responsiveness */}
//           <button
//             className="px-4 py-2 text-gray-500 focus:text-[#633CFF] focus:outline-none focus:ring-none focus:bg-purple-200 rounded-lg"
//             aria-label="Links"
//           >
//             <Image src="/images/icon-links-header.svg" alt="" width={20} height={20} className="inline mr-2" />
//             Links
//           </button>

//           <button
//             onClick={toggleProfileDetails}
//             className="px-4 py-2 text-gray-500 focus:text-[#633CFF] focus:outline-none focus:ring-none focus:bg-purple-200 rounded-lg"
//             aria-label="Profile Details"
//           >
//             <Image src="/images/icon-profile-details-header.svg" alt="" width={20} height={20} className="inline mr-2" />
//             Profile Details
//           </button>
//         </nav>

//         <button
//           onClick={togglePreview}
//           className="px-4 py-2 border border-purple-500 text-purple-500 rounded-lg hover:bg-purple-50 focus:bg-purple-200 focus:text-[#633CFF] focus:outline-none focus:ring-none"
//         >
//           Preview
//         </button>
//       </header>

//       {showPreview && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg w-full max-w-md h-auto overflow-y-auto p-6">
//             <h2 className="text-xl font-bold mb-4 text-center">Mobile Preview</h2>
//             {/* Hardcoded preview data */}
//             <MobilePreview 
//               links={[
//                 { id: 1, platform: 'GitHub', url: 'https://github.com' },
//                 { id: 2, platform: 'LinkedIn', url: 'https://linkedin.com' },
//                 { id: 3, platform: 'Facebook', url: 'https://www.facebook.com/' },
//               ]}
//             />
//             <button
//               onClick={togglePreview}
//               className="mt-4 w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 focus:outline-none"
//             >
//               Close Preview
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Render ProfileDetails Component when needed */}
//       {showProfileDetails && (
//         <ProfileDetails savedProfiles={savedProfiles} onClose={toggleProfileDetails} />
//       )}
//     </>
//   );
// }



import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import MobilePreview from './MobilePreview'; // Ensure this import path is correct
import ProfileDetails from './ProfileDetails'; // Import ProfileDetails

export default function Header() {
  const [showPreview, setShowPreview] = useState(false);
  const [savedProfiles, setSavedProfiles] = useState([]);
  const [showProfileDetails, setShowProfileDetails] = useState(false);

  useEffect(() => {
    // Load saved profiles from local storage
    const profiles = JSON.parse(localStorage.getItem('savedProfiles') || '[]');
    setSavedProfiles(profiles);
  }, []);

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  const toggleProfileDetails = () => {
    setShowProfileDetails(!showProfileDetails);
  };

  return (
    <>
      <header className="bg-white p-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center">
          <Image src="/images/logo-devlinks-small.svg" alt="devlinks logo" width={32} height={32} />
          <span className="ml-2 font-bold text-lg">devlinks</span>
        </div>

        <nav className="flex space-x-2 md:space-x-4">
          <button
            className="px-4 py-2 text-gray-500 focus:text-[#633CFF] focus:outline-none focus:ring-none focus:bg-purple-200 rounded-lg"
            aria-label="Links"
          >
            <Image src="/images/icon-links-header.svg" alt="" width={20} height={20} className="inline mr-2" />
            Links
          </button>

          <button
            onClick={toggleProfileDetails}
            className="px-4 py-2 text-gray-500 focus:text-[#633CFF] focus:outline-none focus:ring-none focus:bg-purple-200 rounded-lg"
            aria-label="Profile Details"
          >
            <Image src="/images/icon-profile-details-header.svg" alt="" width={20} height={20} className="inline mr-2" />
            Profile Details
          </button>
        </nav>

        <button
          onClick={togglePreview}
          className="px-4 py-2 border border-purple-500 text-purple-500 rounded-lg hover:bg-purple-50 focus:bg-purple-200 focus:text-[#633CFF] focus:outline-none focus:ring-none"
        >
          Preview
        </button>
      </header>

      {showPreview && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-full max-w-md h-auto max-h-[80vh] overflow-y-auto p-6">
            <h2 className="text-xl font-bold mb-4 text-center">Your Links Preview</h2> {/* New Heading Above Mockup */}
            <p className="text-center text-gray-600 mb-4">Your links preview will look like this:</p> {/* Additional Info Heading */}
            <MobilePreview 
              links={[
                { id: 1, platform: 'GitHub', url: 'https://github.com' },
                { id: 2, platform: 'LinkedIn', url: 'https://linkedin.com' },
                { id: 3, platform: 'Facebook', url: 'https://www.facebook.com/' },
              ]}
            />
            <button
              onClick={togglePreview}
              className="mt-4 w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 focus:outline-none"
            >
              Close Preview
            </button>
          </div>
        </div>
      )}

      {showProfileDetails && (
        <ProfileDetails savedProfiles={savedProfiles} onClose={toggleProfileDetails} />
      )}
    </>
  );
}

// import React from 'react';

// export default function Footer({ handleSave, links = [] }) { // Default links to an empty array
//   const saveWithValidation = () => {
//     const errors = {};
    
//     // Validate each link
//     links.forEach(link => {
//       if (!link.platform) errors[link.id] = 'Platform is required';
//       if (!link.url) errors[link.id] = 'URL is required';
//     });

//     // If there are errors, alert the user and return
//     if (Object.keys(errors).length > 0) {
//       alert('Please fill all the fields.');
//       return;
//     }

//     // Call handleSave if validation passes
//     if (typeof handleSave === 'function') { // Ensure handleSave is a function
//       handleSave();
//     } else {
//       console.error('handleSave is not a function');
//     }
//   };

//   return (
//     <footer className="bg-white p-4 flex justify-end shadow-sm fixed bottom-0 w-full">
//       <button
//         onClick={saveWithValidation} // Call the validation and save function
//         className="px-8 py-2 bg-purple-500 text-white rounded-lg font-bold hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
//       >
//         Save
//       </button>
//     </footer>
//   );
// }


import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Footer({ handleSave, links = [] }) {
  const saveWithValidation = async () => {
    const errors = {};

    // Check if links array is empty
    if (links.length === 0) {
      toast.error('❌ Please add links before saving.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return; // Exit if no links are present
    }

    // Validate each link
    links.forEach(link => {
      if (!link.platform) errors[link.id] = 'Platform is required';
      if (!link.url) errors[link.id] = 'URL is required';
    });

    // If there are errors, show a toast notification and return
    if (Object.keys(errors).length > 0) {
      toast.error('❌ Please fill all the fields.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    // Call handleSave if validation passes
    if (typeof handleSave === 'function') {
      try {
        await handleSave(); // Assume handleSave returns a promise
        // Show success toast
        toast.success('Links saved successfully! ✅', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } catch (error) {
        // Show error toast
        toast.error('An error occurred while saving.', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } else {
      console.error('handleSave is not a function');
      // Show error toast
      toast.error('An error occurred while saving.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <footer className="bg-white p-4 flex justify-end  fixed bottom-0 w-full">
        <button
          onClick={saveWithValidation}
          className="px-8 py-2 bg-purple-500 text-white rounded-lg font-bold hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Save
        </button>
      </footer>
    </>
  );
}

import React from 'react';

export default function Footer({ handleSave, links = [] }) { // Default links to an empty array
  const saveWithValidation = () => {
    const errors = {};
    
    // Validate each link
    links.forEach(link => {
      if (!link.platform) errors[link.id] = 'Platform is required';
      if (!link.url) errors[link.id] = 'URL is required';
    });

    // If there are errors, alert the user and return
    if (Object.keys(errors).length > 0) {
      alert('Please fill all the fields.');
      return;
    }

    // Call handleSave if validation passes
    if (typeof handleSave === 'function') { // Ensure handleSave is a function
      handleSave();
    } else {
      console.error('handleSave is not a function');
    }
  };

  return (
    <footer className="bg-white p-4 flex justify-end shadow-sm fixed bottom-0 w-full">
      <button
        onClick={saveWithValidation} // Call the validation and save function
        className="px-8 py-2 bg-purple-500 text-white rounded-lg font-bold hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        Save
      </button>
    </footer>
  );
}

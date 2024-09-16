
import React from 'react';
import LinkItem from './LinkItem'; // Corrected the typo in the import

export default function LinkEditor({ links, addLink, updateLink, deleteLink }) { // Removed saveProfile from props

  return (
    <div className="bg-white  p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-2">Customize your links</h2>
      <p className="text-gray-500 mb-4">
        Add/edit/remove links below and then share all your profiles with the world!
      </p>

      <button
        onClick={addLink}
        className="w-full py-3 mb-4 font-bold bg-white text-[#633CFF] border-2 border-[#633CFF] rounded-lg hover:bg-purple-100 transition"

      >
        + Add new link
      </button>

      {links.length === 0 ? (
        <div className="text-center py-8">
          <div className="flex items-center justify-center">
            <img
              src="/images/illustration-empty.svg" // Adjust path if necessary
              alt="Illustration" // Always include alt text for accessibility
              className="w-50 h-50" // Adjust size as needed
            />
          </div>
          <h3 className="text-3xl font-bold m-10">Let's get you started</h3>
          <p className="text-gray-500 font-regular px-8 break-words">
            Use the "Add new link" button to get started. Once you have more than one link, you can reorder and edit them. We're here to help you share your profiles with everyone!
          </p>
        </div>
      ) : (
        links.map((link) => (
          <LinkItem
            key={link.id}
            id={link.id}
            link={link}
            updateLink={updateLink}
            deleteLink={deleteLink}
          />
        ))
      )}
    </div>
  );
}



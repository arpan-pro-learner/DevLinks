// ProfileDetails.js
import React, { useState } from 'react';

const ProfileDetails = ({ onClose }) => {
  const [name, setName] = useState('');
  const [socialMediaLink, setSocialMediaLink] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [thankYouMessage, setThankYouMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, save data logic here
    console.log({ name, socialMediaLink, profileImage });

    // Set thank you message
    setThankYouMessage(`Thank you for creating your profile, ${name}!`);

    // Clear the form after submission
    setName('');
    setSocialMediaLink('');
    setProfileImage(null);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md transition-transform transform hover:scale-105"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition text-3xl" // Increased the size of the button
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Create Profile</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-purple-300"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="socialMediaLink">Social Media Link</label>
          <input
            type="url"
            id="socialMediaLink"
            value={socialMediaLink}
            onChange={(e) => setSocialMediaLink(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-purple-300" // Removed the required attribute
            placeholder="Enter social media URL (optional)"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="profileImage">Profile Image</label>
          <input
            type="file"
            id="profileImage"
            accept="image/*"
            onChange={(e) => setProfileImage(e.target.files[0])}
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-purple-300"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
        >
          Submit
        </button>

        {thankYouMessage && (
          <p className="mt-4 text-green-600 text-center">{thankYouMessage}</p>
        )}
      </form>
    </div>
  );
};

export default ProfileDetails;



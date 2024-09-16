

import React, { useState } from 'react';

const LinkItem = ({ id, link, updateLink, deleteLink }) => {
  const [errors, setErrors] = useState({ platform: '', url: '' });

  const handleUpdate = (field, value) => {
    updateLink(id, { [field]: value });
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  return (
    <div className="mb-4 p-4 bg-gray-50 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold">Link #{id}</span>
        <button onClick={() => deleteLink(id)} className="text-red-500">Remove</button>
      </div>
      <select
        value={link.platform}
        onChange={(e) => handleUpdate('platform', e.target.value)}
        className={`w-full mb-2 p-2 border rounded ${errors.platform ? 'border-red-500' : ''}`}
      >
     
  <option value="">Select platform</option>
  <option value="github">GitHub</option>
  <option value="twitter">Twitter</option>
  <option value="linkedin">LinkedIn</option>
  <option value="youtube">YouTube</option>
  <option value="facebook">Facebook</option>
  <option value="twitch">Twitch</option>
  <option value="devto">Dev.to</option>
  <option value="codewars">Codewars</option>
  <option value="codepen">CodePen</option>
  <option value="freecodecamp">FreeCodeCamp</option>
  <option value="gitlab">GitLab</option>
  <option value="hashnode">Hashnode</option>
  <option value="stackoverflow">Stack Overflow</option>


      </select>
      {errors.platform && <p className="text-red-500 text-sm mb-2">{errors.platform}</p>}
      <input
        type="url"
        value={link.url}
        onChange={(e) => handleUpdate('url', e.target.value)}
        placeholder="https://www.example.com/username"
        className={`w-full p-2 border rounded ${errors.url ? 'border-red-500' : ''}`}
      />
      {errors.url && <p className="text-red-500 text-sm">{errors.url}</p>}
    </div>
  );
};

export default LinkItem;
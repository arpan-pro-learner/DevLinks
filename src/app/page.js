
'use client';

import React, { useState } from 'react';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import LinkEditor from '../app/components/LinkEditor';
import MobilePreview from '../app/components/MobilePreview';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export default function Home() {
  const [links, setLinks] = useState([]); // State for links

  const addLink = () => {
    setLinks([...links, { id: Date.now(), platform: '', url: '' }]);
  };

  const updateLink = (id, updatedLink) => {
    setLinks(links.map(link => (link.id === id ? { ...link, ...updatedLink } : link)));
  };

  const deleteLink = (id) => {
    setLinks(links.filter(link => link.id !== id));
  };

  const handleSave = () => {
    // Check if links array is empty
    if (links.length === 0) {
      alert('Please add a link before saving.'); // Alert if no links
      return; // Prevent further execution
    }

    const savedProfiles = JSON.parse(localStorage.getItem('savedProfiles') || '[]');
    savedProfiles.push({ id: Date.now(), links });
    localStorage.setItem('savedProfiles', JSON.stringify(savedProfiles));
    alert('Links saved successfully!'); // Success message
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto p-4 flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <MobilePreview links={links} />
          </div>
          <div className="md:w-2/3">
            <LinkEditor
              links={links}
              addLink={addLink}
              updateLink={updateLink}
              deleteLink={deleteLink}
            />
          </div>
        </main>
        <Footer handleSave={handleSave} links={links} /> {/* Pass the handleSave function to the Footer */}
      </div>
    </DndProvider>
  );
}

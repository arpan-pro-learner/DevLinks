// import React from 'react';
// import { useDrag, useDrop } from 'react-dnd';
// import LinkItem from './LinkItem'; // Corrected the typo in the import

// const ITEM_TYPE = 'LINK_ITEM'; // Define the item type for DnD

// export default function LinkEditor({ links, addLink, updateLink, deleteLink }) {
//   const onDrop = (draggedId, targetId) => {
//     const draggedLink = links.find(link => link.id === draggedId);
//     const targetIndex = links.findIndex(link => link.id === targetId);
//     const draggedIndex = links.findIndex(link => link.id === draggedId);
//     const reorderedLinks = [...links];

//     // Remove the dragged item and insert it before the target item
//     reorderedLinks.splice(draggedIndex, 1);
//     reorderedLinks.splice(targetIndex, 0, draggedLink);
    
//     // Update state (you might need to implement the logic to update the links state)
//     // This could be done through a prop reference to a handler that updates the state on the parent
//     updateLink(reorderedLinks);
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow flex-1 min-h-dvh"> {/* Added flex-1 for full height */}

//       <h2 className="text-2xl font-bold mb-2">Customize your links</h2>
//       <p className="text-gray-500 mb-4">
//         Add/edit/remove links below and then share all your profiles with the world!
//       </p>

//       <button
//         onClick={addLink}
//         className="w-full py-3 mb-4 font-bold bg-white text-[#633CFF] border-2 border-[#633CFF] rounded-lg hover:bg-purple-100 transition"
//       >
//         + Add new link
//       </button>

//       {links.length === 0 ? (
//         <div className="text-center py-8">
//           <div className="flex items-center justify-center">
//             <img
//               src="/images/illustration-empty.svg"
//               alt="Illustration"
//               className="w-50 h-50"
//             />
//           </div>
//           <h3 className="text-3xl font-bold m-10">Let's get you started</h3>
//           <p className="text-gray-500 font-regular px-8 break-words">
//             Use the "Add new link" button to get started. Once you have more than one link, you can reorder and edit them. We're here to help you share your profiles with everyone!
//           </p>
//         </div>
//       ) : (
//         links.map((link, index) => (
//           <LinkItem
//             key={link.id}
//             id={link.id}
//             link={link}
//             updateLink={updateLink}
//             deleteLink={deleteLink}
//             index={index} // Pass index for managing DnD
//             onDrop={onDrop} // Only pass onDrop if needed
//           />
//         ))
//       )}
//     </div>
//   );
// }


import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import LinkItem from './LinkItem';

const ITEM_TYPE = 'LINK_ITEM';

const DraggableLinkItem = ({ id, index, moveItem, children }) => {
  const ref = useRef(null);
  
  const [{ isDragging }, drag] = useDrag({
    type: ITEM_TYPE,
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  drag(drop(ref));

  return (
    <div ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {children}
    </div>
  );
};

export default function LinkEditor({ links, addLink, updateLink, deleteLink }) {
  const moveItem = (dragIndex, hoverIndex) => {
    const draggedLink = links[dragIndex];
    const newLinks = [...links];
    newLinks.splice(dragIndex, 1);
    newLinks.splice(hoverIndex, 0, draggedLink);
    
    updateLink(newLinks);
  };

  const handleUpdateLink = (id, updatedLinkData) => {
    const newLinks = links.map(link => 
      link.id === id ? { ...link, ...updatedLinkData } : link
    );
    updateLink(newLinks);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow flex-1 xl:min-h-dvh">
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
              src="/images/illustration-empty.svg"
              alt="Illustration"
              className="w-50 h-50"
            />
          </div>
          <h3 className="text-3xl font-bold m-10">Let's get you started</h3>
          <p className="text-gray-500 font-regular px-8 break-words">
            Use the "Add new link" button to get started. Once you have more than one link, you can reorder and edit them. We're here to help you share your profiles with everyone!
          </p>
        </div>
      ) : (
        links.map((link, index) => (
          <DraggableLinkItem key={link.id} id={link.id} index={index} moveItem={moveItem}>
            <LinkItem
              id={link.id}
              link={link}
              updateLink={handleUpdateLink}
              deleteLink={deleteLink}
              index={index}
            />
          </DraggableLinkItem>
        ))
      )}
    </div>
  );
}
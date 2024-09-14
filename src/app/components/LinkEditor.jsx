

import Image from 'next/image'

export default function LinkEditor() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold mb-2">Customize your links</h1>
      <p className="text-gray-500 mb-6">Add/edit/remove links below and then share all your profiles with the world!</p>
      <button className="w-full py-3 border-2 border-purple-500 text-purple-500 rounded-lg font-bold hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500">
        + Add new link
      </button>
      <div className="mt-8 text-center">
        <Image src="images/illustration-empty.svg" alt="Get Started" width={120} height={80} className="mx-auto mb-6" />
        <h2 className="text-xl font-bold mb-2">Let's get you started</h2>
        <p className="text-gray-500">
          Use the "Add new link" button to get started. Once you have more than one link, you can reorder and edit them. We're here to help you share your profiles with everyone!
        </p>
      </div>
    </div>
  )
}
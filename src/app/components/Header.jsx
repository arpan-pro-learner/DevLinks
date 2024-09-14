

import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white p-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center">
        <Image src="/images/logo-devlinks-small.svg" alt="devlinks logo" width={32} height={32} />
        <span className="ml-2 font-bold text-lg">devlinks</span>
      </div>
      <nav className="flex">
        <button className="mr-4 px-4 py-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg" aria-label="Links">
          <Image src="/images/icon-links-header.svg" alt="" width={20} height={20} className="inline mr-2" />
          Links
        </button>
        <button className="px-4 py-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg" aria-label="Profile Details">
          <Image src="/images/icon-profile-details-header.svg" alt="" width={20} height={20} className="inline mr-2" />
          Profile Details
        </button>
      </nav>
      <button className="px-4 py-2 border border-purple-500 text-purple-500 rounded-lg hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500">
        Preview
      </button>
    </header>
  )
}
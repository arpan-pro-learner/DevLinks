

import './globals.css'

export const metadata = {
  title: 'devlinks - Link Sharing App',
  description: 'Share all your important links in one place',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen">{children}</body>
    </html>
  )
}
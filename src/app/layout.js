import "./globals.css";

export const metadata = {
  title: "devlinks - Link Sharing App",
  description: "Share all your important links in one place",
};


export default function RootLayout({ children }) {
  return (
   
  
   
   <html lang="en">
      <head>
    <link rel="icon" href="images/logo-devlinks-small.svg" sizes="any" />
   </head>
    <body className="bg-gray-50 text-gray-900  ">{children}</body>
    </html>
  );
}

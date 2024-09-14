

import Header from '../app/components/Header'
import LinkEditor from '../app/components/LinkEditor'
import MobilePreview from '../app/components/MobilePreview'
import Footer from '../app/components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col lg:flex-row p-4 lg:p-6 gap-6">
        <div className="lg:w-1/3">
          <MobilePreview />
        </div>
        <div className="lg:w-2/3">
          <LinkEditor />
        </div>
      </main>
      <Footer />
    </div>
  )
}
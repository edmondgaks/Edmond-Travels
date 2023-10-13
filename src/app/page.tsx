import Image from 'next/image'
import Discover from './discover/page'
import Footer from './footer/page'
import Landing from './landing/page'
import TripPlan from './plan-trip/page'
import Testimonials from './testimonials/page'

export default function Home() {
  return (
    <main className="flex overflow-hidden bg-white flex-col gap-10 justify-between">
      <Landing />
      <TripPlan />
      <Discover />
      <Testimonials />
      <Footer />
    </main>
  )
}

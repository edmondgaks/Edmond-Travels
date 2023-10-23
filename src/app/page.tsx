import Image from 'next/image'
import Footer from "@/components/footer"
import DiscoverLove from '@/components/landing/DiscoverLove'
import Testimonials from '@/components/landing/Testimonials'
import Landing from '@/components/landing/landing'
import TripPlan from '@/components/landing/TripPlan'

export default function Home() {
  return (
    <main className="flex overflow-hidden bg-white flex-col gap-10 justify-between">
      <Landing />
      <TripPlan />
      <DiscoverLove />
      <Testimonials />
      <Footer />
    </main>
  )
}

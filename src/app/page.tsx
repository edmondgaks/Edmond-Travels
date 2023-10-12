import Image from 'next/image'
import Discover from './discover/page'
import Landing from './landing/page'
import TripPlan from './plan-trip/page'

export default function Home() {
  return (
    <main className="flex overflow-hidden bg-white flex-col justify-between">
      <Landing />
      <TripPlan />
      <Discover />
    </main>
  )
}

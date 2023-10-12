import Image from 'next/image'
import Landing from './landing/page'
import TripPlan from './plan-trip/page'

export default function Home() {
  return (
    <main className="flex overflow-hidden bg-white flex-col justify-between">
      <Landing />
      <TripPlan />
    </main>
  )
}

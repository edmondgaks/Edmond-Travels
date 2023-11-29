import Image from 'next/image'
import dynamic from 'next/dynamic';
import Footer from '@/components/footer';

const Landing = dynamic(() => import('@/components/landing/landing'));
const TripPlan = dynamic(() => import('@/components/landing/TripPlan'));
const DiscoverLove = dynamic(() => import('@/components/landing/DiscoverLove'));
const Testimonials = dynamic(() => import('@/components/landing/Testimonials'));


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

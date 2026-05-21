import Navbar from '@/components/layout/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import SermonCard from '@/components/cards/SermonCard'
import EventCard from '@/components/cards/EventCard'
import MinistryCard from '@/components/cards/MinistryCard'

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <HeroSection />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-bold">Featured Sermons</h2>
          <p className="text-white/70">
            Powerful messages that inspire faith and transformation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <SermonCard
            title="Walking in Purpose"
            preacher="Pastor Michael"
          />

          <SermonCard
            title="Faith Over Fear"
            preacher="Pastor Grace"
          />

          <SermonCard
            title="The Power of Worship"
            preacher="Pastor Daniel"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-bold">Upcoming Events</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <EventCard
            title="Worship Night"
            date="August 25"
          />

          <EventCard
            title="Youth Conference"
            date="September 2"
          />

          <EventCard
            title="Community Outreach"
            date="September 12"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-bold">Ministries</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <MinistryCard
            title="Youth Ministry"
            description="Empowering the next generation through faith and community."
          />

          <MinistryCard
            title="Worship Ministry"
            description="Leading people into the presence of God through worship."
          />

          <MinistryCard
            title="Outreach Ministry"
            description="Serving communities with compassion and purpose."
          />
        </div>
      </section>
    </main>
  )
}

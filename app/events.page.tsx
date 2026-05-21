import EventCard from '@/components/cards/EventCard'

export default function EventsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-32">
      <h1 className="mb-16 text-center text-6xl font-bold">Events</h1>

      <div className="grid gap-8 md:grid-cols-3">
        <EventCard title="Youth Revival" date="September 1" />
        <EventCard title="Prayer Night" date="September 10" />
        <EventCard title="Worship Conference" date="September 22" />
      </div>
    </main>
  )
}

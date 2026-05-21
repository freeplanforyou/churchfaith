import SermonCard from '@/components/cards/SermonCard'

export default function SermonsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-32">
      <h1 className="mb-16 text-center text-6xl font-bold">Sermons</h1>

      <div className="grid gap-8 md:grid-cols-3">
        <SermonCard title="Faith Over Fear" preacher="Pastor Grace" />
        <SermonCard title="Kingdom Living" preacher="Pastor Daniel" />
        <SermonCard title="The Holy Spirit" preacher="Pastor Michael" />
      </div>
    </main>
  )
}

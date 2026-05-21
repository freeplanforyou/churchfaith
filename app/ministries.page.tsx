import MinistryCard from '@/components/cards/MinistryCard'

export default function MinistriesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-32">
      <h1 className="mb-16 text-center text-6xl font-bold">Ministries</h1>

      <div className="grid gap-8 md:grid-cols-3">
        <MinistryCard
          title="Kids Ministry"
          description="Helping children grow in faith."
        />

        <MinistryCard
          title="Youth Ministry"
          description="Building strong future leaders."
        />

        <MinistryCard
          title="Community Outreach"
          description="Serving people with compassion and love."
        />
      </div>
    </main>
  )
}

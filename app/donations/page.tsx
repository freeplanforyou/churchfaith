export default function DonationsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-32 text-center">
      <h1 className="mb-6 text-6xl font-bold">Give Generously</h1>

      <p className="mb-10 text-white/70">
        Your giving helps transform lives around the world.
      </p>

      <div className="glass rounded-3xl p-10">
        <div className="mb-6 h-4 rounded-full bg-white/10">
          <div className="h-4 w-2/3 rounded-full bg-purple" />
        </div>

        <button className="rounded-2xl bg-purple px-8 py-4">
          Donate Now
        </button>
      </div>
    </main>
  )
}

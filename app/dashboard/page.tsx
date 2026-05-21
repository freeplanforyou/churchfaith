export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] px-6 py-20">
      <h1 className="mb-10 text-5xl font-bold">Member Dashboard</h1>

      <div className="grid gap-8 md:grid-cols-4">
        <div className="glass rounded-3xl p-6">
          <h2 className="mb-2 text-xl font-semibold">Saved Sermons</h2>
          <p className="text-4xl font-bold">12</p>
        </div>

        <div className="glass rounded-3xl p-6">
          <h2 className="mb-2 text-xl font-semibold">Prayer Requests</h2>
          <p className="text-4xl font-bold">4</p>
        </div>

        <div className="glass rounded-3xl p-6">
          <h2 className="mb-2 text-xl font-semibold">Groups Joined</h2>
          <p className="text-4xl font-bold">6</p>
        </div>

        <div className="glass rounded-3xl p-6">
          <h2 className="mb-2 text-xl font-semibold">Giving History</h2>
          <p className="text-4xl font-bold">$850</p>
        </div>
      </div>
    </main>
  )
}

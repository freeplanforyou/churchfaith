export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-32">
      <h1 className="mb-16 text-center text-6xl font-bold">Gallery</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="glass h-80 rounded-3xl" />
        <div className="glass h-80 rounded-3xl" />
        <div className="glass h-80 rounded-3xl" />
      </div>
    </main>
  )
}

interface SermonCardProps {
  title: string
  preacher: string
}

export default function SermonCard({
  title,
  preacher,
}: SermonCardProps) {
  return (
    <div className="glass rounded-3xl p-6 transition hover:-translate-y-2 hover:shadow-glow">
      <div className="mb-4 h-52 rounded-2xl bg-white/10" />

      <h3 className="mb-2 text-2xl font-semibold">{title}</h3>

      <p className="text-white/70">{preacher}</p>
    </div>
  )
}

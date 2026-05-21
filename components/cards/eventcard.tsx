interface EventCardProps {
  title: string
  date: string
}

export default function EventCard({
  title,
  date,
}: EventCardProps) {
  return (
    <div className="glass rounded-3xl p-6 transition hover:-translate-y-2">
      <div className="mb-4 rounded-full bg-purple/20 px-4 py-2 text-sm text-purple w-fit">
        {date}
      </div>

      <h3 className="text-2xl font-semibold">{title}</h3>
    </div>
  )
}

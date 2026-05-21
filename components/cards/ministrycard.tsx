import { Heart } from 'lucide-react'

interface MinistryCardProps {
  title: string
  description: string
}

export default function MinistryCard({
  title,
  description,
}: MinistryCardProps) {
  return (
    <div className="glass rounded-3xl p-8 transition hover:-translate-y-2 hover:shadow-glow">
      <Heart className="mb-6 text-gold" size={40} />

      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>

      <p className="mb-6 text-white/70">{description}</p>

      <button className="rounded-xl bg-purple px-5 py-3">
        Learn More
      </button>
    </div>
  )
}

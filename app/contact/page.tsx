export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-32">
      <h1 className="mb-16 text-center text-6xl font-bold">Contact Us</h1>

      <form className="glass rounded-3xl p-10">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-2xl bg-white/10 p-4"
          />
        </div>

        <div className="mb-6">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-2xl bg-white/10 p-4"
          />
        </div>

        <textarea
          placeholder="Your Message"
          className="mb-6 h-40 w-full rounded-2xl bg-white/10 p-4"
        />

        <button className="rounded-2xl bg-purple px-8 py-4">
          Send Message
        </button>
      </form>
    </main>
  )
}

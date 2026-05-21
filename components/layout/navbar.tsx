'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-2xl font-bold">
          Premium Church
        </Link>

        <div className="hidden gap-8 md:flex">
          <Link href="/about">About</Link>
          <Link href="/sermons">Sermons</Link>
          <Link href="/events">Events</Link>
          <Link href="/ministries">Ministries</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <button className="md:hidden">
          <Menu />
        </button>
      </nav>
    </header>
  )
}

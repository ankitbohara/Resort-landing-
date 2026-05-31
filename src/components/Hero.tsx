import React, { useState } from 'react'
import { Calendar, Users, Sparkles } from 'lucide-react'

interface HeroProps {
  onCheckAvailability: (bookingDetails: { checkIn: string; checkOut: string; guests: string }) => void
}

export default function Hero({ onCheckAvailability }: HeroProps) {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('2 Adults, 0 Children')
  const [showNotification, setShowNotification] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!checkIn || !checkOut) {
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 3000)
      return
    }
    onCheckAvailability({ checkIn, checkOut, guests })
  }

  return (
    <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Slow Parallax/Zoom */}
      <img
        alt="Theharav Resort Hero"
        className="absolute inset-0 w-full h-full object-cover scale-105 animate-[zoom_60s_linear_infinite]"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1sW3canaaOlBWwaWfwQMEgCHKO84YHxnAiH0NcsZpJK-ofD5ArDm2bunfKRN-JqRnnGVcBy76T4GjYGjc__zXYAhufv1_rYTo3NQA6k7_ySAFphRQSY6qKUPGIF1mP6fHjp_DN9PQL1_ecK2PGf4l4cY6TFbL_1DkbNBJgKkkrHlXNpcxHwsrKYkzFtqJCUgNpfa-CYTI1M2NOdvk4JsOTbJ2LYLWIoTqa7fPAvYeVfBZ6ent4Jl9vdAZTvwCnVBXxTtucXge4H4"
      />
      {/* Subtle Overlay to enhance text readability */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 mt-16 max-w-5xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6 animate-fade-in">
          <Sparkles size={14} className="text-tertiary-fixed" />
          <span className="font-label-sm uppercase tracking-widest text-[10px] text-white">Jaipur's Elite Sanctuary</span>
        </div>

        <h1 className="font-display-lg text-4xl md:text-6xl lg:text-7xl mb-6 drop-shadow-xl select-none leading-tight font-bold">
          The Art of Peaceful Luxury
        </h1>
        
        <p className="font-body-lg text-sm md:text-lg max-w-2xl mx-auto mb-12 drop-shadow-md leading-relaxed text-white/90">
          Experience comfort, elegance, private pool stays, and unforgettable hospitality in the heart of Jaipur.
        </p>

        {/* Booking Widget Form */}
        <form
          onSubmit={handleSubmit}
          className="glass-panel w-full max-w-4xl mx-auto p-5 md:p-8 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-4 items-end text-left"
        >
          {/* Check-In */}
          <div className="flex-1 w-full text-left relative">
            <label className="flex items-center gap-1.5 font-label-sm text-xs text-on-surface-variant mb-2 uppercase tracking-widest">
              <Calendar size={13} className="text-primary" />
              Check-In
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm transition-all duration-300"
            />
          </div>

          {/* Check-Out */}
          <div className="flex-1 w-full text-left relative">
            <label className="flex items-center gap-1.5 font-label-sm text-xs text-on-surface-variant mb-2 uppercase tracking-widest">
              <Calendar size={13} className="text-primary" />
              Check-Out
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              min={checkIn || undefined}
              className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm transition-all duration-300"
            />
          </div>

          {/* Guests */}
          <div className="flex-1 w-full text-left relative">
            <label className="flex items-center gap-1.5 font-label-sm text-xs text-on-surface-variant mb-2 uppercase tracking-widest">
              <Users size={13} className="text-primary" />
              Guests
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3.5 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm transition-all duration-300 appearance-none cursor-pointer"
            >
              <option value="2 Adults, 0 Children">2 Adults, 0 Children</option>
              <option value="1 Adult">1 Adult</option>
              <option value="2 Adults, 1 Child">2 Adults, 1 Child</option>
              <option value="Family (4+)">Family (4+)</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full md:w-auto bg-primary text-white hover:bg-primary-container px-10 py-4 font-label-md text-xs uppercase tracking-widest active:scale-95 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-primary/20"
          >
            Check Availability
          </button>
        </form>

        {/* Floating Notification */}
        {showNotification && (
          <div className="absolute top-24 left-1/2 -translate-x-1/2 bg-error text-white font-label-sm px-6 py-3 rounded-full shadow-lg flex items-center gap-2 animate-bounce">
            <span>Please select both Check-In and Check-Out dates</span>
          </div>
        )}
      </div>

      <style>{`
        @keyframes zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
      `}</style>
    </header>
  )
}

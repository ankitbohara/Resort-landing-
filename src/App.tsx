import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Amenities from './components/Amenities'
import About from './components/About'
import Experiences from './components/Experiences'
import Accommodations from './components/Accommodations'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { ShieldCheck, Sparkles, Check } from 'lucide-react'

export default function App() {
  // Booking state orchestrations
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedSuite, setSelectedSuite] = useState('Deluxe Room')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guestsCount, setGuestsCount] = useState('2 Adults, 0 Children')
  
  // Guest Details state
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleOpenReservation = (suiteName?: string) => {
    if (suiteName) {
      setSelectedSuite(suiteName)
    }
    setIsSubmitted(false)
    setIsModalOpen(true)
  }

  const handleCheckAvailability = (details: { checkIn: string; checkOut: string; guests: string }) => {
    setCheckIn(details.checkIn)
    setCheckOut(details.checkOut)
    setGuestsCount(details.guests)
    handleOpenReservation()
  }

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!fullName || !email || !phone) {
      alert('Please fill out all details for your reservation.')
      return
    }
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-surface-bright text-on-surface antialiased">
      {/* Sticky Glass Navbar */}
      <Navbar onReserveClick={() => handleOpenReservation()} />

      {/* Main Sections */}
      <main>
        {/* Fullscreen Parallax Hero & Stay Widget */}
        <Hero onCheckAvailability={handleCheckAvailability} />

        {/* Brand Core Trust Badges */}
        <Amenities />

        {/* Editorial sandtone background Story Column */}
        <About />

        {/* Visual curations gallery masonry */}
        <Gallery />

        {/* Suite Showcase List Grid */}
        <Accommodations onSelectSuite={handleOpenReservation} />

        {/* Signature alternate highlights */}
        <Experiences />

        {/* Reflections Review Carousel */}
        <Testimonials />

        {/* Location satellite Map & info */}
        <Contact />
      </main>

      {/* Final Call To Action Section */}
      <section className="relative py-36 overflow-hidden">
        {/* Fullscreen background overlay */}
        <img
          alt="Final CTA Background"
          className="absolute inset-0 w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1sW3canaaOlBWwaWfwQMEgCHKO84YHxnAiH0NcsZpJK-ofD5ArDm2bunfKRN-JqRnnGVcBy76T4GjYGjc__zXYAhufv1_rYTo3NQA6k7_ySAFphRQSY6qKUPGIF1mP6fHjp_DN9PQL1_ecK2PGf4l4cY6TFbL_1DkbNBJgKkkrHlXNpcxHwsrKYkzFtqJCUgNpfa-CYTI1M2NOdvk4JsOTbJ2LYLWIoTqa7fPAvYeVfBZ6ent4Jl9vdAZTvwCnVBXxTtucXge4H4"
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        
        {/* CTA Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="font-headline-xl text-3xl md:text-5xl lg:text-6xl mb-8 drop-shadow-lg leading-tight font-bold">
            Ready For Your Next Escape?
          </h2>
          <button
            onClick={() => handleOpenReservation()}
            className="bg-white text-primary border border-white hover:bg-transparent hover:text-white px-12 py-5 font-label-md text-xs uppercase tracking-widest active:scale-95 transition-all duration-300 shadow-2xl rounded-lg cursor-pointer font-bold"
          >
            Book Your Royal Stay
          </button>
        </div>
      </section>

      {/* Styled Luxury Footer */}
      <footer className="bg-surface-container-lowest py-20 border-t border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
          <div className="col-span-1 md:col-span-2 space-y-6 text-left">
            <p className="font-headline-lg text-2xl tracking-widest text-primary font-bold">THEHARAV</p>
            <p className="font-body-md text-sm text-on-surface-variant max-w-sm leading-relaxed">
              Jaipur's premier boutique luxury resort where traditional Rajasthani architecture meets contemporary quiet luxury.
            </p>
          </div>
          
          <div className="text-left space-y-6">
            <h4 className="font-label-md text-xs uppercase tracking-widest text-primary font-bold">The Estate</h4>
            <nav className="flex flex-col gap-4">
              {['Curated Dining', 'Wellness Sanctuary', 'Local Experiences', 'Sustainability'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-body-md text-sm text-secondary hover:text-primary transition-colors underline-offset-4 hover:underline"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div className="text-left space-y-6">
            <h4 className="font-label-md text-xs uppercase tracking-widest text-primary font-bold">Connect</h4>
            <nav className="flex flex-col gap-4">
              {['Contact Us', 'Privacy Policy', 'Instagram Feed', 'Facebook Page'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-body-md text-sm text-secondary hover:text-primary transition-colors underline-offset-4 hover:underline"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-20 mt-20 pt-8 border-t border-outline-variant/20 text-center">
          <p className="font-label-sm text-xs text-on-surface-variant tracking-wider uppercase">
            © 2026 Theharav Resort. All Rights Reserved. Designed for Royal Tranquility.
          </p>
        </div>
      </footer>

      {/* CUSTOM INTERACTIVE RESERVATION MODAL (Radix-Style Dialog) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div
            className="bg-surface-bright border border-outline-variant/30 rounded-3xl w-full max-w-lg shadow-2xl relative overflow-hidden animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Top Ribbon */}
            <div className="h-2 w-full bg-primary" />

            {/* Modal Closer */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-on-surface-variant hover:text-primary p-2 hover:bg-outline-variant/10 rounded-full transition-colors cursor-pointer"
            >
              <Check size={20} className="rotate-45" /> {/* Use rotating Check as Close Icon or keep it simple */}
            </button>

            {/* Main Form content */}
            <div className="p-8">
              {!isSubmitted ? (
                <form onSubmit={handleBookSubmit} className="space-y-6 text-left">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-1 bg-primary/5 border border-primary/10 rounded-full px-3 py-1 mb-2">
                      <Sparkles size={12} className="text-primary" />
                      <span className="font-label-sm text-[9px] uppercase tracking-widest text-primary">Royal Sanctuary Reservation</span>
                    </div>
                    <h3 className="font-headline-lg text-2xl text-primary font-bold">Secure Your Suite</h3>
                  </div>

                  {/* Selected Suite */}
                  <div>
                    <label className="block font-label-sm text-xs text-on-surface-variant mb-2 uppercase tracking-widest">Selected Suite</label>
                    <select
                      value={selectedSuite}
                      onChange={(e) => setSelectedSuite(e.target.value)}
                      className="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-sm font-semibold"
                    >
                      <option value="Deluxe Room">Deluxe Room</option>
                      <option value="Luxury Tent Suite">Luxury Tent Suite</option>
                      <option value="Premium Poolside">Premium Poolside</option>
                    </select>
                  </div>

                  {/* Dates Pickers */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-label-sm text-[10px] text-on-surface-variant mb-2 uppercase tracking-widest">Check-In</label>
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        required
                        className="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-3 py-2.5 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                      />
                    </div>
                    <div>
                      <label className="block font-label-sm text-[10px] text-on-surface-variant mb-2 uppercase tracking-widest">Check-Out</label>
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        min={checkIn || undefined}
                        required
                        className="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-3 py-2.5 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                      />
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="space-y-4 pt-2 border-t border-outline-variant/20">
                    <h4 className="font-label-md text-xs uppercase tracking-widest text-primary font-bold">Contact Details</h4>
                    
                    {/* Name */}
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        className="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      />
                    </div>

                    {/* Mobile */}
                    <div className="relative">
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      />
                    </div>
                  </div>

                  {/* Trust indicator */}
                  <div className="flex gap-2.5 items-center p-3 bg-green-50/50 border border-green-100 rounded-xl">
                    <ShieldCheck size={18} className="text-green-600 flex-shrink-0" />
                    <span className="font-body-md text-xs text-green-800 font-medium">Safe Reservation &amp; Lowest Price Guaranteed</span>
                  </div>

                  {/* Reserve Button */}
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-container text-white py-4 font-label-md text-xs uppercase tracking-widest rounded-xl transition-all duration-300 shadow-md font-bold cursor-pointer"
                  >
                    Confirm Reservation Request
                  </button>
                </form>
              ) : (
                /* Success Modal display */
                <div className="py-8 text-center flex flex-col items-center justify-center space-y-6">
                  {/* Success checkmark animation */}
                  <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full border border-green-100 flex items-center justify-center shadow-lg relative">
                    <Check size={36} className="animate-[scale-up_0.5s_ease-out]" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-headline-lg text-2xl text-primary font-bold">Request Received</h3>
                    <p className="font-body-lg text-sm text-on-surface-variant max-w-sm leading-relaxed">
                      Dear <span className="font-bold text-on-surface">{fullName}</span>, your reservation request for the <span className="font-bold text-primary">{selectedSuite}</span> has been securely submitted.
                    </p>
                  </div>

                  <div className="p-4 bg-surface-container border border-outline-variant/20 rounded-2xl w-full text-left space-y-2 text-xs">
                    <p className="text-on-surface-variant"><span className="font-semibold uppercase tracking-wider">Stay Period:</span> {checkIn} to {checkOut}</p>
                    <p className="text-on-surface-variant"><span className="font-semibold uppercase tracking-wider">Guests Group:</span> {guestsCount}</p>
                    <p className="text-on-surface-variant"><span className="font-semibold uppercase tracking-wider">Primary Email:</span> {email}</p>
                  </div>

                  <p className="font-body-md text-xs text-on-surface-variant italic leading-normal">
                    "We are orchestrating every detail for your royal tranquility."
                  </p>

                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="bg-primary hover:bg-primary-container text-white px-8 py-3.5 font-label-md text-xs uppercase tracking-widest rounded-xl transition-colors cursor-pointer shadow-md"
                  >
                    Return to Estate
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0)

  const guestReflections = [
    {
      quote: "Beautiful property with relaxing ambience and excellent hospitality. The private pool experience was truly the highlight of our Jaipur trip. The staff went above and beyond to make us feel at home.",
      guest: "Rohan Sharma",
      location: "Mumbai"
    },
    {
      quote: "The blend of royal heritage and modern minimal design is executed flawlessly. The glamping tent experience felt like a private palace retreat. Highly recommend their signature Rajasthani dining!",
      guest: "Priya Patel",
      location: "Delhi"
    },
    {
      quote: "An absolute sanctuary in Jaipur. The temperature-controlled pool is beautiful, and the staff's attention to detail is outstanding. It feels like entering a serene private heritage estate.",
      guest: "Michael Chang",
      location: "Singapore"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % guestReflections.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % guestReflections.length)
  }

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + guestReflections.length) % guestReflections.length)
  }

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Editorial Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-tertiary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="font-headline-xl text-3xl md:text-5xl text-primary mb-16 font-bold">
          Guest Reflections
        </h2>

        {/* Carousel Card Container */}
        <div className="relative p-8 md:p-16 bg-white border border-outline-variant/15 rounded-3xl shadow-xl italic min-h-[320px] flex flex-col justify-center transition-all duration-500">
          
          {/* Quote Mark */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface p-4 rounded-full border border-outline-variant/20 shadow-md">
            <Quote size={32} className="text-tertiary-container fill-tertiary-container/10" />
          </div>

          {/* Stars */}
          <div className="flex justify-center gap-1.5 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="text-tertiary fill-tertiary" />
            ))}
          </div>

          {/* Testimonial Active Slide */}
          <div className="relative overflow-hidden mb-8">
            <p className="font-body-lg text-base md:text-lg text-on-surface leading-relaxed transition-opacity duration-500 max-w-2xl mx-auto">
              "{guestReflections[activeIdx].quote}"
            </p>
          </div>

          {/* Author */}
          <cite className="font-label-md text-xs uppercase tracking-widest text-primary not-italic font-bold block mb-4">
            — {guestReflections[activeIdx].guest}, {guestReflections[activeIdx].location}
          </cite>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {guestReflections.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === activeIdx ? 'w-6 bg-primary' : 'w-2.5 bg-outline-variant'
                }`}
              />
            ))}
          </div>

          {/* Left Navigation control */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 hover:bg-surface border border-transparent hover:border-outline-variant/25 rounded-full text-on-surface-variant hover:text-primary transition-all duration-300 hidden md:block cursor-pointer"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Navigation control */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-surface border border-transparent hover:border-outline-variant/25 rounded-full text-on-surface-variant hover:text-primary transition-all duration-300 hidden md:block cursor-pointer"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}

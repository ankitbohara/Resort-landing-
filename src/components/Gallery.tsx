import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Gallery() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)

  const images = [
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1I432c6RUOgRrfhzxu7rQ77jsx9bqh59ytnvm-AU0y3QkvpJuEVJmZAZiZi4AUUBQ77ilM_a-JZZgbN--pf-BIeAkZP0_K5_kncMobZ-V9btRZSw-JtgR7KBTIjy7rgAxoA6_iAAB1VL8RELflkV5CbKSOo7zqFGQJYW_gGBeNW_gxtFVXq4i--zdQjXzLdTu6vFMTEya8sQlzRXUg7OGROSBV-52cYTyCMLZHDRvZYfLQNcF0j7e2jdfBwOKlmRLCnmACF7IXf0',
      title: 'Arched Courtyard Entrance'
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWWY5ASGKQEYufHIz1a4D6fxRqujpvPpSIF-L8umvZyqKAo0PUmSgRhK2mOYUe-y0-3svzaTJ-kXDa6mVdV6llxTpH22f902JH0JUICoBhOmoy4ey0uGNLQGtLTs-ko-O0kkp6I78AC0Ph6fnDBr8_RN0SChgOCYUzWaSYyyDRpUlY2u4QxF6hUtnE3kbgSUXMvx6QuVSADAgnksllQf-JIDqga27-LWu8zHIUNEN4x1LuZ-ggmYb4WIMfKc-z-tIbTVrBrJtirfs',
      title: 'Illuminated Facade & Palms'
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYV_Vw0QCw5OowuOTkmoZq5fof9M_OBIkSEWY3lhX8ObsYZyNjdpKsxFWvqL3RF4W4hmRXXui5iCAz7vcLNv7tbAc7oMF7YU4i93WKHFBmQNBrPrOcFycdpLXh_OLCeQUNBUa79L8-E8qvSV8B6IoqLpeT7V5hCdQCLwjO5fYqEWa273Enlp9YhUDJOLYr6Q8B3c6dGoMagV--OsFddxtc0vZWK2wfdtuvP8I_vUOJtaYNVZQeRV0V0CFh8XXUpVKlEPTM2ZxUHBs',
      title: 'Heritage Poolside Dusk View'
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7zPtNzH5WAWOdNxx2dA_xFtAb0GQz9n_5K69e2Q5_yiFuRLCZFS9QYoFuOhixAUTVwXksHbXnAwzJRpkyPMESGuXzOHyztStKrWY37J_NFU4f-8RMWw4fR4WvV_PXBMaVzNibeFshJNrRl8N-SXV5_a8VlQS2dfQeQ0RtNwJR8qLpGRkFqoTmUrydoJ9WkuF_7JeJMJIGudv_xrns2621YbKHhumKk07-yXzNnStbTxM_qtvacv9ZDKa00uG66lfJ-zhzsBSws2Q',
      title: 'Canopy Suite Bed close-up'
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmxv-yaVATIgoh4O0yBnFX2AkxO42fEAHEsXQUtYrkpSp_U4sn5ym1bPwadfoeK94cZ5uzkvgQSk9evEkFv3DR44H01IzRvKE0WS8eepXQpn7j59Yn6dhh0PY-m-RmKL2pEJS2h3UrhNE6eXZW4-RIxkMHZ-8_eLOHx-6qoy_plzQoecoHf1lY4vPVsj1Kqp04H01ZmpFojWB_fNZXBWmMG1VdYCrZkUerhgGt9VOy3-vnLSzOKf9ITw2m1zESRUVIMOuS1knd5sg',
      title: 'Intricate Rajasthani Wall Decor'
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-Np-36OeeS776N7N3wRoV9e_xkhcuntQho9resNY8bCdsOhGRlME2057N-boFT_BPswPQ5WXoEnn61qdED-JN4zQ9iZxPRQVM21-epJelPaEnTPQwQ_ggAip_ZLd7XEwBhVXP04TMuWIdOX3jh7rXLeMdDp2SiN2LB-tCEYoHp3JBriinaZULXIUQY8UnQbt_DJRiBO3F4cZSS68RzrNLB_r9h1LxekNArK7XREFEDdAy6WHl4-xdbBA7DQ_gOk5emO-XopUOfLs',
      title: 'Resort Signature Photo Spot'
    }
  ]

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIdx === null) return
      if (e.key === 'Escape') setActiveIdx(null)
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIdx])

  const handleNext = () => {
    setActiveIdx((prev) => (prev !== null ? (prev + 1) % images.length : null))
  }

  const handlePrev = () => {
    setActiveIdx((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null))
  }

  return (
    <section className="py-24 bg-surface-bright" id="gallery">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <h2 className="font-headline-xl text-3xl md:text-5xl text-center text-primary mb-16 italic font-semibold">
          Glimpses of Grandeur
        </h2>

        {/* Masonry-Style Column Layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className="relative overflow-hidden rounded-2xl hover-zoom shadow-md hover:shadow-xl cursor-pointer group break-inside-avoid-column border border-outline-variant/10"
            >
              <img
                alt={img.title}
                className="w-full h-auto object-cover"
                src={img.url}
              />
              {/* Hover Caption Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="font-label-md text-sm text-white uppercase tracking-widest">
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeIdx !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center animate-fade-in">
          {/* Close button */}
          <button
            onClick={() => setActiveIdx(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 z-50 bg-white/10 rounded-full cursor-pointer"
          >
            <X size={28} />
          </button>

          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              handlePrev()
            }}
            className="absolute left-6 text-white/70 hover:text-white transition-colors p-3 bg-white/5 hover:bg-white/10 rounded-full cursor-pointer select-none"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Image & Caption Display */}
          <div
            className="max-w-[90%] max-h-[85vh] flex flex-col items-center justify-center gap-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[activeIdx].url}
              alt={images[activeIdx].title}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl select-none"
            />
            <p className="font-label-md text-sm uppercase tracking-widest text-white/90 text-center select-none">
              {images[activeIdx].title}
            </p>
          </div>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleNext()
            }}
            className="absolute right-6 text-white/70 hover:text-white transition-colors p-3 bg-white/5 hover:bg-white/10 rounded-full cursor-pointer select-none"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  )
}

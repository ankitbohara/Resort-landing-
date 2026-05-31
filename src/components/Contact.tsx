import { MapPin, Phone, MessageSquare } from 'lucide-react'

export default function Contact() {
  return (
    <section className="py-24 bg-surface-container-lowest relative">
      <div className="max-w-7xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side: Address Details */}
        <div className="space-y-10 text-left">
          <div className="space-y-4">
            <span className="font-label-md text-xs text-tertiary uppercase tracking-[0.3em] mb-2 block">
              Reach Out
            </span>
            <h2 className="font-headline-xl text-3xl md:text-5xl text-primary font-bold">
              Find Us
            </h2>
          </div>

          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-6 items-start">
              <div className="p-3 bg-primary/5 rounded-xl border border-primary/10 text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <p className="font-headline-lg text-lg text-on-surface mb-2 font-semibold">Our Estate</p>
                <p className="font-body-lg text-sm md:text-base text-on-surface-variant leading-relaxed">
                  Gopi Vihar, Plot No. 8, Near Niwaru Pulia,<br />
                  Jhotwara, Jaipur, Rajasthan 302012
                </p>
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex gap-6 items-start">
              <div className="p-3 bg-primary/5 rounded-xl border border-primary/10 text-primary">
                <Phone size={24} />
              </div>
              <div>
                <p className="font-headline-lg text-lg text-on-surface mb-2 font-semibold">Reservations</p>
                <a
                  href="tel:+919876543210"
                  className="font-body-lg text-sm md:text-base text-on-surface-variant hover:text-primary transition-colors leading-relaxed block"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Map Container */}
        <div className="relative h-96 bg-secondary-container/40 rounded-3xl overflow-hidden shadow-inner group border border-outline-variant/20">
          {/* Mock Map Background Visual */}
          <div className="absolute inset-0 bg-cover bg-center grayscale opacity-80 group-hover:scale-105 transition-transform duration-[20s] ease-out pointer-events-none"
               style={{ backgroundImage: `url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/75.7873,26.9124,12,0/800x600?access_token=mock')` }} 
          />
          {/* Fallback pattern when Mapbox API mock isn't accessible */}
          <div className="absolute inset-0 bg-neutral-900/10 flex flex-col items-center justify-center p-8 text-center text-on-secondary-container z-10">
            <div className="p-4 bg-white/90 rounded-full shadow-lg text-primary mb-4 animate-bounce">
              <MapPin size={36} />
            </div>
            <p className="font-headline-lg text-lg text-on-surface mb-1 font-semibold">Theharav Resort Location</p>
            <p className="font-body-md text-xs text-on-surface-variant max-w-xs mb-4">
              Jhotwara, Jaipur, Rajasthan
            </p>
            <a
              href="https://maps.google.com/?q=Theharav+Resort+Jhotwara+Jaipur"
              target="_blank"
              rel="noreferrer"
              className="bg-primary hover:bg-primary-container text-white px-6 py-2.5 rounded-lg font-label-md text-xs uppercase tracking-widest transition-all duration-300 shadow-md"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group flex items-center justify-center cursor-pointer"
      >
        <MessageSquare size={28} className="fill-white/10" />
        {/* Hover Tooltip Label */}
        <span className="absolute right-full mr-4 bg-white border border-outline-variant/20 text-on-surface text-xs font-label-md tracking-wider uppercase px-4 py-2.5 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Chat with us
        </span>
      </a>
    </section>
  )
}

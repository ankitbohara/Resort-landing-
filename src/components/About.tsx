import { ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <section className="py-24 md:py-40 bg-surface-container-lowest" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Left: Image with Offset Border */}
        <div className="relative group">
          {/* Decorative Offset Border */}
          <div className="absolute -inset-4 border border-outline-variant translate-x-4 translate-y-4 -z-10 transition-transform duration-700 group-hover:translate-x-6 group-hover:translate-y-6 rounded-sm" />
          
          <div className="overflow-hidden rounded-lg shadow-xl aspect-[4/5] md:h-[600px] w-full">
            <img
              alt="Theharav Garden Courtyard Twilight"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRXTb9-67UwmHhxv0gSOahymVnQgruem84NhmJt9vM88wY_7stZM4I7l74_uxwcl6LNXt4t4hTyXMc9_LH6HtRC-VY9yDaVdvEmfdj1w1zILYyerCYeO2zQG_SAjMfXoFFCAHthifSOQ4ygUrAkC7YD3Xhhg5_ka93N2mfg2oIlNd2Ksjn7PA-Q0ItvAm3NEJzy3SMSYaXMsxp0kvpT_MD1V_PyOn9gODV4giqdbDzuUXCxwRbP8VEJWdODNneiGNKsxoVEPT6kRs"
            />
          </div>
        </div>

        {/* Right: Text Story */}
        <div className="flex flex-col items-start">
          <span className="font-label-md text-xs text-tertiary uppercase tracking-[0.3em] mb-4 block">
            Our Legacy
          </span>
          <h2 className="font-headline-xl text-3xl md:text-5xl text-primary mb-8 font-bold leading-tight">
            A Sanctuary of Tradition &amp; Modernity
          </h2>
          
          <p className="font-body-lg text-sm md:text-base text-on-surface-variant mb-8 leading-relaxed">
            Theharav Resort is a peaceful luxury retreat in Jaipur that seamlessly weaves together traditional Rajasthani aesthetics with the pinnacle of modern comfort. Designed for the discerning traveler, our estate offers a respite from the city's pulse without compromising on proximity.
          </p>
          
          <div className="border-l-4 border-primary pl-6 py-2 italic font-body-md text-base md:text-lg text-primary/95 mb-12 bg-primary/[0.02] pr-4 rounded-r-lg">
            "Where every detail is orchestrated to ensure your stay is not just a visit, but a cherished memory of royal tranquility."
          </div>
          
          <button className="group inline-flex items-center gap-3 border border-outline hover:border-primary px-8 py-4 font-label-md text-xs uppercase tracking-widest text-on-surface-variant hover:text-white hover:bg-primary transition-all duration-300 rounded-md active:scale-95 shadow-sm hover:shadow-primary/15">
            Discover Our Story
            <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  )
}

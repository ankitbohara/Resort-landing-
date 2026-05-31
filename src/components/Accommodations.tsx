import { CheckCircle2 } from 'lucide-react'

interface AccommodationsProps {
  onSelectSuite: (suiteName: string) => void
}

export default function Accommodations({ onSelectSuite }: AccommodationsProps) {
  const suites = [
    {
      name: 'Deluxe Room',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUS5lRHZQinl9W_QuwGoMaX_NAIc0ueaQh6SlFvzBYoXpVq2COztXnp4GJy8svRZYjU1oB2yfBvXG7SBIUT5IWlNQPn1tDPIVkBUqr93M6DgD1r3TZl0dFgvTAICr1SDsZwhCwBezSJlWJcmpSSkbt8Oy3w5gztPfqdXiQMxxkiAcPuiYfxc1bEtv5zmO7xQqZ-w4JCWJ5R4bjSJAXS3QLhzKaDtyCBsb4abpFdtoacgwU-l_0MN3Eux7p22AnmwAao2qBlxDa0us',
      features: ['350 sq. ft. Space', 'High Speed WiFi & TV', '24/7 Room Service'],
      buttonText: 'Book Deluxe',
      alt: 'Luxury Deluxe Room Interior'
    },
    {
      name: 'Luxury Tent Suite',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBV8oEoc_Hzv3JZlllxAjr0-n-B4GfYh2cgpP_62YaAJ8Og6fTPsGW4nqjsc9e6FhmThx4jrhpQmfAPwl_l9JqAMxVBUsi-ilhvL92Vmssp0sZZtYKGwwEpECH3C3iFZtDiBDzFqe3piRzi1NDsYY5P-YX66DOvVvlUDRk4lhLTQob_tQbwmLdqnJ5CtVIrIixzAw8PPp6bbYhTYkPl-dXhjr5hWkcDSPY94-M6XrJdyPrc-iE4p88R3cI542cTUNVoDTVHSq4A5xk',
      features: ['Authentic Glamping Experience', 'Fully Air Conditioned', 'Private Garden Access'],
      buttonText: 'Book Tent Suite',
      alt: 'Premium Glamping Tent Interior'
    },
    {
      name: 'Premium Poolside',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3NtITT0cte4GsQnvpbBlD6EPnHh8em3ShoBUw3FFNj49zeDVrLJdLUlJ5RK2Muh1qunrNwJLkQVSKZsH6i_5rn4qtzwpo8lOMx0cK-7b6NpD-biv6ykve1QDa_86Ile7KinP7FtKEPz0WSijCn9RAMZCdpIlu5Qhb4hfsR4z9Tfj4C9kmD_siQP452w99byM5ICDzhSxkCpFFhFINcVKciOOP_lPNc5Sqe1I4BvgxUGb_Ua-dlnTvE5cZLuYYCwL6i5ZSjdxqADY',
      features: ['Direct Pool Access', 'Four-Poster King Bed', 'Premium Minibar'],
      buttonText: 'Book Poolside',
      alt: 'Premium Poolside Room Canopy Bed'
    }
  ]

  return (
    <section className="py-24 bg-surface-container-low" id="accommodation">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <h2 className="font-headline-xl text-3xl md:text-5xl text-center text-primary mb-16 font-bold">
          Refined Living
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {suites.map((suite, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 group flex flex-col justify-between"
            >
              {/* Image Container with Zoom effect */}
              <div className="h-64 overflow-hidden relative">
                <img
                  alt={suite.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={suite.img}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Suite Information */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline-lg text-xl md:text-2xl text-primary mb-6 font-semibold">
                    {suite.name}
                  </h3>
                  
                  <ul className="space-y-4 mb-8">
                    {suite.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 font-body-md text-sm text-on-surface-variant">
                        <CheckCircle2 size={16} className="text-tertiary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onSelectSuite(suite.name)}
                  className="w-full bg-primary hover:bg-primary-container text-white py-4 font-label-md text-xs uppercase tracking-widest active:scale-95 transition-all duration-300 rounded-lg cursor-pointer"
                >
                  {suite.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

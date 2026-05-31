import { Bed, Waves, Utensils, Users, Sparkles, PhoneCall } from 'lucide-react'

export default function Amenities() {
  const items = [
    { icon: Bed, label: 'Premium Rooms' },
    { icon: Waves, label: 'Swimming Pool' },
    { icon: Utensils, label: 'Restaurant' },
    { icon: Users, label: 'Family Friendly' },
    { icon: Sparkles, label: 'Event Friendly' },
    { icon: PhoneCall, label: '24/7 Support' }
  ]

  return (
    <section className="py-20 bg-surface-bright">
      <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-2 md:grid-cols-6 gap-8">
        {items.map((item, idx) => {
          const IconComp = item.icon
          return (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-6 bg-white/40 hover:bg-white border border-outline-variant/10 hover:border-outline-variant/30 rounded-2xl transition-all duration-500 group cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              <div className="p-4 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors mb-4">
                <IconComp
                  size={32}
                  className="text-primary group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="font-label-md text-xs uppercase tracking-widest text-on-surface-variant text-center transition-colors group-hover:text-primary">
                {item.label}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

import { ArrowRight } from 'lucide-react'

export default function Experiences() {
  const list = [
    {
      title: 'Luxury Accommodation',
      desc: 'Indulge in suites that celebrate the heritage of the Pink City through intricate patterns and bespoke furnishings.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSx1yjS9j32ym0w9WVwqwgl67HzL0x_BAfdxqNkv-40faMvdA_CQt_f2YIP5iVoKy396yUHsluJdS3H5nuZoc9CjSWbJdoKmeUUyaur59Vq7c9Ex43l37hW6r6ScAkk-vj5ZhkpIS3Pvw1LxPbB_dq1Bi1IaADVAwjNvTLy7coWg8g2PTTHFyULoWzB2ONy8Tj3raIyuLY5A2Nv2MsXLWESUVFOFXJki4VlC4BRpLE-IPZVLguPF7y3QwjxXc5jJJFB4a7-LMveI4',
      linkText: 'Explore Rooms',
      alt: 'Luxury Suite Setup'
    },
    {
      title: 'The Azure Escape',
      desc: 'Our temperature-controlled pool is an oasis of calm, perfect for morning laps or sunset cocktails under the Rajasthani sky.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlXxFKmklo68CnIOcJXpqxnYs-y3dUjB7Zxia8TltI-0R70jqcTh5Aj47avADIMoT3AngwaxhgYNTpOnDMw4R3VmZ8Cj36Q2dtbC0pdB6CjHy_OI1pmk2Gyf255J4wTZvEWVF0lqT6KUMF2WPUvUXtj9vYYzfC5Zs22YUOFMxcaW_OPX8JfB4XmWqFbxh-rV-sgr9HfOVz2eBMdwkWfCAYqamxehqKNY0Xkqz8J0HaefxPIx4hw5VsECTHMxhXJVkIiYtsSKPlNGo',
      linkText: 'View Pool Gallery',
      alt: 'Resort Temperature Poolside'
    },
    {
      title: 'Romantic Staycation',
      desc: 'Crafted for couples, our staycations feature candlelit dinners, rose petal turndown service, and absolute privacy.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBH5vU7bDk_T-oZkKpsGDUN470PwqYmi9iL7yycHsQMm_HRqZM9apkImKplJHYT1RFDCbHhp8dNYBnhEBtVrH0_cu9GJbrfsZD7j0QiIoAMOAapG0o74f52ct71n0vV3TxoNEDsUNIGlDgzKJIJcp3YwzGiRnk157tFAarI6-Up0CiQrqRrTR9RUVJgCM1luTpZuwZHC0qZLBhWCDIzIN4yDKHz7jwM-b9WiXpp6jEtTg2KGXf6mcjeFdtVvZMeAY1sa9ez2m9y8js',
      linkText: 'Book Your Romance',
      alt: 'Romantic bedroom suite with heart-shaped swan art'
    },
    {
      title: 'Family & Social Gatherings',
      desc: 'Expansive lawns and versatile indoor spaces make Theharav the ideal destination for your next family reunion or celebration.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMn8aWKbKjA_3Nrs8Jo039eE0JF-AYXi-m_kcmGO0VaU_7cWYx_JOBSwEosZf2WE0lHJhpIq_kdvp_hnbW62sB2e_r9wWGeaKeJDVGJN42uLvfOzR6b5-xifnbhqBygVgIMiqIZnRZvr1DN0jtSU4Asz1e6U10ZefTO1P3Nm7JiqaRAOGfxT_34NJ75z2-V_EPS_NsbAbWUy_-LtU62_-1D2M6K3VLwq6XwobUaKT_Pewsj9xb5vaF9cq7H8sNUirzYuCdTx_NK08',
      linkText: 'Plan Your Event',
      alt: 'Outdoor brunch dining tables on resort lawn'
    }
  ]

  return (
    <section className="py-24 bg-surface" id="experiences">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="text-center mb-24">
          <span className="font-label-md text-xs text-tertiary uppercase tracking-[0.3em] mb-4 block">
            Curated Moments
          </span>
          <h2 className="font-headline-xl text-3xl md:text-5xl text-primary font-bold">
            Signature Experiences
          </h2>
        </div>

        <div className="space-y-24 md:space-y-36">
          {list.map((item, idx) => {
            const isEven = idx % 2 === 0
            return (
              <div
                key={idx}
                className={`flex flex-col ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-12 md:gap-20 items-center`}
              >
                {/* Image */}
                <div className="md:w-1/2 overflow-hidden rounded-2xl shadow-lg aspect-[1.3/1] w-full">
                  <img
                    alt={item.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 cursor-pointer"
                    src={item.img}
                  />
                </div>

                {/* Description Content */}
                <div className="md:w-1/2 flex flex-col items-start text-left">
                  <h3 className="font-headline-lg text-2xl md:text-3xl text-on-surface mb-4 font-semibold">
                    {item.title}
                  </h3>
                  <p className="font-body-md text-sm md:text-base text-on-surface-variant mb-6 leading-relaxed">
                    {item.desc}
                  </p>
                  <a
                    href="#accommodation"
                    className="group inline-flex items-center gap-2 font-label-md text-xs text-primary font-bold tracking-widest uppercase hover:underline underline-offset-4"
                  >
                    {item.linkText}
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

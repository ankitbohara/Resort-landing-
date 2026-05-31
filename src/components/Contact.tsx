import { MapPin, Phone } from "lucide-react";

export default function Contact() {
  const WHATSAPP_NUM = "917688969696"; // country code + number (91 = India)
  const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUM}`;

  const makeWhatsAppURL = (msg: string) =>
    `${WHATSAPP_BASE}?text=${encodeURIComponent(msg)}`;
  const WHATSAPP_ENQUIRY_MSG =
    "Hi Ankit! 👋 I came across your website, I would like to book a stay";
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
                <p className="font-headline-lg text-lg text-on-surface mb-2 font-semibold">
                  Our Estate
                </p>
                <p className="font-body-lg text-sm md:text-base text-on-surface-variant leading-relaxed">
                  Gopi Vihar, Plot No. 8, Near Niwaru Pulia,
                  <br />
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
                <p className="font-headline-lg text-lg text-on-surface mb-2 font-semibold">
                  Reservations
                </p>
                <a
                  href="tel:+917688969696"
                  className="font-body-lg text-sm md:text-base text-on-surface-variant hover:text-primary transition-colors leading-relaxed block"
                >
                  +91 76889 69696
                </a>
              </div>
            </div>

            {/* WhatsApp Booking & Enquiry */}
            {/* <div className="flex gap-6 items-start">
              <div className="p-3 bg-green-500/10 rounded-xl border border-green-500/10 text-green-700">
                <MessageSquare size={24} />
              </div>
              <div>
                <p className="font-headline-lg text-lg text-on-surface mb-2 font-semibold">WhatsApp Enquiry</p>
                <a
                  href="https://wa.me/917688969696?text=Hello%20Theharav%2C%20I%20would%20like%20to%20book%20a%20stay%20or%20ask%20a%20question."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block font-body-lg text-sm md:text-base text-on-surface-variant hover:text-primary transition-colors leading-relaxed"
                >
                  Message us on WhatsApp for bookings and enquiries
                </a>
              </div>
            </div> */}
          </div>
        </div>

        {/* Right Side: Map Container */}
        <div className="relative h-96 bg-secondary-container/40 rounded-3xl overflow-hidden shadow-inner group border border-outline-variant/20">
          {/* Mock Map Background Visual */}
          <div
            className="absolute inset-0 bg-cover bg-center grayscale opacity-80 group-hover:scale-105 transition-transform duration-[20s] ease-out pointer-events-none"
            style={{
              backgroundImage: `url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/75.7873,26.9124,12,0/800x600?access_token=mock')`,
            }}
          />
          {/* Fallback pattern when Mapbox API mock isn't accessible */}
          <div className="absolute inset-0 bg-neutral-900/10 flex flex-col items-center justify-center p-8 text-center text-on-secondary-container z-10">
            <div className="p-4 bg-white/90 rounded-full shadow-lg text-primary mb-4 animate-bounce">
              <MapPin size={36} />
            </div>
            <p className="font-headline-lg text-lg text-on-surface mb-1 font-semibold">
              Theharav Resort Location
            </p>
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
      {/* <a
        href="https://wa.me/917688969696"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Theharav on WhatsApp"
        title="Chat with Theharav on WhatsApp"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group flex items-center justify-center cursor-pointer"
      >
        <MessageSquare size={28} className="fill-white/10" />
       
        <span className="absolute right-full mr-4 bg-white border border-outline-variant/20 text-on-surface text-xs font-label-md tracking-wider uppercase px-4 py-2.5 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Chat with us on WhatsApp
        </span>
      </a> */}
      <a
        href={makeWhatsAppURL(WHATSAPP_ENQUIRY_MSG)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat with us on WhatsApp"
        style={{
          position: "fixed",
          bottom: "28px",
          right: "24px",
          zIndex: 9999,
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #25d366, #128c7e)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 24px rgba(37,211,102,0.45)",
          animation: "wa-pulse 2.4s ease-in-out infinite",
          transition: "transform 0.2s, box-shadow 0.2s",
          color: "#fff",
          textDecoration: "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.12)";
          e.currentTarget.style.boxShadow = "0 8px 32px rgba(37,211,102,0.6)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 24px rgba(37,211,102,0.45)";
        }}
      >
        <style>{`
      @keyframes wa-pulse {
        0%,100% { box-shadow: 0 4px 24px rgba(37,211,102,0.45), 0 0 0 0 rgba(37,211,102,0.4); }
        50%      { box-shadow: 0 4px 24px rgba(37,211,102,0.45), 0 0 0 12px rgba(37,211,102,0); }
      }
    `}</style>
    <span className="absolute right-full mr-4 bg-white border border-outline-variant/20 text-on-surface text-xs font-label-md tracking-wider uppercase px-4 py-2.5 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Chat with us on WhatsApp
        </span>
        <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
          
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.862L.054 23.25a.75.75 0 00.916.99l5.451-1.524A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.716 9.716 0 01-4.953-1.355l-.354-.21-3.668 1.026 1.003-3.592-.229-.369A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
        </svg>
        
      </a>
    </section>
  );
}

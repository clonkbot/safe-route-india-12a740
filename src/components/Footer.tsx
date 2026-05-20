import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative bg-zinc-950 border-t border-amber-500/20">
      {/* Warning stripe */}
      <div className="h-1" style={{
        backgroundImage: `repeating-linear-gradient(
          90deg,
          #fbbf24,
          #fbbf24 20px,
          #18181b 20px,
          #18181b 40px
        )`
      }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
          {/* Logo & Mission */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-amber-500 rotate-45 flex items-center justify-center">
                <span className="text-zinc-950 font-bold text-sm md:text-lg -rotate-45">!</span>
              </div>
              <div>
                <h3 className="font-bebas text-xl md:text-2xl tracking-wider text-white">SAFE ROUTE</h3>
                <p className="text-[10px] md:text-xs text-amber-500 tracking-[0.2em] -mt-1">INDIA</p>
              </div>
            </div>
            <p className="text-zinc-400 max-w-md text-sm md:text-base leading-relaxed">
              A nationwide initiative to make Indian roads safer through awareness, education, and community action.
              Every life matters. Every journey should end safely.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bebas text-lg md:text-xl text-white mb-3 md:mb-4 tracking-wide">QUICK LINKS</h4>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#prevention" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm md:text-base">Accident Prevention</a></li>
              <li><a href="#drunk-driving" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm md:text-base">Anti-Drunk Driving</a></li>
              <li><a href="#route-planning" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm md:text-base">Safe Routes</a></li>
              <li><a href="#road-shows" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm md:text-base">Events</a></li>
              <li><a href="#tips" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm md:text-base">Safety Tips</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bebas text-lg md:text-xl text-white mb-3 md:mb-4 tracking-wide">CONTACT</h4>
            <ul className="space-y-2 md:space-y-3 text-zinc-400 text-sm md:text-base">
              <li>Ministry of Road Transport</li>
              <li>Transport Bhawan, New Delhi</li>
              <li className="text-amber-500">info@saferouteindia.gov.in</li>
              <li>Helpline: 1800-180-1111</li>
            </ul>
          </div>
        </div>

        {/* Partners */}
        <div className="border-t border-zinc-800 pt-8 md:pt-12 mb-8 md:mb-12">
          <p className="text-zinc-500 text-xs md:text-sm text-center mb-4 md:mb-6">IN PARTNERSHIP WITH</p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-zinc-600">
            <span className="font-bebas text-base md:text-lg tracking-wider">MINISTRY OF ROAD TRANSPORT</span>
            <span className="hidden sm:inline">•</span>
            <span className="font-bebas text-base md:text-lg tracking-wider">NATIONAL HIGHWAYS AUTHORITY</span>
            <span className="hidden sm:inline">•</span>
            <span className="font-bebas text-base md:text-lg tracking-wider">TRAFFIC POLICE</span>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 md:pt-8 border-t border-zinc-800">
          <p className="text-zinc-500 text-xs md:text-sm text-center md:text-left">
            © 2025 Safe Route India. All rights reserved.
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-zinc-600 text-[10px] md:text-xs text-center"
          >
            Requested by @Ayush_kumar_jha_14 · Built by @clonkbot
          </motion.p>
          <div className="flex gap-4">
            <a href="#" className="text-zinc-500 hover:text-amber-500 transition-colors text-xs md:text-sm">Privacy Policy</a>
            <a href="#" className="text-zinc-500 hover:text-amber-500 transition-colors text-xs md:text-sm">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

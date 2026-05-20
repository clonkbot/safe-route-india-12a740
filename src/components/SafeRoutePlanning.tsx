import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const safeRoutes = [
  {
    from: 'Delhi',
    to: 'Jaipur',
    distance: '281 km',
    duration: '5h 30m',
    safety: 85,
    tips: ['Well-lit NH48', 'Multiple fuel stations', 'Emergency services available']
  },
  {
    from: 'Mumbai',
    to: 'Pune',
    distance: '149 km',
    duration: '3h 15m',
    safety: 90,
    tips: ['Mumbai-Pune Expressway', 'Good road conditions', 'Frequent rest areas']
  },
  {
    from: 'Bangalore',
    to: 'Chennai',
    distance: '346 km',
    duration: '5h 45m',
    safety: 80,
    tips: ['NH44 recommended', 'Avoid night driving', 'Heavy traffic on weekends']
  },
  {
    from: 'Kolkata',
    to: 'Darjeeling',
    distance: '615 km',
    duration: '11h',
    safety: 65,
    tips: ['Mountain roads ahead', 'Weather dependent', 'Experienced driver recommended']
  },
]

export default function SafeRoutePlanning() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedRoute, setSelectedRoute] = useState(0)

  return (
    <section id="route-planning" ref={ref} className="relative py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-10 md:mb-16"
        >
          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="w-12 md:w-16 h-0.5 bg-amber-500" />
            <span className="text-amber-500 font-bebas tracking-wider text-sm md:text-base">03 / PLANNING</span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-none">
            SAFE ROUTE<br />
            <span className="text-amber-500">PLANNING</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg lg:text-xl max-w-2xl mt-4 md:mt-6">
            Plan your journey with safety in mind. Know the routes, rest stops, and emergency services along the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Route List */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1 space-y-3 md:space-y-4"
          >
            <h3 className="font-bebas text-xl md:text-2xl text-white mb-3 md:mb-4">POPULAR ROUTES</h3>
            {safeRoutes.map((route, index) => (
              <button
                key={index}
                onClick={() => setSelectedRoute(index)}
                className={`w-full text-left p-4 md:p-5 border transition-all duration-300 ${
                  selectedRoute === index
                    ? 'border-amber-500 bg-amber-500/10'
                    : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bebas text-lg md:text-xl text-white">
                    {route.from} → {route.to}
                  </span>
                  <div className={`px-2 md:px-3 py-1 text-xs md:text-sm font-bold ${
                    route.safety >= 85 ? 'bg-green-500/20 text-green-500' :
                    route.safety >= 75 ? 'bg-amber-500/20 text-amber-500' :
                    'bg-orange-500/20 text-orange-500'
                  }`}>
                    {route.safety}% Safe
                  </div>
                </div>
                <div className="text-zinc-500 text-xs md:text-sm mt-1 md:mt-2">
                  {route.distance} • {route.duration}
                </div>
              </button>
            ))}
          </motion.div>

          {/* Route Details */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 bg-zinc-900/50 border border-zinc-800 p-5 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6 md:mb-8">
              <div>
                <h3 className="font-bebas text-3xl md:text-4xl text-white">
                  {safeRoutes[selectedRoute].from}
                  <span className="text-amber-500 mx-2 md:mx-3">→</span>
                  {safeRoutes[selectedRoute].to}
                </h3>
                <p className="text-zinc-500 mt-2">
                  {safeRoutes[selectedRoute].distance} • Approx. {safeRoutes[selectedRoute].duration}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-xs text-zinc-500">SAFETY SCORE</div>
                  <div className="font-bebas text-2xl md:text-3xl text-amber-500">
                    {safeRoutes[selectedRoute].safety}%
                  </div>
                </div>
                <div className="w-12 h-12 md:w-16 md:h-16 relative">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <circle
                      cx="18" cy="18" r="16"
                      fill="none"
                      stroke="#27272a"
                      strokeWidth="3"
                    />
                    <circle
                      cx="18" cy="18" r="16"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="3"
                      strokeDasharray={`${safeRoutes[selectedRoute].safety}, 100`}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Safety Tips */}
            <div className="mb-6 md:mb-8">
              <h4 className="font-bebas text-lg md:text-xl text-white mb-3 md:mb-4">ROUTE SAFETY TIPS</h4>
              <div className="space-y-2 md:space-y-3">
                {safeRoutes[selectedRoute].tips.map((tip, index) => (
                  <div key={index} className="flex items-center gap-3 text-zinc-300 text-sm md:text-base">
                    <span className="w-6 h-6 md:w-8 md:h-8 bg-amber-500/20 flex items-center justify-center text-amber-500 text-xs md:text-sm flex-shrink-0">
                      {index + 1}
                    </span>
                    {tip}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
              <button className="bg-zinc-800 hover:bg-zinc-700 p-3 md:p-4 text-center transition-colors">
                <div className="text-lg md:text-2xl mb-1">🗺️</div>
                <div className="text-xs md:text-sm text-zinc-400">View Map</div>
              </button>
              <button className="bg-zinc-800 hover:bg-zinc-700 p-3 md:p-4 text-center transition-colors">
                <div className="text-lg md:text-2xl mb-1">⛽</div>
                <div className="text-xs md:text-sm text-zinc-400">Fuel Stops</div>
              </button>
              <button className="bg-zinc-800 hover:bg-zinc-700 p-3 md:p-4 text-center transition-colors">
                <div className="text-lg md:text-2xl mb-1">🏥</div>
                <div className="text-xs md:text-sm text-zinc-400">Hospitals</div>
              </button>
              <button className="bg-zinc-800 hover:bg-zinc-700 p-3 md:p-4 text-center transition-colors">
                <div className="text-lg md:text-2xl mb-1">☁️</div>
                <div className="text-xs md:text-sm text-zinc-400">Weather</div>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

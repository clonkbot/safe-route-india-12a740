import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const preventionTips = [
  {
    icon: '🚗',
    title: 'Vehicle Maintenance',
    points: [
      'Check brakes and tires regularly',
      'Ensure all lights are functional',
      'Keep mirrors clean and adjusted',
      'Service your vehicle on schedule'
    ]
  },
  {
    icon: '👁️',
    title: 'Stay Alert',
    points: [
      'No phone use while driving',
      'Take breaks on long journeys',
      'Watch for pedestrians at crossings',
      'Check blind spots before changing lanes'
    ]
  },
  {
    icon: '🛡️',
    title: 'Safety First',
    points: [
      'Always wear seatbelts',
      'Helmets save lives - wear them',
      'Follow lane discipline strictly',
      'Use child safety seats'
    ]
  },
  {
    icon: '⚡',
    title: 'Speed Kills',
    points: [
      'Obey speed limits always',
      'Slow down in bad weather',
      'Reduce speed near schools',
      'Keep safe following distance'
    ]
  }
]

export default function AccidentPrevention() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="prevention" ref={ref} className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-10 md:mb-16"
        >
          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="w-12 md:w-16 h-0.5 bg-amber-500" />
            <span className="text-amber-500 font-bebas tracking-wider text-sm md:text-base">01 / PREVENTION</span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-none">
            ACCIDENT<br />
            <span className="text-amber-500">PREVENTION</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg lg:text-xl max-w-2xl mt-4 md:mt-6">
            Most accidents are preventable. Following basic safety protocols can reduce your risk by up to 80%.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {preventionTips.map((tip, index) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-zinc-900/50 border border-zinc-800 hover:border-amber-500/50 p-5 md:p-6 transition-all duration-300 hover:bg-zinc-900"
            >
              <div className="text-3xl md:text-4xl mb-3 md:mb-4 group-hover:scale-110 transition-transform">{tip.icon}</div>
              <h3 className="font-bebas text-xl md:text-2xl text-white mb-3 md:mb-4 tracking-wide">{tip.title}</h3>
              <ul className="space-y-1.5 md:space-y-2">
                {tip.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-zinc-400 text-sm md:text-base">
                    <span className="text-amber-500 mt-1.5">▸</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

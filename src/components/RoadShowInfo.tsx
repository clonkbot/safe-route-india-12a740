import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const events = [
  {
    date: '15',
    month: 'JAN',
    title: 'Road Safety Week 2025',
    location: 'Pan-India',
    type: 'National Campaign',
    description: 'Week-long awareness activities across all states'
  },
  {
    date: '26',
    month: 'JAN',
    title: 'Safe Drive Rally',
    location: 'Delhi NCR',
    type: 'Rally',
    description: 'Republic Day special road safety rally from India Gate'
  },
  {
    date: '08',
    month: 'FEB',
    title: 'Youth Against Drunk Driving',
    location: 'Mumbai',
    type: 'Workshop',
    description: 'Interactive session for college students'
  },
  {
    date: '21',
    month: 'FEB',
    title: 'Highway Safety Check',
    location: 'NH44 Checkpoints',
    type: 'Inspection Drive',
    description: 'Free vehicle safety inspection camps'
  },
  {
    date: '15',
    month: 'MAR',
    title: 'Women Driver Safety',
    location: 'Bangalore',
    type: 'Training',
    description: 'Self-defense and emergency handling for women drivers'
  },
  {
    date: '01',
    month: 'APR',
    title: 'Child Safety Carnival',
    location: 'Chennai',
    type: 'Family Event',
    description: 'Teaching road safety to kids through games and activities'
  },
]

export default function RoadShowInfo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="road-shows" ref={ref} className="relative py-16 md:py-24 lg:py-32 bg-zinc-900/50">
      {/* Decorative element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/4 h-3/4 bg-gradient-to-l from-amber-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-10 md:mb-16"
        >
          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="w-12 md:w-16 h-0.5 bg-amber-500" />
            <span className="text-amber-500 font-bebas tracking-wider text-sm md:text-base">04 / EVENTS</span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-none">
            ROAD SHOWS &<br />
            <span className="text-amber-500">EVENTS</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg lg:text-xl max-w-2xl mt-4 md:mt-6">
            Join our awareness campaigns and events across India. Together, we can make our roads safer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-zinc-950 border border-zinc-800 hover:border-amber-500/50 overflow-hidden transition-all duration-300"
            >
              <div className="flex">
                {/* Date */}
                <div className="w-20 md:w-24 bg-amber-500 flex flex-col items-center justify-center py-4 md:py-6 flex-shrink-0">
                  <span className="font-bebas text-3xl md:text-4xl text-zinc-950">{event.date}</span>
                  <span className="font-bebas text-sm md:text-base text-zinc-950/70">{event.month}</span>
                </div>

                {/* Content */}
                <div className="flex-1 p-4 md:p-5">
                  <div className="inline-block px-2 py-0.5 bg-zinc-800 text-zinc-400 text-[10px] md:text-xs uppercase tracking-wider mb-2">
                    {event.type}
                  </div>
                  <h3 className="font-bebas text-lg md:text-xl text-white leading-tight mb-1">{event.title}</h3>
                  <p className="text-zinc-500 text-xs md:text-sm mb-2 flex items-center gap-1">
                    <span>📍</span> {event.location}
                  </p>
                  <p className="text-zinc-400 text-xs md:text-sm line-clamp-2">{event.description}</p>
                </div>
              </div>

              {/* Hover action */}
              <div className="bg-zinc-900 border-t border-zinc-800 p-3 md:p-4 flex justify-between items-center">
                <span className="text-zinc-500 text-xs md:text-sm">Learn more</span>
                <span className="text-amber-500 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 md:mt-16 text-center"
        >
          <p className="text-zinc-400 mb-4 md:mb-6 text-sm md:text-base">Want to organize an event in your city?</p>
          <button className="bg-transparent border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-zinc-950 px-8 md:px-12 py-3 md:py-4 font-bebas text-lg md:text-xl tracking-wider transition-all duration-300">
            BECOME A VOLUNTEER
          </button>
        </motion.div>
      </div>
    </section>
  )
}

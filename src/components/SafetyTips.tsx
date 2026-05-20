import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const tipCategories = [
  {
    id: 'drivers',
    label: 'DRIVERS',
    tips: [
      { icon: '🚗', tip: 'Always check mirrors before changing lanes' },
      { icon: '📱', tip: 'Phone can wait - your life cannot' },
      { icon: '💤', tip: 'Drowsy? Pull over and rest' },
      { icon: '🌧️', tip: 'Reduce speed in rain by 30%' },
      { icon: '🚦', tip: 'Yellow means slow down, not speed up' },
      { icon: '🔧', tip: 'Check tire pressure weekly' },
    ]
  },
  {
    id: 'riders',
    label: 'TWO-WHEELER',
    tips: [
      { icon: '🪖', tip: 'ISI marked helmet - always' },
      { icon: '👀', tip: 'Assume cars cannot see you' },
      { icon: '🚫', tip: 'No weaving through traffic' },
      { icon: '💡', tip: 'Keep headlights on during day' },
      { icon: '🧥', tip: 'Wear bright/reflective clothing' },
      { icon: '⚠️', tip: 'Never ride in blind spots' },
    ]
  },
  {
    id: 'pedestrians',
    label: 'PEDESTRIANS',
    tips: [
      { icon: '🚶', tip: 'Use zebra crossings always' },
      { icon: '👁️', tip: 'Make eye contact with drivers' },
      { icon: '🎧', tip: 'Remove earphones near roads' },
      { icon: '🌙', tip: 'Wear reflective gear at night' },
      { icon: '📵', tip: 'Do not text while walking' },
      { icon: '🚸', tip: 'Hold children\'s hands near roads' },
    ]
  },
]

export default function SafetyTips() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState('drivers')

  const currentTips = tipCategories.find(c => c.id === activeCategory)?.tips || []

  return (
    <section id="tips" ref={ref} className="relative py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-10 md:mb-16"
        >
          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="w-12 md:w-16 h-0.5 bg-amber-500" />
            <span className="text-amber-500 font-bebas tracking-wider text-sm md:text-base">05 / TIPS</span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-none">
            SAFETY<br />
            <span className="text-amber-500">TIPS</span>
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 md:gap-4 mb-8 md:mb-12"
        >
          {tipCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 md:px-8 py-2.5 md:py-4 font-bebas text-base md:text-xl tracking-wider transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-amber-500 text-zinc-950'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {currentTips.map((item, index) => (
            <motion.div
              key={item.tip}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-zinc-900/50 border border-zinc-800 hover:border-amber-500/50 p-5 md:p-6 flex items-start gap-4 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl group-hover:scale-110 transition-transform">{item.icon}</div>
              <p className="text-zinc-300 text-base md:text-lg leading-snug">{item.tip}</p>
            </motion.div>
          ))}
        </div>

        {/* Emergency Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 md:mt-20 bg-red-500/10 border border-red-500/30 p-6 md:p-10"
        >
          <h3 className="font-bebas text-2xl md:text-3xl text-white mb-4 md:mb-6 text-center">
            EMERGENCY NUMBERS - SAVE THEM NOW
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center">
              <div className="font-bebas text-3xl md:text-4xl text-red-500 mb-1">112</div>
              <div className="text-zinc-400 text-xs md:text-sm">National Emergency</div>
            </div>
            <div className="text-center">
              <div className="font-bebas text-3xl md:text-4xl text-red-500 mb-1">100</div>
              <div className="text-zinc-400 text-xs md:text-sm">Police</div>
            </div>
            <div className="text-center">
              <div className="font-bebas text-3xl md:text-4xl text-red-500 mb-1">102</div>
              <div className="text-zinc-400 text-xs md:text-sm">Ambulance</div>
            </div>
            <div className="text-center">
              <div className="font-bebas text-3xl md:text-4xl text-red-500 mb-1">1073</div>
              <div className="text-zinc-400 text-xs md:text-sm">Road Accident</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

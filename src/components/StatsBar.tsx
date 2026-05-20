import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface StatProps {
  number: string
  label: string
  delay: number
}

function AnimatedStat({ number, label, delay }: StatProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayNumber, setDisplayNumber] = useState('0')

  useEffect(() => {
    if (isInView) {
      const numericPart = parseInt(number.replace(/[^0-9]/g, ''))
      const suffix = number.replace(/[0-9]/g, '')
      const duration = 2000
      const steps = 60
      const increment = numericPart / steps

      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= numericPart) {
          setDisplayNumber(number)
          clearInterval(timer)
        } else {
          setDisplayNumber(Math.floor(current) + suffix)
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, number])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="text-center p-4 md:p-0"
    >
      <div className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-amber-500">{displayNumber}</div>
      <div className="text-zinc-400 text-xs sm:text-sm md:text-base mt-1 md:mt-2">{label}</div>
    </motion.div>
  )
}

export default function StatsBar() {
  return (
    <section className="relative bg-zinc-900 border-y border-amber-500/20 py-8 md:py-12">
      {/* Diagonal stripe accent */}
      <div className="absolute left-0 top-0 bottom-0 w-2 md:w-4 bg-amber-500" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          <AnimatedStat number="150K+" label="Annual Road Deaths" delay={0} />
          <AnimatedStat number="500K+" label="Serious Injuries" delay={0.1} />
          <AnimatedStat number="53%" label="Age 18-35 Years" delay={0.2} />
          <AnimatedStat number="30%" label="Due to Drunk Driving" delay={0.3} />
        </div>
      </div>
    </section>
  )
}

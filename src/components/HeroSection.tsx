import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/90 to-zinc-950" />

        {/* Animated caution stripes */}
        <motion.div
          animate={{ x: [0, -40] }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-0 right-0 h-12 md:h-16 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 20px,
              #fbbf24 20px,
              #fbbf24 40px
            )`
          }}
        />
        <motion.div
          animate={{ x: [-40, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-0 right-0 h-12 md:h-16 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 20px,
              #fbbf24 20px,
              #fbbf24 40px
            )`
          }}
        />

        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 md:mb-8"
        >
          <div className="inline-flex items-center gap-2 md:gap-3 bg-red-600/20 border border-red-600/50 px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8">
            <span className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-500 font-bebas tracking-wider text-sm md:text-base">ROAD SAFETY AWARENESS CAMPAIGN</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-bebas text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] mb-4 md:mb-6"
        >
          <span className="text-white">EVERY</span>
          <br />
          <span className="text-amber-500">4 MINUTES</span>
          <br />
          <span className="text-white">A LIFE IS LOST</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-zinc-400 max-w-3xl mx-auto mb-8 md:mb-12 px-4"
        >
          India accounts for <span className="text-white font-semibold">11% of global road accident deaths</span>.
          Together, we can change this. Join the movement for safer roads.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => document.getElementById('prevention')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-zinc-950 px-8 md:px-12 py-4 md:py-5 font-bebas text-xl md:text-2xl tracking-wider transition-all duration-300 hover:scale-105"
          >
            LEARN TO SAVE LIVES
          </button>
          <button
            onClick={() => document.getElementById('road-shows')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto border-2 border-white/30 hover:border-white text-white px-8 md:px-12 py-4 md:py-5 font-bebas text-xl md:text-2xl tracking-wider transition-all duration-300 hover:bg-white/10"
          >
            UPCOMING EVENTS
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-zinc-500 text-xs tracking-widest">SCROLL</span>
            <div className="w-px h-8 md:h-12 bg-gradient-to-b from-amber-500 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

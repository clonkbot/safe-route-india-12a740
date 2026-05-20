import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavigationProps {
  activeSection: string
}

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'prevention', label: 'Prevention' },
  { id: 'drunk-driving', label: 'Anti-Drunk Driving' },
  { id: 'route-planning', label: 'Safe Routes' },
  { id: 'road-shows', label: 'Road Shows' },
  { id: 'tips', label: 'Safety Tips' },
]

export default function Navigation({ activeSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-amber-500/20"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-amber-500 rotate-45 flex items-center justify-center">
                <span className="text-zinc-950 font-bold text-sm md:text-lg -rotate-45">!</span>
              </div>
              <div>
                <h1 className="font-bebas text-xl md:text-2xl tracking-wider text-white">SAFE ROUTE</h1>
                <p className="text-[10px] md:text-xs text-amber-500 tracking-[0.2em] -mt-1">INDIA</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 relative ${
                    activeSection === item.id
                      ? 'text-amber-500'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Emergency Button - Desktop */}
            <div className="hidden md:block">
              <a
                href="tel:112"
                className="bg-red-600 hover:bg-red-500 text-white px-4 md:px-6 py-2 md:py-3 font-bebas tracking-wider text-base md:text-lg flex items-center gap-2 transition-colors"
              >
                <span className="animate-pulse">●</span>
                EMERGENCY: 112
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            >
              <span className={`w-6 h-0.5 bg-amber-500 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-0.5 bg-amber-500 transition-all ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-amber-500 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-zinc-950/98 pt-20 lg:hidden"
          >
            <div className="flex flex-col items-center gap-2 p-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollTo(item.id)}
                  className={`w-full text-center py-4 font-bebas text-2xl tracking-wider transition-colors ${
                    activeSection === item.id
                      ? 'text-amber-500 bg-amber-500/10'
                      : 'text-zinc-400'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <a
                href="tel:112"
                className="mt-4 bg-red-600 text-white px-8 py-4 font-bebas tracking-wider text-xl flex items-center gap-3"
              >
                <span className="animate-pulse">●</span>
                EMERGENCY: 112
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

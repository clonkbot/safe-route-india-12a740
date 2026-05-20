import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroSection from './components/HeroSection'
import StatsBar from './components/StatsBar'
import AccidentPrevention from './components/AccidentPrevention'
import AntiDrunkDriving from './components/AntiDrunkDriving'
import SafeRoutePlanning from './components/SafeRoutePlanning'
import RoadShowInfo from './components/RoadShowInfo'
import SafetyTips from './components/SafetyTips'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => {
      const sections = ['hero', 'prevention', 'drunk-driving', 'route-planning', 'road-shows', 'tips']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      {/* Caution stripe pattern overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            #fbbf24 20px,
            #fbbf24 40px
          )`
        }} />
      </div>

      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <Navigation activeSection={activeSection} />
            <HeroSection />
            <StatsBar />
            <AccidentPrevention />
            <AntiDrunkDriving />
            <SafeRoutePlanning />
            <RoadShowInfo />
            <SafetyTips />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const bacLevels = [
  { level: '0.02%', effect: 'Relaxation, slight body warmth', risk: 'Low' },
  { level: '0.05%', effect: 'Lowered alertness, impaired judgment', risk: 'Moderate' },
  { level: '0.08%', effect: 'Poor muscle coordination, slower reaction', risk: 'HIGH - ILLEGAL' },
  { level: '0.10%', effect: 'Clear deterioration of reaction time', risk: 'DANGEROUS' },
  { level: '0.15%+', effect: 'Major loss of balance and control', risk: 'FATAL RISK' },
]

export default function AntiDrunkDriving() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [pledgeSigned, setPledgeSigned] = useState(false)

  return (
    <section id="drunk-driving" ref={ref} className="relative py-16 md:py-24 lg:py-32 bg-zinc-900/50">
      {/* Warning stripe top */}
      <div className="absolute top-0 left-0 right-0 h-2 md:h-3" style={{
        backgroundImage: `repeating-linear-gradient(
          90deg,
          #dc2626,
          #dc2626 20px,
          #18181b 20px,
          #18181b 40px
        )`
      }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-10 md:mb-16"
        >
          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="w-12 md:w-16 h-0.5 bg-red-500" />
            <span className="text-red-500 font-bebas tracking-wider text-sm md:text-base">02 / CAMPAIGN</span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-none">
            DRUNK DRIVING<br />
            <span className="text-red-500">KILLS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* BAC Chart */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-bebas text-xl md:text-2xl text-white mb-4 md:mb-6 tracking-wide">
              BLOOD ALCOHOL CONCENTRATION (BAC) EFFECTS
            </h3>
            <div className="space-y-2 md:space-y-3">
              {bacLevels.map((item, index) => (
                <motion.div
                  key={item.level}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between p-3 md:p-4 border-l-4 gap-2 sm:gap-0 ${
                    index < 2 ? 'border-amber-500 bg-amber-500/5' :
                    index === 2 ? 'border-orange-500 bg-orange-500/10' :
                    'border-red-500 bg-red-500/10'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="font-bebas text-lg md:text-xl text-white">{item.level}</span>
                    <span className="text-zinc-400 text-xs md:text-sm">{item.effect}</span>
                  </div>
                  <span className={`text-xs md:text-sm font-bold self-start sm:self-auto ${
                    index < 2 ? 'text-amber-500' :
                    index === 2 ? 'text-orange-500' :
                    'text-red-500'
                  }`}>{item.risk}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pledge Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-zinc-950 border border-red-500/30 p-6 md:p-8"
          >
            <h3 className="font-bebas text-2xl md:text-3xl text-white mb-4 md:mb-6 tracking-wide">
              TAKE THE PLEDGE
            </h3>
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <p className="text-zinc-300 text-base md:text-lg">I solemnly pledge:</p>
              <ul className="space-y-2 md:space-y-3 text-zinc-400 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-0.5">✓</span>
                  I will NEVER drive under the influence of alcohol
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-0.5">✓</span>
                  I will stop friends and family from drunk driving
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-0.5">✓</span>
                  I will always use a designated driver or cab service
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-0.5">✓</span>
                  I will report drunk drivers to authorities
                </li>
              </ul>
            </div>

            {!pledgeSigned ? (
              <button
                onClick={() => setPledgeSigned(true)}
                className="w-full bg-red-600 hover:bg-red-500 text-white py-4 md:py-5 font-bebas text-xl md:text-2xl tracking-wider transition-all duration-300 hover:scale-[1.02]"
              >
                SIGN THE PLEDGE
              </button>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-full bg-green-600/20 border border-green-500 text-green-500 py-4 md:py-5 font-bebas text-xl md:text-2xl tracking-wider text-center"
              >
                ✓ PLEDGE SIGNED - THANK YOU
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Quick facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          <div className="bg-red-500/10 border border-red-500/30 p-5 md:p-6 text-center">
            <div className="font-bebas text-3xl md:text-4xl text-red-500 mb-2">30%</div>
            <div className="text-zinc-400 text-sm md:text-base">of fatal accidents involve alcohol</div>
          </div>
          <div className="bg-red-500/10 border border-red-500/30 p-5 md:p-6 text-center">
            <div className="font-bebas text-3xl md:text-4xl text-red-500 mb-2">2X</div>
            <div className="text-zinc-400 text-sm md:text-base">crash risk at just 0.05% BAC</div>
          </div>
          <div className="bg-red-500/10 border border-red-500/30 p-5 md:p-6 text-center">
            <div className="font-bebas text-3xl md:text-4xl text-red-500 mb-2">₹10,000+</div>
            <div className="text-zinc-400 text-sm md:text-base">fine & possible imprisonment</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

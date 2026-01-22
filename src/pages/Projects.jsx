import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ProjectsGrid from '../components/ProjectsGrid'
import Testimonials from '../components/Testimonials'

export default function Projects() {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })

  return (
    <main>
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 lg:py-32 bg-gradient-to-br from-glass-navy to-glass-blue overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
          {/* Glass panel decorations */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-3xl border border-white/10"
              style={{
                width: `${150 + i * 50}px`,
                height: `${150 + i * 50}px`,
                left: `${50 + i * 8}%`,
                top: `${10 + (i % 3) * 20}%`,
              }}
              animate={{ 
                rotate: [0, 5, 0], 
                y: [0, -10, 0],
                opacity: [0.3, 0.5, 0.3] 
              }}
              transition={{ 
                duration: 8 + i * 2, 
                repeat: Infinity,
                ease: 'easeInOut' 
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white font-medium text-sm mb-6">
              Our Portfolio
            </span>
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Projects That{' '}
              <span className="text-glass-accent">Speak for Themselves</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Explore our portfolio of completed commercial glazing projects. From hospitals 
              to hotels, see how Standard Glass Co. has transformed buildings across the region.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mt-12 grid grid-cols-3 gap-8 max-w-2xl"
          >
            {[
              { value: '500+', label: 'Projects Completed' },
              { value: '15+', label: 'States Served' },
              { value: '$50M+', label: 'Project Value' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-display font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <ProjectsGrid showAll={true} />

      {/* Testimonials */}
      <Testimonials />
    </main>
  )
}

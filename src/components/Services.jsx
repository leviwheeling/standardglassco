import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Store, 
  Building, 
  DoorOpen, 
  Wrench, 
  Layers,
  ArrowRight 
} from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Store,
    title: 'Storefronts',
    description: 'Custom aluminum storefronts designed to maximize visibility and create stunning first impressions for your business.',
    features: ['Custom designs', 'Energy efficient', 'ADA compliant'],
  },
  {
    icon: Building,
    title: 'Curtain Walls',
    description: 'Sophisticated curtain wall systems that combine structural integrity with architectural beauty.',
    features: ['High-rise capable', 'Weather sealed', 'Modern aesthetics'],
  },
  {
    icon: DoorOpen,
    title: 'Entrances',
    description: 'Elegant entrance systems including automatic doors, revolving doors, and manual entry solutions.',
    features: ['Automatic options', 'Security features', 'Accessibility'],
  },
  {
    icon: Wrench,
    title: 'Glass Repair',
    description: 'Fast, reliable glass replacement and repair services to minimize downtime for your business.',
    features: ['24/7 emergency', 'Quick turnaround', 'All glass types'],
  },
  {
    icon: Layers,
    title: 'Windows',
    description: 'Commercial window solutions engineered for performance, efficiency, and lasting durability.',
    features: ['Thermal break', 'Sound insulation', 'UV protection'],
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-glass-mist to-transparent hidden md:block" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-glass-blue/10 text-glass-blue font-medium text-xs sm:text-sm mb-3 sm:mb-4"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-glass-navy mb-3 sm:mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-glass-slate text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4"
          >
            Comprehensive commercial glazing solutions tailored to meet the unique needs of every project.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i }}
              className="group relative"
            >
              <div className="h-full p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white border border-glass-blue/10 hover:border-glass-blue/30 transition-all duration-300 hover:shadow-xl hover:shadow-glass-blue/5">
                {/* Icon */}
                <motion.div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-glass-blue/10 to-glass-accent/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon size={24} className="text-glass-blue sm:w-7 sm:h-7" />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-display font-bold text-glass-navy mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-glass-slate text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-glass-slate">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-glass-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link 
                  to="/services" 
                  className="inline-flex items-center gap-2 text-glass-blue font-medium text-sm sm:text-base group/link"
                >
                  Learn More
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform sm:w-4 sm:h-4" />
                </Link>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-glass-blue/5 to-glass-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="group relative sm:col-span-2 lg:col-span-1"
          >
            <div className="h-full p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-glass-blue to-glass-blue-dark text-white flex flex-col justify-center items-center text-center min-h-[200px] sm:min-h-0">
              <h3 className="text-xl sm:text-2xl font-display font-bold mb-3 sm:mb-4">
                Need Something Custom?
              </h3>
              <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base">
                We specialize in unique glazing solutions for complex projects.
              </p>
              <Link to="/contact">
                <motion.button
                  className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-glass-blue font-semibold rounded-lg text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

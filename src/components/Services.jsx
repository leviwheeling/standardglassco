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
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-glass-mist to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-4 py-2 rounded-full bg-glass-blue/10 text-glass-blue font-medium text-sm mb-4"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-display font-bold text-glass-navy mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-glass-slate text-lg max-w-2xl mx-auto"
          >
            Comprehensive commercial glazing solutions tailored to meet the unique needs of every project.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl bg-white border border-glass-blue/10 hover:border-glass-blue/30 transition-all duration-300 hover:shadow-xl hover:shadow-glass-blue/5">
                {/* Icon */}
                <motion.div
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-glass-blue/10 to-glass-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon size={28} className="text-glass-blue" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold text-glass-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-glass-slate mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-glass-slate">
                      <span className="w-1.5 h-1.5 rounded-full bg-glass-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link 
                  to="/services" 
                  className="inline-flex items-center gap-2 text-glass-blue font-medium group/link"
                >
                  Learn More
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-glass-blue/5 to-glass-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="group relative"
          >
            <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-glass-blue to-glass-blue-dark text-white flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-display font-bold mb-4">
                Need Something Custom?
              </h3>
              <p className="text-white/80 mb-6">
                We specialize in unique glazing solutions for complex projects.
              </p>
              <Link to="/contact">
                <motion.button
                  className="px-6 py-3 bg-white text-glass-blue font-semibold rounded-lg"
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

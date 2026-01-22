import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Shield, 
  Clock, 
  Award, 
  Users,
  BadgeCheck,
  Sparkles 
} from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed and insured for your protection and peace of mind.',
  },
  {
    icon: Clock,
    title: '40+ Years Experience',
    description: 'Four decades of expertise in commercial glazing across Kentucky and Tennessee.',
  },
  {
    icon: Award,
    title: 'Quality Guaranteed',
    description: 'Industry-leading warranties on all materials and workmanship.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Skilled craftsmen trained in the latest glazing techniques and technologies.',
  },
  {
    icon: BadgeCheck,
    title: 'Code Compliant',
    description: 'All installations meet or exceed local building codes and safety standards.',
  },
  {
    icon: Sparkles,
    title: 'Premium Materials',
    description: 'We use only the highest quality glass and aluminum from trusted manufacturers.',
  },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-glass-navy via-glass-blue-dark to-glass-navy relative overflow-hidden">
      {/* Animated background elements - hidden on mobile for performance */}
      <div className="absolute inset-0 hidden md:block">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Glass panel decorations - hidden on mobile */}
      <motion.div
        className="absolute top-20 -left-20 w-48 md:w-64 h-48 md:h-64 rounded-3xl border border-white/10 bg-white/5 hidden md:block"
        animate={{ rotate: [0, 5, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 -right-20 w-56 md:w-80 h-56 md:h-80 rounded-3xl border border-white/10 bg-white/5 hidden md:block"
        animate={{ rotate: [0, -5, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 text-white font-medium text-xs sm:text-sm mb-3 sm:mb-4"
          >
            Why Standard Glass
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-3 sm:mb-4"
          >
            The Clear Choice
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4"
          >
            What sets us apart in the commercial glazing industry
          </motion.p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i }}
              className="group"
            >
              <motion.div
                className="h-full p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                whileHover={{ y: -5 }}
              >
                {/* Icon */}
                <motion.div
                  className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-glass-accent to-glass-blue flex items-center justify-center mb-4 sm:mb-5 md:mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <feature.icon size={22} className="text-white sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </motion.div>

                {/* Content */}
                <h3 className="text-base sm:text-lg md:text-xl font-display font-bold text-white mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
        >
          {[
            { value: '500+', label: 'Projects Completed' },
            { value: '40+', label: 'Years in Business' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '24/7', label: 'Emergency Service' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 + i * 0.1 }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-0.5 sm:mb-1">
                {stat.value}
              </div>
              <div className="text-white/60 text-xs sm:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

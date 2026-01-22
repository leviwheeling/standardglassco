import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  ClipboardCheck, 
  Ruler, 
  Truck, 
  Hammer,
  CheckCircle2 
} from 'lucide-react'

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Consultation',
    description: 'We start with a detailed discussion of your project requirements, timeline, and budget.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Ruler,
    title: 'Design & Estimate',
    description: 'Our team creates precise measurements and detailed estimates with transparent pricing.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Truck,
    title: 'Material Procurement',
    description: 'We source premium materials from trusted suppliers, ensuring quality and timely delivery.',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: Hammer,
    title: 'Expert Installation',
    description: 'Our skilled craftsmen install with precision, adhering to the highest industry standards.',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: CheckCircle2,
    title: 'Final Inspection',
    description: 'Rigorous quality control ensures every detail meets our exacting standards.',
    color: 'from-green-500 to-green-600',
  },
]

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-24 bg-glass-mist relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-50">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,82,204,0.1) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-glass-blue/10 text-glass-blue font-medium text-xs sm:text-sm mb-3 sm:mb-4"
          >
            How We Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-glass-navy mb-3 sm:mb-4"
          >
            Our Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-glass-slate text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4"
          >
            A streamlined approach that ensures quality results and a seamless experience from start to finish.
          </motion.p>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connection line - desktop only */}
          <div className="hidden xl:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-glass-blue/20 to-transparent" />
          
          {/* Mobile/Tablet: 2 columns, Desktop: 5 columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i }}
                className={`relative ${i === 4 ? 'col-span-2 md:col-span-1' : ''}`}
              >
                {/* Step number */}
                <motion.div
                  className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-white shadow-lg flex items-center justify-center text-glass-blue font-bold text-xs sm:text-sm z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.1 * i + 0.2, type: 'spring' }}
                >
                  {i + 1}
                </motion.div>

                {/* Card */}
                <div className="h-full p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-white shadow-lg shadow-glass-blue/5 border border-glass-blue/5 hover:shadow-xl transition-shadow">
                  {/* Icon */}
                  <motion.div
                    className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 sm:mb-5 md:mb-6 mx-auto`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <step.icon size={22} className="text-white sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-sm sm:text-base md:text-lg font-display font-bold text-glass-navy mb-2 sm:mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-glass-slate text-xs sm:text-sm text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {i < steps.length - 1 && (
                  <motion.div
                    className="hidden xl:block absolute top-20 -right-4 text-glass-blue/30"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.15 * i + 0.3 }}
                  >
                    →
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-10 sm:mt-12 md:mt-16 text-center"
        >
          <p className="text-glass-slate mb-3 sm:mb-4 text-sm sm:text-base">
            Ready to get started on your project?
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 text-glass-blue font-semibold hover:text-glass-blue-dark transition-colors text-sm sm:text-base"
            whileHover={{ x: 5 }}
          >
            Schedule a consultation →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

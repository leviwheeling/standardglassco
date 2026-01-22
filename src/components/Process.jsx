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
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 bg-glass-mist relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-50">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,82,204,0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-4 py-2 rounded-full bg-glass-blue/10 text-glass-blue font-medium text-sm mb-4"
          >
            How We Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-display font-bold text-glass-navy mb-4"
          >
            Our Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-glass-slate text-lg max-w-2xl mx-auto"
          >
            A streamlined approach that ensures quality results and a seamless experience from start to finish.
          </motion.p>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-glass-blue/20 to-transparent" />
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 * i }}
                className="relative"
              >
                {/* Step number */}
                <motion.div
                  className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center text-glass-blue font-bold text-sm z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.15 * i + 0.2, type: 'spring' }}
                >
                  {i + 1}
                </motion.div>

                {/* Card */}
                <div className="h-full p-6 rounded-2xl bg-white shadow-lg shadow-glass-blue/5 border border-glass-blue/5 hover:shadow-xl transition-shadow">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 mx-auto`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <step.icon size={28} className="text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-display font-bold text-glass-navy mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-glass-slate text-sm text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {i < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-20 -right-4 text-glass-blue/30"
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
          className="mt-16 text-center"
        >
          <p className="text-glass-slate mb-4">
            Ready to get started on your project?
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 text-glass-blue font-semibold hover:text-glass-blue-dark transition-colors"
            whileHover={{ x: 5 }}
          >
            Schedule a consultation →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'James Mitchell',
    role: 'Facilities Director',
    company: 'Pikeville Medical Center',
    content: 'Standard Glass exceeded our expectations on the new wing project. Their attention to detail and commitment to safety during an active hospital construction was remarkable.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Henderson',
    role: 'Property Manager',
    company: 'Appalachian Plaza',
    content: 'We\'ve worked with Standard Glass on multiple retail renovations. Their team is professional, punctual, and delivers quality work every time. Highly recommend!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Michael Torres',
    role: 'Construction Manager',
    company: 'Summit Development',
    content: 'The curtain wall installation at our hotel project was flawless. Standard Glass handled the complex mountain terrain and weather challenges with expertise.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Linda Foster',
    role: 'Operations Director',
    company: 'First National Bank',
    content: 'From the initial consultation to final inspection, Standard Glass demonstrated why they\'re the premier glazing contractor in the region. Outstanding service!',
    rating: 5,
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-glass-mist to-transparent" />
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-glass-blue/5"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Header */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-block px-4 py-2 rounded-full bg-glass-blue/10 text-glass-blue font-medium text-sm mb-4"
            >
              Testimonials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-display font-bold text-glass-navy mb-6"
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-glass-slate text-lg mb-8"
            >
              Don't just take our word for it. Here's what our satisfied clients have to say about working with Standard Glass Co.
            </motion.p>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-glass-blue/20 flex items-center justify-center hover:bg-glass-blue hover:text-white hover:border-glass-blue transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-glass-blue/20 flex items-center justify-center hover:bg-glass-blue hover:text-white hover:border-glass-blue transition-all"
              >
                <ChevronRight size={20} />
              </button>
              <span className="text-glass-slate text-sm ml-4">
                {activeIndex + 1} / {testimonials.length}
              </span>
            </motion.div>
          </div>

          {/* Right side - Testimonial card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="relative p-8 lg:p-12 rounded-3xl bg-white shadow-2xl shadow-glass-blue/10 border border-glass-blue/10"
            >
              {/* Quote icon */}
              <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-gradient-to-br from-glass-blue to-glass-accent flex items-center justify-center">
                <Quote size={24} className="text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 mt-4">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-glass-navy text-lg lg:text-xl leading-relaxed mb-8">
                "{testimonials[activeIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-glass-blue to-glass-accent flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[activeIndex].name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-glass-navy">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-glass-slate text-sm">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Background decoration cards */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl bg-glass-blue/5 -z-10" />
            <div className="absolute -bottom-8 -right-8 w-full h-full rounded-3xl bg-glass-blue/5 -z-20" />
          </motion.div>
        </div>

        {/* Testimonial indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-2 mt-12 lg:hidden"
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === activeIndex ? 'bg-glass-blue w-8' : 'bg-glass-blue/30'
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

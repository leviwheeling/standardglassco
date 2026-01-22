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
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-glass-mist to-transparent hidden md:block" />
      <motion.div
        className="absolute top-20 right-20 w-48 md:w-64 h-48 md:h-64 rounded-full bg-glass-blue/5 hidden md:block"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left side - Header */}
          <div className="text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-glass-blue/10 text-glass-blue font-medium text-xs sm:text-sm mb-3 sm:mb-4"
            >
              Testimonials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-glass-navy mb-4 sm:mb-6"
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-glass-slate text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Don't just take our word for it. Here's what our satisfied clients have to say about working with Standard Glass Co.
            </motion.p>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-glass-blue/20 flex items-center justify-center hover:bg-glass-blue hover:text-white hover:border-glass-blue transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-glass-blue/20 flex items-center justify-center hover:bg-glass-blue hover:text-white hover:border-glass-blue transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} className="sm:w-5 sm:h-5" />
              </button>
              <span className="text-glass-slate text-xs sm:text-sm ml-2 sm:ml-4">
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
              className="relative p-5 sm:p-6 md:p-8 lg:p-12 rounded-2xl sm:rounded-3xl bg-white shadow-xl sm:shadow-2xl shadow-glass-blue/10 border border-glass-blue/10"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 sm:-top-5 md:-top-6 left-5 sm:left-6 md:left-8 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-glass-blue to-glass-accent flex items-center justify-center">
                <Quote size={18} className="text-white sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 sm:gap-1 mb-4 sm:mb-6 mt-2 sm:mt-4">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400 sm:w-5 sm:h-5" />
                ))}
              </div>

              {/* Content */}
              <p className="text-glass-navy text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8">
                "{testimonials[activeIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-glass-blue to-glass-accent flex items-center justify-center text-white font-bold text-sm sm:text-base md:text-lg">
                  {testimonials[activeIndex].name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-glass-navy text-sm sm:text-base">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-glass-slate text-xs sm:text-sm">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Background decoration cards - hidden on mobile */}
            <div className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 w-full h-full rounded-2xl sm:rounded-3xl bg-glass-blue/5 -z-10 hidden sm:block" />
            <div className="absolute -bottom-6 sm:-bottom-8 -right-6 sm:-right-8 w-full h-full rounded-2xl sm:rounded-3xl bg-glass-blue/5 -z-20 hidden sm:block" />
          </motion.div>
        </div>

        {/* Testimonial indicators - visible on all screens */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-2 mt-8 sm:mt-10 md:mt-12 lg:hidden"
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === activeIndex ? 'bg-glass-blue w-6 sm:w-8' : 'bg-glass-blue/30'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

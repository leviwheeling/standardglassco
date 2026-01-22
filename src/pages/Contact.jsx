import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  CheckCircle,
  Building2
} from 'lucide-react'

const locations = [
  {
    city: 'Pikeville, Kentucky',
    address: '123 Main Street, Pikeville, KY 41501',
    phone: '(606) 555-1234',
    email: 'pikeville@standardglassco.com',
    hours: 'Mon-Fri: 7AM - 5PM',
  },
  {
    city: 'Gallatin, Tennessee',
    address: '456 Commerce Drive, Gallatin, TN 37066',
    phone: '(615) 555-5678',
    email: 'gallatin@standardglassco.com',
    hours: 'Mon-Fri: 7AM - 5PM',
  },
]

const services = [
  'Storefronts',
  'Curtain Walls',
  'Entrances',
  'Windows',
  'Glass Repair',
  'Other',
]

export default function Contact() {
  const heroRef = useRef(null)
  const formRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const isFormInView = useInView(formRef, { once: true, margin: '-50px' })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:py-32 bg-gradient-to-br from-glass-navy to-glass-blue overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            className="max-w-3xl"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 text-white font-medium text-xs sm:text-sm mb-4 sm:mb-6">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 sm:mb-6 leading-tight">
              Let's Discuss Your{' '}
              <span className="text-glass-accent">Project</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
              Ready to start your commercial glazing project? Contact us for a free consultation 
              and estimate. Our team is here to help bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section ref={formRef} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isFormInView ? { opacity: 1, y: 0 } : {}}
              className="lg:col-span-3 order-2 lg:order-1"
            >
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-12 shadow-xl sm:shadow-2xl shadow-glass-blue/10 border border-glass-blue/10">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-glass-navy mb-1 sm:mb-2">
                  Request a Quote
                </h2>
                <p className="text-glass-slate text-sm sm:text-base mb-6 sm:mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 sm:py-12"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle size={32} className="text-green-500 sm:w-10 sm:h-10" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-glass-navy mb-2">
                      Thank You!
                    </h3>
                    <p className="text-glass-slate text-sm sm:text-base">
                      We've received your message and will be in touch shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-glass-navy mb-1.5 sm:mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-glass-blue/20 focus:border-glass-blue focus:ring-2 focus:ring-glass-blue/20 outline-none transition-all text-sm sm:text-base"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-glass-navy mb-1.5 sm:mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-glass-blue/20 focus:border-glass-blue focus:ring-2 focus:ring-glass-blue/20 outline-none transition-all text-sm sm:text-base"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-glass-navy mb-1.5 sm:mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-glass-blue/20 focus:border-glass-blue focus:ring-2 focus:ring-glass-blue/20 outline-none transition-all text-sm sm:text-base"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-glass-navy mb-1.5 sm:mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-glass-blue/20 focus:border-glass-blue focus:ring-2 focus:ring-glass-blue/20 outline-none transition-all text-sm sm:text-base"
                          placeholder="Company Name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-glass-navy mb-1.5 sm:mb-2">
                        Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-glass-blue/20 focus:border-glass-blue focus:ring-2 focus:ring-glass-blue/20 outline-none transition-all bg-white text-sm sm:text-base"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-glass-navy mb-1.5 sm:mb-2">
                        Project Details *
                      </label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-glass-blue/20 focus:border-glass-blue focus:ring-2 focus:ring-glass-blue/20 outline-none transition-all resize-none text-sm sm:text-base"
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full py-3 sm:py-4 bg-gradient-to-r from-glass-blue to-glass-blue-dark text-white font-semibold rounded-lg sm:rounded-xl flex items-center justify-center gap-2 text-sm sm:text-base"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      Send Message
                      <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isFormInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-4 sm:space-y-6 md:space-y-8 order-1 lg:order-2"
            >
              {/* Locations */}
              {locations.map((location, i) => (
                <motion.div
                  key={location.city}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-glass-mist"
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-glass-blue/10 flex items-center justify-center">
                      <Building2 size={18} className="text-glass-blue sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-display font-bold text-glass-navy">
                      {location.city}
                    </h3>
                  </div>

                  <div className="space-y-2 sm:space-y-3 text-glass-slate text-sm">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <MapPin size={16} className="text-glass-accent mt-0.5 flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
                      <span>{location.address}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Phone size={16} className="text-glass-accent flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
                      <a href={`tel:${location.phone}`} className="hover:text-glass-blue transition-colors">
                        {location.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Mail size={16} className="text-glass-accent flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
                      <a href={`mailto:${location.email}`} className="hover:text-glass-blue transition-colors break-all">
                        {location.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Clock size={16} className="text-glass-accent flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
                      <span>{location.hours}</span>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Emergency Service */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-glass-blue to-glass-blue-dark text-white"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-display font-bold mb-1 sm:mb-2">
                  24/7 Emergency Service
                </h3>
                <p className="text-white/80 mb-3 sm:mb-4 text-sm">
                  Need immediate assistance? Our emergency team is available around the clock.
                </p>
                <a
                  href="tel:+16065551234"
                  className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-glass-blue font-semibold rounded-lg sm:rounded-xl hover:bg-glass-mist transition-colors text-sm sm:text-base"
                >
                  <Phone size={16} className="sm:w-[18px] sm:h-[18px]" />
                  Call Now
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-64 sm:h-80 md:h-96 bg-glass-mist relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <MapPin size={36} className="mx-auto text-glass-blue/30 mb-3 sm:mb-4 sm:w-12 sm:h-12" />
            <p className="text-glass-slate text-sm sm:text-base">Interactive map would go here</p>
            <p className="text-glass-slate text-xs sm:text-sm">Pikeville, KY & Gallatin, TN</p>
          </div>
        </div>
      </section>
    </main>
  )
}

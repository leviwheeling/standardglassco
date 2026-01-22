import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Store, 
  Building, 
  DoorOpen, 
  Wrench, 
  Layers,
  ChevronDown,
  Check,
  ArrowRight
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Process from '../components/Process'

const services = [
  {
    id: 'storefronts',
    icon: Store,
    title: 'Aluminum Storefronts',
    tagline: 'Make a Lasting First Impression',
    description: 'Custom aluminum storefront systems designed to maximize visibility, showcase your business, and create welcoming entrances that attract customers.',
    features: [
      'Custom frame colors and finishes',
      'Single and dual-glazed options',
      'Energy-efficient thermal breaks',
      'ADA compliant configurations',
      'Security glass options',
      'Integrated signage solutions',
    ],
    applications: ['Retail spaces', 'Restaurants', 'Office buildings', 'Banks', 'Shopping centers'],
  },
  {
    id: 'curtain-walls',
    icon: Building,
    title: 'Curtain Wall Systems',
    tagline: 'Architectural Excellence at Scale',
    description: 'Sophisticated curtain wall systems that combine structural integrity with stunning visual impact. Perfect for high-rise buildings and large commercial facades.',
    features: [
      'Unitized and stick-built systems',
      'High-performance thermal barriers',
      'Wind load resistance',
      'Water infiltration protection',
      'Structural silicone glazing',
      'Custom mullion profiles',
    ],
    applications: ['High-rise buildings', 'Corporate headquarters', 'Hotels', 'Convention centers', 'Medical facilities'],
  },
  {
    id: 'entrances',
    icon: DoorOpen,
    title: 'Entrance Systems',
    tagline: 'Welcome Visitors in Style',
    description: 'Complete entrance solutions including manual doors, automatic systems, and revolving doors. We create functional, accessible, and elegant entry points.',
    features: [
      'Automatic sliding doors',
      'Revolving door systems',
      'Manual swing doors',
      'Vestibule configurations',
      'Access control integration',
      'Emergency egress compliance',
    ],
    applications: ['Hotels', 'Hospitals', 'Shopping malls', 'Office towers', 'Airports'],
  },
  {
    id: 'windows',
    icon: Layers,
    title: 'Commercial Windows',
    tagline: 'Performance Meets Aesthetics',
    description: 'Commercial window solutions engineered for superior performance, energy efficiency, and long-lasting durability in demanding applications.',
    features: [
      'Thermal break frames',
      'Triple-pane options',
      'Low-E coatings',
      'Sound reduction glass',
      'UV protection',
      'Operable and fixed options',
    ],
    applications: ['Office buildings', 'Schools', 'Healthcare facilities', 'Government buildings', 'Industrial'],
  },
  {
    id: 'repair',
    icon: Wrench,
    title: 'Glass Repair & Replacement',
    tagline: 'Fast Response, Quality Results',
    description: 'Professional glass replacement and repair services to minimize downtime and restore the beauty and functionality of your building.',
    features: [
      '24/7 emergency service',
      'Temporary board-up',
      'Insurance claim assistance',
      'All glass types',
      'Hardware replacement',
      'Preventive maintenance',
    ],
    applications: ['Emergency repairs', 'Storm damage', 'Vandalism', 'Wear and tear', 'Upgrades'],
  },
]

export default function Services() {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const [expandedService, setExpandedService] = useState('storefronts')

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
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white font-medium text-sm mb-6">
              Our Services
            </span>
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Comprehensive{' '}
              <span className="text-glass-accent">Commercial Glazing</span>{' '}
              Solutions
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              From storefronts to curtain walls, we deliver complete glazing services 
              tailored to meet the unique requirements of every commercial project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Service navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-2">
                {services.map((service) => (
                  <motion.button
                    key={service.id}
                    onClick={() => setExpandedService(service.id)}
                    className={`w-full p-4 rounded-xl text-left flex items-center gap-4 transition-all ${
                      expandedService === service.id
                        ? 'bg-glass-blue text-white shadow-lg'
                        : 'bg-glass-mist text-glass-navy hover:bg-glass-blue/10'
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    <service.icon size={24} />
                    <span className="font-medium">{service.title}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Service content */}
            <div className="lg:col-span-2">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  initial={false}
                  animate={{
                    opacity: expandedService === service.id ? 1 : 0,
                    height: expandedService === service.id ? 'auto' : 0,
                    display: expandedService === service.id ? 'block' : 'none',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-8">
                    {/* Header */}
                    <div>
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-glass-blue/10 to-glass-accent/10 flex items-center justify-center mb-6">
                        <service.icon size={40} className="text-glass-blue" />
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-display font-bold text-glass-navy mb-2">
                        {service.title}
                      </h2>
                      <p className="text-xl text-glass-blue font-medium mb-4">
                        {service.tagline}
                      </p>
                      <p className="text-glass-slate text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="text-xl font-display font-bold text-glass-navy mb-4">
                        Key Features
                      </h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3 p-3 rounded-lg bg-glass-mist">
                            <Check size={18} className="text-glass-accent flex-shrink-0" />
                            <span className="text-glass-navy">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Applications */}
                    <div>
                      <h3 className="text-xl font-display font-bold text-glass-navy mb-4">
                        Common Applications
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.applications.map((app) => (
                          <span
                            key={app}
                            className="px-4 py-2 rounded-full bg-glass-blue/10 text-glass-blue text-sm font-medium"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-8 border-t border-glass-blue/10">
                      <Link to="/contact">
                        <motion.button
                          className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-glass-blue to-glass-blue-dark text-white font-semibold rounded-xl"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Request a Quote
                          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Process />

      {/* FAQ Section */}
      <section className="py-24 bg-glass-mist">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-glass-blue/10 text-glass-blue font-medium text-sm mb-4">
              FAQ
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-glass-navy">
              Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How long does a typical storefront installation take?',
                a: 'Most storefront installations can be completed within 2-5 business days, depending on the size and complexity of the project. We work efficiently to minimize disruption to your business.',
              },
              {
                q: 'Do you provide emergency glass repair services?',
                a: 'Yes, we offer 24/7 emergency response for glass breakage and damage. Our team can provide temporary board-up services and expedited replacement to secure your property quickly.',
              },
              {
                q: 'What warranties do you offer?',
                a: 'We provide comprehensive warranties on both materials and workmanship. Specific warranty terms vary by product, but typically range from 5-10 years on materials and 2-5 years on labor.',
              },
              {
                q: 'Can you work on projects outside Kentucky?',
                a: 'Absolutely! While we\'re headquartered in Pikeville, KY, we serve clients throughout Kentucky, Tennessee, and surrounding states. Contact us to discuss your project location.',
              },
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-sm"
      initial={false}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left"
      >
        <span className="font-display font-semibold text-glass-navy pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={20} className="text-glass-blue flex-shrink-0" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 text-glass-slate leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  )
}

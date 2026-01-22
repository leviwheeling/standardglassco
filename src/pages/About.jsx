import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Users, 
  Target, 
  Heart, 
  Lightbulb,
  MapPin,
  Calendar,
  Award,
  Building2
} from 'lucide-react'
import Process from '../components/Process'
import WhyChooseUs from '../components/WhyChooseUs'

const values = [
  {
    icon: Target,
    title: 'Precision',
    description: 'Every measurement matters. We approach each project with meticulous attention to detail.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Honest communication and transparent pricing are the foundation of our business.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace new technologies and techniques to deliver cutting-edge solutions.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'Your success is our success. We work alongside you from concept to completion.',
  },
]

const timeline = [
  { year: '1985', title: 'Founded', description: 'Standard Glass Co. established in Pikeville, Kentucky.' },
  { year: '1995', title: 'Expansion', description: 'Opened second location to serve Tennessee market.' },
  { year: '2005', title: 'Milestone', description: 'Completed 200th commercial project.' },
  { year: '2015', title: 'Innovation', description: 'Adopted curtain wall specialization.' },
  { year: '2024', title: 'Today', description: 'Leading commercial glazier in the region.' },
]

export default function About() {
  const heroRef = useRef(null)
  const storyRef = useRef(null)
  const valuesRef = useRef(null)
  const timelineRef = useRef(null)
  
  const isHeroInView = useInView(heroRef, { once: true })
  const isStoryInView = useInView(storyRef, { once: true, margin: '-100px' })
  const isValuesInView = useInView(valuesRef, { once: true, margin: '-100px' })
  const isTimelineInView = useInView(timelineRef, { once: true, margin: '-100px' })

  return (
    <main>
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 lg:py-32 bg-gradient-to-br from-glass-navy to-glass-blue overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-3xl border border-white/10"
              style={{
                width: `${200 + i * 100}px`,
                height: `${200 + i * 100}px`,
                left: `${60 + i * 5}%`,
                top: `${10 + i * 10}%`,
              }}
              animate={{ rotate: [0, 5, 0], scale: [1, 1.02, 1] }}
              transition={{ duration: 10 + i * 2, repeat: Infinity }}
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
              About Us
            </span>
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Building Kentucky's Future,{' '}
              <span className="text-glass-accent">One Pane at a Time</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              For over 40 years, Standard Glass Co. has been the trusted partner for commercial glazing 
              projects across Kentucky and Tennessee. Our commitment to quality, precision, and customer 
              satisfaction has made us the region's premier glass contractor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-glass-mist to-white border border-glass-blue/10 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Building2 size={80} className="mx-auto text-glass-blue/30 mb-4" />
                    <p className="text-glass-slate">Company Image</p>
                  </div>
                </div>
              </div>
              {/* Floating accent */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-gradient-to-br from-glass-blue to-glass-accent"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              {/* Stats card */}
              <motion.div
                className="absolute -top-6 -right-6 p-6 rounded-2xl bg-white shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isStoryInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-glass-blue/10 flex items-center justify-center">
                    <Calendar size={24} className="text-glass-blue" />
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-glass-navy">1985</div>
                    <div className="text-glass-slate text-sm">Established</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-glass-blue/10 text-glass-blue font-medium text-sm mb-4">
                Our Story
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-glass-navy mb-6">
                A Legacy of Excellence in Commercial Glazing
              </h2>
              <div className="space-y-4 text-glass-slate leading-relaxed">
                <p>
                  Standard Glass Co. was founded in 1985 in Pikeville, Kentucky, with a simple mission: 
                  to provide the highest quality commercial glazing services in the region. What started 
                  as a small family operation has grown into the leading commercial glass contractor in 
                  Kentucky and Tennessee.
                </p>
                <p>
                  Our founder believed that every building deserves premium glass installation that 
                  combines aesthetics with functionality. That belief continues to guide us today as 
                  we take on projects ranging from local storefronts to major commercial developments.
                </p>
                <p>
                  With over 500 completed projects and a team of skilled craftsmen, we've built our 
                  reputation on delivering exceptional results, on time and on budget. Our commitment 
                  to customer satisfaction has earned us long-term relationships with developers, 
                  architects, and building owners throughout the region.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <MapPin size={20} className="text-glass-accent" />
                  <span className="text-glass-navy font-medium">Pikeville, KY</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={20} className="text-glass-accent" />
                  <span className="text-glass-navy font-medium">Gallatin, TN</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-24 bg-glass-mist">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
              className="inline-block px-4 py-2 rounded-full bg-glass-blue/10 text-glass-blue font-medium text-sm mb-4"
            >
              Our Values
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-3xl lg:text-4xl font-display font-bold text-glass-navy"
            >
              What Drives Us
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i }}
                className="p-8 rounded-2xl bg-white shadow-lg shadow-glass-blue/5 border border-glass-blue/5 text-center"
              >
                <motion.div
                  className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-glass-blue/10 to-glass-accent/10 flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <value.icon size={32} className="text-glass-blue" />
                </motion.div>
                <h3 className="text-xl font-display font-bold text-glass-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-glass-slate">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
              className="inline-block px-4 py-2 rounded-full bg-glass-blue/10 text-glass-blue font-medium text-sm mb-4"
            >
              Our Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-3xl lg:text-4xl font-display font-bold text-glass-navy"
            >
              40 Years of Growth
            </motion.h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-glass-blue to-glass-accent hidden lg:block" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  animate={isTimelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.15 * i }}
                  className={`relative flex items-center gap-8 ${
                    i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="p-6 rounded-2xl bg-glass-mist inline-block">
                      <div className="text-3xl font-display font-bold text-glass-blue mb-1">
                        {item.year}
                      </div>
                      <div className="text-xl font-semibold text-glass-navy mb-2">
                        {item.title}
                      </div>
                      <p className="text-glass-slate">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="hidden lg:flex w-12 h-12 rounded-full bg-white border-4 border-glass-blue items-center justify-center z-10">
                    <Award size={20} className="text-glass-blue" />
                  </div>
                  
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Process />
      <WhyChooseUs />
    </main>
  )
}

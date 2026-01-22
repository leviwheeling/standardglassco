import { motion } from 'framer-motion'
import { ArrowRight, Play, Award, Users, Building2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const stats = [
  { icon: Building2, value: '500+', label: 'Projects Completed' },
  { icon: Users, value: '40+', label: 'Years Experience' },
  { icon: Award, value: '100%', label: 'Client Satisfaction' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Subtle gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-glass-blue/[0.03] to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-glass-accent/[0.02] to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-20 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-200px)]">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass-blue/5 text-glass-blue font-medium text-sm border border-glass-blue/10"
            >
              <span className="w-2 h-2 rounded-full bg-glass-accent" />
              Leading Kentucky Commercial Glazing
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-display font-bold text-glass-navy leading-[1.1]"
            >
              Clear Vision,
              <br />
              <span className="text-gradient">Expert Precision</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-glass-slate max-w-lg leading-relaxed"
            >
              From storefronts to curtain walls, we deliver exceptional commercial glazing solutions with unmatched craftsmanship.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link to="/contact">
                <motion.button
                  className="group px-8 py-4 bg-glass-blue text-white font-semibold rounded-xl flex items-center gap-2 hover:bg-glass-blue-dark transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Free Quote
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              
              <Link to="/projects">
                <motion.button
                  className="group flex items-center gap-3 px-8 py-4 text-glass-navy font-semibold rounded-xl border border-glass-blue/20 hover:border-glass-blue/40 hover:bg-glass-blue/5 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="w-10 h-10 rounded-full bg-glass-blue/10 flex items-center justify-center">
                    <Play size={14} className="text-glass-blue ml-0.5" fill="currentColor" />
                  </span>
                  View Our Work
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-8 pt-12"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <stat.icon size={18} className="text-glass-accent" />
                    <span className="text-3xl lg:text-4xl font-display font-bold text-glass-navy">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-sm text-glass-slate">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right content - Featured image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main image container */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                  alt="Modern glass building facade"
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-glass-navy/30 via-transparent to-transparent" />
                
                {/* Floating badge */}
                <motion.div 
                  className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-xs text-glass-blue font-medium uppercase tracking-wider mb-1">Featured Project</p>
                  <p className="text-glass-navy font-display font-bold">Pikeville Medical Center</p>
                  <p className="text-glass-slate text-sm">15,000 sq ft curtain wall installation</p>
                </motion.div>
              </div>

              {/* Accent line */}
              <div className="absolute -bottom-4 -left-4 w-24 h-1 bg-gradient-to-r from-glass-accent to-glass-blue rounded-full" />
              <div className="absolute -top-4 -right-4 w-1 h-24 bg-gradient-to-b from-glass-accent to-glass-blue rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-glass-blue/30 flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-3 rounded-full bg-glass-blue"
            animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

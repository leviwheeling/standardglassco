import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MapPin } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      {/* Top bar - tablet and up */}
      <div className="hidden md:block bg-glass-navy text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin size={14} />
              Pikeville, KY | Gallatin, TN
            </span>
          </div>
          <a href="tel:+16065551234" className="flex items-center gap-2 hover:text-glass-accent transition-colors">
            <Phone size={14} />
            (606) 555-1234
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
              <motion.div 
                className="relative w-10 h-10 sm:w-12 sm:h-12"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Glass pane logo */}
                <div className="absolute inset-0 bg-gradient-to-br from-glass-blue to-glass-accent rounded-lg transform rotate-6 group-hover:rotate-12 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-br from-glass-blue-light to-glass-blue rounded-lg transform -rotate-3 group-hover:rotate-0 transition-transform" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-lg sm:text-xl">SG</span>
                </div>
              </motion.div>
              <div className="hidden sm:block">
                <h1 className="font-display font-bold text-glass-navy text-base sm:text-lg leading-tight">
                  Standard Glass
                </h1>
                <p className="text-glass-slate text-[10px] sm:text-xs tracking-wider uppercase">
                  Commercial Glazing
                </p>
              </div>
            </Link>

            {/* Desktop nav - lg and up */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative group"
                >
                  <span className={`font-medium transition-colors ${
                    location.pathname === link.path 
                      ? 'text-glass-blue' 
                      : 'text-glass-navy hover:text-glass-blue'
                  }`}>
                    {link.name}
                  </span>
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-glass-blue to-glass-accent"
                    initial={false}
                    animate={{ 
                      width: location.pathname === link.path ? '100%' : '0%' 
                    }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              ))}
            </div>

            {/* CTA Button - desktop */}
            <div className="hidden lg:block">
              <Link to="/contact">
                <motion.button
                  className="relative px-5 xl:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-glass-blue to-glass-blue-dark text-white font-semibold rounded-lg overflow-hidden group text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Get a Quote</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-glass-accent to-glass-blue"
                    initial={{ x: '100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-glass-navy -mr-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile menu - full screen overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 top-16 sm:top-20 bg-white z-50"
            >
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="h-full overflow-y-auto px-4 sm:px-6 py-6 sm:py-8"
              >
                <div className="space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        className={`block py-4 text-lg font-medium border-b border-glass-blue/10 ${
                          location.pathname === link.path 
                            ? 'text-glass-blue' 
                            : 'text-glass-navy'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8"
                >
                  <Link to="/contact" className="block">
                    <button className="w-full py-4 bg-gradient-to-r from-glass-blue to-glass-blue-dark text-white font-semibold rounded-xl text-lg">
                      Get a Quote
                    </button>
                  </Link>
                </motion.div>

                {/* Contact info in mobile menu */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 pt-8 border-t border-glass-blue/10 space-y-4"
                >
                  <a href="tel:+16065551234" className="flex items-center gap-3 text-glass-slate">
                    <Phone size={18} className="text-glass-accent" />
                    (606) 555-1234
                  </a>
                  <div className="flex items-center gap-3 text-glass-slate">
                    <MapPin size={18} className="text-glass-accent" />
                    Pikeville, KY | Gallatin, TN
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

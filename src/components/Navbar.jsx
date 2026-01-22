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

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-glass-navy text-white py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">
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
            ? 'bg-white/90 backdrop-blur-lg shadow-lg' 
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div 
                className="relative w-12 h-12"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Glass pane logo */}
                <div className="absolute inset-0 bg-gradient-to-br from-glass-blue to-glass-accent rounded-lg transform rotate-6 group-hover:rotate-12 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-br from-glass-blue-light to-glass-blue rounded-lg transform -rotate-3 group-hover:rotate-0 transition-transform" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">SG</span>
                </div>
              </motion.div>
              <div className="hidden sm:block">
                <h1 className="font-display font-bold text-glass-navy text-lg leading-tight">
                  Standard Glass
                </h1>
                <p className="text-glass-slate text-xs tracking-wider uppercase">
                  Commercial Glazing
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
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

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/contact">
                <motion.button
                  className="relative px-6 py-3 bg-gradient-to-r from-glass-blue to-glass-blue-dark text-white font-semibold rounded-lg overflow-hidden group"
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
              className="lg:hidden p-2 text-glass-navy"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="px-6 py-4 space-y-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`block py-2 font-medium ${
                        location.pathname === link.path 
                          ? 'text-glass-blue' 
                          : 'text-glass-navy'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link to="/contact" className="block">
                    <button className="w-full py-3 bg-gradient-to-r from-glass-blue to-glass-blue-dark text-white font-semibold rounded-lg">
                      Get a Quote
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

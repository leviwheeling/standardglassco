import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight
} from 'lucide-react'

const footerLinks = {
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Our Projects', path: '/projects' },
    { name: 'Careers', path: '/contact' },
    { name: 'Contact', path: '/contact' },
  ],
  services: [
    { name: 'Storefronts', path: '/services' },
    { name: 'Curtain Walls', path: '/services' },
    { name: 'Entrances', path: '/services' },
    { name: 'Glass Repair', path: '/services' },
  ],
}

const locations = [
  {
    city: 'Pikeville, KY',
    address: '123 Main Street',
    phone: '(606) 555-1234',
  },
  {
    city: 'Gallatin, TN',
    address: '456 Commerce Drive',
    phone: '(615) 555-5678',
  },
]

export default function Footer() {
  return (
    <footer className="bg-glass-navy text-white">
      {/* CTA Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-glass-blue to-glass-accent opacity-90" />
        <div className="absolute inset-0 hidden md:block">
          {/* Animated glass panels background - hidden on mobile for performance */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 md:w-64 h-32 md:h-64 border border-white/20 rounded-lg"
              style={{
                left: `${i * 25}%`,
                top: `${(i % 2) * 30}%`,
              }}
              animate={{
                rotate: [0, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                delay: i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-2">
                Ready to Start Your Project?
              </h2>
              <p className="text-white/80 text-base sm:text-lg">
                Get a free consultation and estimate today.
              </p>
            </div>
            <Link to="/contact" className="w-full md:w-auto">
              <motion.button
                className="w-full md:w-auto group flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white text-glass-blue font-bold rounded-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-glass-blue to-glass-accent rounded-lg transform rotate-6" />
                <div className="absolute inset-0 bg-white/20 rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-sm sm:text-base">SG</span>
                </div>
              </div>
              <div>
                <h3 className="font-display font-bold text-base sm:text-lg">Standard Glass</h3>
                <p className="text-white/60 text-[10px] sm:text-xs uppercase tracking-wider">Commercial Glazing</p>
              </div>
            </Link>
            <p className="text-white/70 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Clear Vision, Expert Precision. Leading the way for Kentucky commercial glazing since 1985.
            </p>
            <div className="flex gap-3 sm:gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-glass-blue transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-base sm:text-lg mb-4 sm:mb-6">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group text-sm sm:text-base"
                  >
                    <ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all sm:w-[14px] sm:h-[14px]" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-base sm:text-lg mb-4 sm:mb-6">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group text-sm sm:text-base"
                  >
                    <ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all sm:w-[14px] sm:h-[14px]" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-display font-semibold text-base sm:text-lg mb-4 sm:mb-6">Locations</h4>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4 sm:gap-6">
              {locations.map((loc) => (
                <div key={loc.city} className="space-y-1 sm:space-y-2">
                  <h5 className="font-semibold flex items-center gap-2 text-sm sm:text-base">
                    <MapPin size={14} className="text-glass-accent sm:w-4 sm:h-4" />
                    {loc.city}
                  </h5>
                  <p className="text-white/70 text-xs sm:text-sm pl-5 sm:pl-6">{loc.address}</p>
                  <a href={`tel:${loc.phone}`} className="text-white/70 text-xs sm:text-sm pl-5 sm:pl-6 flex items-center gap-2 hover:text-white transition-colors">
                    <Phone size={10} className="sm:w-3 sm:h-3" />
                    {loc.phone}
                  </a>
                </div>
              ))}
              <div className="flex items-center gap-2 text-white/70 text-xs sm:text-sm col-span-2 md:col-span-1">
                <Clock size={14} className="text-glass-accent sm:w-4 sm:h-4" />
                <span>Mon-Fri: 7AM - 5PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-white/60">
            <p>© {new Date().getFullYear()} Standard Glass Co. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

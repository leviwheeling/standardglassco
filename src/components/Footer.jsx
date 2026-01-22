import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
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
        <div className="absolute inset-0">
          {/* Animated glass panels background */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 border border-white/20 rounded-lg"
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
        
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
                Ready to Start Your Project?
              </h2>
              <p className="text-white/80 text-lg">
                Get a free consultation and estimate today.
              </p>
            </div>
            <Link to="/contact">
              <motion.button
                className="group flex items-center gap-3 px-8 py-4 bg-white text-glass-blue font-bold rounded-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-glass-blue to-glass-accent rounded-lg transform rotate-6" />
                <div className="absolute inset-0 bg-white/20 rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold">SG</span>
                </div>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">Standard Glass</h3>
                <p className="text-white/60 text-xs uppercase tracking-wider">Commercial Glazing</p>
              </div>
            </Link>
            <p className="text-white/70 mb-6 leading-relaxed">
              Clear Vision, Expert Precision. Leading the way for Kentucky commercial glazing since 1985.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-glass-blue transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Locations</h4>
            <div className="space-y-6">
              {locations.map((loc) => (
                <div key={loc.city} className="space-y-2">
                  <h5 className="font-semibold flex items-center gap-2">
                    <MapPin size={16} className="text-glass-accent" />
                    {loc.city}
                  </h5>
                  <p className="text-white/70 text-sm pl-6">{loc.address}</p>
                  <a href={`tel:${loc.phone}`} className="text-white/70 text-sm pl-6 flex items-center gap-2 hover:text-white transition-colors">
                    <Phone size={12} />
                    {loc.phone}
                  </a>
                </div>
              ))}
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Clock size={16} className="text-glass-accent" />
                <span>Mon-Fri: 7AM - 5PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© {new Date().getFullYear()} Standard Glass Co. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects, categories } from '../data/projects'

export default function ProjectsGrid({ showAll = false }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [activeCategory, setActiveCategory] = useState('All')

  const displayProjects = showAll ? projects : projects.slice(0, 4)
  const filteredProjects = activeCategory === 'All' 
    ? displayProjects 
    : displayProjects.filter(p => p.category === activeCategory)

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 sm:mb-10 md:mb-12 gap-4 sm:gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-glass-blue/10 text-glass-blue font-medium text-xs sm:text-sm mb-3 sm:mb-4"
            >
              Our Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-glass-navy"
            >
              Featured Projects
            </motion.h2>
          </div>
          
          {/* Category filter - horizontal scroll on mobile */}
          {showAll && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-hide"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                    activeCategory === cat
                      ? 'bg-glass-blue text-white'
                      : 'bg-glass-mist text-glass-slate hover:bg-glass-blue/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i }}
              className={`group ${project.featured ? 'sm:col-span-2' : ''}`}
            >
              <Link to={`/projects/${project.slug}`}>
                <div className={`relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer ${project.featured ? 'h-56 sm:h-72 md:h-96' : 'h-48 sm:h-56 md:h-72'}`}>
                  {/* Project image */}
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-glass-navy via-glass-navy/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                  {/* Glass shine effect on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:block"
                    style={{
                      background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)',
                    }}
                  />

                  {/* Content */}
                  <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end">
                    <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-3">
                      <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-[10px] sm:text-xs font-medium">
                        {project.category}
                      </span>
                      <span className="flex items-center gap-1 text-white/70 text-[10px] sm:text-sm">
                        <Calendar size={12} className="sm:w-[14px] sm:h-[14px]" />
                        {project.year}
                      </span>
                    </div>
                    
                    <h3 className={`font-display font-bold text-white mb-1 sm:mb-2 group-hover:text-glass-accent transition-colors ${project.featured ? 'text-xl sm:text-2xl md:text-3xl' : 'text-base sm:text-lg md:text-xl'}`}>
                      {project.title}
                    </h3>
                    
                    <p className="flex items-center gap-1 text-white/80 text-xs sm:text-sm mb-2 sm:mb-3">
                      <MapPin size={12} className="sm:w-[14px] sm:h-[14px]" />
                      {project.location}
                    </p>

                    <p className="text-white/70 text-xs sm:text-sm line-clamp-2 mb-2 sm:mb-4 hidden sm:block">
                      {project.description}
                    </p>

                    {/* View project link */}
                    <div className="flex items-center gap-2 text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex">
                      View Project
                      <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-8 sm:mt-10 md:mt-12 text-center"
          >
            <Link to="/projects">
              <motion.button
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-glass-navy text-white font-semibold rounded-xl hover:bg-glass-blue transition-colors text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View All Projects
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}

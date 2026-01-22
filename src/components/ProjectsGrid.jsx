import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects, categories } from '../data/projects'

export default function ProjectsGrid({ showAll = false }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState('All')

  const displayProjects = showAll ? projects : projects.slice(0, 4)
  const filteredProjects = activeCategory === 'All' 
    ? displayProjects 
    : displayProjects.filter(p => p.category === activeCategory)

  return (
    <section ref={ref} className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-block px-4 py-2 rounded-full bg-glass-blue/10 text-glass-blue font-medium text-sm mb-4"
            >
              Our Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-display font-bold text-glass-navy"
            >
              Featured Projects
            </motion.h2>
          </div>
          
          {/* Category filter */}
          {showAll && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-2"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
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
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i }}
              className={`group ${project.featured ? 'md:col-span-2' : ''}`}
            >
              <Link to={`/projects/${project.slug}`}>
                <div className={`relative overflow-hidden rounded-2xl cursor-pointer ${project.featured ? 'h-96' : 'h-72'}`}>
                  {/* Project image */}
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-glass-navy via-glass-navy/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                  {/* Glass shine effect on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)',
                    }}
                  />

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                        {project.category}
                      </span>
                      <span className="flex items-center gap-1 text-white/70 text-sm">
                        <Calendar size={14} />
                        {project.year}
                      </span>
                    </div>
                    
                    <h3 className={`font-display font-bold text-white mb-2 group-hover:text-glass-accent transition-colors ${project.featured ? 'text-3xl' : 'text-xl'}`}>
                      {project.title}
                    </h3>
                    
                    <p className="flex items-center gap-1 text-white/80 text-sm mb-3">
                      <MapPin size={14} />
                      {project.location}
                    </p>

                    <p className="text-white/70 text-sm line-clamp-2 mb-4">
                      {project.description}
                    </p>

                    {/* View project link */}
                    <div className="flex items-center gap-2 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      View Project
                      <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
            className="mt-12 text-center"
          >
            <Link to="/projects">
              <motion.button
                className="px-8 py-4 bg-glass-navy text-white font-semibold rounded-xl hover:bg-glass-blue transition-colors"
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

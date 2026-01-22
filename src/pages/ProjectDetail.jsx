import { useParams, Link, Navigate, useLocation } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Ruler,
  Clock,
  Layers,
  Check,
  ArrowRight
} from 'lucide-react'
import { getProjectBySlug, getRelatedProjects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const location = useLocation()
  const project = getProjectBySlug(slug)
  const contentRef = useRef(null)
  const isContentInView = useInView(contentRef, { once: true, margin: '-50px' })

  // Scroll to top when navigating to a new project
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const relatedProjects = getRelatedProjects(project.id, project.category)

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-glass-navy to-glass-blue overflow-hidden">
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
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-6 sm:mb-8"
          >
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm sm:text-base"
            >
              <ArrowLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
              Back to Projects
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
              <span className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/10 text-white text-xs sm:text-sm font-medium">
                {project.category}
              </span>
              <span className="flex items-center gap-1 sm:gap-2 text-white/70 text-xs sm:text-sm">
                <Calendar size={14} className="sm:w-4 sm:h-4" />
                {project.year}
              </span>
              <span className="flex items-center gap-1 sm:gap-2 text-white/70 text-xs sm:text-sm">
                <MapPin size={14} className="sm:w-4 sm:h-4" />
                {project.location}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white mb-4 sm:mb-6">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl">
              {project.description}
            </p>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-lg sm:max-w-xl md:max-w-2xl"
          >
            <div className="text-center p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/10">
              <div className="flex items-center justify-center gap-1 sm:gap-2 text-white mb-0.5 sm:mb-1">
                <Ruler size={14} className="text-glass-accent sm:w-[18px] sm:h-[18px]" />
                <span className="text-lg sm:text-xl md:text-2xl font-display font-bold">{project.stats.sqft}</span>
              </div>
              <p className="text-white/60 text-[10px] sm:text-xs md:text-sm">Square Feet</p>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/10">
              <div className="flex items-center justify-center gap-1 sm:gap-2 text-white mb-0.5 sm:mb-1">
                <Clock size={14} className="text-glass-accent sm:w-[18px] sm:h-[18px]" />
                <span className="text-lg sm:text-xl md:text-2xl font-display font-bold">{project.stats.duration}</span>
              </div>
              <p className="text-white/60 text-[10px] sm:text-xs md:text-sm">Duration</p>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/10">
              <div className="flex items-center justify-center gap-1 sm:gap-2 text-white mb-0.5 sm:mb-1">
                <Layers size={14} className="text-glass-accent sm:w-[18px] sm:h-[18px]" />
                <span className="text-lg sm:text-xl md:text-2xl font-display font-bold">{project.stats.floors}</span>
              </div>
              <p className="text-white/60 text-[10px] sm:text-xs md:text-sm">Floors</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      <section className="relative py-6 sm:py-8 md:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl"
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              className="lg:col-span-2"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-glass-navy mb-4 sm:mb-6">
                Project Overview
              </h2>
              <div className="prose prose-sm sm:prose-base md:prose-lg text-glass-slate max-w-none">
                {project.fullDescription.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="mb-3 sm:mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <div className="lg:sticky lg:top-28 space-y-4 sm:space-y-6">
                <div className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-glass-mist">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-glass-navy mb-4 sm:mb-6">
                    Key Features
                  </h3>
                  <ul className="space-y-3 sm:space-y-4">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-glass-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={12} className="text-glass-blue sm:w-[14px] sm:h-[14px]" />
                        </div>
                        <span className="text-glass-slate text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-glass-blue to-glass-blue-dark text-white">
                  <h3 className="text-lg sm:text-xl font-display font-bold mb-2 sm:mb-3">
                    Have a Similar Project?
                  </h3>
                  <p className="text-white/80 mb-4 sm:mb-6 text-xs sm:text-sm">
                    Let's discuss how we can bring your vision to life.
                  </p>
                  <Link to="/contact">
                    <motion.button
                      className="w-full py-2.5 sm:py-3 bg-white text-glass-blue font-semibold rounded-lg sm:rounded-xl flex items-center justify-center gap-2 text-sm sm:text-base"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get a Quote
                      <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-glass-mist">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-glass-navy mb-6 sm:mb-8 md:mb-12">
              Related Projects
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {relatedProjects.map((related, i) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link to={`/projects/${related.slug}`}>
                    <div className="group relative h-48 sm:h-56 md:h-64 rounded-xl sm:rounded-2xl overflow-hidden">
                      <img 
                        src={related.image} 
                        alt={related.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-glass-navy via-glass-navy/40 to-transparent opacity-80" />
                      <div className="absolute inset-0 p-4 sm:p-5 md:p-6 flex flex-col justify-end">
                        <span className="text-glass-accent text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                          {related.category}
                        </span>
                        <h3 className="text-base sm:text-lg md:text-xl font-display font-bold text-white group-hover:text-glass-accent transition-colors">
                          {related.title}
                        </h3>
                        <p className="text-white/70 text-xs sm:text-sm mt-0.5 sm:mt-1">
                          {related.location}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

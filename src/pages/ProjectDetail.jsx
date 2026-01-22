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
  const isContentInView = useInView(contentRef, { once: true, margin: '-100px' })

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
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-glass-navy to-glass-blue overflow-hidden">
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
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Projects
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium">
                {project.category}
              </span>
              <span className="flex items-center gap-2 text-white/70 text-sm">
                <Calendar size={16} />
                {project.year}
              </span>
              <span className="flex items-center gap-2 text-white/70 text-sm">
                <MapPin size={16} />
                {project.location}
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl">
              {project.description}
            </p>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-2xl"
          >
            <div className="text-center p-4 rounded-xl bg-white/10">
              <div className="flex items-center justify-center gap-2 text-white mb-1">
                <Ruler size={18} className="text-glass-accent" />
                <span className="text-2xl font-display font-bold">{project.stats.sqft}</span>
              </div>
              <p className="text-white/60 text-sm">Square Feet</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/10">
              <div className="flex items-center justify-center gap-2 text-white mb-1">
                <Clock size={18} className="text-glass-accent" />
                <span className="text-2xl font-display font-bold">{project.stats.duration}</span>
              </div>
              <p className="text-white/60 text-sm">Duration</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/10">
              <div className="flex items-center justify-center gap-2 text-white mb-1">
                <Layers size={18} className="text-glass-accent" />
                <span className="text-2xl font-display font-bold">{project.stats.floors}</span>
              </div>
              <p className="text-white/60 text-sm">Floors</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      <section className="relative py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl font-display font-bold text-glass-navy mb-6">
                Project Overview
              </h2>
              <div className="prose prose-lg text-glass-slate max-w-none">
                {project.fullDescription.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="mb-4 leading-relaxed">
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
              <div className="sticky top-28">
                <div className="p-8 rounded-2xl bg-glass-mist">
                  <h3 className="text-xl font-display font-bold text-glass-navy mb-6">
                    Key Features
                  </h3>
                  <ul className="space-y-4">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-glass-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={14} className="text-glass-blue" />
                        </div>
                        <span className="text-glass-slate">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-6 p-8 rounded-2xl bg-gradient-to-br from-glass-blue to-glass-blue-dark text-white">
                  <h3 className="text-xl font-display font-bold mb-3">
                    Have a Similar Project?
                  </h3>
                  <p className="text-white/80 mb-6 text-sm">
                    Let's discuss how we can bring your vision to life.
                  </p>
                  <Link to="/contact">
                    <motion.button
                      className="w-full py-3 bg-white text-glass-blue font-semibold rounded-xl flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get a Quote
                      <ArrowRight size={18} />
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
        <section className="py-24 bg-glass-mist">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-display font-bold text-glass-navy mb-12">
              Related Projects
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProjects.map((related, i) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link to={`/projects/${related.slug}`}>
                    <div className="group relative h-64 rounded-2xl overflow-hidden">
                      <img 
                        src={related.image} 
                        alt={related.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-glass-navy via-glass-navy/40 to-transparent opacity-80" />
                      <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        <span className="text-glass-accent text-sm font-medium mb-2">
                          {related.category}
                        </span>
                        <h3 className="text-xl font-display font-bold text-white group-hover:text-glass-accent transition-colors">
                          {related.title}
                        </h3>
                        <p className="text-white/70 text-sm mt-1">
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

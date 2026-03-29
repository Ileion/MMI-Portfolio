'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'AI Chat Application',
      description: 'A real-time chat application with AI integration capabilities. Features include message persistence, user authentication, and AI-powered responses.',
      image: 'https://images.unsplash.com/photo-1676299081847-824916de8e6f?w=500&h=300&fit=crop',
      tech: ['React', 'Node.js', 'WebSocket', 'MongoDB', 'AI API'],
      link: '#',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with product management, shopping cart, payment integration, and order tracking.',
      image: 'https://images.unsplash.com/photo-1661956600684-fc46ab6133e7?w=500&h=300&fit=crop',
      tech: ['Next.js', 'MongoDB', 'Stripe', 'Tailwind CSS', 'TypeScript'],
      link: '#',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 3,
      title: 'Task Management System',
      description: 'Collaborative task management tool with real-time updates, team assignments, and project tracking features.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
      tech: ['Vue.js', 'Firebase', 'Tailwind', 'JavaScript'],
      link: '#',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Modern responsive portfolio website showcasing projects and blog articles with smooth animations and dark mode support.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      link: '#',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 5,
      title: 'Social Media Analytics',
      description: 'Data visualization dashboard for social media analytics with real-time metrics, charts, and insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tech: ['React', 'Chart.js', 'Express', 'PostgreSQL'],
      link: '#',
      color: 'from-red-500 to-pink-500',
    },
    {
      id: 6,
      title: 'Weather App',
      description: 'Real-time weather application with location-based forecast, weather alerts, and historical data visualization.',
      image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=500&h=300&fit=crop',
      tech: ['React', 'Weather API', 'Axios', 'Tailwind CSS'],
      link: '#',
      color: 'from-indigo-500 to-blue-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 section-light section-dark">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl font-bold mb-6 gradient-text">My Projects</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl card-light card-hover bg-white/50 dark:bg-slate-900/50 backdrop-blur"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary dark:text-primary font-medium border border-primary/20 dark:border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1">
                  View Project →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Interested in collaborating or want to see more?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-2 text-lg"
          >
            Get in Touch →
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

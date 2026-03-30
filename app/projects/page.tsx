'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Automatic Pet Feeder',
      description: 'An IoT-based automatic pet feeder system that dispenses food at scheduled times. Features include mobile app control, real-time monitoring, and food level alerts.',
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&h=300&fit=crop',
      tech: ['Arduino', 'IoT', 'Mobile App', 'Node.js', 'Firebase'],
      link: '#',
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 2,
      title: 'IoT Simulation',
      description: 'A comprehensive IoT simulation platform for testing and prototyping connected devices. Includes sensor data visualization, device management, and real-time monitoring.',
      image: 'https://images.unsplash.com/photo-1518611505868-d7d87a60b754?w=500&h=300&fit=crop',
      tech: ['Python', 'MQTT', 'React', 'WebSocket', 'MongoDB'],
      link: '#',
      color: 'from-blue-500 to-purple-500',
    },
    {
      id: 3,
      title: 'Travel Forum',
      description: 'A community-driven travel forum platform where users can share experiences, tips, and recommendations. Features include user profiles, discussions, and itinerary sharing.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop',
      tech: ['Next.js', 'PostgreSQL', 'Express', 'TypeScript', 'Tailwind CSS'],
      link: '#',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 4,
      title: 'Restaurant Food Ordering System (Chapeau)',
      description: 'A full-stack restaurant food ordering application built for academic project. Includes menu management, order tracking, and payment integration.',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=300&fit=crop',
      tech: ['Web Development', 'Database Design', 'Team Collaboration', 'Full-Stack'],
      link: '#',
      color: 'from-yellow-500 to-orange-500',
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
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
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

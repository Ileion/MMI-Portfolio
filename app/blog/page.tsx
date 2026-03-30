'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with Next.js 14',
      excerpt: 'Explore the latest features of Next.js 14 and how to leverage them in your projects.',
      date: 'Dec 25, 2024',
      readTime: '5 min read',
      category: 'Next.js',
      image: '🚀',
    },
    {
      id: 2,
      title: 'Building Responsive Design with Tailwind CSS',
      excerpt: 'Master the art of creating beautiful responsive layouts using Tailwind CSS utilities.',
      date: 'Dec 20, 2024',
      readTime: '7 min read',
      category: 'CSS',
      image: '🎨',
    },
    {
      id: 3,
      title: 'React Hooks Deep Dive',
      excerpt: 'Understanding React Hooks and how to use them to write cleaner, more efficient code.',
      date: 'Dec 15, 2024',
      readTime: '8 min read',
      category: 'React',
      image: '⚛️',
    },
    {
      id: 4,
      title: 'Web Performance Optimization Tips',
      excerpt: 'Learn essential techniques to improve your website performance and user experience.',
      date: 'Dec 10, 2024',
      readTime: '6 min read',
      category: 'Performance',
      image: '⚡',
    },
    {
      id: 5,
      title: 'TypeScript Best Practices',
      excerpt: 'Discover best practices for writing type-safe and maintainable TypeScript code.',
      date: 'Dec 5, 2024',
      readTime: '7 min read',
      category: 'TypeScript',
      image: '📘',
    },
    {
      id: 6,
      title: 'API Design Patterns',
      excerpt: 'Explore common patterns and best practices for designing scalable REST APIs.',
      date: 'Nov 30, 2024',
      readTime: '9 min read',
      category: 'Backend',
      image: '🔌',
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
          <h1 className="text-5xl font-bold mb-6 gradient-text">My Blog</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl card-light card-hover bg-white/50 dark:bg-slate-900/50 backdrop-blur flex flex-col h-full"
            >
              {/* Post Image/Icon Area */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-500">
                  {post.image}
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-primary dark:text-primary font-semibold">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                  <span className="text-xs text-slate-500 dark:text-slate-400">{post.date}</span>
                  <button className="text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    Read →
                  </button>
                </div>
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
          className="mt-20 text-center pt-12 border-t border-slate-200 dark:border-slate-800"
        >
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Interested in learning more about my work?
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-2 text-lg"
          >
            View My Projects →
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

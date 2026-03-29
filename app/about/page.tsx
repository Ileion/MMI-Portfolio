'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 section-light section-dark">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl font-bold mb-6 gradient-text">About Me</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                I&apos;m a passionate Computer Science student with a strong interest in full-stack web development. 
                With hands-on experience in modern web technologies, I love creating elegant solutions to complex problems.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                My journey in tech started with curiosity about how things work, which evolved into a dedication to 
                building beautiful, functional, and user-friendly applications. I&apos;m particularly interested in 
                frontend development and the intersection of design and functionality.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the community.
              </p>
            </div>

            {/* Avatar Placeholder */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              {/* Larger realistic portrait (uses public/PORTRAIT.jpg) */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Soft animated glow */}
                <motion.div
                  animate={{ scale: [1, 1.03, 1], opacity: [0.25, 0.45, 0.25] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -inset-6 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-3xl opacity-30"
                ></motion.div>

                {/* Gradient border frame */}
                <div className="absolute inset-0 rounded-2xl p-1 bg-gradient-to-br from-primary via-secondary to-accent">
                  <div className="absolute inset-1 bg-white dark:bg-slate-950 rounded-2xl overflow-hidden">
                    {/* Portrait image */}
                    <motion.img
                      src="/PORTRAIT.jpg"
                      alt="Md Minhazul Islam"
                      className="w-full h-full object-cover"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </div>
                </div>

                {/* Subtle floating wrapper (keeps layout consistent) */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-8 gradient-text inline-block">Education</h2>
          <div className="space-y-6 max-w-2xl mx-auto">
            {[
              {
                degree: 'Bachelor of Science in Computer Science',
                school: 'University Name',
                period: '2021 - 2025',
                description: 'Focused on software development, algorithms, and data structures.',
              },
              {
                degree: 'Advanced Web Development Bootcamp',
                school: 'Tech Academy',
                period: '2023',
                description: 'Intensive training in full-stack development with React, Node.js, and databases.',
              },
            ].map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">{edu.degree}</h3>
                  <span className="text-sm text-primary font-semibold">{edu.period}</span>
                </div>
                <p className="text-primary font-medium mb-2">{edu.school}</p>
                <p className="text-slate-600 dark:text-slate-400">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-8 gradient-text inline-block">Experience</h2>
          <div className="space-y-6 max-w-2xl mx-auto">
            {[
              {
                title: 'Junior Web Developer',
                company: 'Tech Startup',
                period: '2023 - Present',
                description: 'Developing and maintaining full-stack web applications using React and Node.js.',
              },
              {
                title: 'Frontend Developer Intern',
                company: 'Digital Agency',
                period: '2022 - 2023',
                description: 'Built responsive web applications and improved UI/UX for client projects.',
              },
            ].map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
className="p-6 rounded-xl card-light card-hover bg-white/50 dark:bg-slate-900/50 backdrop-blur"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">{exp.title}</h3>
                  <span className="text-sm text-primary font-semibold">{exp.period}</span>
                </div>
                <p className="text-primary font-medium mb-2">{exp.company}</p>
                <p className="text-slate-600 dark:text-slate-400">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Interest Areas */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-8 gradient-text inline-block">Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { emoji: '🎨', title: 'UI/UX Design', description: 'Creating beautiful and intuitive user interfaces' },
              { emoji: '⚡', title: 'Performance', description: 'Optimizing applications for speed and efficiency' },
              { emoji: '🔒', title: 'Security', description: 'Building secure and reliable applications' },
              { emoji: '🚀', title: 'Innovation', description: 'Exploring new technologies and approaches' },
            ].map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl card-light card-hover bg-white/50 dark:bg-slate-900/50 backdrop-blur"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{interest.emoji}</div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{interest.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center pt-8"
        >
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
            Let&apos;s connect and create something amazing together!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-2 text-lg"
          >
            Get In Touch →
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { ArrowDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '@/components/SocialIcons'

export default function Home() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects-preview')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden bg-white dark:bg-slate-950">
        {/* Subtle Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Removed gradient overlay for pure white background */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1, 0.95, 1],
              opacity: [0.1, 0.12, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute bottom-1/4 -left-40 w-72 h-72 bg-secondary/15 rounded-full blur-3xl"
          ></motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl items-center relative z-10"
        >
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
                Welcome to My
                <br />
                <span className="gradient-text">Portfolio</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-lg"
            >
              I&apos;m Md Minhazul Islam, a Bangladeshi student at ThomasMore who loves turning curiosity into technology. I love creating things that make life a little easier and a little more beautiful.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/projects"
                  className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 inline-flex items-center justify-center w-full sm:w-auto"
                >
                  View My Work →
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="px-8 py-3 border-2 border-primary text-primary dark:text-primary rounded-lg font-semibold hover:bg-primary/10 dark:hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 inline-flex items-center justify-center w-full sm:w-auto"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Photo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative flex justify-center items-center"
          >
            {/* Main photo container */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem]">
              {/* Animated glow background */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-6 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-30"
              ></motion.div>

              {/* Border frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl p-1">
                <div className="absolute inset-1 bg-white dark:bg-slate-950 rounded-2xl overflow-hidden">
                  {/* Photo with hover effect */}
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src="/PORTRAIT.jpg"
                    alt="Portrait" 
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </div>
              </div>

              {/* Floating animation wrapper */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0"
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToProjects}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary hover:text-secondary mt-12 hidden lg:block"
        >
          <ArrowDownIcon className="w-6 h-6" />
        </motion.button>
      </section>

      {/* About Me Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden section-light section-dark">
        {/* Animated background */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-32 -left-32 w-80 h-80 bg-gradient-to-br from-primary/15 to-transparent rounded-full blur-3xl opacity-40"
          ></motion.div>

          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear', delay: 5 }}
            className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-tr from-secondary/15 to-transparent rounded-full blur-3xl opacity-40"
          ></motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-5xl sm:text-6xl font-black mb-4 gradient-text">About Me</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
              I'm a passionate Computer Science student with expertise in full-stack web development. I love creating elegant, functional solutions using modern technologies like React, Next.js, and Node.js. Always eager to learn and build amazing projects.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              Read More →
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Preview */}
      <section id="projects-preview" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white dark:bg-slate-950">
        {/* Animated gradient background */}
        <div className="absolute inset-0 -z-10">
          {/* Removed gradient overlay for pure white background */}

          {/* Animated background shapes */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl opacity-40"
          ></motion.div>

          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear', delay: 5 }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-3xl opacity-40"
          ></motion.div>

          <motion.div
            animate={{
              y: [0, 50, 0],
              x: [0, 30, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-accent/15 to-transparent rounded-full blur-3xl opacity-30"
          ></motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-5xl sm:text-6xl font-black mb-4 gradient-text">Featured Projects</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Automatic Pet Feeder',
                description: 'IoT project for automated pet feeding with smart scheduling',
                tech: ['Arduino', 'IoT', 'Sensors'],
                color: 'from-blue-500 to-cyan-500',
              },
              {
                title: 'IoT Simulation',
                description: 'Skills 2 project demonstrating IoT concepts and simulations',
                tech: ['Python', 'IoT', 'Simulation'],
                color: 'from-green-500 to-emerald-500',
              },
              {
                title: 'TravelForum',
                description: 'Community platform for travel discussions using Livewire',
                tech: ['PHP', 'Livewire', 'Laravel'],
                color: 'from-purple-500 to-pink-500',
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border-2 border-slate-200 dark:border-slate-700 p-8 hover:border-primary/80 dark:hover:border-primary/60 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-primary/20 bg-white dark:bg-slate-900/50 backdrop-blur"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${project.color} transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent group-hover:from-primary group-hover:to-secondary transition-all duration-300">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 text-base leading-relaxed">{project.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-sm px-3 py-1 rounded-full bg-gradient-to-r from-primary/15 to-secondary/15 text-primary dark:text-primary font-medium border border-primary/20 dark:border-primary/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              href="/projects"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1 text-lg"
            >
              Explore All Projects <span className="ml-2">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>


      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden section-light section-dark">
        <div className="absolute inset-0 -z-10 opacity-30">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-bl from-primary/40 to-secondary/40 rounded-full mix-blend-multiply filter blur-3xl"
          ></motion.div>

          <motion.div
            animate={{
              scale: [1.2, 0.8, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-secondary/40 to-accent/40 rounded-full mix-blend-multiply filter blur-3xl"
          ></motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto relative z-10"
        >
          {/* Main Heading - Matching other section titles */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-6xl font-black mb-4 gradient-text">Let&apos;s Work Together</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          </motion.div>

          {/* Action Buttons with Better Styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-6 mb-16 flex-wrap"
          >
            {/* Contact Button */}
            <motion.div
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 min-w-[250px] max-w-xs"
            >
              <Link
                href="/contact"
                className="flex flex-col items-center justify-center p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900/70 dark:to-slate-800/50 hover:border-primary hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 h-full group"
              >
                <div className="w-12 h-12 mb-3 text-primary group-hover:scale-110 transition-transform duration-300">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                {/* Make Contact title match the styled gradient used in CV cards */}
                <h3 className="text-lg font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2">Contact Me</h3>
                 <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                   Send me a message
                 </p>
               </Link>
             </motion.div>

             {/* View CV Button */}
             <motion.div
               whileHover={{ y: -4 }}
               whileTap={{ scale: 0.98 }}
               className="flex-1 min-w-[250px] max-w-xs"
             >
               <a
                 href="/CV_Md_Minhazul_Islam.pdf"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex flex-col items-center justify-center p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900/70 dark:to-slate-800/50 hover:border-secondary hover:shadow-2xl hover:shadow-secondary/30 transition-all duration-300 h-full group"
               >
                 <div className="w-12 h-12 mb-3 text-secondary group-hover:scale-110 transition-transform duration-300">
                   <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                     <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                     <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                   </svg>
                 </div>
                 <h3 className="text-lg font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2">View CV</h3>
                 <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                   Check my resume
                 </p>
               </a>
             </motion.div>

            {/* Download CV Button */}
            <motion.div
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 min-w-[250px] max-w-xs"
            >
              <a
                href="/CV_Md_Minhazul_Islam.pdf"
                download="CV_Md_Minhazul_Islam.pdf"
                className="flex flex-col items-center justify-center p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900/70 dark:to-slate-800/50 hover:border-accent hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300 h-full group"
              >
                <div className="w-12 h-12 mb-3 text-accent group-hover:scale-110 transition-transform duration-300">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M12 2v20m10-10H2" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">Download CV</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                  Get PDF file
                </p>
              </a>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
            <span className="text-slate-600 dark:text-slate-400 font-medium">Or</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
          </div>

          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-slate-700 dark:text-slate-300 font-semibold mb-6 text-lg">Connect with me on social media</p>
            <div className="flex justify-center gap-4">
              <motion.a
                href="https://github.com/Ileion"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-full bg-slate-100 dark:bg-slate-800 text-primary dark:text-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/40"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/md-minhazul-islam-3086b6306"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-full bg-slate-100 dark:bg-slate-800 text-secondary dark:text-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-accent hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-secondary/40"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-full bg-slate-100 dark:bg-slate-800 text-accent dark:text-accent hover:bg-gradient-to-r hover:from-accent hover:to-primary hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-accent/40"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </motion.a>
            </div>
          </motion.div>

          {/* Email Direct Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-slate-600 dark:text-slate-400 mb-3">Or email me directly:</p>
            <a
              href="mailto:r0971007@student.thomasmore.be"
              className="inline-block text-primary dark:text-primary font-bold text-lg hover:underline transition-all"
            >
              r0971007@student.thomasmore.be
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

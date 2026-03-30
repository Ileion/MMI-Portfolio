'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

// Professional SVG Icons
const Icons = {
  Code: () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9.4 16.6L4.8 12l4.6-4.6M14.6 16.6l4.6-4.6-4.6-4.6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Robot: () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="9" cy="11" r="1.5" fill="currentColor"/>
      <circle cx="15" cy="11" r="1.5" fill="currentColor"/>
      <rect x="7" y="15" width="10" height="1" fill="currentColor"/>
      <path d="M9 5V3M15 5V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  GameController: () => (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path d="M6 9c0-1.105.895-2 2-2h8c1.105 0 2 .895 2 2v6c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2V9Z"/>
      <path d="M9 12h6M12 9v6"/>
      <circle cx="6" cy="14" r="0.5" fill="currentColor"/>
      <circle cx="18" cy="12" r="0.5" fill="currentColor"/>
    </svg>
  ),
  Camera: () => (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>
  ),
  Mountain: () => (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path d="M12 2l9.5 17H2.5L12 2Z"/>
      <path d="M8 14l4-5 4 5" stroke="currentColor"/>
    </svg>
  ),
  Palette: () => (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="8" cy="8" r="1.5" fill="currentColor"/>
      <circle cx="16" cy="8" r="1.5" fill="currentColor"/>
      <circle cx="8" cy="16" r="1.5" fill="currentColor"/>
      <circle cx="16" cy="16" r="1.5" fill="currentColor"/>
      <circle cx="12" cy="14" r="1.5" fill="currentColor"/>
    </svg>
  ),
  Zap: () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  ),
  Shield: () => (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  Rocket: () => (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7Z"/>
      <circle cx="11" cy="11" r="1" fill="currentColor"/>
    </svg>
  ),
  Users: () => (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  MessageSquare: () => (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  ),
  Target: () => (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <circle cx="12" cy="12" r="1" fill="currentColor"/>
      <circle cx="12" cy="12" r="5"/>
      <circle cx="12" cy="12" r="9"/>
    </svg>
  ),
  Lightbulb: () => (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  ),
  Database: () => (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3M21 19c0 1.66-4 3-9 3s-9-1.34-9-3"/>
      <line x1="3" y1="5" x2="3" y2="19"/>
      <line x1="21" y1="5" x2="21" y2="19"/>
    </svg>
  ),
  Briefcase: () => (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    </svg>
  ),
  Award: () => (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <circle cx="12" cy="8" r="7"/>
      <polyline points="8 14 12 17 16 14"/>
    </svg>
  ),
  GraduationCap: () => (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path d="M22 10v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7"/>
      <polyline points="16 5.13 12 2 8 5.13"/>
    </svg>
  ),
  Heart: () => (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  Globe: () => (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
}

export default function About() {
  const [activeTab, setActiveTab] = useState('hobbies')

  const tabs = [
    { id: 'hobbies', label: 'Hobbies', icon: 'Mountain' },
    { id: 'interests', label: 'Interests', icon: 'Star' },
    { id: 'education', label: 'Education', icon: 'GraduationCap' },
    { id: 'experience', label: 'Experience', icon: 'Briefcase' },
    { id: 'projects', label: 'Projects', icon: 'Code' },
  ]

  const hobbiesData = [
    {
      icon: 'Rocket',
      title: 'Video Making',
      description: 'Creating and editing videos allows me to tell compelling stories visually. This skill enhances my ability to communicate ideas effectively and understand user experience design.',
    },
    {
      icon: 'Target',
      title: 'Football',
      description: 'I play football whenever I get free time. It keeps me physically active, teaches teamwork and strategic thinking, and provides a healthy balance to my coding work.',
    },
    {
      icon: 'Mountain',
      title: 'Cycling',
      description: 'Cycling gives me fresh energy and keeps me in good health. It clears my mind, reduces stress, and helps me stay focused and productive in my studies and development work.',
    },
    {
      icon: 'Globe',
      title: 'Travelling',
      description: 'Travelling gives me the chance to explore different cultures and meet people from different parts of the world. It broadens my perspective and inspires creative problem-solving.',
    },
  ]

  const interestsData = [
    {
      icon: 'Code',
      title: 'Software Development',
      description: 'Building scalable, efficient, and user-centric applications using modern technologies and best practices.',
    },
    {
      icon: 'Database',
      title: 'Database Design',
      description: 'Designing robust and efficient database architectures that optimize data storage, retrieval, and integrity.',
    },
    {
      icon: 'Palette',
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive, and accessible user interfaces with modern design principles',
    },
    {
      icon: 'Shield',
      title: 'Cybersecurity',
      description: 'Building secure applications and protecting systems from potential vulnerabilities',
    },
  ]

  const educationData = [
    {
      degree: 'Bachelor in Applied Computer Science',
      school: 'Thomas More University of Applied Sciences',
      location: 'Geel, Belgium',
      period: '01/2024 - Present',
      description: 'Full-stack web development, software engineering, system design, and modern application architecture. Focus on practical implementation and industry-relevant skills.',
      status: 'In Progress',
    },
    {
      degree: 'Bachelor in Information Technology',
      school: 'Inholland Hogeschool',
      location: 'Haarlem, Netherlands',
      period: '09/2020 - 08/2022',
      description: 'Foundation in IT fundamentals, network basics, and database management.',
      status: 'Completed',
    },
    {
      degree: 'Diploma in Electromedical Engineering',
      school: 'Rajshahi Polytechnic Institute',
      location: 'Rajshahi, Bangladesh',
      period: '01/2014 - 01/2018',
      description: 'Technical training in electronics and medical equipment maintenance.',
      status: 'Completed',
    },
  ]

  const workExperienceData = [
    {
      title: 'Crew Member',
      company: 'Poketaria',
      location: 'Haarlem, Netherlands',
      period: '02/2022 - 01/2024',
      responsibilities: [
        'Prepared and assembled poke bowls with precision and care',
        'Managed inventory and ingredient preparation',
        'Provided excellent customer service and communication',
        'Maintained kitchen cleanliness and food safety standards',
        'Handled cash register and payment processing',
      ],
    },
    {
      title: 'Food Delivery Rider',
      company: 'Uber Eats',
      location: 'Amsterdam, Netherlands',
      period: '03/2021 - 01/2022',
      responsibilities: [
        'Delivered food orders with care and reliability',
        'Communicated with customers regarding delivery status',
        'Coordinated with restaurants for order accuracy',
        'Maintained professionalism and time management',
      ],
    },
    {
      title: 'Home Tutor',
      location: 'Dhaka, Bangladesh',
      period: '06/2017 - 08/2020',
      responsibilities: [
        'Taught primary school children Mathematics, English, and Bengali',
        'Developed custom lesson plans and teaching materials',
        'Provided personalized feedback and progress tracking',
        'Built strong communication with students and parents',
      ],
    },
  ]

  const projectsData = [
    {
      title: 'Automatic Pet Feeder',
      period: 'Recent Project',
      description: 'An IoT-based automatic pet feeder system that dispenses food at scheduled times. Features include mobile app control, real-time monitoring, and food level alerts.',
      technologies: ['Arduino', 'IoT', 'Mobile App', 'Node.js', 'Firebase'],
    },
    {
      title: 'IoT Simulation',
      period: 'Recent Project',
      description: 'A comprehensive IoT simulation platform for testing and prototyping connected devices. Includes sensor data visualization, device management, and real-time monitoring.',
      technologies: ['Python', 'MQTT', 'React', 'WebSocket', 'MongoDB'],
    },
    {
      title: 'Travel Forum',
      period: 'Recent Project',
      description: 'A community-driven travel forum platform where users can share experiences, tips, and recommendations. Features include user profiles, discussions, and itinerary sharing.',
      technologies: ['Next.js', 'PostgreSQL', 'Express', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: 'Restaurant Food Ordering System (Chapeau)',
      period: '04/2022 - 06/2022',
      description: 'A full-stack restaurant food ordering application built for academic project. Includes menu management, order tracking, and payment integration.',
      technologies: ['Web Development', 'Database Design', 'Team Collaboration', 'Full-Stack'],
    },
  ]

  const getIcon = (iconName: string): (() => JSX.Element) | null => {
    const iconMap: Record<string, () => JSX.Element> = {
      Robot: Icons.Robot,
      GameController: Icons.GameController,
      Camera: Icons.Camera,
      Mountain: Icons.Mountain,
      Palette: Icons.Palette,
      Zap: Icons.Zap,
      Shield: Icons.Shield,
      Rocket: Icons.Rocket,
      Users: Icons.Users,
      MessageSquare: Icons.MessageSquare,
      Target: Icons.Target,
      GraduationCap: Icons.GraduationCap,
      Code: Icons.Code,
      Database: Icons.Database,
      Briefcase: Icons.Briefcase,
      Award: Icons.Award,
      Globe: Icons.Globe,
      Heart: Icons.Heart,
    }
    return iconMap[iconName] || null
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 gradient-text">About Me</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </motion.div>

        {/* Introduction Section with Photo */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Text Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Hello! I'm Md Minhazul Islam</h2>
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  I'm a software developer and Applied Computer Science student at Thomas More University in Geel, Belgium. I'm passionate about building scalable applications and solving complex problems through code. Every project is an opportunity to learn, innovate, and make something meaningful.
                </p>
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  I chose Computer Science because I'm fascinated by how technology transforms ideas into reality. From building user interfaces to designing databases, I love the entire development process. The combination of creativity and logic in programming drives me every day. I'm committed to continuous learning and staying at the forefront of new technologies.
                </p>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  Outside of work, I stay active with football, cycling, and video creation. I also love travelling to experience different cultures and perspectives. These experiences enrich my creativity and problem-solving approach in development.
                </p>
              </motion.div>
            </div>

            {/* Portrait Photo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="relative w-96 h-96">
                {/* Soft animated glow */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-2xl opacity-40"
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

                {/* Floating animation */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Main Content with Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-20">
          {/* Skills Sidebar (25% width) */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="sticky top-32 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-6 text-primary">
                  <Icons.Code />
                </div>
                <h2 className="text-2xl font-bold text-primary">Skills</h2>
              </div>

              {/* Technical Skills */}
              <div className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900 dark:text-white mb-4">Technical Skills</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Frontend Development</span>
                      <span className="text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-white">Advanced</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">React, Next.js, HTML5, CSS3</p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Backend Development</span>
                      <span className="text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r from-secondary to-accent text-white">Proficient</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Node.js, Express, PHP, .NET</p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Database Management</span>
                      <span className="text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r from-accent to-primary text-white">Proficient</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">MySQL, SQL, Firebase, MongoDB</p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Version Control</span>
                      <span className="text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-white">Advanced</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Git, GitHub, GitLab</p>
                  </div>
                </div>
              </div>

              <div className="h-px bg-slate-200 dark:bg-slate-700 my-6"></div>

              {/* Soft Skills */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900 dark:text-white mb-4">Soft Skills</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Communication', level: 'Advanced' },
                    { name: 'Problem Solving', level: 'Advanced' },
                    { name: 'Teamwork', level: 'Proficient' },
                    { name: 'Creativity', level: 'Proficient' },
                    { name: 'Time Management', level: 'Advanced' },
                    { name: 'Adaptability', level: 'Advanced' },
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between bg-white dark:bg-slate-700/50 rounded-lg p-3"
                    >
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                      <span className="text-xs font-bold px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">{skill.level}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="h-px bg-slate-200 dark:bg-slate-700 my-6"></div>

              {/* Languages */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900 dark:text-white mb-4">Languages</h3>
                <div className="space-y-2">
                  {[
                    { lang: 'English', level: 'Fluent' },
                    { lang: 'Bengali', level: 'Native' },
                    { lang: 'Dutch', level: 'Intermediate' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex justify-between"
                    >
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{item.lang}</span>
                      <span className="text-xs text-primary">{item.level}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Main Content with Tabs (75% width) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {/* Tab Navigation */}
            <div className="mb-8">
              <div className="flex gap-2 border-b-2 border-slate-200 dark:border-slate-700 flex-wrap">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-6 py-4 font-semibold text-lg flex items-center gap-2 border-b-4 transition-all ${
                      activeTab === tab.id
                        ? 'border-primary text-primary'
                        : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                  >
                    {getIcon(tab.icon) && (
                      <div className="w-5 h-5">
                        {(() => {
                          const Icon = getIcon(tab.icon)
                          return Icon ? <Icon /> : null
                        })()}
                      </div>
                    )}
                    {tab.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div>
              {/* Hobbies Tab */}
              {activeTab === 'hobbies' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {hobbiesData.map((hobby, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-6 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-primary/50 transition-all group"
                    >
                      {getIcon(hobby.icon) && (
                        <div className="w-12 h-12 mb-4 text-primary group-hover:scale-110 transition-transform">
                          {(() => {
                            const Icon = getIcon(hobby.icon)
                            return Icon ? <Icon /> : null
                          })()}
                        </div>
                      )}
                      <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                        {hobby.title}
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{hobby.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Interests Tab */}
              {activeTab === 'interests' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {interestsData.map((interest, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-6 rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 hover:border-primary/60 hover:shadow-lg transition-all group"
                    >
                      {getIcon(interest.icon) && (
                        <div className="w-12 h-12 mb-4 text-primary group-hover:scale-110 transition-transform">
                          {(() => {
                            const Icon = getIcon(interest.icon)
                            return Icon ? <Icon /> : null
                          })()}
                        </div>
                      )}
                      <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                        {interest.title}
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{interest.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Education Tab */}
              {activeTab === 'education' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {educationData.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-8 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border-2 border-slate-200 dark:border-slate-700 hover:border-primary/60 hover:shadow-lg transition-all relative overflow-hidden"
                    >
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold">
                          {edu.status}
                        </span>
                      </div>

                      <div className="pr-32">
                        <h3 className="text-2xl font-bold text-primary mb-2">{edu.degree}</h3>
                        <p className="text-lg font-semibold text-slate-900 dark:text-white mb-1">{edu.school}</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{edu.location}</p>

                        <div className="flex items-center gap-2 mb-6">
                          <div className="w-4 h-4 text-primary">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                          </div>
                          <span className="text-slate-700 dark:text-slate-300 font-medium">{edu.period}</span>
                        </div>

                        <div className="bg-white dark:bg-slate-700/50 rounded-lg p-4">
                          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{edu.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Technical Skills Details */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-12"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-6 h-6 text-primary">
                        <Icons.Code />
                      </div>
                      <h3 className="text-2xl font-bold gradient-text">Technical Proficiencies</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        {
                          title: 'Frontend Stack',
                          skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion'],
                        },
                        {
                          title: 'Backend Stack',
                          skills: ['Node.js', 'Express.js', 'PHP', '.NET Development', 'Python'],
                        },
                        {
                          title: 'Database & APIs',
                          skills: ['MySQL', 'SQL', 'MongoDB', 'Firebase', 'RESTful APIs'],
                        },
                        {
                          title: 'Tools & Networking',
                          skills: ['Git & GitHub', 'VS Code', 'Cisco Packet Tracer', 'Linux', 'CI/CD'],
                        },
                      ].map((group, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          viewport={{ once: true }}
                          className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
                        >
                          <h4 className="font-bold text-lg text-primary mb-4">{group.title}</h4>
                          <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary dark:text-primary font-medium border border-primary/20 dark:border-primary/30 text-sm hover:shadow-md transition-all"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* Experience Tab */}
              {activeTab === 'experience' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {workExperienceData.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-8 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border-2 border-slate-200 dark:border-slate-700 hover:border-primary/60 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-primary mb-2">{exp.title}</h3>
                          {exp.company && (
                            <p className="text-lg font-semibold text-slate-900 dark:text-white">{exp.company}</p>
                          )}
                          <p className="text-sm text-slate-600 dark:text-slate-400">{exp.location}</p>
                        </div>
                        <div className="w-5 h-5 text-primary flex-shrink-0">
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                          </svg>
                        </div>
                      </div>

                      <p className="text-sm text-primary font-semibold mb-4">{exp.period}</p>

                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                            <span className="text-primary font-bold mt-1">→</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Projects Tab */}
              {activeTab === 'projects' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {projectsData.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-8 rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 hover:border-primary/60 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
                        <div className="w-6 h-6 text-primary flex-shrink-0">
                          <Icons.Code />
                        </div>
                      </div>

                      <p className="text-sm text-slate-600 dark:text-slate-400 font-semibold mb-4">{project.period}</p>

                      <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary dark:text-primary font-medium border border-primary/20 dark:border-primary/30 text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>


        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center pt-12 border-t-2 border-slate-200 dark:border-slate-800"
        >
          <p className="text-xl text-slate-700 dark:text-slate-300 mb-8">
            Ready to collaborate or have questions? Let's connect!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-2"
            >
              View My Projects →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary rounded-xl font-bold hover:bg-primary/10 hover:shadow-lg transition-all duration-300"
            >
              Get In Touch →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}


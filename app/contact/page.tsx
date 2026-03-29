'use client'

import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Thank you for your message! I will get back to you soon.')
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 section-light section-dark">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 gradient-text">Get In Touch</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          {[
            {
              icon: EnvelopeIcon,
              title: 'Email',
              value: 'r0971007@student.thomasmore.be',
              color: 'from-blue-500 to-cyan-500',
            },
            {
              icon: PhoneIcon,
              title: 'Phone',
              value: '+1 (555) 123-4567',
              color: 'from-green-500 to-emerald-500',
            },
            {
              icon: MapPinIcon,
              title: 'Location',
              value: 'Your City, Country',
              color: 'from-purple-500 to-pink-500',
            },
          ].map((contact, index) => {
            const Icon = contact.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl card-light card-hover bg-white/50 dark:bg-slate-900/50 backdrop-blur text-center"
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br ${contact.color} flex items-center justify-center text-white`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">{contact.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{contact.value}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-white/50 dark:bg-slate-900/50 backdrop-blur rounded-2xl card-light card-hover p-8 md:p-12 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 gradient-text text-center">Send Me a Message</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-950/50 backdrop-blur focus:outline-none focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="Your name"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-950/50 backdrop-blur focus:outline-none focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="r0971007@student.thomasmore.be"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-950/50 backdrop-blur focus:outline-none focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="What is this about?"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message *
            </label>
            <textarea
              id="message"
              required
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-950/50 backdrop-blur focus:outline-none focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              placeholder="Tell me more about your project or inquiry..."
            ></textarea>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-2"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
            Or connect with me on social media
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
              <button
                key={social}
                className="px-6 py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition-all duration-300"
              >
                {social}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

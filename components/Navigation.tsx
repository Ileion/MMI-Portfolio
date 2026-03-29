'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ]

  const isItemActive = (href: string) => {
    return pathname === href || (href !== '/' && pathname.startsWith(href))
  }

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 shadow-lg dark:shadow-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group flex-shrink-0">
            <motion.img
              src="/logo.svg"
              alt="Md Minhazul Islam"
              className="w-11 h-11"
            />
            <span className="hidden sm:inline font-bold text-lg gradient-text">Md Minhazul Islam</span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-1 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 font-semibold text-sm transition-all duration-300 border-t-2 ${
                  isItemActive(item.href)
                    ? 'border-primary text-primary dark:text-primary'
                    : 'border-transparent text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:border-primary/50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Theme Toggle - All the way Right */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg hover:bg-primary/20 dark:hover:bg-primary/20 transition-all duration-300 text-slate-700 dark:text-slate-300 flex-shrink-0"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <SunIcon className="w-5 h-5 text-yellow-500 hover:text-yellow-400 transition-colors" />
              ) : (
                <MoonIcon className="w-5 h-5 text-slate-700 hover:text-slate-600 transition-colors" />
              )}
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary/20 dark:hover:bg-primary/20 transition-all duration-300 text-slate-700 dark:text-slate-300"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4 border-t border-slate-200 dark:border-slate-800"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 font-semibold transition-all duration-300 border-t-2 ${
                  isItemActive(item.href)
                    ? 'border-primary text-primary dark:text-primary'
                    : 'border-transparent text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:border-primary/50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  )
}

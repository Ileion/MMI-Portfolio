# Portfolio Website

A modern, stylish, and fully dynamic portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Features

- ✨ **Modern Design**: Clean, contemporary UI with gradient effects and animations
- 🌓 **Dark Mode**: Built-in dark mode support with theme toggle
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast**: Optimized performance with Next.js
- 🎨 **Smooth Animations**: Framer Motion animations throughout
- 📄 **Multiple Pages**: Home, About, Projects, Blog, and Contact pages
- 🎯 **SEO Friendly**: Proper meta tags and semantic HTML
- 🔧 **Easy to Customize**: Well-structured components and clear configuration

## 📋 Pages

1. **Home** - Hero section with featured projects and latest blog posts
2. **About** - Personal bio, education, experience, and interests
3. **Projects** - Showcase of your projects with descriptions and technologies
4. **Blog** - Blog posts with articles, categories, and reading time
5. **Contact** - Contact form, contact information, and social media links

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Theme**: next-themes

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to see your portfolio.

## 🎨 Customization

### Colors
Edit the color scheme in `tailwind.config.ts`:
```typescript
colors: {
  primary: '#6366f1',
  secondary: '#8b5cf6',
  accent: '#ec4899',
}
```

### Content
- **Home Page**: Edit `app/page.tsx`
- **About Page**: Edit `app/about/page.tsx`
- **Projects**: Update project data in `app/projects/page.tsx`
- **Blog**: Update blog posts in `app/blog/page.tsx`
- **Contact**: Update contact info in `app/contact/page.tsx`

### Navigation
Update navigation items in `components/Navigation.tsx`

## 📧 Contact Information
Update contact details in:
- `app/contact/page.tsx`
- `components/Footer.tsx`

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
The portfolio can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- Render
- GitHub Pages (static export)

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to submit a pull request.

---

**Happy Coding!** 🎉

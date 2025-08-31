# Mindfulness Landing Page

A beautiful, responsive landing page for a mindfulness and meditation platform designed specifically for children aged 4-14. Built with React, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, intuitive design with smooth animations
- **Interactive Modal**: Popup form for trial signup with form validation
- **Age-Specific Programs**: Tailored content for different age groups (4-6, 7-10, 11-14)
- **Performance Optimized**: Fast loading with code splitting and optimization
- **Accessibility**: Built with accessibility best practices

## 🚀 Live Demo

[View Live Demo](https://mindfulness-landing.vercel.app/) <!-- Add your deployed URL here -->

## 📸 Screenshots

![Hero Section](./screenshots/hero.png)
![Programs Section](./screenshots/programs.png)
![Pricing Section](./screenshots/pricing.png)

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **JavaScript (ES6+)** - Programming language

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sanchit029/mindfulness-landing.git
   cd mindfulness-landing
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📂 Project Structure

```
src/
├── components/           # React components
│   ├── Header.jsx       # Navigation header
│   ├── Hero.jsx         # Hero section
│   ├── Features.jsx     # Features showcase
│   ├── Programs.jsx     # Age-specific programs
│   ├── Testimonials.jsx # Customer testimonials
│   ├── Pricing.jsx      # Pricing plans
│   ├── FAQ.jsx          # Frequently asked questions
│   ├── Footer.jsx       # Footer section
│   └── TrialModal.jsx   # Trial signup modal
├── App.jsx              # Main app component
├── main.jsx             # App entry point
└── index.css            # Global styles
```

## 🎨 Design Features

### Hero Section
- Engaging headline with gradient text
- Clear value proposition
- Call-to-action buttons
- Trust indicators and statistics

### Programs Section
- Age-specific program cards
- Interactive hover effects
- Clear feature breakdown
- Visual age indicators

### Testimonials
- Real customer reviews
- Trust badges
- Professional endorsements
- Star ratings

### Pricing
- Three-tier pricing structure
- Feature comparison
- Popular plan highlighting
- Money-back guarantee

### Trial Modal
- Multi-step form with validation
- Smooth animations
- Success state handling
- Mobile-optimized

## 🔧 Customization

### Colors
Edit the color palette in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary colors
  },
  accent: {
    // Your accent colors
  }
}
```

### Content
Update text content directly in the component files:
- `Hero.jsx` - Main headline and description
- `Features.jsx` - Feature descriptions
- `Programs.jsx` - Program details
- `Testimonials.jsx` - Customer reviews
- `Pricing.jsx` - Plan details and pricing

### Animations
Modify animations in components using Framer Motion:
- Entrance animations
- Hover effects
- Scroll-triggered animations
- Modal transitions

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance Optimizations

- Code splitting with dynamic imports
- Image optimization
- CSS purging in production
- Lazy loading for non-critical components
- Optimized bundle size

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sanchit Bishnoi**
- GitHub: [@Sanchit029](https://github.com/Sanchit029)

## 🙏 Acknowledgments

- Design inspiration from modern SaaS landing pages
- Icons by [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- UI components styled with [Tailwind CSS](https://tailwindcss.com/)

---

⭐ Star this repository if you found it helpful!

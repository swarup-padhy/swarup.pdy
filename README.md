# QA Engineer Portfolio

A modern, minimal React portfolio website for Quality Assurance Engineers. Features a clean white theme, sharp edges, small refined typography, and an icon-heavy design.

## 🚀 Features

- **Single Page Application** with smooth scrolling navigation
- **Responsive Design** - works on desktop, tablet, and mobile
- **Icon-heavy Design** using Feather Icons
- **Minimal & Clean** white theme with teal accents
- **Sharp Edges** - no border-radius for modern aesthetic
- **SEO Optimized** with proper meta tags
- **Easy Customization** - all content managed via JSON file

## 🛠️ Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Vanilla CSS with CSS Variables
- **Icons:** React Feather
- **Deployment:** Ready for Netlify, Vercel, or GitHub Pages

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Sticky navigation with scroll-spy
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About/Who I Am section
│   ├── Skills.jsx      # Skills/What I Know section
│   ├── Projects.jsx    # Projects/What I've Built section
│   └── Footer.jsx      # Footer with contact & social links
├── data/
│   └── portfolio.json  # All portfolio content (EASY TO EDIT!)
├── styles/
│   └── globalVariables.css  # CSS variables for theme
├── App.jsx             # Main app component
├── App.css             # Global app styles
├── index.css           # Base styles & CSS imports
└── main.jsx            # App entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd qa-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 🎨 Customization

### Content Changes

Edit `src/data/portfolio.json` to update:

- Personal information (name, bio, contact details)
- Skills and technologies
- Projects and descriptions
- Social media links

**No coding required!** Just update the JSON file and your changes will appear instantly.

### Styling Changes

#### Colors

Update `src/styles/globalVariables.css`:

```css
:root {
  --color-background: #ffffff; /* Background */
  --color-text-primary: #1f2937; /* Main text */
  --color-accent: #0891b2; /* Teal accent */
  /* ... other variables */
}
```

#### Typography

Modify font sizes, weights, and line heights in the CSS variables file.

#### Layout

Adjust spacing and breakpoints in component-specific CSS files.

### Adding New Sections

1. Add data to `portfolio.json`
2. Create new component in `src/components/`
3. Import and add to `App.jsx`
4. Update navigation in `Navbar.jsx`

## 📱 Responsive Design

- **Desktop:** 1024px+
- **Tablet:** 768px - 1023px
- **Mobile:** 320px - 767px

## 🌐 Deployment

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Vercel

1. Connect your GitHub repository
2. Vercel will auto-detect Vite settings
3. Deploy

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy: `npm run deploy`

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- Functional components with hooks
- CSS Modules for component styling
- Semantic HTML
- Accessibility-first approach

## 📊 Performance

- Optimized bundle size
- Lazy loading ready
- SEO optimized
- Fast loading times

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋 Support

For questions or issues:

- Open an issue on GitHub
- Check the documentation
- Review the code comments

---

**Built with ❤️ for QA Engineers**
"# swarup.pdy" 

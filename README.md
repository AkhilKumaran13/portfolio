# 🚀 Akhil Kumaran S - Portfolio Website

A modern, responsive portfolio website built with React, featuring a futuristic AI-themed design with smooth animations and interactive elements.

![Portfolio Preview](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?style=for-the-badge&logo=vite)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0.8-FF0055?style=for-the-badge&logo=framer)

## ✨ Features

- **Modern & Futuristic Design**: AI-themed interface with cyberpunk aesthetics
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Powered by Framer Motion for fluid interactions
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Interactive Elements**: Hover effects, scroll animations, and micro-interactions
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- **Performance Optimized**: Fast loading times with Vite bundler

## 🛠️ Tech Stack

- **Framework**: React 18.3.1
- **Build Tool**: Vite 5.2.0
- **Animations**: Framer Motion 11.0.8
- **Icons**: Lucide React 0.363.0
- **Fonts**: Google Fonts (Orbitron + Outfit)
- **Styling**: Pure CSS with CSS Variables

## 📁 Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx          # Main component with all sections
│   ├── App.css          # Comprehensive styling
│   └── main.jsx         # React entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone or download the project**

2. **Navigate to the project directory**
   ```bash
   cd portfolio
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Running Locally

Start the development server:

```bash
npm run dev
```
or
```bash
yarn dev
```

The site will automatically open in your browser at `http://localhost:3000`

### Building for Production

Create an optimized production build:

```bash
npm run build
```
or
```bash
yarn build
```

This creates a `dist` folder with optimized files ready for deployment.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```
or
```bash
yarn preview
```

## 🌐 Deployment on Vercel

### Method 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow the prompts**
   - Set up and deploy: Yes
   - Which scope: Select your account
   - Link to existing project: No
   - Project name: (press Enter for default)
   - Directory: ./
   - Build command: `npm run build`
   - Output directory: dist
   - Override settings: No

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Method 2: Using Vercel Dashboard (Easy)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Go to [Vercel Dashboard](https://vercel.com/)**

3. **Click "Add New" → "Project"**

4. **Import your GitHub repository**

5. **Configure build settings**:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

6. **Click "Deploy"**

Your site will be live at `https://your-project.vercel.app`

### Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow Vercel's instructions to configure DNS

## 📝 Customization Guide

### Adding Your Profile Photo

Replace the placeholder in `App.jsx`:

```jsx
<div className="profile-image">
  <img src="/path-to-your-photo.jpg" alt="Akhil Kumaran S" />
</div>
```

Put your image in the `public` folder.

### Updating Projects

Edit the `projects` array in `App.jsx`:

```jsx
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description...',
    tech: ['Tech1', 'Tech2'],
    icon: <Brain className="w-6 h-6" />,
    gradient: 'from-cyan-500 to-blue-600',
    link: 'https://github.com/yourusername/project' // Add when ready
  }
];
```

### Adding GitHub Links

When your projects are on GitHub, update the project cards to include links:

```jsx
<a href={project.link} target="_blank" rel="noopener noreferrer">
  <ExternalLink className="w-5 h-5" />
</a>
```

### Changing Colors

Edit CSS variables in `App.css`:

```css
:root {
  --accent-cyan: #00d9ff;    /* Your preferred color */
  --accent-purple: #a855f7;  /* Your preferred color */
  /* ... other variables */
}
```

### Adding Resume Download

1. Add your resume PDF to the `public` folder
2. Update the download button in `App.jsx`:

```jsx
<a href="/resume.pdf" download="Akhil_Kumaran_Resume.pdf">
  <button className="btn-download">
    <Download className="w-5 h-5" />
    Download Resume
  </button>
</a>
```

## 🎨 Design Features

- **Animated Grid Background**: Dynamic neural network-inspired background
- **Gradient Text Effects**: Eye-catching gradient animations
- **Smooth Scroll**: Seamless navigation between sections
- **Hover Interactions**: Engaging micro-interactions on cards and buttons
- **Responsive Typography**: Scales beautifully across all screen sizes
- **Glass Morphism**: Modern frosted glass effects on cards
- **Rotating Rings**: Animated profile image borders

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 is busy, Vite will automatically use the next available port.

### Module Not Found

Run `npm install` again to ensure all dependencies are installed.

### Build Errors

1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Try building with `npm run build`

### Deployment Issues on Vercel

- Ensure build command is: `npm run build`
- Ensure output directory is: `dist`
- Check Vercel deployment logs for specific errors

## 📧 Contact

- **Email**: akhildevcoder@gmail.com
- **LinkedIn**: [linkedin.com/in/akhil-kumaran-s](https://www.linkedin.com/in/akhil-kumaran-s)
- **GitHub**: Your GitHub profile (update when available)

## 📄 License

This project is open source and available for personal use and modification.

## 🙏 Acknowledgments

- **Fonts**: Google Fonts (Orbitron, Outfit)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Build Tool**: Vite

---

**Built with ❤️ by Akhil Kumaran S**

*Exploring AI, one project at a time* 🚀

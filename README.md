# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript, served using Node.js runtime.

## Features

✨ **Modern Design**
- Clean and professional layout
- Gradient color schemes
- Smooth animations and transitions
- Responsive design for all devices

🎨 **Interactive Elements**
- Mobile-friendly navigation menu
- Smooth scroll between sections
- Typing animation effect
- Scroll-to-top button
- Animated statistics counter
- Form validation with visual feedback

📱 **Fully Responsive**
- Mobile-first approach
- Adapts to tablets and desktops
- Touch-friendly interface

🚀 **Performance Optimized**
- Vanilla JavaScript (no frameworks)
- Lightweight and fast loading
- Intersection Observer for lazy animations
- Optimized CSS transitions

## Project Structure

```
portfolio-website/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete CSS styling and animations
├── script.js           # JavaScript for interactivity
├── server.js           # Node.js server to serve the website
├── package.json        # Node.js project configuration
└── README.md          # Project documentation
```

## Sections Included

1. **Hero Section** - Eye-catching introduction with call-to-action buttons
2. **About Section** - Personal information and statistics
3. **Skills Section** - Technology stack and expertise areas
4. **Projects Section** - Portfolio of completed projects
5. **Contact Section** - Contact information and form
6. **Footer** - Copyright and credits

## Getting Started

### Prerequisites

- Node.js (version 14.0.0 or higher)
- A modern web browser

### Installation

1. Navigate to the project directory:
```bash
cd portfolio-website
```

2. No dependencies to install! The project uses vanilla JavaScript.

### Running the Website

Start the Node.js server:

```bash
node server.js
```

Or using npm:

```bash
npm start
```

The server will start at `http://localhost:3000/`

Open your browser and visit: **http://localhost:3000**

### Custom Port

To run on a different port, set the PORT environment variable:

```bash
PORT=8080 node server.js
```

## Customization Guide

### Personalizing Content

1. **Update Personal Information** (`index.html`):
   - Change name in the hero section (line 35)
   - Update job title/subtitle (line 36)
   - Modify about section content (lines 63-66)
   - Update contact details (lines 247-259)

2. **Modify Colors** (`styles.css`):
   - Edit CSS variables in the `:root` section (lines 8-18)
   - Main colors: `--primary-color` and `--secondary-color`

3. **Add Your Projects** (`index.html`):
   - Update project cards in the Projects section (lines 145-228)
   - Add project images, descriptions, and links

4. **Update Skills** (`index.html`):
   - Modify skill cards and tags (lines 89-139)
   - Add or remove technologies

5. **Change Statistics** (`index.html`):
   - Update numbers in the About section stats (lines 67-79)

### Adding Real Images

Replace the placeholder SVG/emoji icons with real images:

```html
<!-- Replace in About section -->
<img src="path/to/your/photo.jpg" alt="Your Name">

<!-- Replace in Projects section -->
<img src="path/to/project-screenshot.jpg" alt="Project Name">
```

### Form Integration

The contact form currently shows an alert message. To integrate with a backend:

1. **Option 1: FormSpree**
   - Sign up at [formspree.io](https://formspree.io)
   - Update form action in `index.html`

2. **Option 2: Custom Backend**
   - Modify `script.js` to send data to your API endpoint
   - Example with fetch API:
   ```javascript
   fetch('/api/contact', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ name, email, subject, message })
   });
   ```

3. **Option 3: EmailJS**
   - Use EmailJS service for client-side email sending
   - Add EmailJS SDK and configure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox and grid
- **JavaScript (ES6+)** - Interactive functionality
- **Node.js** - Web server runtime

## Key Features Explained

### Smooth Scrolling
Navigation links smoothly scroll to sections with offset for fixed navbar.

### Intersection Observer
Sections and cards fade in as they enter the viewport for a dynamic feel.

### Mobile Navigation
Hamburger menu for mobile devices with smooth toggle animation.

### Form Validation
Real-time validation with visual feedback on input fields.

### Parallax Effect
Subtle parallax scrolling on the hero section for depth.

### Typing Animation
Hero subtitle types out character by character on page load.

### Counter Animation
Statistics numbers count up when scrolled into view.

## Deployment Options

### 1. Deploy to Heroku

```bash
# Install Heroku CLI and login
heroku login

# Create new app
heroku create your-portfolio-name

# Deploy
git push heroku main
```

### 2. Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### 3. Deploy to Netlify

- Push code to GitHub
- Connect repository to Netlify
- Configure build settings (if needed)
- Deploy!

### 4. Traditional Hosting

Upload all files to your web hosting via FTP. Ensure Node.js is supported or use the HTML/CSS/JS files with any web server.

## Performance Tips

1. **Optimize Images**: Compress images before adding them
2. **Minify CSS/JS**: Use build tools for production
3. **Enable Caching**: Configure server to cache static files
4. **Use CDN**: Serve assets from a CDN for faster loading

## Troubleshooting

**Port already in use:**
```bash
# Use a different port
PORT=3001 node server.js
```

**Server not starting:**
- Check Node.js is installed: `node --version`
- Ensure you're in the correct directory
- Check file permissions

**Styles not loading:**
- Clear browser cache
- Check browser console for errors
- Verify file paths in `index.html`

## License

MIT License - Feel free to use this template for your own portfolio!

## Contributing

Contributions, issues, and feature requests are welcome!

## Contact

For questions or feedback about this portfolio template, feel free to reach out.

---

**Built with ❤️ using HTML, CSS, JavaScript, and Node.js**

Enjoy building your portfolio! 🚀
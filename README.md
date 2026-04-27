# iGEM Patras 2026 - Professional Website

A modern, responsive, and fully functional website for the iGEM Patras 2026 team.

## Overview

This is a comprehensive website showcasing the work of iGEM Patras 2026, a multidisciplinary student team working in synthetic biology. The website features the team's projects, achievements, information about synthetic biology, and contact information.

## Features

✨ **Fully Responsive Design** - Works seamlessly on all devices
🎨 **Modern UI/UX** - Professional and attractive design
📱 **Mobile-First** - Optimized for mobile devices first
⚡ **Fast Performance** - Optimized for quick loading
🔍 **SEO Friendly** - Search engine optimized
♿ **Accessible** - WCAG compliant design
🌐 **Greek Language** - Fully localized for Greek audience
📧 **Contact Form** - Easy communication with the team

## Website Structure

### Main Sections:
1. **Navigation Bar** - Sticky navigation with mobile menu
2. **Hero Section** - Eye-catching introduction
3. **About Us** - Team information and mission
4. **Synthetic Biology Info** - Educational content
5. **iGEM Competition Details** - About the competition
6. **Projects Timeline** - All projects from 2020-2025
7. **Achievements** - Medals and recognition
8. **Team Composition** - Departments represented
9. **Community Engagement** - Social responsibility initiatives
10. **Contact Section** - Complete contact information
11. **Footer** - Academic affiliation

## Quick Start

### Option 1: Direct Browser Access
```bash
# Simply open the HTML file in your browser
open index.html

# Or right-click and select "Open with Browser"
```

### Option 2: Local Server (Recommended)

**Using Python (Built-in):**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js:**
```bash
npx http-server
```

**Using PHP:**
```bash
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## File Structure

```
iGEM-Patras-Main-Website/
├── index.html              # Main HTML file
├── styles.css              # Complete stylesheet
├── script.js               # Interactive features
├── README.md               # English documentation
├── README_GR.md            # Greek documentation
└── .gitignore              # Git ignore rules
```

## Customization

### Update the Logo

The website currently uses an SVG logo with a PNG fallback. To use your own PNG logo:

1. Place your logo file in the project root and name it `logo.png`
2. The website will automatically use the PNG if available (appears in navbar and hero section)
3. If `logo.png` is not found, it will fall back to `logo.svg`
4. PNG logo supports transparent backgrounds (recommended format: PNG with transparency)

The logo is referenced in two places in `index.html` (navbar and hero section) using:
```html
<picture>
    <source srcset="logo.png" type="image/png">
    <img src="logo.svg" alt="iGEM Patras Logo" class="navbar-logo">
</picture>
```

### Change Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #003d7a;      /* Main blue */
    --secondary-color: #0056b3;    /* Secondary blue */
    --accent-color: #ffc107;       /* Gold accent */
    --text-dark: #333;
    --text-light: #666;
    --bg-light: #f8f9fa;
    --bg-white: #ffffff;
}
```

### Update Content

Edit text directly in `index.html`. All sections are clearly commented.

### Add Your Own Images

Replace the placeholder image section with:
```html
<img src="your-image.jpg" alt="Your image description" loading="lazy">
```

## Deployment

### Option 1: GitHub Pages (Free)

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to Repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose "main" branch and "/root" folder
5. Your site will be available at `https://username.github.io/iGEM-Patras-Main-Website/`

### Option 2: Netlify (Free)

1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Deploy automatically on every push

### Option 3: Vercel (Free)

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Deploy with one click

### Option 4: Traditional Hosting

Upload files via FTP to your web hosting provider.

## JavaScript Features

- ✅ Mobile hamburger menu
- ✅ Smooth scrolling navigation
- ✅ Scroll animations for sections
- ✅ Contact form with validation
- ✅ Hover effects on cards
- ✅ Scroll-to-top button
- ✅ Active navigation highlighting
- ✅ Performance optimization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Adding Email Functionality

The current form is frontend-only. To actually send emails, set up a backend:

### With Node.js/Express:

```bash
npm install express nodemailer cors
```

```javascript
// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;
    
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        });
        
        await transporter.sendMail({
            from: email,
            to: 'igem@upatras.gr',
            subject: `Message from ${name}`,
            text: message,
            replyTo: email
        });
        
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

### Update the form in `script.js`:

```javascript
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: contactForm.querySelector('input[type="text"]').value,
        email: contactForm.querySelector('input[type="email"]').value,
        message: contactForm.querySelector('textarea').value
    };
    
    try {
        const response = await fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        
        if (response.ok) {
            alert('Message sent successfully!');
            contactForm.reset();
        }
    } catch (error) {
        alert('Error sending message');
    }
});
```

## SEO Optimization

Add to `<head>` in `index.html`:

```html
<meta name="description" content="iGEM Patras 2026 - Multidisciplinary team working in Synthetic Biology">
<meta name="keywords" content="iGEM, synthetic biology, healthcare, innovation, Patras">
<meta property="og:title" content="iGEM Patras 2026">
<meta property="og:description" content="Innovative solutions through Synthetic Biology">
<meta property="og:type" content="website">
<meta property="og:url" content="https://yourdomain.com">
<link rel="canonical" href="https://yourdomain.com">
```

## Analytics

Add Google Analytics:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Troubleshooting

### Page won't load
- Check all files are in the same directory
- Ensure file extensions are correct
- Check browser console for errors (F12)

### Icons not showing
- Verify Font Awesome CDN link is working
- Check internet connection
- Use different CDN if needed

### Form not working
- Current version is frontend-only
- Add backend to send actual emails (see section above)
- Check browser console for JavaScript errors

### Responsive issues
- Test in different screen sizes (DevTools: Ctrl+Shift+M / Cmd+Shift+M)
- Check CSS media queries in `styles.css`
- Clear browser cache

## Performance Tips

1. **Optimize Images**
   ```html
   <img src="image.jpg" loading="lazy" alt="description">
   ```

2. **Minify CSS/JS** for production
   ```bash
   # Tools: cssnano, uglify-js
   ```

3. **Enable GZIP compression** on your server

4. **Use CDN** for static files

5. **Cache** resources appropriately

## Contributing

To contribute improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Contact

**Email**: igem@upatras.gr

**Phone Numbers**:
- Chrysanthi Bousgoliti: +30 6931360355
- Vasiki Papavassiliou: +30 6974657046
- Asimina Paraskelopoulou: +30 6907085152
- Despina Koukoulaki: +30 6980647140
- Casey Zanai: +30 6980818464

## Location

**Laboratory of Pharmacogenomics and Personalized Therapy**
Department of Pharmacy
University of Patras
Patras, Greece

## License

© 2026 iGEM Patras. All rights reserved.

## Resources

- [iGEM Official Website](https://igem.org)
- [Synthetic Biology Resources](https://synbiobeta.com)
- [HTML/CSS/JavaScript Documentation](https://developer.mozilla.org)
- [Web Design Best Practices](https://www.w3.org/standards/webdesign/)

## Version History

- v1.0 (April 2026) - Initial release with all sections and features

---

**Built with ❤️ for iGEM Patras 2026**

*If you find this useful, please star the repository!* ⭐

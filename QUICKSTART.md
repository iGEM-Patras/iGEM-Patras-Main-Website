# 🚀 Quick Start Guide

## Get Started in 60 Seconds

### 1️⃣ View the Website Locally

**Easiest Method - Just Open in Browser:**
```
Right-click on index.html → Open with → Your Browser
```

**Or use Command Line:**

```bash
# Method 1: Python (built-in on most systems)
python -m http.server 8000

# Method 2: Node.js
npx http-server

# Method 3: PHP
php -S localhost:8000
```

Then open: **http://localhost:8000**

### 2️⃣ Deploy to the Internet

#### Option A: GitHub Pages (FREE, Recommended)
```bash
git add .
git commit -m "Deploy website"
git push origin main
```
Go to Settings → Pages → Enable for main branch

#### Option B: Netlify (FREE)
1. Go to netlify.com
2. Drag and drop the folder
3. Done! You get a live URL

#### Option C: Vercel (FREE)
1. Go to vercel.com
2. Import repository
3. Click Deploy

### 3️⃣ Customize Your Site

#### Change Colors:
```css
/* In styles.css - find :root section */
--primary-color: #003d7a;      /* Your color here */
--accent-color: #ffc107;       /* Your color here */
```

#### Update Text:
- Open index.html in any text editor
- Find the text you want to change
- Replace it with your content
- Save and refresh browser

#### Add Your Team Photo:
```html
<!-- In index.html, find .image-placeholder section -->
<!-- Replace with: -->
<img src="your-photo.jpg" alt="iGEM Patras 2026 Team" style="border-radius: 15px; width: 100%; max-width: 400px;">
```

### 4️⃣ Add Email Functionality

The contact form shows a confirmation message. To actually send emails:

**Easy Solution: Google Forms**
1. Create form at forms.google.com
2. Get the form action URL
3. Replace form in HTML with Google Form embed

**Advanced Solution: Backend Service**

Set up a simple Node.js backend:

```bash
npm install express nodemailer
```

Create `server.js`:
```javascript
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;
    
    // Configure your email here
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: 'your-email@gmail.com', pass: 'your-password' }
    });
    
    await transporter.sendMail({
        from: email,
        to: 'igem@upatras.gr',
        subject: `Message from ${name}`,
        text: message
    });
    
    res.json({ success: true });
});

app.listen(3000, () => console.log('Server running'));
```

Run: `node server.js`

### 5️⃣ Important Files to Know

| File | Purpose |
|------|---------|
| `index.html` | Main content & structure |
| `styles.css` | Colors, fonts, layout |
| `script.js` | Interactivity & animations |
| `README.md` | Full documentation (English) |
| `README_GR.md` | Full documentation (Greek) |

### 6️⃣ Mobile Testing

Test on different devices:

**On Your Laptop:**
- Open DevTools: `F12` or `Cmd+Option+I`
- Click toggle device toolbar (mobile icon)
- Try different screen sizes

**On Real Devices:**
1. Run local server: `python -m http.server 8000`
2. Find your IP: `ipconfig getifaddr en0` (Mac) or `ipconfig` (Windows)
3. Open: `http://YOUR_IP:8000` on your phone

### 7️⃣ Common Tweaks

**Change Team Name:**
```html
<!-- Find in index.html -->
<h2>iGEM Patras 2026</h2>
<!-- Change to your name -->
```

**Remove a Section:**
```html
<!-- Find the section in index.html and delete it -->
<section id="community" class="section community">
    ...entire section...
</section>
```

**Add Social Media Links:**
```html
<!-- Add to footer -->
<a href="https://instagram.com/your-profile" target="_blank">
    <i class="fab fa-instagram"></i>
</a>
```

**Change Button Color:**
```css
/* In styles.css */
.cta-button {
    background: #your-color; /* Change this */
}
```

### 8️⃣ Performance Optimization

**Compress Images:**
- Use tools like TinyPNG or ImageOptim
- Reduces loading time

**Minify Code (for production):**
```bash
# Install tools
npm install -g cssnano-cli uglify-js

# Minify
cssnano styles.css > styles.min.css
uglifyjs script.js > script.min.js
```

**Enable Caching:**
```html
<!-- Add to index.html <head> -->
<meta http-equiv="Cache-Control" content="max-age=3600">
```

### 9️⃣ SEO Optimization

**Add Meta Tags:**
```html
<!-- In <head> of index.html -->
<meta name="description" content="iGEM Patras 2026 - Leading the future of Synthetic Biology">
<meta name="keywords" content="iGEM, synthetic biology, innovation, healthcare">
<meta property="og:title" content="iGEM Patras 2026">
<meta property="og:description" content="Your description">
<meta property="og:image" content="your-image.jpg">
```

### 🔟 Analytics

**Add Google Analytics:**
```html
<!-- Add to <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXX');
</script>
```

---

## 🆘 Need Help?

### Website won't load?
1. Check file names (case-sensitive on Linux)
2. Ensure all files in same folder
3. Try different browser
4. Check console: `F12` → Console tab

### Buttons not working?
1. Check JavaScript console for errors (`F12`)
2. Ensure `script.js` is in same folder
3. Try hard refresh: `Ctrl+Shift+R` (Windows) / `Cmd+Shift+R` (Mac)

### Styling looks wrong?
1. Check `styles.css` is in same folder
2. Hard refresh browser
3. Ensure no browser extensions blocking CSS

### Form doesn't send email?
- Current version is frontend-only
- Follow "Email Functionality" section above
- Or use Google Forms instead

---

## 📱 Device Support

| Device | Status |
|--------|--------|
| Desktop (1024px+) | ✅ Perfect |
| Tablet (768px) | ✅ Perfect |
| Mobile (320px+) | ✅ Perfect |

---

## 🎨 Color Scheme

Default colors you can customize:

```
Primary Blue:     #003d7a
Secondary Blue:   #0056b3
Gold Accent:      #ffc107
Light Gray:       #f8f9fa
```

---

## 📞 Contact Support

**For iGEM Patras:**
- Email: igem@upatras.gr
- Phone: +30 6931360355

**For Web Issues:**
- Check this guide first
- Check README.md
- Review browser console (F12)

---

## ✅ Deployment Checklist

Before going live, verify:

- [ ] All text is updated
- [ ] Images are correct
- [ ] Links work correctly
- [ ] Contact form is functional (or remove it)
- [ ] Mobile version looks good
- [ ] No console errors (F12)
- [ ] Page loads quickly
- [ ] Social links are updated
- [ ] Footer information is correct
- [ ] SEO metadata is added

---

## 🚀 You're Ready!

Your professional website is ready to launch!

**Next Steps:**
1. Customize content
2. Test thoroughly
3. Deploy to internet
4. Share with team
5. Celebrate! 🎉

---

**Happy Building! 💻**

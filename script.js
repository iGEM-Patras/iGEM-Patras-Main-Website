// ===========================
// DARK MODE TOGGLE
// ===========================

const themeToggleBtn = document.getElementById('themeToggleBtn');
const body = document.body;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
body.classList.toggle('dark-mode', currentTheme === 'dark');
updateThemeButton();

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    updateThemeButton();
});

function updateThemeButton() {
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        themeToggleBtn.title = 'Switch to light mode';
    } else {
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        themeToggleBtn.title = 'Switch to dark mode';
    }
}

// ===========================
// MOBILE NAVIGATION TOGGLE
// ===========================

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===========================
// SMOOTH SCROLL TO SECTIONS
// ===========================

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===========================
// FORM SUBMISSION
// ===========================

// Contact form removed - using contact information section only

// ===========================
// SCROLL ANIMATION
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all section elements
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// ===========================
// NAVBAR BACKGROUND ON SCROLL
// ===========================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ===========================
// SMOOTH ANCHOR LINKS NAVIGATION
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// PROJECT CARDS ANIMATION
// ===========================

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// ===========================
// ACTIVE NAVIGATION LINK
// ===========================

window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add active style for navigation
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        color: var(--accent-color) !important;
        border-bottom: 2px solid var(--accent-color);
        padding-bottom: 5px;
    }
`;
document.head.appendChild(style);

// ===========================
// RANDOM PROJECT HIGHLIGHT
// ===========================

// Removed: unnecessary function

// ===========================
// PERFORMANCE OPTIMIZATION
// ===========================

// Removed: unused debounce function

// ===========================
// ACCESSIBILITY
// ===========================

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navLinks.classList.remove('active');
    }
});

// ===========================
// SCROLL TO TOP BUTTON
// ===========================

// Create scroll to top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: linear-gradient(135deg, #003d7a, #0056b3);
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 20px;
    cursor: pointer;
    display: none;
    z-index: 999;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'flex';
        scrollToTopBtn.style.alignItems = 'center';
        scrollToTopBtn.style.justifyContent = 'center';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
    this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
});

scrollToTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
});

// ===========================
// CONSOLE WELCOME MESSAGE
// ===========================

console.log('%ciGEM Patras 2026', 'font-size: 24px; font-weight: bold; color: #003d7a;');
console.log('%cΣυνθετική Βιολογία για καλύτερη υγεία', 'font-size: 14px; color: #0056b3;');
console.log('%cΕργαστήριο Φαρμακογονιδιωματικής και Εξατομικευμένης Θεραπείας', 'font-size: 12px; color: #666;');

// ===========================
// LANGUAGE TOGGLE
// ===========================

const langToggleBtn = document.getElementById('langToggleBtn');
const htmlTag = document.documentElement;

// Check for saved language preference or default to 'el' (Greek)
const currentLang = localStorage.getItem('language') || 'el';
htmlTag.lang = currentLang;
updateLangButton();
applyTranslations(currentLang);

langToggleBtn.addEventListener('click', () => {
    const newLang = htmlTag.lang === 'el' ? 'en' : 'el';
    htmlTag.lang = newLang;
    localStorage.setItem('language', newLang);
    updateLangButton();
    applyTranslations(newLang);
});

function updateLangButton() {
    if (htmlTag.lang === 'el') {
        langToggleBtn.textContent = 'EN';
        langToggleBtn.classList.remove('active');
    } else {
        langToggleBtn.textContent = 'ΕΛ';
        langToggleBtn.classList.add('active');
    }
}

function applyTranslations(lang) {
    document.querySelectorAll('[data-en][data-el]').forEach(element => {
        const text = lang === 'en' ? element.getAttribute('data-en') : element.getAttribute('data-el');
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = text;
        } else {
            element.innerHTML = text;
        }
    });
}

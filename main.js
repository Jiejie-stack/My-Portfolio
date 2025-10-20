// Main JavaScript file for Weijie Huang Portfolio
// Handles animations, interactions, and form submissions

document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeScrollReveal();
    initializeNavigation();
    initializeContactForm();
    initializeSkillBars();
    initializeProjectNavigation();
});

// Initialize text animations using Splitting.js and Anime.js
function initializeAnimations() {
    // Split text for character-by-character animation
    Splitting();
    
    // Animate hero text on page load
    const heroText = document.querySelector('[data-splitting]');
    if (heroText) {
        anime({
            targets: heroText.querySelectorAll('.char'),
            opacity: [0, 1],
            translateY: [50, 0],
            rotateZ: [10, 0],
            duration: 800,
            delay: anime.stagger(50),
            easing: 'easeOutExpo'
        });
    }
    
    // Animate floating elements
    const floatingElements = document.querySelectorAll('.floating-element');
    floatingElements.forEach(element => {
        anime({
            targets: element,
            translateY: [-10, 10],
            duration: 3000,
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutSine'
        });
    });
}

// Initialize scroll reveal animations
function initializeScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // Animate skill bars when they come into view
                if (entry.target.querySelector('.skill-fill')) {
                    animateSkillBars(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe all scroll reveal elements
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
}

// Initialize navigation interactions
function initializeNavigation() {
    const nav = document.querySelector('nav');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    
    // Add scroll-based navigation effects
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Hide/show navigation on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
        
        // Update active navigation links
        updateActiveNavigation();
    });
    
    // Mobile menu toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            // Add mobile menu functionality here if needed
            alert('Mobile menu functionality coming soon!');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Update active navigation based on current section
function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Initialize contact form functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', handleFormSubmission);
    
    // Add floating label functionality
    const inputs = contactForm.querySelectorAll('.form-input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });
}

// Handle contact form submission
function handleFormSubmission(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('.submit-btn');
    const submitText = form.querySelector('#submit-text');
    const loadingSpinner = form.querySelector('#loading-spinner');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    
    // Show loading state
    submitBtn.disabled = true;
    submitText.textContent = 'Sending...';
    loadingSpinner.style.display = 'block';
    
    // Hide previous messages
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';
    
    // Simulate form submission (replace with actual endpoint)
    setTimeout(() => {
        // Reset form state
        submitBtn.disabled = false;
        submitText.textContent = 'Send Message';
        loadingSpinner.style.display = 'none';
        
        // Show success message
        successMessage.style.display = 'block';
        form.reset();
        
        // Animate success message
        anime({
            targets: successMessage,
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 500,
            easing: 'easeOutBack'
        });
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
    }, 2000);
}

// Initialize skill bar animations
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-fill');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width') || '0';
        bar.style.width = '0%';
        
        // Store the target width for later animation
        bar.setAttribute('data-target-width', width);
    });
}

// Animate skill bars when they come into view
function animateSkillBars(container) {
    const skillBars = container.querySelectorAll('.skill-fill');
    
    skillBars.forEach((bar, index) => {
        const targetWidth = bar.getAttribute('data-target-width');
        
        anime({
            targets: bar,
            width: `${targetWidth}%`,
            duration: 1500,
            delay: index * 200,
            easing: 'easeOutCubic'
        });
    });
}

// Initialize project navigation
function initializeProjectNavigation() {
    const projectNav = document.querySelector('.project-nav');
    if (!projectNav) return;
    
    const navLinks = projectNav.querySelectorAll('a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Smooth scroll to target section
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add hover effects to cards
function initializeCardEffects() {
    const cards = document.querySelectorAll('.card-hover, .project-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            anime({
                targets: card,
                scale: 1.02,
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            anime({
                targets: card,
                scale: 1,
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
    });
}

// Initialize button hover effects
function initializeButtonEffects() {
    const buttons = document.querySelectorAll('button, .btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            anime({
                targets: button,
                scale: 1.05,
                duration: 200,
                easing: 'easeOutCubic'
            });
        });
        
        button.addEventListener('mouseleave', () => {
            anime({
                targets: button,
                scale: 1,
                duration: 200,
                easing: 'easeOutCubic'
            });
        });
    });
}

// Utility function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Utility function for throttling
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Initialize all effects when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initializeCardEffects();
    initializeButtonEffects();
});

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Recalculate any layout-dependent animations
    updateActiveNavigation();
}, 250));

// Preload critical images
function preloadImages() {
    const images = [
        'resources/hero-image.png',
        'resources/project-ai-platform.png',
        'resources/project-ai-calendar.png',
        'resources/project-analytics-dashboard.png'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize image preloading
preloadImages();
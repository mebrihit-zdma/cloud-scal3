// AI Products Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Removed smooth scrolling for anchor links

    // Navigation menu interactions
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all menu items
            menuItems.forEach(menuItem => {
                menuItem.classList.remove('active');
            });
            
            // Add active class to clicked item
            this.classList.add('active');
        });
    });

    // CTA button interactions
    const ctaButtons = document.querySelectorAll('.cta-button, .hero-cta, .explore-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // You can add navigation logic here
            console.log('CTA button clicked:', this.textContent.trim());
        });
    });

    // Article hover effects
    const articles = document.querySelectorAll('.featured-article, .article-item');
    articles.forEach(article => {
        article.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        article.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Social media icon interactions
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.classList.contains('youtube') ? 'YouTube' : 'LinkedIn';
            console.log(`${platform} icon clicked`);
            // Add your social media link logic here
        });
    });

    // Help link interaction
    const helpLink = document.querySelector('.help-link');
    if (helpLink) {
        helpLink.addEventListener('click', function() {
            // Add your help section logic here
            console.log('Help link clicked');
        });
    }

    // Removed parallax effect for hero section

    // Removed intersection observer for animations

    // Mobile menu toggle (if needed)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainMenu = document.querySelector('.main-menu');
    
    if (mobileMenuToggle && mainMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mainMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Form handling (if there are any forms)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            console.log('Form submitted');
        });
    });

    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Add loading states to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('loading')) {
                this.classList.add('loading');
                this.disabled = true;
                
                // Simulate loading (remove in production)
                setTimeout(() => {
                    this.classList.remove('loading');
                    this.disabled = false;
                }, 2000);
            }
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Escape key to close any open modals or menus
        if (e.key === 'Escape') {
            const activeMenus = document.querySelectorAll('.main-menu.active');
            activeMenus.forEach(menu => menu.classList.remove('active'));
        }
    });

    // Removed scroll event optimization

    // Add CSS classes for enhanced interactions
    document.body.classList.add('js-enabled');
    
    // Initialize any third-party libraries or plugins here
    console.log('AI Products page initialized successfully');
});

// Utility functions
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
    };
}

// Export functions for potential use in other scripts
window.AllProductsUtils = {
    debounce,
    throttle
};

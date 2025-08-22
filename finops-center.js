// FinOps Center Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive elements
    initPersonasTabs();
    initNavigationDots();
    initDropdownMenu();
    initSmoothScrolling();
    initButtonHoverEffects();
});

// Personas Tabs Functionality
function initPersonasTabs() {
    const tabs = document.querySelectorAll('.tab');
    const personaInfo = document.querySelector('.persona-info');
    const personaIcon = document.querySelector('.persona-icon img');
    const personaTitle = document.querySelector('.persona-info h3');
    const personaDescription = document.querySelector('.persona-info p');

    // Persona data - you can expand this with more personas
    const personas = {
        'Financial Admins': {
            icon: 'http://localhost:3845/assets/4a7f56018becfeaf7518986709ef838fb4de92a5.svg',
            title: 'Financial Admins',
            description: 'Financial Admins play a key role in FinOps Center. They have Ownership over many of the key CFM process and have visibility across financial budgets.'
        },
        'Vendor Management': {
            icon: 'http://localhost:3845/assets/4a7f56018becfeaf7518986709ef838fb4de92a5.svg',
            title: 'Vendor Management',
            description: 'Vendor Management teams oversee AWS relationships and contracts, ensuring optimal pricing and service levels.'
        },
        'Business Unit': {
            icon: 'http://localhost:3845/assets/4a7f56018becfeaf7518986709ef838fb4de92a5.svg',
            title: 'Business Unit',
            description: 'Business Unit leaders manage budgets and spending for their specific organizational units.'
        },
        'Department Manager': {
            icon: 'http://localhost:3845/assets/4a7f56018becfeaf7518986709ef838fb4de92a5.svg',
            title: 'Department Manager',
            description: 'Department Managers oversee cloud spending within their departments and ensure budget compliance.'
        },
        'Portfolio Manager': {
            icon: 'http://localhost:3845/assets/4a7f56018becfeaf7518986709ef838fb4de92a5.svg',
            title: 'Portfolio Manager',
            description: 'Portfolio Managers handle multiple projects and ensure overall cloud cost optimization.'
        },
        'Product Owners': {
            icon: 'http://localhost:3845/assets/4a7f56018becfeaf7518986709ef838fb4de92a5.svg',
            title: 'Product Owners',
            description: 'Product Owners manage cloud resources for their products and ensure cost-effective development.'
        },
        'Cloud Engineers': {
            icon: 'http://localhost:3845/assets/4a7f56018becfeaf7518986709ef838fb4de92a5.svg',
            title: 'Cloud Engineers',
            description: 'Cloud Engineers implement and maintain cloud infrastructure while optimizing costs.'
        }
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Update persona content
            const personaName = this.textContent.trim();
            const personaData = personas[personaName];
            
            if (personaData) {
                personaIcon.src = personaData.icon;
                personaIcon.alt = personaData.title + ' Icon';
                personaTitle.textContent = personaData.title;
                personaDescription.textContent = personaData.description;
                
                // Add smooth transition effect
                personaInfo.style.opacity = '0';
                setTimeout(() => {
                    personaInfo.style.opacity = '1';
                }, 150);
            }
        });
    });
}

// Navigation Dots Functionality
function initNavigationDots() {
    const dots = document.querySelectorAll('.dot');
    const simplifyCards = document.querySelectorAll('.simplify-card');
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            // Remove active class from all dots
            dots.forEach(d => d.classList.remove('active'));
            
            // Add active class to clicked dot
            this.classList.add('active');
            
            // Show/hide cards based on dot index
            simplifyCards.forEach((card, cardIndex) => {
                if (index === 0) {
                    // Show first 4 cards
                    card.style.display = cardIndex < 4 ? 'block' : 'none';
                } else {
                    // Show next set of cards (if any)
                    card.style.display = cardIndex >= 4 ? 'block' : 'none';
                }
            });
        });
    });
}

// Dropdown Menu Functionality
function initDropdownMenu() {
    const dropdownItems = document.querySelectorAll('.nav-item.dropdown');
    
    dropdownItems.forEach(item => {
        const dropdownMenu = item.querySelector('.dropdown-menu');
        
        // Show dropdown on hover
        item.addEventListener('mouseenter', function() {
            dropdownMenu.style.opacity = '1';
            dropdownMenu.style.visibility = 'visible';
            dropdownMenu.style.transform = 'translateY(0)';
        });
        
        // Hide dropdown when mouse leaves
        item.addEventListener('mouseleave', function() {
            dropdownMenu.style.opacity = '0';
            dropdownMenu.style.visibility = 'hidden';
            dropdownMenu.style.transform = 'translateY(-10px)';
        });
    });
}

// Smooth Scrolling for Anchor Links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 121; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Button Hover Effects
function initButtonHoverEffects() {
    const buttons = document.querySelectorAll('.btn, .cta-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Video Play Functionality
function initVideoPlay() {
    const playButtons = document.querySelectorAll('.play-button, .play-overlay');
    
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add video play functionality here
            console.log('Video play clicked');
            
            // Example: Open video modal or play video
            // You can implement a video modal or direct video player here
        });
    });
}

// Pricing Card Hover Effects
function initPricingCardEffects() {
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
}

// Initialize additional effects
document.addEventListener('DOMContentLoaded', function() {
    initVideoPlay();
    initPricingCardEffects();
});

// Scroll-based animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.simplify-card, .pricing-card, .persona-content');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
});

// Form handling for demo requests
function initFormHandling() {
    const demoButtons = document.querySelectorAll('.btn-white');
    
    demoButtons.forEach(button => {
        if (button.textContent.includes('Demo')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Add demo request functionality here
                console.log('Demo requested');
                
                // Example: Open contact form or redirect to demo page
                // window.location.href = '/demo-request';
            });
        }
    });
}

// Initialize form handling
document.addEventListener('DOMContentLoaded', function() {
    initFormHandling();
});

// Mobile menu toggle (if needed)
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
});

// Performance optimization: Lazy loading for images
function initLazyLoading() {
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
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', function() {
    initLazyLoading();
});

// Error handling for failed image loads
function initImageErrorHandling() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Replace with placeholder image or hide element
            this.style.display = 'none';
            console.warn('Image failed to load:', this.src);
        });
    });
}

// Initialize image error handling
document.addEventListener('DOMContentLoaded', function() {
    initImageErrorHandling();
});

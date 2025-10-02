// FinOps Center Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive elements
    initPersonasTabs();
    initNavigationDots();
    // initDropdownMenu(); // Removed - using click-based dropdowns from script.js
    initSmoothScrolling();
    initButtonHoverEffects();
    initMobileOptimizations();
    initTouchInteractions();
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
            icon: './assets/images/persona-financial-admins.svg',
            title: 'Financial Admins',
            description: 'Financial Admins play a key role in FinOps Center. They have Ownership over many of the key CFM process and have visibility across financial budgets.'
        },
        'Vendor Management': {
            icon: './assets/images/persona-vendor-management.svg',
            title: 'Vendor Management',
            description: 'Vendor Management teams oversee AWS relationships and contracts, ensuring optimal pricing and service levels.'
        },
        'Business Unit': {
            icon: './assets/images/persona-business-unit.svg',
            title: 'Business Unit',
            description: 'Business Unit leaders manage budgets and spending for their specific organizational units.'
        },
        'Department Manager': {
            icon: './assets/images/persona-department-manager.svg',
            title: 'Department Manager',
            description: 'Department Managers oversee cloud spending within their departments and ensure budget compliance.'
        },
        'Portfolio Manager': {
            icon: './assets/images/persona-portfolio-manager.svg',
            title: 'Portfolio Manager',
            description: 'Portfolio Managers handle multiple projects and ensure overall cloud cost optimization.'
        },
        'Product Owners': {
            icon: './assets/images/persona-product-owners.svg',
            title: 'Product Owners',
            description: 'Product Owners manage cloud resources for their products and ensure cost-effective development.'
        },
        'Cloud Engineers': {
            icon: './assets/images/persona-cloud-engineers.svg',
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

// Carousel Navigation Functionality (Button + Touch)
function initNavigationDots() {
    const gridContainer = document.querySelector('.simplifies-grid-container');
    const cards = document.querySelectorAll('.simplify-card');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    
    if (!gridContainer) return;
    
    // Check if mobile
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Mobile: Use native scrolling with touch support
        initMobileCarousel(gridContainer, cards);
    } else {
        // Desktop: Use button navigation
        initDesktopCarousel(gridContainer, cards, prevButton, nextButton);
    }
}

function initMobileCarousel(gridContainer, cards) {
    // Enable smooth scrolling for mobile
    gridContainer.style.scrollBehavior = 'smooth';
    
    // Add touch event listeners for better mobile experience
    let startX = 0;
    let scrollLeft = 0;
    let isScrolling = false;
    
    gridContainer.addEventListener('touchstart', function(e) {
        startX = e.touches[0].pageX - gridContainer.offsetLeft;
        scrollLeft = gridContainer.scrollLeft;
        isScrolling = true;
    });
    
    gridContainer.addEventListener('touchmove', function(e) {
        if (!isScrolling) return;
        e.preventDefault();
        const x = e.touches[0].pageX - gridContainer.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed multiplier
        gridContainer.scrollLeft = scrollLeft - walk;
    });
    
    gridContainer.addEventListener('touchend', function() {
        isScrolling = false;
    });
    
    // Add momentum scrolling for iOS
    gridContainer.style.webkitOverflowScrolling = 'touch';
}

function initDesktopCarousel(gridContainer, cards, prevButton, nextButton) {
    // Calculate card width including gap
    const cardWidth = 503; // Width from CSS
    const gap = 10; // Gap from CSS
    const cardTotalWidth = cardWidth + gap;
    
    // Calculate how many cards can be shown at once (4 cards)
    const cardsPerView = 4;
    
    // Calculate total number of slides needed (sliding one card at a time)
    const totalSlides = cards.length - cardsPerView + 1;
    
    // Current slide position
    let currentSlide = 0;
    
    // Function to update carousel position
    function updateCarousel(slideIndex) {
        currentSlide = slideIndex;
        const translateX = -(slideIndex * cardTotalWidth);
        gridContainer.style.transform = `translateX(${translateX}px)`;
        
        // Update arrow states
        if (prevButton) prevButton.disabled = slideIndex === 0;
        if (nextButton) nextButton.disabled = slideIndex === totalSlides - 1;
    }
    
    // Arrow click handlers
    if (prevButton) {
        prevButton.addEventListener('click', function() {
            if (currentSlide > 0) {
                updateCarousel(currentSlide - 1);
            }
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            if (currentSlide < totalSlides - 1) {
                updateCarousel(currentSlide + 1);
            }
        });
    }
    
    // Initialize arrow states
    if (prevButton) prevButton.disabled = true;
    if (nextButton) nextButton.disabled = totalSlides <= 1;
}

    // Removed smooth scrolling for anchor links
function initSmoothScrolling() {
    // Removed smooth scrolling functionality
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

// Removed scroll-based animations
function initScrollAnimations() {
    // Removed scroll-based animations functionality
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
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

// Mobile Optimizations
function initMobileOptimizations() {
    // Add mobile-specific optimizations
    if (window.innerWidth <= 768) {
        // Optimize images for mobile
        optimizeImagesForMobile();
        
        // Add mobile-specific event listeners
        addMobileEventListeners();
        
        // Optimize performance for mobile
        optimizePerformanceForMobile();
    }
}

function optimizeImagesForMobile() {
    const images = document.querySelectorAll('img');
    const videos = document.querySelectorAll('video');
    
    images.forEach(img => {
        // Add loading="lazy" for better performance
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
        
        // Optimize image sizes for mobile
        if (img.src.includes('.svg')) {
            img.style.maxWidth = '100%';
            img.style.height = 'auto';
        }
    });
    
    videos.forEach(video => {
        // Add preload="metadata" for better performance
        if (!video.hasAttribute('preload')) {
            video.setAttribute('preload', 'metadata');
        }
        
        // Add loading="lazy" for videos
        if (!video.hasAttribute('loading')) {
            video.setAttribute('loading', 'lazy');
        }
    });
}

function addMobileEventListeners() {
    // Add touch event listeners for better mobile interaction
    const interactiveElements = document.querySelectorAll('.btn, .tab, .simplify-card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.classList.add('touch-active');
        });
        
        element.addEventListener('touchend', function() {
            setTimeout(() => {
                this.classList.remove('touch-active');
            }, 150);
        });
    });
}

function optimizePerformanceForMobile() {
    // Reduce animations on mobile for better performance
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            * {
                animation-duration: 0.2s !important;
                transition-duration: 0.2s !important;
            }
        }
    `;
    document.head.appendChild(style);
}

// Touch Interactions
function initTouchInteractions() {
    // Add touch-friendly interactions
    addTouchFeedback();
    addSwipeGestures();
    optimizeScrollBehavior();
}

function addTouchFeedback() {
    // Add visual feedback for touch interactions
    const touchElements = document.querySelectorAll('.btn, .tab, .simplify-card, .pricing-card');
    
    touchElements.forEach(element => {
        element.addEventListener('touchstart', function(e) {
            this.style.transform = 'scale(0.98)';
            this.style.transition = 'transform 0.1s ease';
        });
        
        element.addEventListener('touchend', function(e) {
            this.style.transform = 'scale(1)';
        });
        
        element.addEventListener('touchcancel', function(e) {
            this.style.transform = 'scale(1)';
        });
    });
}

function addSwipeGestures() {
    // Add swipe gestures for carousel
    const carousel = document.querySelector('.simplifies-grid-container');
    if (!carousel) return;
    
    let startX = 0;
    let startY = 0;
    let distX = 0;
    let distY = 0;
    
    carousel.addEventListener('touchstart', function(e) {
        const touch = e.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;
    });
    
    carousel.addEventListener('touchmove', function(e) {
        if (!startX || !startY) return;
        
        const touch = e.touches[0];
        distX = touch.clientX - startX;
        distY = touch.clientY - startY;
        
        // Determine if this is a horizontal swipe
        if (Math.abs(distX) > Math.abs(distY)) {
            e.preventDefault();
        }
    });
    
    carousel.addEventListener('touchend', function(e) {
        if (Math.abs(distX) > 50 && Math.abs(distX) > Math.abs(distY)) {
            // Horizontal swipe detected
            if (distX > 0) {
                // Swipe right - scroll left
                this.scrollLeft -= 300;
            } else {
                // Swipe left - scroll right
                this.scrollLeft += 300;
            }
        }
        
        startX = 0;
        startY = 0;
        distX = 0;
        distY = 0;
    });
}

function optimizeScrollBehavior() {
    // Optimize scroll behavior for mobile
    let ticking = false;
    
    function updateScrollPosition() {
        // Add any scroll-based optimizations here
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollPosition);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
}

// Responsive handling
function handleResize() {
    // Reinitialize components on resize
    if (window.innerWidth <= 768) {
        initMobileCarousel(document.querySelector('.simplifies-grid-container'), document.querySelectorAll('.simplify-card'));
    } else {
        initDesktopCarousel(
            document.querySelector('.simplifies-grid-container'), 
            document.querySelectorAll('.simplify-card'),
            document.querySelector('.carousel-prev'),
            document.querySelector('.carousel-next')
        );
    }
}

// Add resize listener
window.addEventListener('resize', handleResize);

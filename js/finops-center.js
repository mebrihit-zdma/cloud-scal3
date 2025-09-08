// FinOps Center Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive elements
    initPersonasTabs();
    initNavigationDots();
    // initDropdownMenu(); // Removed - using click-based dropdowns from script.js
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

// Carousel Navigation Functionality (Button Only)
function initNavigationDots() {
    const gridContainer = document.querySelector('.simplifies-grid-container');
    const cards = document.querySelectorAll('.simplify-card');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    
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

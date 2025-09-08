// AWS MP Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Ensure hero section is always visible
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }
    // Removed smooth scrolling for anchor links

    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');
        
        if (question && answer && icon) {
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('active');
                
                // Close all FAQ items and reset their icons
                faqItems.forEach(faqItem => {
                    faqItem.classList.remove('active');
                    const faqIcon = faqItem.querySelector('.faq-icon');
                    if (faqIcon) {
                        faqIcon.src = 'assets/icons/plus-icon-black.svg';
                        faqIcon.alt = 'Expand';
                    }
                });
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                    icon.src = 'assets/icons/minus-icon-black.svg';
                    icon.alt = 'Collapse';
                }
            });
        }
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.cta-button, .hero-cta, .explore-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Service cards hover effects
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Article hover effects
    const articles = document.querySelectorAll('.featured-article, .article-item');
    articles.forEach(article => {
        article.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        article.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Social icons hover effects
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Help link hover effect
    const helpLink = document.querySelector('.help-link');
    if (helpLink) {
        helpLink.addEventListener('mouseenter', function() {
            const arrow = this.querySelector('.arrow-icon');
            if (arrow) {
                arrow.style.transform = 'translateX(5px)';
            }
        });
        
        helpLink.addEventListener('mouseleave', function() {
            const arrow = this.querySelector('.arrow-icon');
            if (arrow) {
                arrow.style.transform = 'translateX(0)';
            }
        });
    }

    // Dropdown menu functionality
    const dropdownMenus = document.querySelectorAll('.menu-item');
    dropdownMenus.forEach(menu => {
        const dropdownIcon = menu.querySelector('.dropdown-icon');
        if (dropdownIcon) {
            menu.addEventListener('mouseenter', function() {
                dropdownIcon.style.transform = 'rotate(180deg)';
            });
            
            menu.addEventListener('mouseleave', function() {
                dropdownIcon.style.transform = 'rotate(0deg)';
            });
        }
    });

    // Removed scroll animations

    // Removed parallax effect for hero section

    // Mobile menu toggle (if needed)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Form validation (if forms are added later)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add form validation logic here
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

    // Removed smooth reveal animations for sections

    // Initialize tooltips (if needed)
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('data-tooltip');
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
        });
        
        element.addEventListener('mouseleave', function() {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });

    console.log('AWS MP page JavaScript loaded successfully');
});

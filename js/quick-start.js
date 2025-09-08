// Quick Start Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Removed smooth scrolling for anchor links

    // Button click handlers
    const ctaButtons = document.querySelectorAll('.cta-button, .btn');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add your button functionality here
            console.log('Button clicked:', this.textContent);
        });
    });

    // Activity card hover effects
    const activityCards = document.querySelectorAll('.activity-card');
    activityCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Social icon hover effects
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.1)';
        });

        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });


    // Add loading animation for activity cards
    function animateActivityCards() {
        const cards = document.querySelectorAll('.activity-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            }, index * 100);
        });
    }

    // Trigger animation when page loads
    setTimeout(animateActivityCards, 500);

    // Removed intersection observer for scroll animations

    // Form validation (if any forms are added later)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add form validation logic here
            console.log('Form submitted');
        });
    });

    // Removed scroll to top functionality

    // Removed hover effects for scroll to top button
});

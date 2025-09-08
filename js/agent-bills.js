// Agent Bills Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality for the new tabbed interface
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button and corresponding panel
            this.classList.add('active');
            const targetPanel = document.getElementById(targetTab + '-panel');
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // Legacy tab switching functionality (for backward compatibility)
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
        });
    });

    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = question.querySelector('.faq-icon');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    // Reset icon to plus for closed items
                    const otherIcon = otherItem.querySelector('.faq-icon');
                    if (otherIcon) {
                        otherIcon.src = './assets/icons/plus-icon-black.svg';
                        otherIcon.alt = 'expand';
                    }
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            
            // Update icon based on state
            if (icon) {
                if (item.classList.contains('active')) {
                    icon.src = './assets/icons/minus-icon-black.svg';
                    icon.alt = 'collapse';
                } else {
                    icon.src = './assets/icons/plus-icon-black.svg';
                    icon.alt = 'expand';
                }
            }
            
            // Smooth scroll to the expanded answer if it's being opened
            if (!isActive) {
                setTimeout(() => {
                    answer.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest'
                    });
                }, 300);
            }
        });
    });

    // Removed smooth scrolling for anchor links

    // Button hover effects
    const buttons = document.querySelectorAll('.btn, .cta-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Navigation dropdown functionality - Removed hover-based logic to use click-based from script.js
    // const dropdowns = document.querySelectorAll('.dropdown');
    // dropdowns.forEach(dropdown => {
    //     const menu = dropdown.querySelector('.dropdown-menu');
    //     
    //     dropdown.addEventListener('mouseenter', function() {
    //         menu.style.opacity = '1';
    //         menu.style.visibility = 'visible';
    //         menu.style.transform = 'translateY(0)';
    //     });
    //     
    //     dropdown.addEventListener('mouseleave', function() {
    //         menu.style.opacity = '0';
    //         menu.style.visibility = 'hidden';
    //         menu.style.transform = 'translateY(-10px)';
    //     });
    // });

    // Removed intersection observer for animations

    // Form handling for demo requests
    const demoButtons = document.querySelectorAll('.btn-white');
    demoButtons.forEach(button => {
        if (button.textContent.includes('Demo')) {
            button.addEventListener('click', function() {
                // You can add form handling logic here
                console.log('Demo requested');
                // Example: open a modal or redirect to a form
            });
        }
    });

    // Buy now button handling
    const buyButtons = document.querySelectorAll('.btn-green');
    buyButtons.forEach(button => {
        if (button.textContent.includes('Buy')) {
            button.addEventListener('click', function() {
                // You can add purchase flow logic here
                console.log('Purchase initiated');
                // Example: redirect to checkout or open purchase modal
            });
        }
    });

    // Video play button handling
    const videoButtons = document.querySelectorAll('.btn-outline');
    videoButtons.forEach(button => {
        if (button.textContent.includes('Video')) {
            button.addEventListener('click', function() {
                // You can add video player logic here
                console.log('Video play requested');
                // Example: open video modal or redirect to video page
            });
        }
    });

    // Social media link handling
    const socialLinks = document.querySelectorAll('.social-icon');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.querySelector('img').alt.toLowerCase();
            console.log(`${platform} link clicked`);
            // Example: open social media in new tab
            // window.open(`https://${platform}.com/cloudscal3`, '_blank');
        });
    });

    // Removed scroll to top functionality

    // Removed scroll to top button

    // Performance optimization: Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
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
});

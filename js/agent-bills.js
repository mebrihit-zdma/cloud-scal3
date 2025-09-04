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
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            
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

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

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

    // Intersection Observer for animations
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
    const animatedElements = document.querySelectorAll('.feature-card, .benefit-card, .stat-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

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

    // Scroll to top functionality
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Add scroll to top button when scrolled down
    let scrollToTopButton = document.createElement('button');
    scrollToTopButton.innerHTML = '↑';
    scrollToTopButton.className = 'scroll-to-top';
    scrollToTopButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background-color: var(--primary-green);
        color: var(--dark-gray);
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollToTopButton);
    
    scrollToTopButton.addEventListener('click', scrollToTop);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopButton.style.opacity = '1';
            scrollToTopButton.style.visibility = 'visible';
        } else {
            scrollToTopButton.style.opacity = '0';
            scrollToTopButton.style.visibility = 'hidden';
        }
    });

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

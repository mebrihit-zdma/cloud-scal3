// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Superpower accordion functionality
    const superpowerItems = document.querySelectorAll('.superpower-item');
    
    superpowerItems.forEach(item => {
        const header = item.querySelector('.superpower-header');
        const content = item.querySelector('p');
        const expandIcon = item.querySelector('.expand-icon');
        
        header.addEventListener('click', () => {
            // Close all other items
            superpowerItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherIcon = otherItem.querySelector('.expand-icon');
                    if (otherIcon) {
                        otherIcon.style.transform = 'rotate(0deg)';
                    }
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            
            // Rotate icon
            if (expandIcon) {
                if (item.classList.contains('active')) {
                    expandIcon.style.transform = 'rotate(180deg)';
                } else {
                    expandIcon.style.transform = 'rotate(0deg)';
                }
            }
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-item span, .nav-item a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Check if it's an external link (like About Us)
            if (link.tagName === 'A' && link.href) {
                // Let the link work normally for external pages
                return;
            }
            
            e.preventDefault();
            const targetId = link.textContent.toLowerCase().replace(/\s+/g, '-');
            const targetSection = document.querySelector(`.${targetId}`);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // CTA button functionality
    const ctaButtons = document.querySelectorAll('.cta-button, .learn-more-btn, .cta-btn-primary, .cta-btn-secondary');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Add click animation
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 150);
            
            // You can add your form submission or navigation logic here
            console.log('CTA button clicked:', button.textContent);
            
            // Example: Scroll to contact form or open modal
            // For now, just show an alert
            if (button.textContent.includes('Get Started') || button.textContent.includes('Book A Demo')) {
                alert('Thank you for your interest! This would typically open a contact form or booking system.');
            }
        });
    });

    // Social media links
    const socialLinks = document.querySelectorAll('.social-icon');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Add click animation
            link.style.transform = 'scale(0.9) translateY(-2px)';
            setTimeout(() => {
                link.style.transform = 'translateY(-2px)';
            }, 150);
            
            // You can add actual social media URLs here
            const platform = link.querySelector('img').alt.toLowerCase();
            console.log(`Opening ${platform} profile`);
            
            // Example URLs (replace with actual URLs)
            const socialUrls = {
                'youtube': 'https://www.youtube.com/@cloudscal3',
                'linkedin': 'https://www.linkedin.com/company/cloud-scal3'
            };
            
            if (socialUrls[platform]) {
                window.open(socialUrls[platform], '_blank');
            }
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.product-card, .mission-item, .stat-item, .resource-item, .superpower-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Navigation scroll effect
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Product card hover effects
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = 'none';
        });
    });

    // Resource item hover effects
    const resourceItems = document.querySelectorAll('.resource-item');
    
    resourceItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(10px)';
            item.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
            item.style.backgroundColor = 'transparent';
        });
    });

    // Stats counter animation
    const stats = document.querySelectorAll('.stat-item h5');
    
    const animateCounter = (element, target) => {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (element.textContent.includes('$')) {
                element.textContent = '$' + Math.floor(current) + 'm';
            } else if (element.textContent.includes('%')) {
                element.textContent = Math.floor(current) + '%';
            } else if (element.textContent.includes('+')) {
                element.textContent = '+' + Math.floor(current);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 20);
    };

    // Observe stats for counter animation
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statElement = entry.target;
                const text = statElement.textContent;
                
                let target = 0;
                if (text.includes('30000')) target = 30000;
                else if (text.includes('13')) target = 13;
                else if (text.includes('60')) target = 60;
                
                animateCounter(statElement, target);
                statsObserver.unobserve(statElement);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => {
        statsObserver.observe(stat);
    });

    // Mobile menu toggle (for responsive design)
    const createMobileMenu = () => {
        if (window.innerWidth <= 768) {
            const navbar = document.querySelector('.navbar');
            const navMenu = document.querySelector('.nav-menu');
            
            if (!document.querySelector('.mobile-menu-toggle')) {
                const mobileToggle = document.createElement('button');
                mobileToggle.className = 'mobile-menu-toggle';
                mobileToggle.innerHTML = `
                    <span></span>
                    <span></span>
                    <span></span>
                `;
                
                mobileToggle.addEventListener('click', () => {
                    navMenu.classList.toggle('active');
                    mobileToggle.classList.toggle('active');
                });
                
                navbar.querySelector('.nav-container').appendChild(mobileToggle);
                
                // Add mobile menu styles
                const style = document.createElement('style');
                style.textContent = `
                    .mobile-menu-toggle {
                        display: none;
                        flex-direction: column;
                        background: none;
                        border: none;
                        cursor: pointer;
                        padding: 5px;
                    }
                    
                    .mobile-menu-toggle span {
                        width: 25px;
                        height: 3px;
                        background: white;
                        margin: 3px 0;
                        transition: 0.3s;
                    }
                    
                    .mobile-menu-toggle.active span:nth-child(1) {
                        transform: rotate(-45deg) translate(-5px, 6px);
                    }
                    
                    .mobile-menu-toggle.active span:nth-child(2) {
                        opacity: 0;
                    }
                    
                    .mobile-menu-toggle.active span:nth-child(3) {
                        transform: rotate(45deg) translate(-5px, -6px);
                    }
                    
                    @media (max-width: 768px) {
                        .mobile-menu-toggle {
                            display: flex;
                        }
                        
                        .nav-menu {
                            position: absolute;
                            top: 100%;
                            left: 0;
                            right: 0;
                            background: #151515;
                            flex-direction: column;
                            padding: 20px;
                            transform: translateY(-100%);
                            opacity: 0;
                            visibility: hidden;
                            transition: all 0.3s ease;
                        }
                        
                        .nav-menu.active {
                            transform: translateY(0);
                            opacity: 1;
                            visibility: visible;
                        }
                    }
                `;
                document.head.appendChild(style);
            }
        }
    };

    // Initialize mobile menu
    createMobileMenu();
    window.addEventListener('resize', createMobileMenu);

    // Form validation (if forms are added later)
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    // Add loading animation
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        
        // Add loading animation styles
        const loadingStyle = document.createElement('style');
        loadingStyle.textContent = `
            body:not(.loaded) {
                overflow: hidden;
            }
            
            body:not(.loaded)::before {
                content: '';
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #151515;
                z-index: 9999;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            body:not(.loaded)::after {
                content: 'Cloud Scal3';
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: #97F4BA;
                font-size: 24px;
                font-weight: 700;
                z-index: 10000;
            }
        `;
        document.head.appendChild(loadingStyle);
    });

    // Keyboard navigation support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Close any open modals or menus
            const activeMenus = document.querySelectorAll('.nav-menu.active, .superpower-item.active');
            activeMenus.forEach(menu => {
                menu.classList.remove('active');
            });
        }
    });

    // Accessibility improvements
    const addAccessibility = () => {
        // Add ARIA labels
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            if (!button.getAttribute('aria-label')) {
                button.setAttribute('aria-label', button.textContent.trim());
            }
        });

        // Add focus indicators
        const focusableElements = document.querySelectorAll('button, a, input, textarea, select');
        focusableElements.forEach(element => {
            element.addEventListener('focus', () => {
                element.style.outline = '2px solid #97F4BA';
                element.style.outlineOffset = '2px';
            });
            
            element.addEventListener('blur', () => {
                element.style.outline = 'none';
            });
        });
    };

    addAccessibility();

    // Resources page specific functionality
    const initializeResourcesPage = () => {
        // Filter tabs functionality
        const filterTabs = document.querySelectorAll('.filter-tab');
        
        filterTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                filterTabs.forEach(t => t.classList.remove('active'));
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Here you would typically filter the resources based on the selected tab
                console.log('Filter selected:', tab.textContent.trim());
            });
        });

        // Pagination functionality
        const paginationBtns = document.querySelectorAll('.pagination-btn');
        let currentPage = 1;
        const totalPages = 3;
        
        paginationBtns.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                if (index === 0 && currentPage > 1) {
                    // Previous page
                    currentPage--;
                } else if (index === 1 && currentPage < totalPages) {
                    // Next page
                    currentPage++;
                }
                
                // Update page info
                const pageInfo = document.querySelector('.page-info');
                if (pageInfo) {
                    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
                }
                
                // Here you would typically load new content for the page
                console.log('Navigated to page:', currentPage);
            });
        });

        // Video play button functionality
        const playButtons = document.querySelectorAll('.play-button, .play-overlay');
        
        playButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Add click animation
                button.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    button.style.transform = '';
                }, 150);
                
                // Here you would typically open a video player or modal
                console.log('Video play button clicked');
                alert('This would open a video player or modal with the selected content.');
            });
        });

        // Resource card click functionality
        const resourceCards = document.querySelectorAll('.resource-card');
        
        resourceCards.forEach(card => {
            card.addEventListener('click', () => {
                // Add click animation
                card.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    card.style.transform = '';
                }, 150);
                
                // Here you would typically navigate to the resource detail page
                const title = card.querySelector('h3').textContent;
                console.log('Resource clicked:', title);
                alert(`This would navigate to the detailed view of: ${title}`);
            });
        });

        // Featured resource view button
        const viewButton = document.querySelector('.view-button');
        if (viewButton) {
            viewButton.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Add click animation
                viewButton.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    viewButton.style.transform = '';
                }, 150);
                
                console.log('Featured resource view button clicked');
                alert('This would open the featured resource in detail view.');
            });
        }

        // Progress bar animation
        const progressBar = document.querySelector('.progress-bar');
        if (progressBar) {
            const animateProgress = () => {
                const scrollTop = window.pageYOffset;
                const docHeight = document.body.offsetHeight - window.innerHeight;
                const scrollPercent = (scrollTop / docHeight) * 100;
                
                progressBar.style.background = `linear-gradient(90deg, var(--primary-green) ${scrollPercent}%, rgba(255, 255, 255, 0.15) ${scrollPercent}%)`;
            };
            
            window.addEventListener('scroll', animateProgress);
            animateProgress(); // Initial call
        }
    };

    // Initialize resources page if we're on the resources page
    if (window.location.pathname.includes('resources.html')) {
        initializeResourcesPage();
    }

    console.log('Cloud Scal3 website loaded successfully!');
});

// Resources Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Filter tabs functionality
    const filterTabs = document.querySelectorAll('.filter-tab');
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            filterTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Here you would typically filter the resources based on the selected category
            const category = this.querySelector('span').textContent;
            filterResources(category);
        });
    });

    // Pagination functionality
    const prevBtn = document.querySelector('.pagination-btn.prev');
    const nextBtn = document.querySelector('.pagination-btn.next');
    const pageInfo = document.querySelector('.page-info');
    let currentPage = 1;
    const totalPages = 3;

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', function() {
            if (currentPage > 1) {
                currentPage--;
                updatePagination();
                loadPage(currentPage);
            }
        });

        nextBtn.addEventListener('click', function() {
            if (currentPage < totalPages) {
                currentPage++;
                updatePagination();
                loadPage(currentPage);
            }
        });
    }

    // Video play functionality
    const playButtons = document.querySelectorAll('.play-button, .play-overlay');
    
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Here you would typically open a video modal or navigate to video page
            console.log('Video play clicked');
            // For demo purposes, show an alert
            alert('Video player would open here');
        });
    });

    // View button functionality
    const viewButtons = document.querySelectorAll('.view-button');
    
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Here you would typically navigate to the resource detail page
            console.log('View resource clicked');
            // For demo purposes, show an alert
            alert('Resource detail page would open here');
        });
    });

    // Resource card hover effects
    const resourceCards = document.querySelectorAll('.resource-card');
    
    resourceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Update pagination display
    function updatePagination() {
        if (pageInfo) {
            pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
        }
        
        // Update button states
        if (prevBtn) {
            prevBtn.disabled = currentPage === 1;
            prevBtn.style.opacity = currentPage === 1 ? '0.5' : '1';
        }
        
        if (nextBtn) {
            nextBtn.disabled = currentPage === totalPages;
            nextBtn.style.opacity = currentPage === totalPages ? '0.5' : '1';
        }
    }

    // Filter resources based on category
    function filterResources(category) {
        const resourceCards = document.querySelectorAll('.resource-card');
        
        resourceCards.forEach(card => {
            const cardCategory = card.querySelector('.resource-tag').textContent;
            
            if (category === 'All' || cardCategory === category) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.5s ease-out';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Load page content (simulated)
    function loadPage(pageNumber) {
        console.log(`Loading page ${pageNumber}`);
        // Here you would typically make an API call to load new content
        // For demo purposes, we'll just log the action
    }

    // Initialize pagination
    updatePagination();

    // Add loading animation for images
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.style.opacity = '0.5';
            console.error('Failed to load image:', this.src);
        });
    });

    // Add intersection observer for animations
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
    const animatedElements = document.querySelectorAll('.resource-card, .featured-resource-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Keyboard navigation for accessibility
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft' && currentPage > 1) {
            currentPage--;
            updatePagination();
            loadPage(currentPage);
        } else if (e.key === 'ArrowRight' && currentPage < totalPages) {
            currentPage++;
            updatePagination();
            loadPage(currentPage);
        }
    });

    // Add focus management for better accessibility
    const focusableElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--primary-green)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });

    // Add error handling for failed resource loads
    window.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG') {
            console.error('Image failed to load:', e.target.src);
            e.target.style.display = 'none';
        }
    }, true);

    // Performance optimization: Lazy load images
    if ('IntersectionObserver' in window) {
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

        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
});

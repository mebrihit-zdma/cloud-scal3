// Resources Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Featured Resource Carousel functionality
    const featuredCarousel = document.querySelector('.featured-carousel');
    if (featuredCarousel) {
        const carouselContainer = featuredCarousel.querySelector('.featured-carousel-container');
        const slides = featuredCarousel.querySelectorAll('.featured-resource-card');
        const prevBtn = featuredCarousel.querySelector('.carousel-btn.prev');
        const nextBtn = featuredCarousel.querySelector('.carousel-btn.next');
        const indicators = featuredCarousel.querySelectorAll('.indicator');
        
        let currentSlide = 0;
        const totalSlides = slides.length;
        let isTransitioning = false;
        let autoPlayInterval;
        
        // Initialize carousel
        function initCarousel() {
            console.log('Initializing carousel with', totalSlides, 'slides');
            updateSlidePositions();
            updateNavigation();
            startAutoPlay();
            
            // Make sure the first slide is visible
            if (slides.length > 0) {
                slides[0].classList.add('active');
            }
        }
        
        // Update slide positions
        function updateSlidePositions() {
            slides.forEach((slide, index) => {
                slide.classList.remove('active', 'prev', 'next');
                
                if (index === currentSlide) {
                    slide.classList.add('active');
                } else if (index === getPrevIndex()) {
                    slide.classList.add('prev');
                } else if (index === getNextIndex()) {
                    slide.classList.add('next');
                }
            });
            
            console.log('Updated slide positions. Current slide:', currentSlide);
        }
        
        // Get previous slide index
        function getPrevIndex() {
            return currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
        }
        
        // Get next slide index
        function getNextIndex() {
            return currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
        }
        
        // Go to specific slide
        function goToSlide(index) {
            if (isTransitioning || index === currentSlide) return;
            
            isTransitioning = true;
            currentSlide = index;
            
            updateSlidePositions();
            updateNavigation();
            
            // Reset auto-play timer
            resetAutoPlay();
            
            // Remove transition flag after animation completes
            setTimeout(() => {
                isTransitioning = false;
            }, 600);
        }
        
        // Go to next slide
        function nextSlide() {
            goToSlide(getNextIndex());
        }
        
        // Go to previous slide
        function prevSlide() {
            goToSlide(getPrevIndex());
        }
        
        // Update navigation state
        function updateNavigation() {
            // Update indicators
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentSlide);
            });
            
            // Update button states
            if (prevBtn) {
                prevBtn.disabled = isTransitioning;
            }
            if (nextBtn) {
                nextBtn.disabled = isTransitioning;
            }
        }
        
        // Auto-play functionality
        function startAutoPlay() {
            autoPlayInterval = setInterval(() => {
                if (!isTransitioning) {
                    nextSlide();
                }
            }, 5000); // Change slide every 5 seconds
        }
        
        function resetAutoPlay() {
            if (autoPlayInterval) {
                clearInterval(autoPlayInterval);
                startAutoPlay();
            }
        }
        
        function stopAutoPlay() {
            if (autoPlayInterval) {
                clearInterval(autoPlayInterval);
            }
        }
        
        // Event listeners
        if (prevBtn) {
            prevBtn.addEventListener('click', prevSlide);
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', nextSlide);
        }
        
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => goToSlide(index));
        });
        
        // Pause auto-play on hover
        featuredCarousel.addEventListener('mouseenter', stopAutoPlay);
        featuredCarousel.addEventListener('mouseleave', startAutoPlay);
        
        // Keyboard navigation for carousel
        featuredCarousel.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                nextSlide();
            }
        });
        
        // Touch/swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        
        featuredCarousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        featuredCarousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextSlide(); // Swipe left
                } else {
                    prevSlide(); // Swipe right
                }
            }
        }
        
        // Initialize the carousel with a small delay to ensure DOM is ready
        setTimeout(() => {
            initCarousel();
        }, 100);
    }

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

    // Keyboard navigation for pagination (only when not in carousel)
    document.addEventListener('keydown', function(e) {
        // Check if the focused element is within the carousel
        const activeElement = document.activeElement;
        const isInCarousel = activeElement && featuredCarousel && featuredCarousel.contains(activeElement);
        
        if (!isInCarousel) {
            if (e.key === 'ArrowLeft' && currentPage > 1) {
                currentPage--;
                updatePagination();
                loadPage(currentPage);
            } else if (e.key === 'ArrowRight' && currentPage < totalPages) {
                currentPage++;
                updatePagination();
                loadPage(currentPage);
            }
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

// Resources Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Featured Resource Carousel functionality
    const featuredCarousel = document.querySelector('.featured-carousel');
    console.log('Featured carousel found:', !!featuredCarousel);
    
    if (featuredCarousel) {
        const carouselContainer = featuredCarousel.querySelector('.featured-carousel-container');
        const slides = featuredCarousel.querySelectorAll('.featured-resource-card');
        const prevBtn = featuredCarousel.querySelector('.carousel-btn.prev');
        const nextBtn = featuredCarousel.querySelector('.carousel-btn.next');
        const pageInfo = featuredCarousel.querySelector('.carousel-page-info');
        const filterTabs = featuredCarousel.querySelectorAll('.carousel-filter-tab');
        
        console.log('Carousel elements found:', {
            container: !!carouselContainer,
            slides: slides.length,
            prevBtn: !!prevBtn,
            nextBtn: !!nextBtn,
            pageInfo: !!pageInfo,
            filterTabs: filterTabs.length
        });
        
        let currentSlide = 0;
        let currentFilter = 'all';
        let filteredSlides = Array.from(slides);
        let isTransitioning = false;
        
        // Initialize carousel
        function initCarousel() {
            console.log('Initializing carousel with', slides.length, 'total slides');
            
            // Set initial state
            currentSlide = 0;
            currentFilter = 'all';
            filteredSlides = Array.from(slides);
            isTransitioning = false;
            
            // Make sure the first slide is visible
            if (slides.length > 0) {
                slides[0].classList.add('active');
            }
            
            updateSlidePositions();
            updateNavigation();
            updateFilterDisplay();
        }
        
        // Filter slides based on category
        function filterSlides(category) {
            console.log('Filtering slides by category:', category);
            currentFilter = category;
            currentSlide = 0;
            
            if (category === 'all') {
                filteredSlides = Array.from(slides);
            } else {
                filteredSlides = Array.from(slides).filter(slide => 
                    slide.getAttribute('data-category') === category
                );
            }
            
            console.log('Filtered slides count:', filteredSlides.length);
            
            // Hide all slides first
            slides.forEach(slide => {
                slide.classList.remove('active', 'prev', 'next');
                slide.style.display = 'none';
            });
            
            // Show filtered slides
            filteredSlides.forEach((slide, index) => {
                slide.style.display = 'flex';
                if (index === 0) {
                    slide.classList.add('active');
                }
            });
            
            updateSlidePositions();
            updateNavigation();
            updateFilterDisplay();
        }
        
        // Update slide positions
        function updateSlidePositions() {
            filteredSlides.forEach((slide, index) => {
                slide.classList.remove('active', 'prev', 'next');
                
                if (index === currentSlide) {
                    slide.classList.add('active');
                } else if (index === getPrevIndex()) {
                    slide.classList.add('prev');
                } else if (index === getNextIndex()) {
                    slide.classList.add('next');
                }
            });
            
            console.log('Updated slide positions. Current slide:', currentSlide, 'Filtered slides:', filteredSlides.length);
        }
        
        // Get previous slide index
        function getPrevIndex() {
            return currentSlide === 0 ? filteredSlides.length - 1 : currentSlide - 1;
        }
        
        // Get next slide index
        function getNextIndex() {
            return currentSlide === filteredSlides.length - 1 ? 0 : currentSlide + 1;
        }
        
        // Go to specific slide
        function goToSlide(index) {
            if (isTransitioning || index === currentSlide || index < 0 || index >= filteredSlides.length) return;
            
            console.log('Going to slide:', index);
            isTransitioning = true;
            currentSlide = index;
            
            updateSlidePositions();
            updateNavigation();
            
            // Remove transition flag after animation completes
            setTimeout(() => {
                isTransitioning = false;
            }, 600);
        }
        
        // Go to next slide
        function nextSlide() {
            if (filteredSlides.length > 1) {
                goToSlide(getNextIndex());
            }
        }
        
        // Go to previous slide
        function prevSlide() {
            if (filteredSlides.length > 1) {
                goToSlide(getPrevIndex());
            }
        }
        
        // Update navigation state
        function updateNavigation() {
            // Update page info
            if (pageInfo) {
                pageInfo.textContent = `Page ${currentSlide + 1} of ${filteredSlides.length}`;
                console.log('Updated page info:', pageInfo.textContent);
            }
            
            // Update button states
            if (prevBtn) {
                prevBtn.disabled = isTransitioning || filteredSlides.length <= 1;
            }
            if (nextBtn) {
                nextBtn.disabled = isTransitioning || filteredSlides.length <= 1;
            }
        }
        
        // Update filter display
        function updateFilterDisplay() {
            filterTabs.forEach(tab => {
                const filter = tab.getAttribute('data-filter');
                if (filter === currentFilter) {
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('active');
                }
            });
        }
        
        // Show page options dropdown
        function showPageOptions() {
            // Remove existing dropdown if any
            const existingDropdown = document.querySelector('.page-options-dropdown');
            if (existingDropdown) {
                existingDropdown.remove();
            }
            
            // Create dropdown container
            const dropdown = document.createElement('div');
            dropdown.className = 'page-options-dropdown';
            dropdown.style.cssText = `
                position: absolute;
                top: 100%;
                left: 50%;
                transform: translateX(-50%);
                background: #222222;
                border: 2px solid rgba(255, 255, 255, 0.2);
                border-radius: 12px;
                padding: 8px;
                z-index: 1000;
                min-width: 120px;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
                margin-top: 8px;
            `;
            
            // Create page options
            for (let i = 1; i <= filteredSlides.length; i++) {
                const pageOption = document.createElement('button');
                pageOption.className = 'page-option';
                pageOption.textContent = `Page ${i}`;
                pageOption.setAttribute('data-page', i);
                pageOption.style.cssText = `
                    display: block;
                    width: 100%;
                    padding: 8px 16px;
                    background: ${i === currentSlide + 1 ? 'var(--primary-green)' : 'transparent'};
                    color: ${i === currentSlide + 1 ? '#151515' : '#ffffff'};
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    font-family: 'Onest', sans-serif;
                    font-size: 16px;
                    text-align: left;
                    transition: all 0.2s ease;
                    margin-bottom: 2px;
                `;
                
                // Add hover effects
                pageOption.addEventListener('mouseenter', function() {
                    if (i !== currentSlide + 1) {
                        this.style.background = 'rgba(255, 255, 255, 0.1)';
                    }
                });
                
                pageOption.addEventListener('mouseleave', function() {
                    if (i !== currentSlide + 1) {
                        this.style.background = 'transparent';
                    }
                });
                
                // Add click handler with better event handling
                pageOption.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    const pageNumber = parseInt(this.getAttribute('data-page'));
                    console.log('Clicked page:', pageNumber);
                    goToSlide(pageNumber - 1);
                    dropdown.remove();
                });
                
                dropdown.appendChild(pageOption);
            }
            
            // Position the dropdown relative to the page info button
            pageInfo.style.position = 'relative';
            pageInfo.appendChild(dropdown);
            
            // Close dropdown when clicking outside
            setTimeout(() => {
                document.addEventListener('click', function closeDropdown(e) {
                    if (!pageInfo.contains(e.target)) {
                        dropdown.remove();
                        document.removeEventListener('click', closeDropdown);
                    }
                });
            }, 100);
            
            // Add escape key to close dropdown
            document.addEventListener('keydown', function closeOnEscape(e) {
                if (e.key === 'Escape') {
                    dropdown.remove();
                    document.removeEventListener('keydown', closeOnEscape);
                }
            });
        }
        
        // Event listeners
        if (prevBtn) {
            prevBtn.addEventListener('click', prevSlide);
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', nextSlide);
        }
        
        // Page info click functionality
        if (pageInfo) {
            pageInfo.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Page info clicked, showing dropdown...');
                showPageOptions();
            });
        }
        
        // Filter tab functionality
        filterTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                console.log('Filter tab clicked:', filter);
                filterSlides(filter);
            });
        });
        
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
        
        // Initialize the carousel
        initCarousel();
    }

    // Filter tabs functionality for main resources
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

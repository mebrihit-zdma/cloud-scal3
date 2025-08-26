// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Accordion functionality for Expertise Section
    const superpowerItems = document.querySelectorAll('.superpower-item');
    
    superpowerItems.forEach(item => {
        const header = item.querySelector('.superpower-header');
        const expandIcon = item.querySelector('.expand-icon');
        
        header.addEventListener('click', () => {
            // Close all other items
            superpowerItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // Dropdown menu functionality - click-based for all pages
    const dropdownItems = document.querySelectorAll('.nav-item.dropdown');
        dropdownItems.forEach(dropdown => {
            const dropdownMenu = dropdown.querySelector('.dropdown-menu');
            const dropdownIcon = dropdown.querySelector('.dropdown-icon');
            
            // Toggle dropdown on click (but not on dropdown items)
            dropdown.addEventListener('click', (e) => {
                // Don't toggle if clicking on a dropdown item
                if (e.target.classList.contains('dropdown-item')) {
                    return;
                }
                
                e.preventDefault();
                dropdown.classList.toggle('active');
                
                if (dropdown.classList.contains('active')) {
                    dropdownIcon.style.transform = 'rotate(180deg)';
                    dropdownMenu.style.opacity = '1';
                    dropdownMenu.style.visibility = 'visible';
                    dropdownMenu.style.transform = 'translateY(0)';
                } else {
                    dropdownIcon.style.transform = 'rotate(0deg)';
                    dropdownMenu.style.opacity = '0';
                    dropdownMenu.style.visibility = 'hidden';
                    dropdownMenu.style.transform = 'translateY(-10px)';
                }
            });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
                dropdownIcon.style.transform = 'rotate(0deg)';
                dropdownMenu.style.opacity = '0';
                dropdownMenu.style.visibility = 'hidden';
                dropdownMenu.style.transform = 'translateY(-10px)';
            }
        });
        
        // Handle dropdown item clicks - ALLOW NORMAL NAVIGATION
        const dropdownLinks = dropdown.querySelectorAll('.dropdown-item');
        dropdownLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Stop event propagation to prevent parent dropdown from handling it
                e.stopPropagation();
                
                // If it's an anchor tag with href, allow normal navigation
                if (link.tagName === 'A' && link.href) {
                    console.log('Allowing navigation to:', link.href);
                    // Close dropdown before navigation
                    dropdown.classList.remove('active');
                    dropdownIcon.style.transform = 'rotate(0deg)';
                    dropdownMenu.style.opacity = '0';
                    dropdownMenu.style.visibility = 'hidden';
                    dropdownMenu.style.transform = 'translateY(-10px)';
                    // Don't prevent default - let the browser handle the navigation
                    return;
                }
                
                // For non-anchor elements, prevent default and handle manually
                e.preventDefault();
                
                const linkText = link.textContent.trim();
                console.log('Dropdown item clicked:', linkText);
                
                if (linkText === 'FinOps Center') {
                    window.location.href = 'finops-center.html';
                }
                
                // Close dropdown after selection
                dropdown.classList.remove('active');
                dropdownIcon.style.transform = 'rotate(0deg)';
                dropdownMenu.style.opacity = '0';
                dropdownMenu.style.visibility = 'hidden';
                dropdownMenu.style.transform = 'translateY(-10px)';
            });
                 });
     });

    // Learn More button functionality - ALLOW NORMAL NAVIGATION
    const learnMoreButtons = document.querySelectorAll('.learn-more-btn');
    
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // If it's an anchor tag with href, allow normal navigation
            if (button.tagName === 'A' && button.href) {
                console.log('Allowing Learn More navigation to:', button.href);
                // Don't prevent default - let the browser handle the navigation
                return;
            }
            
            // For non-anchor elements, prevent default and handle manually
            e.preventDefault();
            console.log('Learn More button clicked:', button.textContent);
        });
    });

    // CTA button functionality
    const ctaButtons = document.querySelectorAll('.cta-button, .cta-btn-primary, .cta-btn-secondary');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('CTA button clicked:', button.textContent);
            
            if (button.textContent.includes('Get Started') || button.textContent.includes('Book A Demo')) {
                alert('Thank you for your interest! This would typically open a contact form or booking system.');
            }
        });
    });

    // Navigation links (excluding dropdown items)
    const navLinks = document.querySelectorAll('.nav-item:not(.dropdown) span, .nav-item:not(.dropdown) a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // If it's an anchor tag with href, allow normal navigation
            if (link.tagName === 'A' && link.href) {
                console.log('Allowing navigation to:', link.href);
                return;
            }
            
            e.preventDefault();
            console.log('Navigation link clicked:', link.textContent);
        });
    });

    console.log('Cloud Scal3 website loaded successfully!');
    
    // Debug: Test FinOps Center link
    const finopsLink = document.querySelector('a[href="finops-center.html"]');
    if (finopsLink) {
        console.log('FinOps Center link found:', finopsLink);
        finopsLink.addEventListener('click', (e) => {
            console.log('FinOps Center link clicked!');
        });
    } else {
        console.warn('FinOps Center link not found!');
    }
});

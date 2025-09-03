class MyNavbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav class="navbar">
          <div class="nav-container">
            <div class="logo">
              <a href="index.html" style="text-decoration: none; color: inherit;">
                <img src="./assets/images/logo.svg" alt="Cloud Scal3 Logo">
              </a>
            </div>
            
            <!-- Mobile Menu Toggle -->
            <div class="mobile-menu-toggle" id="mobile-menu-toggle">
              <span></span>
              <span></span>
              <span></span>
            </div>
            
            <div class="nav-menu" id="nav-menu">
              <div class="nav-item dropdown">
                <span>Products</span>
                <img src="./assets/icons/keyboard-arrow-up.svg" alt="dropdown" class="dropdown-icon">
                <div class="dropdown-menu">
                  <a href="finops-center.html" class="dropdown-item">FinOps Center</a>
                  <a href="agent-bills.html" class="dropdown-item">Agent Bills</a>
                </div>
              </div>
              <div class="nav-item dropdown">
                <span>Services</span>
                <img src="./assets/icons/keyboard-arrow-up.svg" alt="dropdown" class="dropdown-icon">
                <div class="dropdown-menu">
                  <a href="quick-start.html" class="dropdown-item">Quick Start</a>
                  <a href="ai-products.html" class="dropdown-item">AI Products</a>
                  <a href="aws-mp.html" class="dropdown-item">AWS MP</a>
                </div>
              </div>
              <div class="nav-item">
                <a href="resources.html" style="text-decoration: none; color: inherit;">Resources</a>
              </div>
              <div class="nav-item">
                <a href="about-us.html" style="text-decoration: none; color: inherit;">About Us</a>
              </div>
            </div>
            
            <a class="cta-link" href="about-us.html">
              Get Started Now
              <img src="./assets/icons/arrow-link-black.svg" alt="Arrow">
            </a>
          </div>
        </nav>
      `;
      
      // Initialize the navbar functionality
      this.initializeNavbar();
    }
    
    initializeNavbar() {
      const mobileMenuToggle = this.querySelector('#mobile-menu-toggle');
      const navMenu = this.querySelector('#nav-menu');
      const dropdowns = this.querySelectorAll('.dropdown');
      
      // Mobile menu toggle
      if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          
          navMenu.classList.toggle('active');
          mobileMenuToggle.classList.toggle('active');
          
          console.log('Mobile menu toggled:', navMenu.classList.contains('active'));
        });
      }
      
      // Dropdown functionality
      dropdowns.forEach(dropdown => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        const dropdownIcon = dropdown.querySelector('.dropdown-icon');
        
        if (dropdownMenu && dropdownIcon) {
          dropdown.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Close other dropdowns
            dropdowns.forEach(otherDropdown => {
              if (otherDropdown !== dropdown) {
                otherDropdown.classList.remove('active');
                const otherIcon = otherDropdown.querySelector('.dropdown-icon');
                if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
              }
            });
            
            // Toggle current dropdown
            const wasActive = dropdown.classList.contains('active');
            dropdown.classList.toggle('active');
            
            if (dropdownIcon) {
              if (dropdown.classList.contains('active')) {
                dropdownIcon.style.transform = 'rotate(180deg)';
              } else {
                dropdownIcon.style.transform = 'rotate(0deg)';
              }
            }
            
            // Debug logging
            console.log('Dropdown clicked:', dropdown.querySelector('span').textContent);
            console.log('Active state:', dropdown.classList.contains('active'));
            console.log('Dropdown menu display:', dropdownMenu.style.display);
          });
        }
      });
      
      // Close mobile menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!this.contains(e.target)) {
          navMenu.classList.remove('active');
          mobileMenuToggle.classList.remove('active');
        }
      });
      
      // Close mobile menu when window is resized to desktop
      window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
          navMenu.classList.remove('active');
          mobileMenuToggle.classList.remove('active');
        }
      });
    }
  }
  
  customElements.define("my-navbar", MyNavbar);
  
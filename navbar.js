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
        <div class="nav-menu">
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
    }
  }
  customElements.define("my-navbar", MyNavbar);
  
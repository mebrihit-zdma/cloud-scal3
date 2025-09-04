class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer class="footer">
        <div class="footer-content">
            <div class="footer-left">
                <div class="footer-logo">
                    <img src="./assets/images/logo.svg" alt="Cloud Scal3 Logo">
                </div>
                <p>We build AWS-native Agentic AI products that simplify complex business processes—empowering teams to act faster, smarter, and with less friction.</p>
            </div>
            <div class="footer-menu">
                <div class="footer-column">
                    <h4>Products</h4>
                    <ul>
                        <li><a href="finops-center.html">FinOps Center</a></li>
                        <li><a href="agent-bills.html">Agent Bills</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="ai-products.html">AI Product Framework</a></li>
                        <li><a href="quick-start.html">FinOps Center QuickStart</a></li>
                        <li><a href="aws-mp.html">Program Advisory</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4><a href="resources.html" style="text-decoration: none; color: inherit;">Resources</a></h4>
                </div>
                <div class="footer-column">
                    <h4><a href="about-us.html" style="text-decoration: none; color: inherit;">About Us</a></h4>
                </div>
            </div>
            <div class="footer-social">
                <a href="#" class="social-icon">
                    <img src="./assets/icons/youtube-icon.svg" alt="YouTube">
                </a>
                <a href="#" class="social-icon">
                    <img src="./assets/icons/linkedin-icon.svg" alt="LinkedIn">
                </a>
            </div>
        </div>
    </footer>
      `;
    }
  }
  customElements.define("my-footer", Footer);
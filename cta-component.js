class CtaComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <section class="cta-section">
          <div class="cta-content">
              <div class="cta-text">
                  <h2>Ready to Join the Agentic AI Revolution?</h2>
                  <p>Let's discuss how Cloud Scal3 can help transform your business with AWS-native AI solutions.</p>
              </div>
              <div class="cta-buttons">
                  <button class="cta-btn-secondary">Book A Demo Today</button>
                  <button class="cta-btn-primary">
                      Get Started Now
                      <img src="./assets/icons/arrow-downward.svg" alt="arrow">
                  </button>
              </div>
          </div>
        </section>
      `;
    }
  }
  customElements.define("cta-component", CtaComponent);
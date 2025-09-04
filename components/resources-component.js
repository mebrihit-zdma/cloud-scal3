class ResourcesComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <section class="resources">
        <div class="resources-header">
            <div class="resources-header-text">
                <h2>stay updated with our resources & insights</h2>
                <img src="./assets/icons/arrow-downward.svg" alt="arrow" class="arrow-icon">
            </div>
            <button class="learn-more-btn">Learn More</button>
        </div>
        <div class="resources-grid">
            <div class="featured-resource">
                <div class="resource-border"></div>
                <div class="resource-content">
                    <div class="resource-image">
                        <img src="./assets/images/labtop.svg" alt="Technical Packaging">
                    </div>
                    <h3>Technical Packaging for AWS Marketplace</h3>
                    <p>A case study of how one ISV leveraged AWS Marketplace to scale their SaaS solution rapidly. Lorem Ipsum is simply dummy text that has been used since the 1500s</p>
                    <div class="resource-meta">
                        <span class="resource-tag">Analytics</span>
                        <span class="resource-date">Jun 24 · 8 min read</span>
                    </div>
                </div>
            </div>
            <div class="resources-list">
                <div class="resource-item">
                    <div class="resource-item-content">
                        <h4>Navigating AWS Marketplace Pricing Models: SaaS vs. AMI</h4>
                        <div class="resource-item-meta">
                            <span class="resource-tag">Analytics</span>
                            <span class="resource-date">Feb 23 · 4 min read</span>
                        </div>
                    </div>
                    <div class="resource-item-image">
                        <img src="./assets/images/analytics.svg" alt="AWS Marketplace Pricing">
                    </div>
                </div>
                <div class="resource-item">
                    <div class="resource-item-content">
                        <h4>AWS Partner Programs: Maximizing Your MAP Benefits</h4>
                        <div class="resource-item-meta">
                            <span class="resource-tag">Marketing</span>
                            <span class="resource-date">Apr 3 · 7 min read</span>
                        </div>
                    </div>
                    <div class="resource-item-image">
                        <img src="./assets/images/marketing.svg" alt="AWS Partner Programs">
                    </div>
                </div>
                <div class="resource-item">
                    <div class="resource-item-content">
                        <h4>AWS Marketplace Success: From Idea to $1M ARR in 18 Months</h4>
                        <div class="resource-item-meta">
                            <span class="resource-tag">Business</span>
                            <span class="resource-date">May 13 · 5 min read</span>
                        </div>
                    </div>
                    <div class="resource-item-image">
                        <img src="./assets/images/business.svg" alt="AWS Marketplace Success">
                    </div>
                </div>
            </div>
        </div>
    </section>
      `;
    }
  }
  customElements.define("resources-component", ResourcesComponent);
// import react
import React from 'react';
import './Home.css';

// home component
export default function Home() {
  return (
    // main wrapper
    <div className="home-wrapper">
      
      {/* 1. hero section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Your cycle is <br/> just a <span className="highlight">tap ⚡</span> away.</h1>
          <p>Rent premium cycles across the city with transparent pricing, instant booking, and zero upfront commitments.</p>
          <div className="hero-buttons">
            <button className="btn-primary">Reserve Now</button>
            <button className="btn-outline">See Pricing</button>
          </div>
        </div>
        <div className="hero-images">
          {/* placeholder for hero images */}
          <div className="hero-img-box large-img">Hero Image 1</div>
          <div className="hero-img-box small-img">Hero Image 2</div>
        </div>
      </section>

      {/* 2. pick your vibe section */}
      <section className="vibe-section">
        <div className="section-header">
          <h2>Pick your <span className="highlight">vibe.</span></h2>
          <p>Whether it's a quick city dash or a mountain trail, find your perfect ride.</p>
        </div>
        <div className="vibe-grid">
          {/* category cards */}
          <div className="vibe-card"><div className="img-placeholder"></div><h3>City Cruisers</h3></div>
          <div className="vibe-card"><div className="img-placeholder"></div><h3>Mountain Bikes</h3></div>
          <div className="vibe-card"><div className="img-placeholder"></div><h3>Electric Cycles</h3></div>
          <div className="vibe-card"><div className="img-placeholder"></div><h3>Kids Bicycles</h3></div>
        </div>
      </section>

      {/* 3. featured rides section */}
      <section className="featured-section">
        <div className="section-header flex-between">
          <h2>Featured <span className="highlight">rides.</span></h2>
          <button className="btn-outline-small">View all</button>
        </div>
        <div className="featured-grid">
          {/* featured card 1 */}
          <div className="feature-card">
            <span className="badge">Available</span>
            <div className="img-placeholder-large"></div>
            <h3>Hero Sprint Pro</h3>
            <p className="card-desc">21 Gear • Mountain Bike</p>
            <div className="price-row">
              <span className="price">₹50 <small>/ hr</small></span>
              <button className="btn-primary-small">Reserve</button>
            </div>
          </div>
          {/* featured card 2 */}
          <div className="feature-card">
            <span className="badge">Available</span>
            <div className="img-placeholder-large"></div>
            <h3>Atlas Ultimate</h3>
            <p className="card-desc">Single Speed • City Ride</p>
            <div className="price-row">
              <span className="price">₹30 <small>/ hr</small></span>
              <button className="btn-primary-small">Reserve</button>
            </div>
          </div>
          {/* featured card 3 */}
          <div className="feature-card">
            <span className="badge">Available</span>
            <div className="img-placeholder-large"></div>
            <h3>Firefox Electric</h3>
            <p className="card-desc">Battery Powered • E-Bike</p>
            <div className="price-row">
              <span className="price">₹100 <small>/ hr</small></span>
              <button className="btn-primary-small">Reserve</button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. dark steps section */}
      <section className="steps-section dark-bg">
        <h2>Three steps to the <span className="highlight">open road.</span></h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-icon">🔍</div>
            <h3>01. Discover</h3>
            <p>Browse our curated fleet of cycles. Filter your perfect match.</p>
          </div>
          <div className="step-card">
            <div className="step-icon">📅</div>
            <h3>02. Book</h3>
            <p>Choose pickup date and duration. Lock your ride instantly.</p>
          </div>
          <div className="step-card">
            <div className="step-icon">🚲</div>
            <h3>03. Ride</h3>
            <p>Pick up your cycle, hit the road, and return when done.</p>
          </div>
        </div>
      </section>

      {/* 5. features grid */}
      <section className="features-section">
        <h2>Built for <span className="highlight">freedom</span>, <br/>priced with honesty.</h2>
        <div className="features-grid">
          <div className="feat-box"><h4>Instant Booking</h4><p>Reserve any ride in 60 seconds.</p></div>
          <div className="feat-box"><h4>Pay-Per-Hour</h4><p>Pay only for the time you ride.</p></div>
          <div className="feat-box"><h4>Verified & Maintained</h4><p>Fully serviced cycles for safety.</p></div>
          <div className="feat-box"><h4>24/7 Support</h4><p>We are here to help anytime.</p></div>
        </div>
      </section>

      {/* 6. CTA & Footer */}
      <section className="cta-section dark-bg">
        <div className="cta-box">
          <h2>Ready to <span className="highlight">ride?</span></h2>
          <p>Find your perfect cycle in under 60 seconds. No upfront payment.</p>
          <div className="hero-buttons">
            <button className="btn-primary">Browse Fleet</button>
          </div>
        </div>
      </section>
      
    
    </div>
  );
}
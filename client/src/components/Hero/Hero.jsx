import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Find Your Dream Job</h1>

        <p>
          Discover thousands of jobs from top companies across India.
        </p>

        <div className="hero-buttons">
          <button>Find Jobs</button>
          <button className="secondary">Post a Job</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

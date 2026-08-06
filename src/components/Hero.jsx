import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">

      <p className="hero-intro">
        Hello, I'm
      </p>

      <h1>Gewa Pratama</h1>

      <h2>Fresh Graduate Infromation Technology</h2>

      <p className="hero-description">
        I'm a fresh graduate passionate about web development,
        and anything related to artificial intelligence.

        Love to learn many things!
      </p>

      <a href="#projects" className="btn">
        View Projects
      </a>

    </section>
  );
}

export default Hero;
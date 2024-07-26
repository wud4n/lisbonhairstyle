function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div className="container">
        <nav>
          <div className="menu-toggle" onClick={toggleMenu}>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
          <ul className={isMenuOpen ? "show" : ""}>
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#services" onClick={toggleMenu}>Services</a></li>
            <li><a href="#reviews" onClick={toggleMenu}>Reviews</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Lisbon Hair Style</h1>
        <p>Experience the art of quality grooming</p>
        <a href="#contact" className="btn">
          Book Your Appointment
        </a>
      </div>
    </section>
  );
}
function Services() {
  const services = [
    { name: "Haircut", price: "€8", icon: "fas fa-cut" },
    { name: "Children Haircut", price: "€7", icon: "fas fa-child" },
    { name: "Shave", price: "€4", icon: "fas fa-cut" },
    { name: "Beard Trim", price: "€4", icon: "fas fa-user-tie" },
    { name: "Designs Haircut", price: "€15", icon: "fas fa-paint-brush" },
    { name: "Border Line", price: "€4", icon: "fas fa-border-style" },
    { name: "Head Massage", price: "€6", icon: "fas fa-hand-paper" },
    { name: "Beard Color", price: "€5", icon: "fas fa-fill-drip" },
    { name: "Hair Color", price: "€10", icon: "fas fa-palette" },
    { name: "Waxing", price: "€5", icon: "fas fa-hot-tub" },
    { name: "Threading", price: "€5", icon: "fas fa-hand-scissors" },
    { name: "Face Massage", price: "€5", icon: "fas fa-smile" },
    { name: "Face Scrub", price: "€3", icon: "fas fa-screwdriver" },
    { name: "Hair Wash", price: "€2", icon: "fas fa-shower" },
    { name: "Beard Designs", price: "€5", icon: "fas fa-pen-fancy" },
  ];

  return (
    <section id="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-item" data-aos="fade-up" data-aos-delay={index * 50}>
              <i className={`service-icon ${service.icon}`}></i>
              <div className="service-content">
                <h3 className="service-name">{service.name}</h3>
                <p className="service-price">{service.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2>Get in Touch</h2>
        <p>Address: Rua de Entrecampos 27c, Lisboa, Portugal</p>
        <p>Phone: +351 920 197 373</p>
        <p>Email: kapoorraja888@gmail.com</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2024 Lisbon Hair Style. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/raj.kumar.180/">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/rajaraja2523/">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

function Reviews() {
  const reviews = [
    {
      author: "João Silva",
      rating: 5,
      text: "Great service and friendly staff. Highly recommended!",
    },
    {
      author: "Maria Santos",
      rating: 4,
      text: "Good haircut at a reasonable price. Will come back.",
    },
    {
      author: "Pedro Oliveira",
      rating: 5,
      text: "Best barbershop in Lisbon! Professional and skilled barbers.",
    },
  ];

  return (
    <section id="reviews">
      <div className="container">
        <h2>Google Reviews</h2>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-item">
              <p className="review-text">{review.text}</p>
              <p className="review-author">- {review.author}</p>
              <div className="review-rating">
                {[...Array(review.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2>Get in Touch</h2>
        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>Rua de Entrecampos 27c, Lisboa, Portugal</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <p>+351 920 197 373</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <p>kapoorraja888@gmail.com</p>
            </div>
          </div>
          <div className="contact-cta">
            <h3>Ready for a Premium Experience?</h3>
            <a href="tel:+351920197373" className="btn">Call Now</a>
            <a href="mailto:kapoorraja888@gmail.com" className="btn">Email Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function LazyImage({ src, alt }) {
  return <img src={src} alt={alt} loading="lazy" />;
}

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

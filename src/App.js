import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';
import betterLogo from './others/ClearLogo2.jpg';
import './App.css';
import Gallery from './components/Gallery';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Slideshow />
          <img src={betterLogo} className="App-logo" alt="logo" />
          {/* <h1>Safer Hydrocleaning</h1> */}
        </header>
        <Navbar />
        <main>
          <Routes>
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2024 Safer Hydrocleaning. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, sectionId) => {
    if (location.pathname !== '/') {
      e.preventDefault();
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
      }, 100); // Adjust delay as needed
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" onClick={(e) => handleNavClick(e, 'about')}>
            About
          </Link>
        </li>
        <li>
          <Link to="/" onClick={(e) => handleNavClick(e, 'locations')}>
            Locations
          </Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/" onClick={(e) => handleNavClick(e, 'quote')}>
            Request Quote
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function Home() {
  return (
    <>
      <About />
      <Locations />
      <GalleryPreview />
      <Quote />
    </>
  );
}

function Slideshow() {
  const images = Array.from({ length: 49 }, (_, i) => require(`./images/image${i + 1}.jpg`));
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slideshow">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentImage ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="card">
      <h2>About Us</h2>
      <p>Welcome to Safer Hydrocleaning. We provide top-notch power washing services...</p>
    </section>
  );
}

function Locations() {
  return (
    <section id="locations" className="card">
      <h2>Our Locations</h2>
      <p>We serve the following areas...</p>
    </section>
  );
}

function GalleryPreview() {
  const images = Array.from({ length: 49 }, (_, i) => require(`./images/image${i + 1}.jpg`));
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="gallery-preview" className="card">
      <h2>Gallery</h2>
      <div className="gallery-preview">
        {images.map((image, index) => (
          <div
            key={index}
            className={`preview-slide ${index === currentImage ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
      <Link to="/gallery" className="view-more-link">View More</Link>
    </section>
  );
}

function Quote() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
    };

    // Log the data to console for now
    console.log('Form Data:', data);

    alert('Your request has been submitted!');
    event.target.reset();
  };

  return (
    <section id="quote" className="card">
      <h2>Request a Free Quote Now!</h2>
      <form id="quote-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" />
        <label htmlFor="service">Service Needed:</label>
        <textarea id="service" name="service" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default App;

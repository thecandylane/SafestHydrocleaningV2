import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import betterLogo from './others/ClearLogo2.jpg'
import './App.css';
// import Gallery from './components/Gallery.js';
// import About from './components/About.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Slideshow />
        <img src={betterLogo} className="App-logo" alt="logo" />
        {/* <h1>Safer Hydrocleaning</h1> */}
      </header>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#locations">Locations</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#quote">Request a Free Quote</a></li>
        </ul>
      </nav>
      <main>
        <About />
        <Locations />
        <Gallery />
        <Quote />
      </main>
      <footer>
        <p>&copy; 2024 Safer Hydrocleaning. All rights reserved.</p>
      </footer>
    </div>
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
  console.log(images)
  console.log(images.length)

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
function Gallery() {
  return (
    <section id="gallery" className="card">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {/* Images will go here */}
      </div>
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

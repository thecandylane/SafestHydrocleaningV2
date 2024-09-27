import React from 'react';
import '../css/Gallery.css';

const beforeImages = Array.from({ length: 10 }, (_, i) => require(`../images/image${i + 1}.jpg`));
const afterImages = Array.from({ length: 10 }, (_, i) => require(`../images/image${i + 1}.jpg`));

const Gallery = () => {
  return (
    <div className="gallery-container">
      <section className="gallery-section">
        <h2>Before</h2>
        <div className="gallery-grid">
          {beforeImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Before ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
      <section className="gallery-section">
        <h2>After</h2>
        <div className="gallery-grid">
          {afterImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`After ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;

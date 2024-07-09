import '../css/Gallery.css'
const images = Array.from({ length: 49 }, (_, i) => require(`../images/image${i + 1}.jpg`));

const Gallery = () => {
  return (
    <div className="gallery-route">
      <h2>Gallery</h2>
      <div className="gallery-full-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-image">
            <img src={image} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery
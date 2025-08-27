import React, { useState } from "react";
import "./Gallery.css";

export default function Gallery() {
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const gallery = [
    { src: `${process.env.PUBLIC_URL}/img/sofa1.jpg`, alt: 'Not Found' },
    { src: `${process.env.PUBLIC_URL}/img/sofa2.jpg`, alt: 'Not Found' },
    { src: `${process.env.PUBLIC_URL}/img/sofa3.jpg`, alt: 'Not Found' },
    { src: `${process.env.PUBLIC_URL}/img/sofa4.jpg`, alt: 'Not Found' },
    { src: `${process.env.PUBLIC_URL}/img/sofa5.jpg`, alt: 'Not Found' },
    { src: `${process.env.PUBLIC_URL}/img/sofa6.jpg`, alt: 'Not Found' },
    { src: `${process.env.PUBLIC_URL}/img/sofa7.jpg`, alt: 'Not Found' },
    { src: `${process.env.PUBLIC_URL}/img/sofa8.jpg`, alt: 'Not Found' },
    { src: `${process.env.PUBLIC_URL}/img/sofa9.jpg`, alt: 'Not Found' },
    { src: `${process.env.PUBLIC_URL}/img/sofa10.jpg`, alt: 'Not Found' },
    { src: `${process.env.PUBLIC_URL}/img/sofa11.jpg`, alt: 'Not Found' },
    { src: `${process.env.PUBLIC_URL}/img/sofa12.jpg`, alt: 'Not Found' },
  ];

  const handleImageClick = (index) => {
    setZoomedIndex(zoomedIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-5">
      <div className="container">
        <h2
          className="text-center fw-bold"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
          Work Gallery
        </h2>

        <div
          style={{
            width: '80px',
            height: '4px',
            backgroundColor: '#3b58e6',
            margin: '8px auto 24px',
            borderRadius: '2px',
          }}
        />

        <div className="row g-4">
          {gallery.map((s, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow-sm">
                <img
                  src={s.src}
                  alt={s.alt}
                  onClick={() => handleImageClick(index)}
                  className={`gallery-img ${zoomedIndex === index ? "zoomed" : ""}`}
                />
                <div className="overlay-icon">
                  {zoomedIndex === index ? "−" : "+"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

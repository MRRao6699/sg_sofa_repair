import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css'; // Import the custom styles
import { Link } from 'react-router-dom';

const Carousel_1 = () => {
        const PHONE = "+917351139800";
  return (
    <Carousel fade interval={3000} className="custom-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={`${process.env.PUBLIC_URL}/img/slider3.jpeg`}
          alt="Slide 1"
        />
        <div className="custom-caption ">
          <h1>Expert <br /> Sofa <br /> Restoration</h1>
          <a href={`tel:${PHONE}`} className="btn btn-danger">CONTACT US</a>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={`${process.env.PUBLIC_URL}/img/slider1.jpg`}
          alt="Slide 2"
        />
        <div className="custom-caption fw-bold ">
          <h1>Best <br /><span>SOFA REPAIR </span> <br /> Service</h1>
          <Link className="btn btn-danger mt-3" to="/about">KNOW MORE</Link>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousel_1;

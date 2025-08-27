
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // This includes Popper and enables toggles & dropdowns
import Navbar from "../navbar/Navbar";
import Section from "../section/Section";
import Service from "../services/Service";
import Work from "../works/Work";
import Review from "../review/Review";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Carousel_1 from "../carousel/Carousel_1";
import './Home.css'
import { Link } from "react-router-dom";
import Gallery from "../gallery/Gallery";
import Location from "../location/Location";


export default function Home() {




  const PHONE = "+917351139800";
  const WHATSAPP = "917351139800";

  // Smooth scroll helper
  useEffect(() => {
    const handler = (e) => {
      const anchor = e.target.closest("a[href^='#']");
      if (!anchor) return;
      const id = anchor.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);



  const faqs = [
    { q: "Do you provide doorstep service?", a: "Yes. Minor repairs & measurements are done at home. For heavy work we offer free pickup & delivery." },
    { q: "Which fabrics do you have?", a: "Wide range: suede, velvet, chenille, leatherette & genuine leather options with swatches." },
    { q: "How long does re‑upholstery take?", a: "Typically 24–72 hours depending on complexity & fabric availability." },
    { q: "Do you give a warranty?", a: "Yes, workmanship warranty on stitching & foam as applicable." },
  ];


  return (
    <div>
      <Navbar />
      <Carousel_1 />
      <Section />
      <Service />
      {/* <Work/> */}
      <Review />
      {/* Gallery */}
      <section id="gallery" className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
            Before & After  Repair
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

          <div className="row g-2">
            {/* Inner Card 1 */}
            <div className="col-md-6">
              <div className="hover-card">
                <img
                  src={`${process.env.PUBLIC_URL}/img/sofa_repair_1.jpg`}
                  alt="Sofa Cleaning"
                  className="img-fluid"
                />
                <div className="hover-content">
                  <div className="repair-buttons">
                    <div className="before">
                      <h5>Before Repair</h5>
                      <Link className="btn btn-secondary" to="/about">Learn More</Link>
                    </div>
                    <div className="after">
                      <h5>After Repair</h5>
                      <button className="btn btn-success">Contact Us</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Inner Card 2 */}
            <div className="col-md-6">
              <div className="hover-card">
                <img
                  src={`${process.env.PUBLIC_URL}/img/sofa_repair_2.jpg`}
                  alt="Sofa Repair"
                  className="img-fluid"
                />
                <div className="hover-content">
                  <div className="repair-buttons">
                    <div className="before">
                      <h5>Before Repair</h5>
                      <Link className="btn btn-secondary" to="/about">Learn More</Link>
                    </div>
                    <div className="after">
                      <h5>After Repair</h5>
                      <button className="btn btn-success">Contact Us</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-md-6">
              <div className="hover-card">
                <img
                  src={`${process.env.PUBLIC_URL}/img/sofa_repair_3.jpg`}
                  alt="Sofa Cleaning"
                  className="img-fluid"
                />
                <div className="hover-content">
                  <div className="repair-buttons">
                    <div className="before">
                      <h5>Before Repair</h5>
                      <Link className="btn btn-secondary" to="/about">Learn More</Link>
                    </div>
                    <div className="after">
                      <h5>After Repair</h5>
                      <button className="btn btn-success">Contact Us</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Inner Card 2 */}
            <div className="col-md-6">
              <div className="hover-card">
                <img
                  src={`${process.env.PUBLIC_URL}/img/sofa_repair_4.jpg`}
                  alt="Sofa Repair"
                  className="img-fluid"
                />
                <div className="hover-content">
                  <div className="repair-buttons">
                    <div className="before">
                      <h5>Before Repair</h5>
                      <Link className="btn btn-secondary" to="/about">Learn More</Link>
                    </div>
                    <div className="after">
                      <h5>After Repair</h5>
                      <button className="btn btn-success">Contact Us</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Areas */}
      <section id="areas" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
            Service Areas
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
          <div className="row g-3 text-center">
            {["Noida • Ghaziabad • Gurgaon", "Delhi • Faridabad • Greater Noida", "Dwarka • Rohini • Saket", "Indirapuram • Vaishali • Kaushambi", "Gurugram Sec‑52 • 65 • 66", "And more on request"].map((t) => (
              <div className="col-md-4" key={t}>
                <div className="p-3 border rounded bg-white">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Gallery />
      {/* Testimonials */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
            Happy Customers
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
            {[{ name: "Amit Verma", text: "Quick re‑upholstery and the finish looks brand new. Great pricing!" }, { name: "Sana Khan", text: "They replaced cushions in a day and matched my fabric perfectly." }, { name: "Rohit Sharma", text: "Recliner fixed at home within an hour. Highly recommended!" }].map((t) => (
              <div className="col-md-4" key={t.name}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <p className="fst-italic">“{t.text}”</p>
                    <footer className="fw-bold mt-3">— {t.name}</footer>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <Contact/> */}
      <Location />
      <Footer />
    </div>

  );

}
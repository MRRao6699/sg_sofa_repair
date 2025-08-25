import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Section.css';

const Section = () => {
    const PHONE = "+917351139800";
    const WHATSAPP = "917351139800";
    return (
        <>
  {/* Hero */ }
    <section className="bg-light py-5" id="home">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h1 className="fw-bold display-5">Give your sofa a <span className="text-success">brand‑new</span> life.</h1>
                    <p className="lead">Doorstep sofa repairs, re‑upholstery, and foam replacement by expert craftsmen. Fast turnaround, fair pricing, beautiful finishing.</p>
                    <div className="d-flex flex-wrap gap-2 my-3">
                        <a href={`tel:${PHONE}`} className="btn btn-success">📞 {PHONE}</a>
                        <a href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I%20need%20sofa%20repair%20service`} className="btn btn-dark" target="_blank" rel="noreferrer">💬 Chat on WhatsApp</a>
                        <a href="#contact" className="btn btn-outline-secondary">Get Free Quote</a>
                    </div>
                    <ul className="list-unstyled mt-3">
                        <li>✅ 25,000+ sofas serviced</li>
                        <li>✅ Doorstep inspection</li>
                        <li>✅ Workmanship warranty</li>
                        <li>✅ Pick‑up & delivery</li>
                    </ul>
                </div>
                <div className="col-md-6 text-center">
                    <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop" alt="sofa" className="img-fluid rounded shadow" />
                </div>
            </div>
        </div>
    </section>

        </>

    )
  
};

export default Section;

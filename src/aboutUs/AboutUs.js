import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Offer from "../offer/Offer";
import Work from "../works/Work";
import './AboutUs.css'

export default function AboutUs(){

    return(
        <>
        <Navbar/>

 <div className="hero-section text-white d-flex align-items-center">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-11 col-sm-12 text-center text-md-start">
            <h6 className="text-uppercase mb-2 small">SG Sofa Repair Services</h6>
            <h1 className="display-5 fw-bold">
              Expert <span className="text-success">Sofa Repairs</span> in <br className="d-none d-sm-block" />
              Noida Since <span className="text-danger">2010</span> 
            </h1>
            <p className="lead mt-3 mb-4">
              15+ years of trusted service. We bring the workshop to your doorstep with pickup and delivery.
            </p>

            {/* Call & WhatsApp Buttons */}
            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-md-start">
              <a href="tel:+917351139800" className="btn btn-primary btn-lg">
                📞 +91 7351139800
              </a>
              <a
                href="https://wa.me/917351139800"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-lg"
              >
                💬 Chat on WhatsApp
              </a>
            </div>

            {/* Stats Section */}
            <div className="stats-container mt-5">
              <div className="row text-center">
                <div className="col-12 col-md-4 mb-4 mb-md-0">
                  <div className="stat-number">2,000+</div>
                  <div className="stat-label">Sofas Repaired</div>
                </div>
                <div className="col-12 col-md-4 mb-4 mb-md-0">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Satisfaction Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </div>

     <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img 
            src=  {`${process.env.PUBLIC_URL}/img/sofa_1.jpeg`} 
            alt="Sofa Repair" 
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h2 className="mb-3 text-primary">About Our Company</h2>
          <h4 className="mb-4">Noida’s Most Trusted Sofa Repair Experts</h4>
          <p>
            15 years of experience in sofa repair and reupholstery, we have become the go-to choice for countless homes and businesses across Noida. Our team of skilled craftsmen ensures that every repair is done with precision, care, and a focus on customer satisfaction.
          </p>
          <p>
            We specialize in all types of sofa repair including fabric replacement, spring repair, frame reinforcement, and more. Whether it’s restoring your old sofa to its former glory or giving it a brand-new look, we've got you covered.
          </p>
          <ul className="list-unstyled mt-3">
            <li>✅ Experienced Technicians</li>
            <li>✅ High-Quality Materials</li>
            <li>✅ Affordable Pricing</li>
            <li>✅ On-Time Service</li>
          </ul>
        </div>
      </div>
    </div>
    <Offer/>
    <Footer/>
        </>
    )

}
import Carousel_2 from "../carousel/Carousel_2";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Offer from "../offer/Offer";


export default function Contact(){
const PHONE = "+917351139800";
    const WHATSAPP = "917351139800";
    return(
        <>
        <Navbar/>
        <Carousel_2/>
        <Offer/>
        {/* Contact */}
      <section id="contact" className="bg-dark text-light py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <h2 className="fw-bold">Get a Free Quote</h2>
              <p>Send us a message or ping on WhatsApp with sofa photos for a quick estimate.</p>
              <ul className="list-unstyled small">
                <li>📍 SG Sofa Centre, Noida</li>
                <li>📞 <a className="text-light" href={`tel:${PHONE}`}>{PHONE}</a></li>
                <li>💬 <a className="text-light" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">WhatsApp Chat</a></li>
                <li>✉️ info@sgsofacentre.com</li>
              </ul>
            </div>
            <div className="col-md-6">
              <form onSubmit={(e)=>{e.preventDefault(); alert("Thanks! We'll get back to you shortly.");}} className="bg-white text-dark p-4 rounded shadow">
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input required className="form-control" placeholder="Your name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input required className="form-control" placeholder="+91xxxxxxx" />
                </div>
                <div className="mb-3">
                  <label className="form-label">City / Area</label>
                  <input className="form-control" placeholder="e.g., Noida Sector 62" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows={4} placeholder="Tell us about your sofa…" />
                </div>
                <button className="btn btn-success w-100">Request Callback</button>
                <p className="text-muted small mt-2 text-center">Or call us directly at {PHONE}</p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
        </>
    )
}
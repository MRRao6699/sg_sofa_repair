import Footer from "../footer/Footer";
import Location from "../location/Location";
import Navbar from "../navbar/Navbar";
import Offer from "../offer/Offer";


export default function SofaRepair() {

  return (
    <>
      <Navbar />

      <div className="container py-5" style={{ backgroundColor: '#f8fbff' }}>
        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-md-6">
            <h2 className="fw-bold" style={{ fontFamily: "'Times New Roman', Times, serif", color: '#212529' }}>
              Expert Sofa Repair Services
            </h2>
            <p className="text-secondary" style={{ fontSize: '18px', fontWeight: '400' }}>
              We specialize in restoring your sofa to its original elegance. Our experienced technicians ensure high-quality repairs for all types of sofas, so you can enjoy comfort and style again.
            </p>

          </div>

          {/* Image */}
          <div className="col-md-6 text-center">
            <img
              src={`${process.env.PUBLIC_URL}/img/sofa_2.jpg`}
              alt="Sofa Repair"
              className="img-fluid rounded"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      <Offer />
      <Location />
      <Footer />
    </>
  )
}
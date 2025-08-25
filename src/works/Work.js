import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Offer from "../offer/Offer";
import Review from "../review/Review";
import Section from "../section/Section";



export default function Work(){

      const steps = [
    { title: "Free Inspection", desc: "Share photos on WhatsApp or book a doorstep visit." },
    { title: "Quote & Fabric", desc: "Choose materials—get a no‑obligation estimate." },
    { title: "Pickup/On‑site", desc: "We repair at home or take to workshop as needed." },
    { title: "Delivery & Warranty", desc: "Neat finishing, on‑time delivery, post‑service support." },
  ];
return(
    <>

    <Navbar/>
    <Section/>
          {/* Process */}
      <section id="process" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
    How it Works
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
            {steps.map((st, i) => (
              <div className="col-md-3" key={st.title}>
                <div className="card h-100 shadow-sm text-center">
                  <div className="card-body">
                    <div className="badge bg-success fs-6">{i + 1}</div>
                    <h6 className="mt-3 fw-bold">{st.title}</h6>
                    <p className="small text-muted">{st.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Review/>
      <Offer/>
      <Footer/>
    </>
)
}
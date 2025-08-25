

export default function Service(){
  const PHONE = "+917351139800";
    const WHATSAPP = "917351139800";
    
  const services = [
    { title: "Sofa Repair", desc: "Structural fixes, broken legs, frame & spring repairs.", src: `${process.env.PUBLIC_URL}/img/reclining_sofa.jpg`, alt:'recling_sofa'},
    { title: "Re‑Upholstery", desc: "Fabric/leatherette change with neat stitching & piping.", src: `${process.env.PUBLIC_URL}/img/reclining_sofa.jpg` },
    { title: "Foam/Cushion Replacement", desc: "High‑density foam, sagging seat makeover, custom sizes.", src: `${process.env.PUBLIC_URL}/img/reclining_sofa.jpg` },
    { title: "Recliner Repair", desc: "Handle, cable, motor, & mechanism service.", src: `${process.env.PUBLIC_URL}/img/reclining_sofa.jpg` },
    { title: "Polish & Restoration", desc: "Wood touch‑ups, color matching, shine restoration.", src: `${process.env.PUBLIC_URL}/img/reclining_sofa.jpg` },
    { title: "New Custom Sofa", desc: "Tailor‑made designs for homes, offices & lounges.", src: `${process.env.PUBLIC_URL}/img/reclining_sofa.jpg` },
  ];

    
    return(
        <>
        {/* Services */}
      <section id="services" className="py-5">
      <div className="container">
      <h2 className="text-center fw-bold" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
       Our Services
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
            {services.map((s) => (
              <div className="col-md-4" key={s.title}>
                <div className="card h-100 shadow-sm">
                <img src={s.src} alt={s.alt} style={{width:'100%',height:'250px',borderRadius:'10px'}} />

                  <div className="card-body text-center">

                    <h5 className="card-title mt-3">{s.title}</h5>
                    <p className="card-text">{s.desc}</p>
                    <a href={`https://wa.me/${WHATSAPP}?text=I%20am%20interested%20in%20${encodeURIComponent(s.title)}`} target="_blank" rel="noreferrer" className="btn btn-primary">Enquire now →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        </>
    )
}



export default function Footer(){

    return(
        <>
        {/* Footer */}
      <footer className="bg-black text-light py-3">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-0 small">© {new Date().getFullYear()} SG Sofa Centre. All rights reserved.</p>
          <div className="d-flex gap-3 small">
            <a href="#services" className="text-light">Services</a>
            <a href="#areas" className="text-light">Areas</a>
            <a href="#contact" className="text-light">Contact</a>
          </div>
        </div>
      </footer>
        </>
    )
}
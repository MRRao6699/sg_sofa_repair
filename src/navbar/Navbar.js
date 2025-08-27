import { FaGoogle, FaStar } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

export default function Navbar() {

   
    const [showPopup, setShowPopup] = useState(false);

    // Auto-show on load after delay (optional)
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 2000); // Show after 2 seconds
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => setShowPopup(false);
    const handleChat = () => {
        window.open("https://wa.me/917351139800", "_blank");
    };
    const callPhone = () => {
        window.location.href = "tel:+917351139800";
    };



    return (
        <>


  {/* <!-- Topbar Start --> */}
            <div className="container-fluid bg-dark px-5 d-lg-block">
                <div className="row gx-0 align-items-center" style={{ height: '45px' }}>
                    <div className="col-lg-8 text-center text-lg-start mb-lg-0">
                        <div className="d-flex flex-wrap" style={{fontFamily:'auto'}}>
                        <a href="tel:+919742549058" className="text-white text-decoration-none ">
                    📞 +917351139800
                </a>
                <a href="mailto:support@sgsofacenter.in" className="text-white text-decoration-none " style={{marginLeft:'10px'}}>
                    ✉ support@sgsofacenter.in
                </a>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
            {/* <!-- Topbar End --> */}


            {/* 🔘 Main Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
                <div className="container">
                    {/* 🪑 Logo */}
                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <img
                            src= {`${process.env.PUBLIC_URL}/img/logo_sofa.png`} // <- make sure this is in public folder
                            alt="SG Sofa Center"
                            height="50"
                            className="me-2"
                        />
                        
                    </a>

                    {/* ☰ Toggler */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* 🧭 Menu Items */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-medium">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>

                            {/* Dropdown */}
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="#"
                                    id="servicesDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Services
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                                    <li><Link className="dropdown-item" to="/sofa_repair">Sofa Repair</Link></li>
                                    <li><Link className="dropdown-item" to="/recliner">Recliner Service</Link></li>
                                    <li><Link className="dropdown-item" to="/fabric_change">Fabric Change</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/work">Our Works</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact_us">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* 🟢 Floating WhatsApp Icon (Always visible) */}
            <a
                href="https://wa.me/917351139800"
                className="position-fixed"
                style={{ bottom: "20px", left: "20px", zIndex: 1040 }}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
                    alt="WhatsApp"
                    className="rounded-circle"
                />
            </a>

            {/* ✅ WhatsApp Popup Box */}
            {showPopup && (
                <div
                    className="position-fixed bg-white border rounded shadow p-3"
                    style={{
                        bottom: "80px",
                        left: "20px",
                        width: "260px",
                        zIndex: 1050,
                    }}
                >
                    <div className="d-flex justify-content-between align-items-start mb-2">
                        <strong>Need Help?</strong>
                        <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={handleClose}
                        ></button>
                    </div>
                    <p className="mb-3">Hi! 👋<br />Chat with us on WhatsApp.</p>
                    <button className="btn btn-success w-100" onClick={handleChat}>
                        Chat Now
                    </button>
                </div>
            )}
            {/* Call Icon (bottom-right, always visible) */}
            <button
                onClick={callPhone}
                className="position-fixed bg-primary text-white d-flex justify-content-center align-items-center rounded-circle border-0"
                style={{
                    bottom: "20px",
                    right: "20px",
                    width: "48px",
                    height: "48px",
                    zIndex: 1050,
                    fontSize: "24px",
                    cursor: "pointer",
                }}
                aria-label="Call Us"
                title="Call Us"
            >
                📞
            </button>

           

        </>


    )

}
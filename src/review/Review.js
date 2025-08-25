import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import './Review.css';

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function Review() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false); // <-- Add this to trigger re-render after refs are set

  const reviews = [
    { name: "S R", date: "01/07/2025", rating: 5, review: "Good and prompt service." },
    { name: "Rahul K", date: "15/06/2025", rating: 4, review: "Service was good and on time. Would recommend." },
    { name: "Asha M", date: "12/06/2025", rating: 5, review: "Great service and quality work. Thanks!" },
    { name: "Prakash P", date: "05/06/2025", rating: 5, review: "Very good sofa cleaning service. Polite staff." },
    { name: "Neha S", date: "28/05/2025", rating: 5, review: "Excellent craftsmanship and support." },
    { name: "Ravi D", date: "20/05/2025", rating: 4, review: "Reliable and professional. Would hire again." },
  ];

  // Re-render once refs are attached
  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <div className="container my-5 p-3 bg-light">
      <div className="row align-items-center">
        {/* Summary */}
        <div className="col-md-4 text-center">
          <h4>EXCELLENT</h4>
          <div className="text-warning" style={{ fontSize: "50px" }}>
            ★★★★★
          </div>
          <p>Based on 289 reviews</p>
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.qELugBKhj33KWFcNR7_A-AHaDD?pid=Api&P=0&h=180"
            alt="Google"
            width="80"
          />
        </div>

        {/* Swiper */}
        <div className="col-md-8 position-relative">
          {swiperReady && (
            <Swiper
              modules={[Navigation, A11y]}
              spaceBetween={30}
              slidesPerView={2}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
              }}
            >
              {reviews.map((r, idx) => (
                <SwiperSlide key={idx}>
                  <div className="card p-3 shadow-sm h-100">
                    <div className="d-flex align-items-center mb-2">
                      <div
                        className="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center"
                        style={{ width: 40, height: 40 }}
                      >
                        {r.name.charAt(0)}
                      </div>
                      <div className="ms-2">
                        <strong>{r.name}</strong>
                        <div className="text-muted small">{r.date}</div>
                      </div>
                      <img
                        src="https://tse3.mm.bing.net/th/id/OIP.JflGW8e1fT4_ttSuFTQXJwHaHj?pid=Api&P=0&h=180"
                        alt="Google"
                        className="ms-auto"
                        width="20"
                      />
                    </div>
                    <div>
                      <span className="text-warning">{"★".repeat(r.rating)}</span>
                      <p className="mt-2 mb-0">{r.review}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
           {/* Buttons at the bottom center */}
  <div className="d-flex justify-content-center mt-3">
    <button ref={prevRef} className="btn btn-outline-secondary me-2">‹ Prev</button>
    <button ref={nextRef} className="btn btn-outline-primary">Next ›</button>
  </div>
        </div>
      </div>
    </div>
  );
}

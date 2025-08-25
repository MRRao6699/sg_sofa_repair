import './Offer.css'

export default function Offer(){

    return(
        <>
        <div className="promo-banner-container text-white py-4 px-3 px-md-5 my-4 rounded">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          <div className="col-md-8">
            <h4 className="fw-bold mb-2">Get 20% Off Your First Repair Service!</h4>
            <p className="mb-0">
              Limited time offer for new customers. Call now to book your discounted service.
            </p>
          </div>
          <div className="col-md-4 mt-3 mt-md-0 text-md-end">
            <a href="tel:+917351139800" className="btn btn-warning btn-lg fw-semibold">
              📞 Call Now
            </a>
          </div>
        </div>
      </div>
    </div>

        </>
    )
}
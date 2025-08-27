import Footer from "../footer/Footer";
import Location from "../location/Location";
import Navbar from "../navbar/Navbar";
import Offer from "../offer/Offer";
import Review from "../review/Review";


export default function FabricChange(){

    return(
        <>
        <Navbar/>


        <Review/>
        <Offer/>
        <Location/>
        <Footer/>
        </>
    )
}
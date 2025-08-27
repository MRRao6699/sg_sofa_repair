
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './home/Home';
import AboutUs from './aboutUs/AboutUs';
import SofaRepair from './services/SofaRepair';
import Recliner from './services/Recliner';
import FabricChange from './services/FabricChange';
import Contact from './contact/Contact';
import Work from './works/Work';
import ScrollToTop from './SrrollToTop';

export default function App() {

     return (

          <>
               <HashRouter>
                    <ScrollToTop /> {/* ✅ Self-closing */}
                    <Routes>
                         <Route path='/' element={<Home />}></Route>
                         <Route path='/about' element={<AboutUs />}></Route>
                         <Route path='/sofa_repair' element={<SofaRepair />}></Route>
                         <Route path='/recliner' element={<Recliner />}></Route>
                         <Route path='/fabric_change' element={<FabricChange />}></Route>
                         <Route path='/contact_us' element={<Contact />}></Route>
                         <Route path='/work' element={<Work />}></Route>
                    </Routes>
               </HashRouter>
          </>

     )
}

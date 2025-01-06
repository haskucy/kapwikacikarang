import {Routes, Route} from "react-router-dom"
import './App.css';

//Components
import Navbar from "./RootComponent/NavbarComponent"
import Footer from "./RootComponent/FooterComponent"

// Routes
import MainPage from "./MainPage/MainPage"
import MainServicePage from "./ServicesPage/MainServicesPage"
import AboutPage from "./AboutPage/AboutPage"
import NoExistPage from "./NoExistPage"
import WhatsAppButton from "./RootComponent/WhatsAppComponent";
import JasaAtestasiPage from "./ServicesPage/JasaAtestasiPage";
import JasaNonAtestasiPage from "./ServicesPage/JasaNonAtestasiPage";
import PemeriksaanKhususPage from "./ServicesPage/JasaAtestasi/PemeriksaanKhususPage";


function App() {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route path="/" element={<MainPage/>}/>
    <Route path="/services" element={<MainServicePage/>}/>
    <Route path="/services/jasa-atestasi" element={<JasaAtestasiPage/>}/>
    <Route path="/services/jasa-atestasi/pemeriksaan-khusus" element={<PemeriksaanKhususPage/>}/>
    <Route path="/services/jasa-non-atestasi" element={<JasaNonAtestasiPage/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="*" element={<NoExistPage />} />
  </Routes>
  <Footer/>
  <WhatsAppButton/>
  </>
  );
}

export default App

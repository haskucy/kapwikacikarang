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


function App() {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route path="/" element={<MainPage/>}/>
    <Route path="/services" element={<MainServicePage/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="*" element={<NoExistPage />} />
  </Routes>
  <Footer/>
  </>
  );
}

export default App

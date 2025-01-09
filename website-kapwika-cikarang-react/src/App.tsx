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
import PemeriksaanUmumPage from "./ServicesPage/JasaAtestasi/PemeriksaanUmumPage";
import PemeriksaanPengelolaanPage from "./ServicesPage/JasaAtestasi/PemeriksaanPengelolaanPage";
import ReviewPage from "./ServicesPage/JasaAtestasi/ReviewPage";
import JasaAdministrasiPage from "./ServicesPage/JasaNonAtestasi/JasaAdministrasiPage";
import JasaKompilasiLaporanKeuanganPage from "./ServicesPage/JasaNonAtestasi/JasaKompilasiLaporanKeuanganPage";
import KonsultasiManajemenDanPerpajakanPage from "./ServicesPage/JasaNonAtestasi/KonsultasiManajemenDanPerpajakanPage";
import PenyusunanAnggaranDanPenyusunanSistemAnggaranPage from "./ServicesPage/JasaNonAtestasi/PenyusunanAnggaranDanPenyusunanSistemAnggaranPage";
import PenyusunanSistemAkuntansiPage from "./ServicesPage/JasaNonAtestasi/PenyusunanSistemAkuntansiPage";
import SistemInformasiManajemenPage from "./ServicesPage/JasaNonAtestasi/SistemInformasiManajemenPage";
import StudiKelayakanPage from "./ServicesPage/JasaNonAtestasi/StudiKelayakanPage";


function App() {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route path="/" element={<MainPage/>}/>
    <Route path="/services" element={<MainServicePage/>}/>
    <Route path="/services/jasa-atestasi" element={<JasaAtestasiPage/>}/>
    <Route path="/services/jasa-atestasi/pemeriksaan-khusus" element={<PemeriksaanKhususPage/>}/>
    <Route path="/services/jasa-atestasi/pemeriksaan-umum" element={<PemeriksaanUmumPage/>}/>
    <Route path="/services/jasa-atestasi/pemeriksaan-pengelolaan" element={<PemeriksaanPengelolaanPage/>}/>
    <Route path="/services/jasa-atestasi/jasa-review" element={<ReviewPage/>}/>
    <Route path="/services/jasa-non-atestasi" element={<JasaNonAtestasiPage/>}/>
    <Route path="/services/jasa-non-atestasi/jasa-administrasi" element={<JasaAdministrasiPage/>}/>
    <Route path="/services/jasa-non-atestasi/jasa-kompilasi-laporan-keuangan" element={<JasaKompilasiLaporanKeuanganPage/>}/>
    <Route path="/services/jasa-non-atestasi/konsultasi-manajemen-dan-perpajakan" element={<KonsultasiManajemenDanPerpajakanPage/>}/>
    <Route path="/services/jasa-non-atestasi/penyusunan-anggaran-dan-penyusunan-sistem-anggaran" element={<PenyusunanAnggaranDanPenyusunanSistemAnggaranPage/>}/>
    <Route path="/services/jasa-non-atestasi/penyusunan-sistem-akuntansi" element={<PenyusunanSistemAkuntansiPage/>}/>
    <Route path="/services/jasa-non-atestasi/sistem-informasi-manajemen" element={<SistemInformasiManajemenPage/>}/>
    <Route path="/services/jasa-non-atestasi/studi-kelayakan" element={<StudiKelayakanPage/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="*" element={<NoExistPage />} />
  </Routes>
  <Footer/>
  <WhatsAppButton/>
  </>
  );
}

export default App

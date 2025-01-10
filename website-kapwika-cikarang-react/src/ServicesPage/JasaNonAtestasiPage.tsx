import "../Pages.css"
import NeedMoreInfoComponent from "../RootComponent/NeedMoreInfoComponent";

const JasaNonAtestasiPage = () => {
    return (
        <section className="page-container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/services/">Our Services</a></li>
            <li className="breadcrumb-item active" aria-current="page">Jasa Non Atestasi</li>
          </ol>
        </nav>
        <br></br> 
        <h1 className="page-title">Jasa Non Atestasi</h1>
        <p>
        Jasa non atestasi adalah jasa yang dihasilkan oleh akuntan publik yang didalamnya ia tidak memberikan suatu pendapat, keyakinan negatif, ringkasan temuan, atau bentuk lain keyakinan. Jenis jasa non atestasi yang dihasilkan oleh akuntan publik adalah jasa kompilasi, jasa perpajakan, jasa konsultasi manajemen.
        </p>

        <div className="non-atestasi-buttons">
        <div className="row-non-atestasi">
            <a href="/services/jasa-non-atestasi/jasa-kompilasi-laporan-keuangan"><button className="custom-btn-non-atestasi">1. Jasa Kompilasi Laporan Keuangan</button></a>
            <a href="/services/jasa-non-atestasi/penyusunan-sistem-akuntansi"><button className="custom-btn-non-atestasi">2. Penyusunan Sistem Akuntansi</button></a>
            <a href="/services/jasa-non-atestasi/sistem-informasi-manajemen"><button className="custom-btn-non-atestasi">3. Sistem Informasi Manajemen</button></a>
            <a href="/services/jasa-non-atestasi/penyusunan-anggaran-dan-penyusunan-sistem-anggaran"><button className="custom-btn-non-atestasi">4. Penyusunan Anggaran dan Penyusunan Sistem Anggaran</button></a>
        </div>
        <div className="row-non-atestasi">
          <a href="/services/jasa-non-atestasi/jasa-administrasi"><button className="custom-btn-non-atestasi">5. Jasa Administrasi</button></a>
          <a href="/services/jasa-non-atestasi/studi-kelayakan"><button className="custom-btn-non-atestasi">6. Studi Kelayakan (<i>Feasibility Study</i>)</button></a>
          <a href="/services/jasa-non-atestasi/konsultasi-manajemen-dan-perpajakan"><button className="custom-btn-non-atestasi">7. Konsultasi Manajemen Dan Perpajakan</button></a>
        </div>
    </div>
    <br></br>
        <br></br>
        <br></br>

        <NeedMoreInfoComponent/>
        </section>            
        );
  };
  
export default JasaNonAtestasiPage;
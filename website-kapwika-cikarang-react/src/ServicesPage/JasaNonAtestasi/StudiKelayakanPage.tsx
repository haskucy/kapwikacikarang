import { Helmet } from "react-helmet-async";
import "../../Pages.css"
import NeedMoreInfoComponent from "../../RootComponent/NeedMoreInfoComponent";

const StudiKelayakanPage = () => {
    return (
      <>
          <Helmet>
            <title>Studi Kelayakan (Feasibility Study) | Kantor Akuntan Publik Alister & Hamonangan</title>
            <meta name="description" content="KAP Alister & Hamonangan: Studi kelayakan (feasibility study) proyek untuk analisis dan evaluasi organisasi, pemasaran, teknis, dan keuangan." />
            <link rel="canonical" href="/services/jasa-non-atestasi/studi-kelayakan" />
          </Helmet>

        <section className="page-container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/services/">Our Services</a></li>
            <li className="breadcrumb-item"><a href="/services/jasa-non-atestasi/">Jasa Non Atestasi</a></li>
            <li className="breadcrumb-item active" aria-current="page">Studi Kelayakan</li>
          </ol>
        </nav>
        <br></br>        
        <h1 className="page-title">Studi Kelayakan (<i>Feasibility Study</i>)</h1>
        <p>
        Pelayanan studi kelayakan (<i>feasibility study</i>) mencakup kegiatan analisis dan evaluasi terhadap suatu rencana kegiatan atau proyek, yang meliputi aspek-aspek organisasi dan manajemen, pemasaran, teknis, keuangan dan ekonomi dengan tujuan untuk dapat memberikan rekomendasi mengenai kelayakan suatu proyek. Hasil studi kelayakan dapat digunakan sebagai dasar untuk menentukan apakah suatu rencana kegiatan atau proyek dapat dipertanggung jawabkan secara ekonomis.</p>
        <p>
        Studi kelayakan pada umumnya diperlukan dalam rangka:
        </p>
        <p>
        <ol>
          <li>Membangun suatu proyek baru atau pertuasan proyek yang telah ada.</li>
          <li>Memperoleh fasilitas kredit dari bank atau lembaga keuangan non bank.</li>
          <li>Sebagai salah satu persyaratan memperoleh ijin investasi dari Bank Koordinasi Penanaman Modal, balk dalam rangka Penanaman Modal Dalam Negeri (PMDN) maupun Penanaman Modal Asing (PMA).</li>
          <li>Menilai proyek dari suatu kegiatan tertentu.</li>
        </ol>
        </p>

        <br></br>
        <br></br>
        <br></br>

        <NeedMoreInfoComponent/>

        </section>            
        </>
        );
  };
  
export default StudiKelayakanPage;
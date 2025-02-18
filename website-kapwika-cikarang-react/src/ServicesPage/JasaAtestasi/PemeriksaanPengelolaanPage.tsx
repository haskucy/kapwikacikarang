import { Helmet } from "react-helmet-async";
import "../../Pages.css"
import NeedMoreInfoComponent from "../../RootComponent/NeedMoreInfoComponent";

const PemeriksaanPengelolaanPage = () => {
    return (
    <>
      <Helmet>
        <title>Pemeriksaan Pengelolaan (Management Audit) | Kantor Akuntan Publik Alister & Hamonangan</title>
        <meta name="description" content="KAP WIKA Cikarang: Pemeriksaan pengelolaan (Management Audit) untuk evaluasi manajemen yang sehat, efektif, dan efisien." />
        <link rel="canonical" href="/services/jasa-atestasi/pemeriksaan-pengelolaan" />
      </Helmet>
        <section className="page-container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/services/">Our Services</a></li>
            <li className="breadcrumb-item"><a href="/services/jasa-atestasi/">Jasa Atestasi</a></li>
            <li className="breadcrumb-item active" aria-current="page">Pemeriksaan Pengelolaan</li>
          </ol>
        </nav>
        <br></br>        
        <h1 className="page-title">Pemeriksaan Pengelolaan (<i>Management Audit</i>)</h1>
        <p>
        Pemeriksaan pengelolaan atau disebut juga pemeriksaan operasional merupakan evaluasi secara bebas, selektif dan analisis terhadap suatu program, kegiatan atau fungsi dalam manajemen untuk memberikan saran atau informasi penting demi terselenggaranya pelaksanaan manajemen yang sehat, efektif dan efisien.
        </p>

        <p>
        Pemeriksaan manajemen meliputi:
        </p>

        <p>
        <ol>
          <li>Menilai apakah sistem akuntansi dan pelaporan sudah cukup memadai.</li>
          <li>Menilai apakah kegiatan operasi perusahaan sudah berjalan secara efektif dan efisien.</li>
          <li>Menilai apakah cara-cara yang ditempuh untuk mencapai tujuan tertentu telah dilaksanakan dengan biaya yang efisien.</li>
          <li>Menilai efektivitas kerja, saluran distribusi, serta efektivitas pemasaran.</li>
          <li>Menilai efisiensi perusahaan, baik intern maupun dalam perbandingannya dengan perusahaan pesaing atau dengan rata-rata perusahaan sejenis.</li>
        </ol>
        </p>

        <p>
        Kami juga memiliki ijin sebagai Likuidator Perseroan sesuai UU 40 tahun 2007 tentang Perseroan Terbatas. KAP Alister & Hamonangan terdaftar di Otoritas Jasa Keuangan (OJK),  Bank Indonesia serta rekanan BPK RI.
        </p>

        <br></br>
        <br></br>
        <br></br>

        <NeedMoreInfoComponent/>

        </section>       
        </>     
        );
  };
  
export default PemeriksaanPengelolaanPage;
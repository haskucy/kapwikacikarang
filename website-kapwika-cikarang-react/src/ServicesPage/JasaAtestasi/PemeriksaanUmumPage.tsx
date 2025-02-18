import { Helmet } from "react-helmet-async";
import "../../Pages.css"
import NeedMoreInfoComponent from "../../RootComponent/NeedMoreInfoComponent";

const PemeriksaanUmumPage = () => {
    return (
      <>
            <Helmet>
              <title>Pemeriksaan Umum (General Audit) | Kantor Akuntan Publik Alister & Hamonangan</title>
              <meta name="description" content="KAP WIKA Cikarang: Pemeriksaan umum (General Audit) laporan keuangan untuk memberikan pernyataan pendapat profesional." />
              <link rel="canonical" href="/services/jasa-atestasi/pemeriksaan-umum" />
            </Helmet>
        <section className="page-container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/services/">Our Services</a></li>
            <li className="breadcrumb-item"><a href="/services/jasa-atestasi/">Jasa Atestasi</a></li>
            <li className="breadcrumb-item active" aria-current="page">Pemeriksaan Umum</li>
          </ol>
        </nav>
        <br></br>
        <h1 className="page-title">Pemeriksaan Umum (<i>General Audit</i>)</h1>
        <p>
        Yang dimaksud dengan Pemeriksan Umum adalah pemeriksaan yang dilakukan oleh Kantor Akuntan terhadap Laporan Keuangan yang meliputi Neraca, Laporan Laba-Rugi, serta Laporan Arus Kas dengan tujuan untuk memberikan Pernyataan Pendapat mengenai Laporan Keuangan secara keseluruhan.
        </p>
        <p>
        Jasa auditing mencakup perolehan dan penilaian bukti yang mendasari laporan keuangan historis suatu entitas yang berisi asersi yang dibuat oleh manajemen entitas tersebut. Dalam menghasilkan jasa auditing ini Auditor memberikan keyakinan positif (<i>positive assurance</i>) atas asersi yang dibuat oleh manajemen dalam laporan keuangan historis. Dalam menghasilkan jasa auditing dan pemeriksaan, akuntan publik melaksanakan berbagai prosedur berikut ini : inspeksi, observasi, konfirmasi, permintaan keterangan, pengusutan (<i>tracing</i>), pemeriksaan bukti pendukung (<i>vouching</i>), pelaksanaan ulang (<i>reperforming</i>) dan analisis.
        </p>

        <br></br>
        <br></br>
        <br></br>

        <NeedMoreInfoComponent/>

        </section>   
        </>         
        );
  };
  
export default PemeriksaanUmumPage;
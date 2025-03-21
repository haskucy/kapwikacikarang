import { Helmet } from "react-helmet-async";
import "../../Pages.css"
import NeedMoreInfoComponent from "../../RootComponent/NeedMoreInfoComponent";

const JasaKompilasiLaporanKeuanganPage = () => {
    return (
      <>
          <Helmet>
            <title>Jasa Kompilasi Laporan Keuangan | Kantor Akuntan Publik Alister & Hamonangan</title>
            <meta name="description" content="KAP Alister & Hamonangan: Kompilasi laporan keuangan profesional, termasuk neraca, laba rugi, dan buku besar (General Ledger)." />
            <link rel="canonical" href="/services/jasa-non-atestasi/jasa-kompilasi-laporan-keuangan" />
          </Helmet>

        <section className="page-container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/services/">Our Services</a></li>
            <li className="breadcrumb-item"><a href="/services/jasa-non-atestasi/">Jasa Non Atestasi</a></li>
            <li className="breadcrumb-item active" aria-current="page">Jasa Administrasi</li>
          </ol>
        </nav>
        <br></br>
        <h1 className="page-title">Jasa Kompilasi Laporan Keuangan</h1>
        <p>
        Kantor Akuntan Publik ALISTER & HAMONANGAN dapat melakukan kompilasi laporan keuangan berdasarkan catatan data keuangan serta informasi lainnya yang diberikan manajemen suatu entitas ekonomi. 
        </p>
        <p>
        Dalam jasa kompilasi, akuntan publik melaksanakan berbagai jasa akuntansi kliennya, seperti pencatatan (baik dengan manual maupun dengan komputer) transaksi akuntansi bagi kliennya sampai dengan penyusunan laporan keuangan.
        </p>
        <p>
        Jasa akuntansi (<i>Accounting Service</i>) : Penyusunan Laporan Keuangan perusahaan yang meliputi: Neraca, Laporan laba rugi, Buku Besar (<i>General Ledger</i>)
        </p>

        <br></br>
        <br></br>
        <br></br>

        <NeedMoreInfoComponent/>

        </section>   
        </>         
        );
  };
  
export default JasaKompilasiLaporanKeuanganPage;
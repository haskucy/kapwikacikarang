import { Helmet } from "react-helmet-async";
import "../../Pages.css"
import NeedMoreInfoComponent from "../../RootComponent/NeedMoreInfoComponent";

const SistemInformasiManajemenPage = () => {
    return (
      <>
          <Helmet>
            <title>Sistem Informasi Manajemen | Kantor Akuntan Publik Wisnu & Katili Cabang Bekasi (Cikarang)</title>
            <meta name="description" content="KAP WIKA Cikarang: Solusi sistem informasi manajemen untuk pencatatan keuangan yang efektif dan efisien." />
            <link rel="canonical" href="/services/jasa-non-atestasi/sistem-informasi-manajemen" />
          </Helmet>

        <section className="page-container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/services/">Our Services</a></li>
            <li className="breadcrumb-item"><a href="/services/jasa-non-atestasi/">Jasa Non Atestasi</a></li>
            <li className="breadcrumb-item active" aria-current="page">Sistem Informasi Manajemen</li>
          </ol>
        </nav>
        <br></br>        
        <h1 className="page-title">Sistem Informasi Manajemen</h1>
        <p>
        Jasa yang diberikan kepada perusahaan-perusahaan skala menengah dan kecil dalam menyelenggarakan pencatatan keuangan serta administrasi lainnya dengan menggunakan perangkat lunak (<i>software</i>). Solusi dari divisi IT hadir dengan mengembangkan dan memberikan biaya yang efektif, solusi teknologi sesuai permintaan untuk perusahaan atau organisasi baik yang kecil dan besar.
        </p>

        <p>
        Sistem informasi manajemen memadukan informasi yang tersedia pada suatu badan usaha baik swasta maupun pemerintah sedemikian rupa (efektif dan efisien) sehingga memudahkan setiap tingkat manajerial untuk mengambil keputusan. Untuk memenuhi hal tersebut di atas, setlap sistem aplikasi (misal Pembukuan) yang ada akan dilengkapi dengan kebutuhan pemakai:</p>

        <p>
        <ol>
          <li>User - ID dan password (sandi) dengan level yang berbeda-beda;</li>
          <li>Tabel yang sudah dibakukan sesuai dengan kebutuhan;</li>
          <li>Validasi dan Sistem Editing;</li>
          <li>Proses Data dan Pembuatan Laporan Keuangan;</li>
          <li>Penyelenggaraan Management Services</li>
          <li>Petunjuk Pengoperasian Perangkat Komputer (hardware).</li>
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
  
export default SistemInformasiManajemenPage;
import { Helmet } from "react-helmet-async";
import "../../Pages.css"
import NeedMoreInfoComponent from "../../RootComponent/NeedMoreInfoComponent";

const PenyusunanAnggaranDanPenyusunanSistemAnggaranPage = () => {
    return (
      <>
          <Helmet>
            <title>Penyusunan Anggaran dan Penyusunan Sistem Anggaran | Kantor Akuntan Publik Alister & Hamonangan</title>
            <meta name="description" content="KAP Alister & Hamonangan: Penyusunan anggaran dan sistem akuntansi untuk efisiensi dan pengawasan internal." />
            <link rel="canonical" href="/services/jasa-non-atestasi/penyusunan-anggaran-dan-penyusunan-sistem-anggaran" />
          </Helmet>
          
        <section className="page-container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/services/">Our Services</a></li>
            <li className="breadcrumb-item"><a href="/services/jasa-non-atestasi/">Jasa Non Atestasi</a></li>
            <li className="breadcrumb-item active" aria-current="page">Penyusunan Anggaran dan Penyusunan Sistem Anggaran</li>
          </ol>
        </nav>
        <br></br>        
        <h1 className="page-title">Penyusunan Anggaran dan Penyusunan Sistem Anggaran</h1>
        <p>
        Yang dimaksud dengan Sistem Akuntansi adalah semua alat bantu manajemen yang dapat dipergunakan untuk mengidentifikasi, mengumpulkan, mengklasifikasi, melaporkan dan menafsir informasi mengenai transaksi perusahaan secara efektif dan efisien, agar dapat menjamin keamanan harta milik perusahaan serta dapat dilaksanakannya kebijakan - kebijakan yang telah ditetapkan.
        </p>
        
        <p>
         Ruang lingkup penyusunan Sistem Akuntansi meliputi :
        </p>

        <p>
        <ol>
          <li>Penilaian dan penyusunan fungsi-fungsi dalam organisasi perusahaan yang dapat dipertanggung jawabkan ditinjau dari segi pengawasan (<i>Internal Control</i>).</li>
          <li>Penyusunan sistem dan prosedur berbagai fungsi dalam organisasi perusahaan yang meliputi: Sistem & Prosedur Penjualan dan Penerimaan Kas, Pembelian dan Pengeluaran Kas, Persediaan, Produksi, Pembayaran Gaji dan Upah, Hubungan antara Anak Perusahaan dengan Induk Perusahaan, Hubungan Kantor Cabang dengan Kantor Pusat dan sebagainya.</li>
          <li>Penyusunan Accounting's System & Procedure</li>
          <li>Penyusunan Pedoman Akuntansi Umum (<i>General Accounting Manual</i>).</li>
          <li>Penyusunan Pedoman Akuntansi Biaya (<i>Cost Accounting Manual</i>).</li>
          <li>Penyusunan Pedoman Klasifikasi Rekening dan Kode Rekening.</li>
          <li>Merancang bentuk dan isi formulir: buku besar, buku pembantu, serta bentuk dan isi Laporan Keuangan, Laporan Produksi, dan Laporan lainnya.</li>
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
  
export default PenyusunanAnggaranDanPenyusunanSistemAnggaranPage;
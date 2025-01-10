import "../../Pages.css"
import NeedMoreInfoComponent from "../../RootComponent/NeedMoreInfoComponent";

const JasaAdministrasiPage = () => {
    return (
        <section className="page-container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/services/">Our Services</a></li>
            <li className="breadcrumb-item"><a href="/services/jasa-non-atestasi/">Jasa Non Atestasi</a></li>
            <li className="breadcrumb-item active" aria-current="page">Jasa Administrasi</li>
          </ol>
        </nav>
        <br></br>
        <h1 className="page-title">Jasa Administrasi</h1>
        <p>
        Bantuan jasa administrasi (<i>accounting service</i>) mencakup pembuatan buku-buku atau catatan-catatan yang perlu dimiliki perusahaan serta membimbing staf perusahaan dalam melakukan pembukuan, sehingga dapat menyusun Laporan Keuangan.
        </p>
       
        <p>
        Pelayanan jasa meliputi:
        </p>

        <p>
        <ol>
          <li>Mengatur dokumen dan bukti-bukti transaksi untuk diarsipkan dengan baik, serta mempersiapkan buku-buku yang diperlukan untuk mencatat transaksi-transaksi perusahaan.</li>
          <li>Membantu melakukan pembukuan sampai dengan penyusunan Laporan keuangan perusahaan secara manual ataupun dengan komputer.</li>
        </ol>
        </p>

        <p>
        Kami juga memiliki ijin sebagai Likuidator Perseroan sesuai UU 40 tahun 2007 tentang Perseroan Terbatas. KAP WISNU dan KATILI terdaftar di Otoritas Jasa Keuangan (OJK),  Bank Indonesia serta rekanan BPK RI.
        </p>

        <br></br>
        <br></br>
        <br></br>

        <NeedMoreInfoComponent/>

        </section>            
        );
  };
  
export default JasaAdministrasiPage;
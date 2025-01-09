import "../../Pages.css"

const PemeriksaanKhususPage = () => {
    return (
        <section className="page-container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/services/">Our Services</a></li>
            <li className="breadcrumb-item"><a href="/services/jasa-atestasi/">Jasa Atestasi</a></li>
            <li className="breadcrumb-item active" aria-current="page">Pemeriksaan Khusus</li>
          </ol>
        </nav>
        <br></br>         
        <h1 className="page-title">Pemeriksaan Khusus (<i>Special Investigation</i>)</h1>
        <p>
        Istilah pemeriksaan digunakan untuk jasa lain yang dihasilkan oleh akuntan publik yang berupa pernyataan pendapat tentang kesesuaian asersi yang dibuat oleh pihak lain dengan kriteria yang telah ditetapkan. Pemeriksaan terhadap informasi keuangan prospektif dan pemeriksaan untuk menentukan kesesuaian pengendalian intern suatu entitas dengan kriteria yang ditetapkan oleh instansi pemerintah atau badan pengatur.
        </p>

        <p>
        Pemeriksaan khusus dilakukan atas permintaan perusahaan untuk memeriksa kejadian-kejadian khusus yang meliputi :
        </p>
        
        <p>
        <ol>
          <li>Masalah pembelian</li>
          <li>Masalah kecurangan atau penggelapan</li>
          <li>Masalah perluasan usaha</li>
          <li>Masalah struktural permodalan perusahaan</li>
          <li>Masalah kalkulasi harga pokok</li>
          <li>Dan lain-lain.</li>
        </ol>
        </p>
        </section>            
        );
  };
  
export default PemeriksaanKhususPage;
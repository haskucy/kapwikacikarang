import "../../Pages.css"
import NeedMoreInfoComponent from "../../RootComponent/NeedMoreInfoComponent";

const KonsultasiManajemenDanPerpajakanPage = () => {
    return (
        <section className="page-container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/services/">Our Services</a></li>
            <li className="breadcrumb-item"><a href="/services/jasa-non-atestasi/">Jasa Non Atestasi</a></li>
            <li className="breadcrumb-item active" aria-current="page">Konsultasi Manajemen dan Perpajakan</li>
          </ol>
        </nav>
        <br></br>        
        <h1 className="page-title">Konsultasi Manajemen dan Perpajakan</h1>
        <p>
        Jasa perpajakan meliputi bantuan yang diberikan oleh akuntan publik kepada kliennya dalam pengisian Surat Pemberitahuan Pajak Tahunan (SPT) pajak penghasilan, perencanaan pajak, dan bertindak mewakili kliennya dalam menghadapi masalah perpajakan. Kegiatan bidang ini meliputi pelayanan berupa pemberian saran atau nasehat di bidang manajemen dan perpajakan yang mencakup masalah akuntansi dan keuangan, produksi, pemasaran, pengelolaan persediaan serta saran dan nasehat yang menyangkut perpajakan, antara lain:
        </p>
        
        <p>
        <b>(1) Pelayanan Jasa Perpajakan untuk Laporan Rutin/Bulanan</b>
        <br></br>
        Kami memberikan pengarahan, supervisi dan revisi datam menyusun Laporan Perpajakan, meliputi:
        <ol>
          <li>Laporan Bulanan PPh pasal 21</li>
          <li>Laporan Bulanan PPh pasal 25</li>
          <li>Laporan Bulanan PPh pasal 23 atau 26</li>
          <li>Laporan Bulanan PPh pasal 4 ayat 2</li>
          <li>Laporan Bulanan Pajak Pertambahan Nilai (PPN).</li>
        </ol>
        </p>

        <p>
        <b>(2) Pelayanan Jasa Perpajakan untuk Laporan Tahunan Pelayanan kami meliputi:</b>
        <br></br>
        <ol>
          <li>Menyiapkan dan menghitung Pajak Penghasilan (PPh Badan Form 1771) untuk periode akhir tahun pajak.</li>
          <li>Menyiapkan dan menghitung Pajak Penghasilan Karyawan (Form 1721) untuk akhir tahun pajak.</li>
          <li>Memeriksa pos-pos keuangan, khusus yang berhubungan dengan Laporan Perpajakan.</li>
        </ol>
        </p>

        <p>
        <b>(3) Jasa Pelayanan Pajak lainnya</b>
        <br></br>
        Disamping jasa pelayanan pajak bulanan dan tahunan, kami juga memberikan pelayanan pajak insidental, yaitu kasus-kasus tertentu antara lain:
        <ol>
          <li>Restitusi Kelebihan Pajak Pembayaran Pelayanan kami terdiri atas persiapan semua persyaratan dan proses restitusi ke Kantor Pajak sampai restitusi tersebut diterima oleh Wajib Pajak.</li>
          <li>Pemeriksaan, Keberadaan dan Banding Kami juga membantu mewakiii Wajib Pajak (WP) dalam hal pemeriksaan pajak oleh Kantor Pajak. Untuk selanjutnya apabila hasil 
                pemeriksaan tersebut tidak diterima oleh Wajib Pajak, maka kami juga membantu dalam hal proses keberatan dan apabila proses keberatan, wajib pajak masih merasa tidak puas, 
                maka kami mengajukan banding.</li>
          <li> Surat Keterangan Bebas (SKB) Untuk mencegah kelebihan pembayaran pajak, maka kami akan memberikan pelayanan berupa pengurusan Surat Keterangan Bebas (SKB) dari 
          Kantor Pelayanan Pajak, penurunan tarif untuk <i>Tax Treaty</i> dan sebagainya.</li>
        </ol>
        </p>

        <br></br>
        <br></br>
        <br></br>

        <NeedMoreInfoComponent/>

        </section>            
        );
  };
  
export default KonsultasiManajemenDanPerpajakanPage;
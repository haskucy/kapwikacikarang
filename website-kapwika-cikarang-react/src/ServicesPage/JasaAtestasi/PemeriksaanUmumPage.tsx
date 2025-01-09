import "../../Pages.css"

const PemeriksaanUmumPage = () => {
    return (
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
        Jasa auditing mencakup perolehan dan penilaian bukti yang mendasari laporan keuangan historis suatu entitas yang berisi asersi yang dibuat oleh manajemen entitas tersebut. Dalam menghasilkan jasa auditing ini Auditor memberikan keyakinan positif (positive assurance) atas asersi yang dibuat oleh manajemen dalam laporan keuangan historis. Dalam menghasilkan jasa auditing dan pemeriksaan, akuntan publik melaksanakan berbagai prosedur berikut ini : inspeksi, observasi, konfirmasi, permintaan keterangan, pengusutan (tracing), pemeriksaan bukti pendukung (vouching), pelaksanaan ulang (reperforming) dan analisis.
        </p>

        </section>            
        );
  };
  
export default PemeriksaanUmumPage;
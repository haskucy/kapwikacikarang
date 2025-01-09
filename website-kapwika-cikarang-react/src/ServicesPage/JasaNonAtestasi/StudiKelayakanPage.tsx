import "../../Pages.css"

const StudiKelayakanPage = () => {
    return (
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

        </section>            
        );
  };
  
export default StudiKelayakanPage;
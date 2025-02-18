import { Helmet } from "react-helmet-async";
import "../Pages.css"
import CardComponent from "../RootComponent/CardComponent";
import NeedMoreInfoComponent from "../RootComponent/NeedMoreInfoComponent";

const MainServicesPage = () => {
    return (<>
            <Helmet>
                <title> Our Services | Kantor Akuntan Publik Alister & Hamonangan Cabang Bekasi (Cikarang)</title>
                <meta name="description" content="KAP Alister & Hamonangan Cikarang: Melayani jasa atestasi dan non atestasi seperti audit, pajak, manajemen, dan akuntansi secara profesional. Hubungi kami!" />
                <link rel="canonical" href="/services" />
            </Helmet>
        <section className="page-container">
        <h1 className="page-title">Our Services</h1>
        <CardComponent/>
        <br></br>
        <p>
          Dalam rangka berpartisipasi aktif dalam dunia usaha, kami Kantor Akuntan Publik (KAP) ALISTER & HAMONANGAN merupakan konsultan yang bertanggung jawab secara professional. Tenaga ahli kami yang profesional serta dinamis dan berpengalaman akan mendukung pelayanan yang kami berikan, sehingga menambah keyakinan kami untuk dapat membantu menyelesaikan permasalahan yang ada di perusahaan Bapak/Ibu
        </p>
        <p>
        Kami dapat memberikan berbagai pelayanan jasa yang meliputi Audit Laporan Keuangan (General Audit), Audit Khusus, Audit Perbankan, Penyusunan Sistem Akuntansi, Penyusunan Laporan Keuangan, Studi Kelayakan, Konsultasi Manajemen, Advis Urusan Pajak Perusahaan dan lainnya.
        </p>

        <p>
        Profesional, terpercaya dan dapat diandalkan adalah motto kami dalam memberikan pelayanan kepada klien-klien kami. Merupakan penghargaan yang besar apabila kebutuhan pelayanan tersebut dipercayakan kepada kami.
        </p>

        <h3 id="jenis">
        <b>JENIS - JENIS PELAYANAN PROFESI AKUNTAN PUBLIK</b>
        </h3>

        <p>
        Sebagai Akuntan Publik, KAP ALISTER & HAMONANGAN menyediakan beberapa jenis pelayanan yang diberikan secara profesional, antara lain :
        </p>

        <p>
        <ol>
          <li>Pelaksanaan General and Special Audit</li>
          <li>Pelaksanaan Investigation (Special and Forensic Audit)</li>
          <li>Penyusunan Accounting's System & Procedure</li>
          <li>Penyusunan Studi Kelayakan (Feasibility Study)</li>
          <li>Penyelenggaraan Management Services</li>
          <li>Konsultasi Bidang Perpajakan</li>
        </ol>
        </p>

        <p>
        Kami juga memiliki ijin sebagai Likuidator Perseroan sesuai UU 40 tahun 2007 tentang Perseroan Terbatas. KAP ALISTER & HAMONANGAN terdaftar di Otoritas Jasa Keuangan (OJK),  Bank Indonesia serta rekanan BPK RI.
        </p>

        <br></br>
        <br></br>
        <br></br>

        <NeedMoreInfoComponent/>
        </section> 
        </>
        );
  };
  
export default MainServicesPage;